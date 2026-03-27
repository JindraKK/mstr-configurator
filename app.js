/* ══════════════════════════════════════════════════════════════
   MSTR HTML Configurator — main app logic
   ══════════════════════════════════════════════════════════════ */

// ── State ────────────────────────────────────────────────────
var state = {
  selectedId: null,
  configs: {},    // { elementId: { fieldKey: value, ... } }
  mstrVars: {},   // { elementId: { varKey: { name: str, fake: str } } }
};

// ── Init ─────────────────────────────────────────────────────
function init() {
  renderSidebar();
}

// ── Sidebar ───────────────────────────────────────────────────
function renderSidebar() {
  var list = document.getElementById('element-list');
  list.innerHTML = '';
  ELEMENTS.forEach(function(el) {
    var item = document.createElement('div');
    item.className = 'el-item' + (el.hasPreview ? ' has-preview' : '');
    item.setAttribute('data-id', el.id);
    item.innerHTML =
      '<span class="el-dot"></span>' +
      '<span class="el-name">' + el.name + '</span>' +
      (el.hasPreview
        ? '<span class="el-tag">preview</span>'
        : '<span class="el-tag">no preview</span>');
    item.addEventListener('click', function() { selectElement(el.id); });
    list.appendChild(item);
  });
}

// ── Select element ────────────────────────────────────────────
function selectElement(id) {
  state.selectedId = id;

  // Update sidebar
  document.querySelectorAll('.el-item').forEach(function(el) {
    el.classList.toggle('active', el.getAttribute('data-id') === id);
  });

  var el = getElementById(id);
  if (!el) return;

  // Init state if first time
  if (!state.configs[id]) initElementState(el);

  // Show config panel
  document.getElementById('config-placeholder').classList.add('hidden');
  document.getElementById('config-content').classList.remove('hidden');
  document.getElementById('preview-panel').classList.remove('hidden');

  document.getElementById('config-title').textContent = el.name;
  document.getElementById('config-desc').textContent = el.description;

  renderForm(el);
  updatePreview();
}

function getElementById(id) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    if (ELEMENTS[i].id === id) return ELEMENTS[i];
  }
  return null;
}

// ── State initialisation ──────────────────────────────────────
function initElementState(el) {
  var cfg = {};
  el.groups.forEach(function(group) {
    group.fields.forEach(function(field) {
      cfg[field.key] = field.default;
    });
  });
  state.configs[el.id] = cfg;

  var vars = {};
  (el.mstrVars || []).forEach(function(v) {
    vars[v.key] = { name: v.default, fake: v.fakeValue };
  });
  state.mstrVars[el.id] = vars;
}

// ── Form rendering ────────────────────────────────────────────
function renderForm(el) {
  var form = document.getElementById('config-form');
  form.innerHTML = '';

  el.groups.forEach(function(group) {
    var fg = document.createElement('div');
    fg.className = 'fg' + (group.open ? ' open' : '');

    var head = document.createElement('div');
    head.className = 'fg-head';
    head.innerHTML = group.name + '<span class="fg-chevron">▶</span>';
    head.addEventListener('click', function() { fg.classList.toggle('open'); });

    var body = document.createElement('div');
    body.className = 'fg-body';

    group.fields.forEach(function(field) {
      body.appendChild(renderField(el, field));
    });

    fg.appendChild(head);
    fg.appendChild(body);
    form.appendChild(fg);
  });

  // MSTR vars section
  if (el.mstrVars && el.mstrVars.length > 0) {
    var section = document.createElement('div');
    section.className = 'mstr-section';
    section.innerHTML = '<div class="mstr-section-label">MSTR Variables</div>';

    el.mstrVars.forEach(function(v) {
      var varState = state.mstrVars[el.id][v.key];
      var item = document.createElement('div');
      item.className = 'mstr-var';
      item.innerHTML = '<label>' + v.label + '</label>';

      var row = document.createElement('div');
      row.className = 'mstr-var-row';

      var nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.value = varState.name;
      nameInput.placeholder = 'MSTR variable name';
      nameInput.title = 'MSTR variable name — used in code as {[Name]}';
      nameInput.addEventListener('input', function() {
        state.mstrVars[el.id][v.key].name = nameInput.value;
        scheduleUpdate();
      });

      var fakeInput = document.createElement('input');
      fakeInput.type = 'text';
      fakeInput.value = varState.fake;
      fakeInput.placeholder = 'Preview value (fake data)';
      fakeInput.title = 'This value replaces {[...]} in the preview iframe';
      fakeInput.addEventListener('input', function() {
        state.mstrVars[el.id][v.key].fake = fakeInput.value;
        scheduleUpdate();
      });

      row.appendChild(nameInput);
      row.appendChild(fakeInput);
      item.appendChild(row);

      var hints = document.createElement('div');
      hints.className = 'mstr-var-hints';
      hints.innerHTML = '<span>← MSTR variable name</span><span>preview value →</span>';
      item.appendChild(hints);

      section.appendChild(item);
    });

    form.appendChild(section);
  }
}

