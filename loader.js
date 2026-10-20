/* ══════════════════════════════════════════════════════════════
   MSTR HTML Configurator — "Load HTML": read settings back from
   previously generated code
   ══════════════════════════════════════════════════════════════

   1. Element: taken from the <!-- mstr-configurator --> marker, or
      guessed by comparing the words of each element's template.
   2. Values: each element's generateCode() is run with a unique
      sentinel in every field; the template text around a sentinel
      tells where that value sits in the loaded code. Booleans and
      selects that only switch code blocks are found by comparing
      the code generated for each of their possible values.
   3. Fields still not found fall back to the marker's saved config,
      then to the default. Code wins over the marker, so hand edits
      of the CONFIG block in MSTR are kept.
   ══════════════════════════════════════════════════════════════ */

var MARKER_RE = /<!--\s*mstr-configurator:\s*(\{[\s\S]*?\})\s*-->/;

// ── Marker written into generated code ───────────────────────
function buildMarker(el, cfg, varNames) {
  var json = JSON.stringify({ element: el.id, config: cfg, vars: varNames });
  // keep the comment valid ("--") and invisible to MSTR field substitution ("{[")
  json = json.split('--').join('-\\u002d').split('{[').join('{\\u005b');
  return '<!-- mstr-configurator: ' + json + ' -->';
}

function readMarker(html) {
  var m = html.match(MARKER_RE);
  if (!m) return null;
  try { return JSON.parse(m[1]); } catch (e) { return null; }
}

// ── Whitespace-insensitive text with a map back to the original ──
// MSTR / formatCode re-indent the code, so whitespace runs collapse to
// one space and spaces next to tags are dropped.
function normalize(src) {
  var out = [], map = [], i = 0, n = src.length;
  while (i < n) {
    var ch = src[i];
    if (/\s/.test(ch)) {
      var j = i; while (j < n && /\s/.test(src[j])) j++;
      var prev = out.length ? out[out.length - 1] : '';
      if (prev && prev !== '>' && j < n && src[j] !== '<') { out.push(' '); map.push(i); }
      i = j; continue;
    }
    out.push(ch); map.push(i); i++;
  }
  map.push(n);
  return { text: out.join(''), map: map };
}

function allFields(el) {
  var list = [];
  el.groups.forEach(function(g) { g.fields.forEach(function(f) { list.push(f); }); });
  return list;
}
function defaultsOf(el) {
  var cfg = {};
  allFields(el).forEach(function(f) { cfg[f.key] = JSON.parse(JSON.stringify(f.default)); });
  return cfg;
}
function defaultVars(el) {
  var v = {};
  (el.mstrVars || []).forEach(function(x) { v[x.key] = x.default; });
  return v;
}
function safeGen(el, cfg, vars) {
  try { return el.generateCode(cfg, vars); } catch (e) { return null; }
}

// ── Element detection ─────────────────────────────────────────
function wordSet(s) {
  var set = {};
  (s.match(/[A-Za-z_][A-Za-z0-9_-]{5,}/g) || []).forEach(function(w) { set[w] = 1; });
  return set;
}
function detectElement(html) {
  var marker = readMarker(html);
  if (marker && getElementById(marker.element)) return { el: getElementById(marker.element), marker: marker, score: 1 };
  var loaded = wordSet(html), best = null;
  ELEMENTS.forEach(function(el) {
    var code = safeGen(el, defaultsOf(el), defaultVars(el));
    if (!code) return;
    var tpl = wordSet(code), common = 0, nTpl = 0, nLoaded = Object.keys(loaded).length;
    for (var w in tpl) { nTpl++; if (loaded[w]) common++; }
    var score = common ? 2 * common / (nTpl + nLoaded) : 0;   // F1 of shared words
    if (!best || score > best.score) best = { el: el, marker: marker, score: score };
  });
  return best && best.score > 0.3 ? best : null;
}

// ── Value extraction ──────────────────────────────────────────
function sentF(i) { return 'QzX' + i + 'XzQ'; }
function sentV(i) { return 'QzV' + i + 'VzQ'; }

// Read a JSON string literal starting at src[pos] === '"'
function readJsonString(src, pos) {
  if (src[pos] !== '"') return null;
  for (var j = pos + 1; j < src.length; j++) {
    if (src[j] === '\\') { j++; continue; }
    if (src[j] === '"') { try { return JSON.parse(src.slice(pos, j + 1)); } catch (e) { return null; } }
  }
  return null;
}
function decodeEntities(s) {
  return s.split('&lt;').join('<').split('&gt;').join('>').split('&quot;').join('"').split('&amp;').join('&');
}