function renderField(el, field) {
  var ff = document.createElement('div');
  ff.className = 'ff';

  var label = document.createElement('label');
  label.textContent = field.label;
  ff.appendChild(label);

  var control = createControl(el, field);
  ff.appendChild(control);
  return ff;
}

function createControl(el, field) {
  var cfg = state.configs[el.id];
  var val = cfg[field.key];

  switch (field.type) {
    case 'color':     return createColorControl(el, field, val);
    case 'boolean':   return createBoolControl(el, field, val);
    case 'select':    return createSelectControl(el, field, val);
    case 'textarea':  return createTextareaControl(el, field, val);
    case 'number':    return createNumberControl(el, field, val);
    case 'array-panels': return createArrayControl(el, field, val, false);
    case 'array-kpi':    return createArrayControl(el, field, val, true);
    default:          return createTextControl(el, field, val);
  }
}

function createTextControl(el, field, val) {
  var inp = document.createElement('input');
  inp.type = 'text';
  inp.value = val !== undefined ? val : '';
  inp.addEventListener('input', function() {
    state.configs[el.id][field.key] = inp.value;
    scheduleUpdate();
  });
  return inp;
}

function createNumberControl(el, field, val) {
  var inp = document.createElement('input');
  inp.type = 'number';
  if (field.min !== undefined) inp.min = field.min;
  if (field.max !== undefined) inp.max = field.max;
  if (field.step !== undefined) inp.step = field.step;
  inp.value = val !== undefined ? val : 0;
  inp.addEventListener('input', function() {
    var parsed = parseFloat(inp.value);
    state.configs[el.id][field.key] = isNaN(parsed) ? val : parsed;
    scheduleUpdate();
  });
  return inp;
}

function createTextareaControl(el, field, val) {
  var ta = document.createElement('textarea');
  ta.value = val !== undefined ? val : '';
  ta.rows = 3;
  ta.addEventListener('input', function() {
    state.configs[el.id][field.key] = ta.value;
    scheduleUpdate();
  });
  return ta;
}

function createColorControl(el, field, val) {
  var wrap = document.createElement('div');
  wrap.className = 'color-wrap';

  var picker = document.createElement('input');
  picker.type = 'color';
  picker.value = val || '#000000';

  var text = document.createElement('input');
  text.type = 'text';
  text.value = (val || '#000000').toUpperCase();
  text.maxLength = 7;

  picker.addEventListener('input', function() {
    text.value = picker.value.toUpperCase();
    state.configs[el.id][field.key] = picker.value;
    scheduleUpdate();
  });
  text.addEventListener('input', function() {
    var v = text.value.trim();
    if (!v.startsWith('#')) v = '#' + v;
    if (/^#[0-9a-fA-F]{6}$/.test(v)) {
      picker.value = v;
      state.configs[el.id][field.key] = v;
      scheduleUpdate();
    }
  });

  wrap.appendChild(picker);
  wrap.appendChild(text);
  return wrap;
}

function createBoolControl(el, field, val) {
  var wrap = document.createElement('div');
  wrap.className = 'bool-wrap';

  var label = document.createElement('label');
  label.className = 'toggle';

  var inp = document.createElement('input');
  inp.type = 'checkbox';
  inp.checked = !!val;

  var slider = document.createElement('span');
  slider.className = 'tgl-slider';

  inp.addEventListener('change', function() {
    state.configs[el.id][field.key] = inp.checked;
    scheduleUpdate();
  });

  label.appendChild(inp);
  label.appendChild(slider);
  wrap.appendChild(label);
  return wrap;
}

function createSelectControl(el, field, val) {
  var sel = document.createElement('select');
  (field.options || []).forEach(function(opt) {
    var o = document.createElement('option');
    o.value = opt.v;
    o.textContent = opt.l;
    if (opt.v === val) o.selected = true;
    sel.appendChild(o);
  });
  sel.addEventListener('change', function() {
    state.configs[el.id][field.key] = sel.value;
    scheduleUpdate();
  });
  return sel;
}