function convert(field, raw) {
  if (raw === null || raw === undefined) return undefined;
  switch (field.type) {
    case 'number':  var n = parseFloat(raw); return isNaN(n) ? undefined : n;
    case 'boolean': return raw === 'true' ? true : raw === 'false' ? false : undefined;
    case 'select':  return field.options.some(function(o) { return String(o.v) === String(raw); }) ? raw : undefined;
    case 'array-panels': case 'array-kpi': return undefined;
    default:        return String(raw);
  }
}

// Pass 1: sentinels in text / number / color / select fields and MSTR vars
// Config with a sentinel in every field and MSTR var. Booleans get a truthy object that prints as a
// sentinel (${c.flag} → sentinel, c.flag ? a : b → a), or keep their defaults (withBools = false).
function boolSentinel(i) { return { toString: function() { return sentF(i); }, toJSON: function() { return true; } }; }
function sentinelSetup(el, withBools) {
  var fields = allFields(el).filter(function(f) { return f.type.indexOf('array') !== 0 && (withBools || f.type !== 'boolean'); });
  var cfg = defaultsOf(el), vars = {}, fieldBySent = {}, varBySent = {};
  fields.forEach(function(f, i) {
    var c = defaultsOf(el); c[f.key] = f.type === 'boolean' ? boolSentinel(i) : sentF(i);
    if (safeGen(el, c, defaultVars(el)) === null) return;   // used in a calculation (e.g. color.slice) → can't be traced
    cfg[f.key] = c[f.key]; fieldBySent[sentF(i)] = f;
  });
  (el.mstrVars || []).forEach(function(v, i) { vars[v.key] = sentV(i); varBySent[sentV(i)] = v; });
  if (safeGen(el, cfg, vars) === null) { cfg = defaultsOf(el); fieldBySent = {}; }
  return { cfg: cfg, vars: vars, fieldBySent: fieldBySent, varBySent: varBySent };
}

function sentinelPass(el, L, Lmap, src, S) {
  var fieldBySent = S.fieldBySent, varBySent = S.varBySent;
  var code = safeGen(el, S.cfg, S.vars);
  if (code === null) return { cfg: {}, vars: {} };

  var T = normalize(code).text;
  var re = /QzX\d+XzQ|QzV\d+VzQ/g, occ = [], m;
  while ((m = re.exec(T))) occ.push({ s: m.index, e: m.index + m[0].length, id: m[0] });
  occ.forEach(function(o) {   // widen to the quotes / {[ ]} wrapped around the sentinel
    if (T.slice(o.s - 2, o.s) === '="' && T[o.e] === '"') o.form = 'raw';   // HTML attribute: value runs to the closing quote
    else if (T[o.s - 1] === '"' && T[o.e] === '"') { o.s--; o.e++; o.form = 'json'; }
    else if (T.slice(o.s - 2, o.s) === '{[' && T.slice(o.e, o.e + 2) === ']}') { o.s -= 2; o.e += 2; o.form = 'mstr'; }
    else o.form = 'raw';
  });

  var outCfg = {}, outVars = {}, cursor = 0;
  occ.forEach(function(o, k) {
    var isVar = !!varBySent[o.id];
    var key = isVar ? varBySent[o.id].key : fieldBySent[o.id].key;
    if (isVar ? key in outVars : key in outCfg) return;   // first readable occurrence wins
    var prevEnd = k ? occ[k - 1].e : 0;
    var nextStart = k + 1 < occ.length ? occ[k + 1].s : T.length;
    var suffix = T.slice(o.e, Math.min(nextStart, o.e + 20));
    // the context may contain values of booleans changed by the user → retry with shorter context
    var at = -1, prefix = '';
    [40, 28, 20, 14, 9].some(function(len) {
      prefix = T.slice(Math.max(prevEnd, o.s - len), o.s);
      if (prefix.length < 4) return true;
      at = L.indexOf(prefix, cursor);
      if (at >= 0 && at - cursor > 6000) at = -1;   // too far ahead → probably a different spot
      if (at < 0 && len >= 20) at = L.indexOf(prefix);
      return at >= 0;
    });
    if (at < 0) return;
    var vs = at + prefix.length, raw = null, endN = vs;
    if (o.form === 'json') {
      raw = readJsonString(src, Lmap[vs]);
      if (raw === null) return;
      endN = vs + 1;
    } else {
      if (!suffix) return;
      var se = -1;
      [20, 8, 3, 1].some(function(len, i) {   // suffix may also hold changed boolean values → shorten
        var sfx = suffix.slice(0, len);
        se = L.indexOf(sfx, vs);
        if (se >= 0 && se - vs > (i < 2 ? 4000 : 300)) se = -1;
        return se >= 0;
      });
      if (se < 0) return;
      raw = src.slice(Lmap[vs], Lmap[se]).replace(/\s+/g, ' ').trim();   // the formatter re-indents raw HTML values; collapsing keeps it rendering-equivalent
      if (o.form === 'mstr') { var mm = raw.match(/^\{\[([\s\S]*)\]\}$/); raw = mm ? mm[1].trim() : (raw ? decodeEntities(raw) : ''); }
      else raw = decodeEntities(raw);
      endN = se;
    }
    cursor = endN;
    if (isVar) outVars[key] = raw;
    else { var val = convert(fieldBySent[o.id], raw); if (val !== undefined) outCfg[key] = val; }
  });
  return { cfg: outCfg, vars: outVars };
}

// Pass 2: booleans and selects that only switch blocks of code
function variantPass(el, L, known, S) {
  var out = {};
  allFields(el).forEach(function(f) {
    if (f.key in known) return;
    var values = f.type === 'boolean' ? [true, false] : f.type === 'select' ? f.options.map(function(o) { return o.v; })
      : f.type === 'text' || f.type === 'textarea' ? ['', 'QzEmptyQ'] : null;   // text: only tells whether it is empty
    if (!values) return;
    var codes = values.map(function(val) { var c = {}; for (var kk in S.cfg) c[kk] = S.cfg[kk]; c[f.key] = val; var g = safeGen(el, c, S.vars); return g === null ? null : normalize(g).text; });
    if (codes.some(function(c) { return c === null; })) return;
    var lcp = 0, minLen = Math.min.apply(null, codes.map(function(c) { return c.length; }));
    while (lcp < minLen && codes.every(function(c) { return c[lcp] === codes[0][lcp]; })) lcp++;
    if (lcp === minLen && codes.every(function(c) { return c.length === minLen; })) return;   // field does not change the code
    // compare only as many characters as needed to tell the variants apart — further on, the
    // text may already hold other values the user changed
    var d = 1;
    while (d < 30 && codes.some(function(c, i) { return codes.some(function(c2, j) { return j > i && c.slice(lcp, lcp + d) === c2.slice(lcp, lcp + d); }); })) d++;
    var heads = codes.map(function(c) { var h = c.slice(lcp, lcp + Math.max(d, 4)), k = h.search(/QzX|QzV/); return k >= 0 ? h.slice(0, k) : h; });
    var hits = [];
    // context before the difference; shortened when it holds other (possibly changed) values
    [200, 80, 40, 24, 14, 8].some(function(len) {
      var ctx = codes[0].slice(Math.max(0, lcp - len), lcp), k = Math.max(ctx.lastIndexOf('XzQ'), ctx.lastIndexOf('VzQ'));
      if (k >= 0) ctx = ctx.slice(k + 3);
      if (ctx.length < 5) return false;
      var pos = -1;
      while ((pos = L.indexOf(ctx, pos + 1)) >= 0) {
        var tail = L.slice(pos + ctx.length), match = [];
        heads.forEach(function(h, i) { if (h && tail.slice(0, h.length) === h) match.push(i); });
        if (match.length) { hits = match; return true; }
      }
      return false;
    });
    if (hits.length === 1) { if (values[hits[0]] !== 'QzEmptyQ') out[f.key] = values[hits[0]]; }
    else if (hits.length > 1) {   // heads of different length all match → the longest is the specific one
      hits.sort(function(a, b) { return heads[b].length - heads[a].length; });
      if (values[hits[0]] !== 'QzEmptyQ') out[f.key] = values[hits[0]];
    }
  });
  return out;
}

// A value different from the default, to test whether a field shows in the code
function probeValue(f) {
  switch (f.type) {
    case 'boolean': return !f.default;
    case 'number':  return (f.default || 0) + 1;
    case 'color':   return f.default === '#010203' ? '#030201' : '#010203';
    case 'select':  var o = f.options.filter(function(x) { return x.v !== f.default; })[0]; return o ? o.v : f.default;
    case 'array-panels': case 'array-kpi': return [];
    default:        return String(f.default || '') + 'QzProbeQ';
  }
}