function createArrayControl(el, field, val, isKpi) {
  var wrap = document.createElement('div');
  wrap.className = 'array-field';

  var items = val ? JSON.parse(JSON.stringify(val)) : [];
  state.configs[el.id][field.key] = items;

  function render() {
    wrap.innerHTML = '';
    var container = document.createElement('div');
    container.className = 'array-items';

    items.forEach(function(item, idx) {
      var row = document.createElement('div');
      row.className = 'array-item';

      var mainRow = document.createElement('div');
      mainRow.className = 'array-item-row';

      var idxEl = document.createElement('span');
      idxEl.className = 'array-item-idx';
      idxEl.textContent = (idx + 1) + '.';
      mainRow.appendChild(idxEl);

      // col1 = label (always)
      var inp1 = document.createElement('input');
      inp1.type = 'text';
      inp1.value = item.label || '';
      inp1.placeholder = field.col1 || 'Label';
      inp1.addEventListener('input', function() {
        items[idx].label = inp1.value;
        state.configs[el.id][field.key] = items;
        scheduleUpdate();
      });
      mainRow.appendChild(inp1);

      // col2 = selector / title
      var inp2 = document.createElement('input');
      inp2.type = 'text';
      inp2.value = item.selector !== undefined ? (item.selector || '') : (item.title || '');
      inp2.placeholder = field.col2 || 'Value';
      inp2.title = field.col2 || '';
      inp2.addEventListener('input', function() {
        if (item.selector !== undefined) items[idx].selector = inp2.value;
        else items[idx].title = inp2.value;
        state.configs[el.id][field.key] = items;
        scheduleUpdate();
      });
      mainRow.appendChild(inp2);

      // col3 = info (KPI only)
      if (isKpi) {
        var inp3 = document.createElement('input');
        inp3.type = 'text';
        inp3.value = item.info || '';
        inp3.placeholder = field.col3 || 'Info';
        inp3.addEventListener('input', function() {
          items[idx].info = inp3.value;
          state.configs[el.id][field.key] = items;
          scheduleUpdate();
        });
        mainRow.appendChild(inp3);
      }

      var removeBtn = document.createElement('button');
      removeBtn.className = 'array-item-remove';
      removeBtn.textContent = '×';
      removeBtn.title = 'Remove';
      removeBtn.addEventListener('click', function() {
        items.splice(idx, 1);
        state.configs[el.id][field.key] = items;
        render();
        scheduleUpdate();
      });
      mainRow.appendChild(removeBtn);

      row.appendChild(mainRow);
      container.appendChild(row);
    });

    wrap.appendChild(container);

    var addBtn = document.createElement('button');
    addBtn.className = 'array-add-btn';
    addBtn.textContent = '+ Add item';
    addBtn.addEventListener('click', function() {
      if (isKpi) {
        items.push({ name: '', title: '', info: '' });
      } else if (items.length > 0 && items[0].selector !== undefined) {
        items.push({ label: '', selector: '' });
      } else {
        items.push({ label: '', title: '' });
      }
      state.configs[el.id][field.key] = items;
      render();
      scheduleUpdate();
    });
    wrap.appendChild(addBtn);
  }

  render();
  return wrap;
}