// ── Public: parse HTML → { el, cfg, vars, report } ────────────
function parseElementHtml(html) {
  var det = detectElement(html);
  if (!det) return null;
  var el = det.el, N = normalize(html);
  var S = sentinelSetup(el, false);
  var p1 = sentinelPass(el, N.text, N.map, html, sentinelSetup(el, true));
  var p1b = sentinelPass(el, N.text, N.map, html, S);   // booleans at defaults reveal fields a truthy flag hides
  Object.keys(p1b.cfg).forEach(function(k) { if (!(k in p1.cfg)) p1.cfg[k] = p1b.cfg[k]; });
  Object.keys(p1b.vars).forEach(function(k) { if (!(k in p1.vars) || (!p1.vars[k] && p1b.vars[k])) p1.vars[k] = p1b.vars[k]; });
  var p2 = variantPass(el, N.text, p1.cfg, S);
  var fromCode = {};
  Object.keys(p1.cfg).forEach(function(k) { fromCode[k] = p1.cfg[k]; });
  Object.keys(p2).forEach(function(k) { fromCode[k] = p2[k]; });

  var mcfg = (det.marker && det.marker.config) || {}, mvars = (det.marker && det.marker.vars) || {};
  var cfg = defaultsOf(el), report = { code: [], marker: [], missing: [] }, unread = [];
  allFields(el).forEach(function(f) {
    // marker value wins when it only differs in whitespace (the formatter re-indents raw HTML)
    if (f.key in fromCode && f.key in mcfg && normalize(String(mcfg[f.key])).text === normalize(String(fromCode[f.key])).text) { cfg[f.key] = mcfg[f.key]; report.code.push(f); }
    else if (f.key in fromCode) { cfg[f.key] = fromCode[f.key]; report.code.push(f); }
    else if (f.key in mcfg) { cfg[f.key] = mcfg[f.key]; report.marker.push(f); }
    else unread.push(f);
  });
  var vars = {}, unreadVars = [];
  (el.mstrVars || []).forEach(function(v) {
    if (v.key in p1.vars && p1.vars[v.key]) vars[v.key] = p1.vars[v.key];
    else if (v.key in mvars) vars[v.key] = mvars[v.key];
    else { vars[v.key] = p1.vars[v.key] || ''; unreadVars.push(v); }
  });
  // Not read: only worth reporting when the value would show in the code with these settings —
  // e.g. glow colors don't matter while the glow is off, a series name doesn't while the series is hidden
  var base = safeGen(el, cfg, vars);
  unread.forEach(function(f) {
    var c = {}; for (var k in cfg) c[k] = cfg[k];
    c[f.key] = probeValue(f);
    if (base !== null && safeGen(el, c, vars) === base) return;
    report.missing.push(f);
  });
  unreadVars.forEach(function(v) {
    var vv = {}; for (var k in vars) vv[k] = vars[k];
    vv[v.key] = 'QzProbeQ';
    if (base !== null && safeGen(el, cfg, vv) === base) { vars[v.key] = v.default; return; }   // hidden by an option → keep the default name
    if (v.key in p1.vars) return;   // shown, and really empty in the HTML
    vars[v.key] = v.default;
    report.missing.push({ key: v.key, label: 'MSTR: ' + v.label });
  });
  return { el: el, cfg: cfg, vars: vars, report: report, viaMarker: !!(det.marker && det.marker.element === el.id) };
}

// ── UI ────────────────────────────────────────────────────────
function openLoadDialog() {
  document.getElementById('load-dialog').classList.remove('hidden');
  document.getElementById('load-error').textContent = '';
  var ta = document.getElementById('load-text');
  ta.value = '';
  setTimeout(function() { ta.focus(); }, 0);
}
function closeLoadDialog() { document.getElementById('load-dialog').classList.add('hidden'); }

function loadFromFile(input) {
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function() { document.getElementById('load-text').value = reader.result; input.value = ''; applyLoadedHtml(); };
  reader.readAsText(file);
}

function applyLoadedHtml() {
  var html = document.getElementById('load-text').value;
  var err = document.getElementById('load-error');
  if (!html.trim()) { err.textContent = 'Paste the HTML from the MSTR container or choose a file.'; return; }
  var res = parseElementHtml(html);
  if (!res) { err.textContent = "Couldn't recognise the element in this HTML."; return; }

  initElementState(res.el);
  state.configs[res.el.id] = res.cfg;
  Object.keys(res.vars).forEach(function(k) { state.mstrVars[res.el.id][k].name = res.vars[k]; });
  closeLoadDialog();
  selectElement(res.el.id);
  showLoadReport(res);
}

function showLoadReport(res) {
  var box = document.getElementById('load-report');
  var total = res.report.code.length + res.report.marker.length + res.report.missing.length;
  var found = total - res.report.missing.length;
  var html = '<b>Loaded ' + res.el.name + '</b> — ' + found + ' of ' + total + ' settings read from the HTML.';
  if (res.report.missing.length) {
    html += '<div class="lr-missing">Not in the HTML (e.g. a setting added in a newer version), left at default: ' +
      res.report.missing.map(function(f) { return '<span>' + escapeHtml(f.label) + '</span>'; }).join('') + '</div>';
  }
  box.innerHTML = '<span class="lr-close" title="Close" onclick="this.parentNode.classList.add(\'hidden\')">×</span>' + html;
  box.classList.toggle('lr-warn', res.report.missing.length > 0);
  box.classList.remove('hidden');
}

function escapeHtml(s) {
  return String(s).split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;');
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !document.getElementById('load-dialog').classList.contains('hidden')) closeLoadDialog();
});