// ── Code formatter ────────────────────────────────────────────
// Basic HTML pretty-printer: indents tags, preserves <style>/<script> blocks verbatim.
function formatCode(html) {
  var INDENT = '  ';
  var voidTags = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i;
  var rawBlocks = /^(script|style)$/i;
  var result = [];
  var depth = 0;
  var i = 0;
  var len = html.length;

  function pad() { var s = ''; for (var n = 0; n < depth; n++) s += INDENT; return s; }

  while (i < len) {
    // Comment
    if (html.substr(i, 4) === '<!--') {
      var end = html.indexOf('-->', i);
      if (end < 0) end = len - 3;
      result.push(pad() + html.slice(i, end + 3).trim());
      i = end + 3;
      continue;
    }

    // Opening or closing tag
    if (html[i] === '<') {
      var close = html.indexOf('>', i);
      if (close < 0) close = len - 1;
      var tag = html.slice(i, close + 1);
      var tagName = (tag.match(/^<\/?([a-zA-Z][a-zA-Z0-9]*)/i) || [])[1] || '';
      var isClose   = tag[1] === '/';
      var isSelfClose = tag[tag.length - 2] === '/';

      if (isClose) {
        depth = Math.max(0, depth - 1);
        result.push(pad() + tag.trim());
      } else if (isSelfClose || voidTags.test(tagName)) {
        result.push(pad() + tag.trim());
      } else {
        result.push(pad() + tag.trim());
        if (rawBlocks.test(tagName)) {
          // Preserve raw block content verbatim, re-indent each line
          var endTag = '</' + tagName;
          var blockEnd = html.toLowerCase().indexOf(endTag.toLowerCase(), close + 1);
          if (blockEnd < 0) blockEnd = len;
          var inner = html.slice(close + 1, blockEnd);
          var innerLines = inner.split('\n');
          // Find base indentation of inner content
          var baseIndent = null;
          innerLines.forEach(function(l) {
            if (l.trim() === '') return;
            var m = l.match(/^(\s*)/);
            if (m && (baseIndent === null || m[1].length < baseIndent.length)) baseIndent = m[1];
          });
          baseIndent = baseIndent || '';
          var innerPad = pad() + INDENT;
          innerLines.forEach(function(l) {
            var stripped = l.startsWith(baseIndent) ? l.slice(baseIndent.length) : l.trimLeft();
            if (stripped === '') result.push('');
            else result.push(innerPad + stripped);
          });
          // Closing tag of raw block
          var closeTagEnd = html.indexOf('>', blockEnd);
          if (closeTagEnd >= 0) {
            result.push(pad() + html.slice(blockEnd, closeTagEnd + 1).trim());
            i = closeTagEnd + 1;
          } else {
            i = blockEnd;
          }
          continue;
        } else {
          depth++;
        }
      }
      i = close + 1;
      continue;
    }

    // Text node — collect until next '<'
    var next = html.indexOf('<', i);
    if (next < 0) next = len;
    var text = html.slice(i, next).trim();
    if (text) result.push(pad() + text);
    i = next;
  }

  return result.join('\n');
}

// ── Preview & code update ─────────────────────────────────────
var updateTimer = null;
function scheduleUpdate() {
  if (updateTimer) clearTimeout(updateTimer);
  updateTimer = setTimeout(updatePreview, 250);
}

function updatePreview() {
  var id = state.selectedId;
  if (!id) return;
  var el = getElementById(id);
  if (!el) return;

  var code = generateCode(el);
  var isFullHtml = code.trimLeft().startsWith('<!DOCTYPE') || code.trimLeft().startsWith('<html');
  document.getElementById('code-content').textContent = isFullHtml ? formatCode(code) : code;

  var frame = document.getElementById('preview-frame');
  var noMsg = document.getElementById('no-preview-msg');

  if (el.hasPreview) {
    noMsg.classList.add('hidden');
    frame.classList.remove('hidden');
    var previewCode = injectFakeData(code, el);
    frame.srcdoc = previewCode;
  } else {
    frame.classList.add('hidden');
    noMsg.classList.remove('hidden');
    document.getElementById('no-preview-title').textContent = el.name + ' — no preview available';
    document.getElementById('no-preview-desc').textContent = el.effectDescription || '';
  }
}

function generateCode(el) {
  var cfg = state.configs[el.id];
  var vars = {};
  (el.mstrVars || []).forEach(function(v) {
    vars[v.key] = state.mstrVars[el.id][v.key].name;
  });
  return el.generateCode(cfg, vars);
}

function injectFakeData(code, el) {
  var fakeData = {};
  (el.mstrVars || []).forEach(function(v) {
    fakeData[state.mstrVars[el.id][v.key].name] = state.mstrVars[el.id][v.key].fake;
  });

  // Replace {[varname]} with fake values
  var result = code.replace(/\{\[([^\]]+)\]\}/g, function(match, varName) {
    return fakeData[varName] !== undefined ? fakeData[varName] : match;
  });

  return result;
}

// ── Preview height ────────────────────────────────────────────
function setPreviewH(h) {
  document.getElementById('preview-body').style.height = h + 'px';
  document.querySelectorAll('.psb').forEach(function(btn) {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-h')) === h);
  });
}

// ── Copy & Download ───────────────────────────────────────────
function copyCode() {
  var code = document.getElementById('code-content').textContent;
  if (!code) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(function() { showToast('Copied to clipboard!'); });
  } else {
    // Fallback
    var ta = document.createElement('textarea');
    ta.value = code;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied to clipboard!');
  }
}

function downloadCode() {
  var code = document.getElementById('code-content').textContent;
  if (!code) return;
  var el = getElementById(state.selectedId);
  var filename = (el ? el.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'element') + '.html';
  var blob = new Blob([code], { type: 'text/html;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloading: ' + filename);
}

// ── Toast ─────────────────────────────────────────────────────
var toastTimer = null;
function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

// ── Start ─────────────────────────────────────────────────────
init();
