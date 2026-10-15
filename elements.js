/* ══════════════════════════════════════════════════════════════
   MSTR HTML Configurator — element definitions
   ══════════════════════════════════════════════════════════════ */

var ELEMENTS = [

// ══════════════════════════════════════════════════════════════
// 1. KPI BOX
// ══════════════════════════════════════════════════════════════
{
  id: 'kpi-box',
  name: 'KPI Box',
  hasPreview: true,
  description: 'KPI card with sparkline chart, trend indicator (▲/▼) a info popup window.',
  groups: [
    { name: 'Basic', open: true, fields: [
      { key: 'title',          label: 'Title',                     type: 'text',    default: 'Overall Index' },
      { key: 'valueDecimals',  label: 'Value decimal places',      type: 'number',  default: 1, min: 0, max: 4 },
      { key: 'valueIsPercent', label: 'Value is ratio (×100, append %)', type: 'boolean', default: false },
      { key: 'thousandSep',    label: 'Thousands separator (empty = none)', type: 'text', default: '' },
      { key: 'changeDecimals', label: 'Change % decimal places',   type: 'number',  default: 1, min: 0, max: 4 },
      { key: 'separator',      label: 'Data separator (MSTR concat)', type: 'text', default: ';' },
      { key: 'helpId',         label: 'Help Overlay ID (leave empty to skip)', type: 'text', default: '' },
    ]},
    { name: 'Info icon', open: true, fields: [
      { key: 'infoShow',       label: 'Show info icon (ⓘ)',        type: 'boolean', default: true },
      { key: 'infoPosition',   label: 'Icon position',             type: 'select',  default: 'top-right', options: [{v:'top-right',l:'Top right'},{v:'bottom-left',l:'Bottom left (status row)'}] },
    ]},
    { name: 'Status row', open: true, fields: [
      { key: 'statusShow',     label: 'Show status row',           type: 'boolean', default: false },
      { key: 'statusTextShow', label: 'Show status text',          type: 'boolean', default: true },
    ]},
    { name: 'Category icon', open: true, fields: [
      { key: 'iconShow',       label: 'Show category icon',        type: 'boolean', default: true },
      { key: 'iconSvg',        label: 'Icon SVG (use currentColor)', type: 'svg-input', default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="100%" height="100%" fill="currentColor"><path d="M120-425v-355q0-24 18-42t42-18h270v415H120Zm270-60Zm120-355h270q24 0 42 18t18 42v185H510v-245Zm0 720v-415h330v355q0 24-18 42t-42 18H510ZM120-365h330v245H180q-24 0-42-18t-18-42v-185Zm270 60Zm180-350Zm0 180Zm-390-10h210v-295H180v295Zm390-170h210v-125H570v125Zm0 180v295h210v-295H570ZM180-305v125h210v-125H180Z"/></svg>' },
    ]},
    { name: 'Sparkline', open: true, fields: [
      { key: 'barColorDefault', label: 'Default bar color',        type: 'color',  default: '#3E112F' },
      { key: 'barColorLast',    label: 'Last bar color',           type: 'color',  default: '#E20074' },
      { key: 'barRadius',       label: 'Bar corner radius (px)',   type: 'number', default: 1, min: 0, max: 10 },
      { key: 'barGap',          label: 'Gap between bars (px)',    type: 'number', default: 3, min: 0, max: 20 },
    ]},
    { name: 'Info popup', open: false, fields: [
      { key: 'popupTitle',      label: 'Popup title',              type: 'text',    default: 'OVERALL INDEX' },
      { key: 'popupTitleColor', label: 'Title color',              type: 'color',   default: '#FAD47F' },
      { key: 'popupTitleIcon',  label: 'Title icon (emoji)',       type: 'text',    default: '' },
      { key: 'popupWidth',      label: 'Popup width',              type: 'text',    default: '400px' },
      { key: 'popupBodyHtml',   label: 'Body HTML',                type: 'textarea',default: 'Combining <strong>width of engagement</strong> (50%), <strong>depth of engagement</strong> (25%) and <strong>retention</strong> (25%) weighted scores.<br><br>Scaled to 100 = baseline; higher values indicate better performance.' },
      { key: 'popupBodyColor',  label: 'Body text color',          type: 'color',   default: '#DEDEDE' },
      { key: 'popupDivider',    label: 'Show section divider',     type: 'boolean', default: false },
      { key: 'popupSectionShow',label: 'Show secondary section',   type: 'boolean', default: false },
      { key: 'popupSectionTitle',label:'Secondary section title',  type: 'text',    default: 'Reason for actual status' },
      { key: 'popupSectionTitleColor',label:'Secondary title color',type:'color',   default: '#C9A227' },
      { key: 'popupLinkShow',   label: 'Show detail link',         type: 'boolean', default: true },
      { key: 'popupLinkText',   label: 'Link text',                type: 'text',    default: 'Detail View →' },
      { key: 'popupLinkTooltip',label: 'Link tooltip',             type: 'text',    default: 'See detail KPI behind the Overall Index' },
      { key: 'popupLinkTarget', label: 'MSTR hasLink element text',type: 'text',    default: 'Link - Overall Index - Linear TV' },
      { key: 'popupLinkColor',  label: 'Link color',               type: 'color',   default: '#4a9ebb' },
      { key: 'popupLinkHoverColor',label:'Link hover color',       type: 'color',   default: '#7ec8e3' },
    ]},
  ],
  mstrVars: [
    { key: 'yData',      label: 'Metric values — Y-axis (separator-joined numbers)',  default: 'Overall Service Health Index Concat - Linear TV, Is Last Twenty Complete', fakeValue: '72;75;73;78;80;82;79;84;86;88;85;90' },
    { key: 'xData',      label: 'Time labels — X-axis (separator-joined strings)',    default: 'Timeinterval Concat - Is Complete',                                        fakeValue: 'W1;W2;W3;W4;W5;W6;W7;W8;W9;W10;W11;W12' },
    { key: 'statusData', label: 'Status text (shown in status row and popup section)', default: 'Overall Service Health Index Info - Linear TV, Is Last Complete',         fakeValue: 'Service performing above baseline.' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="style-INSTANCE">
/* ═══════════════════════════════════════════════════════════════
   KPI BOX — MicroStrategy HTML Container
   Styles are scoped via INSTANCE placeholder (replaced at runtime).
   ═══════════════════════════════════════════════════════════════ */
.kpi-card-INSTANCE {
background: #16161E;
border-radius: 8px;
border: 1px solid #393D52;
padding: 12px 14px 10px 14px;
font-family: Tahoma, Arial, sans-serif;
color: #fff;
position: absolute;
top: 5px; left: 5px; right: 5px; bottom: 5px;
width: auto; height: auto;
box-sizing: border-box;
display: flex; flex-direction: column;
overflow: hidden; min-height: 0;
transition: box-shadow 0.3s ease;
}
.kpi-card-INSTANCE:hover { box-shadow: 0 0 14px 3px rgba(255,255,255,0.18); }
.kpi-header-INSTANCE { display:flex; align-items:center; justify-content:space-between; margin-bottom:4px; flex-shrink:0; }
.kpi-title-INSTANCE { font-size:11px; color:#919FB4; letter-spacing:1.2px; text-transform:uppercase; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.kpi-cat-icon-INSTANCE { width:24px; height:24px; flex-shrink:0; color:#919FB4; display:flex; align-items:center; justify-content:center; opacity:0.7; }
.kpi-value-row-INSTANCE { display:flex; align-items:baseline; gap:10px; margin-bottom:10px; flex-shrink:0; }
.kpi-value-INSTANCE { font-size:34px; font-weight:bold; color:#F4F4F4; line-height:1.1; }
.kpi-change-INSTANCE { font-size:13px; font-weight:600; }
.kpi-change-pos-INSTANCE { color:#0A769C; }
.kpi-change-neg-INSTANCE { color:#666699; }
.kpi-change-flat-INSTANCE { color:#8A9BB0; }
.kpi-sparkline-INSTANCE { flex:1; min-height:0; position:relative; margin:0 10px; overflow:hidden; }
.kpi-spark-tip-INSTANCE { position:fixed; background:#151E2B; border:1px solid rgba(74,158,191,0.3); border-radius:5px; padding:5px 9px; font-family:Tahoma,Arial,sans-serif; font-size:11px; color:#DEDEDE; white-space:nowrap; pointer-events:none; opacity:0; transition:opacity 0.15s ease; z-index:10000; box-shadow:0 4px 12px rgba(0,0,0,0.4); }
.kpi-spark-tip-val-INSTANCE { font-weight:bold; color:#FFFFFF; }
.kpi-spark-tip-lbl-INSTANCE { color:#8A9BB0; margin-right:6px; }
.kpi-status-row-INSTANCE { display:flex; align-items:center; gap:8px; margin:0 10px; padding-top:6px; flex-shrink:0; }
.kpi-divider-INSTANCE { border-top:1px solid rgba(255,255,255,0.08); margin-top:6px; flex-shrink:0; }
.kpi-status-text-INSTANCE { font-size:11px; color:#919FB4; line-height:1.3; flex:1; }
.kpi-info-btn-INSTANCE { width:18px; height:18px; border-radius:50%; background:transparent; color:#A7C4E5; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:color 0.2s ease,box-shadow 0.2s ease; user-select:none; padding:0; box-sizing:border-box; flex-shrink:0; }
.kpi-info-btn-INSTANCE:hover { color:#D0E6F7; box-shadow:0 0 8px 2px rgba(74,158,187,0.45); }
.kpi-info-btn-INSTANCE.kpi-info-active-INSTANCE { color:#7EB3D8; box-shadow:0 0 8px 2px rgba(36,219,201,0.45); }
</style>
</head>
<body>
<!-- [INPUT][DATA] Metric — Y-axis sparkline values (separator-joined numbers), e.g. "72;75;80" -->
<span id="mstr-data-y-INSTANCE" style="display:none">{[${v.yData}]}</span>
<!-- [INPUT][DATA] Attribute — X-axis time labels (separator-joined strings), e.g. "W1;W2;W3" -->
<span id="mstr-data-x-INSTANCE" style="display:none">{[${v.xData}]}</span>
<!-- [INPUT][DATA] Metric or Attribute — status/reason text shown in status row and popup section -->
<span id="mstr-data-status-INSTANCE" style="display:none">{[${v.statusData}]}</span>
<div id="kpi-root-INSTANCE"></div>
<script>
(function() {
/* ═══════════════════════════════════════════════════════════════
   CONFIGURATION — edit values below
   ═══════════════════════════════════════════════════════════════ */
var CONFIG = {
  title:          ${JSON.stringify(c.title)},
  valueDecimals:  ${c.valueDecimals},
  valueIsPercent: ${c.valueIsPercent},   // true = multiply by 100 and append %
  thousandSep:    ${JSON.stringify(c.thousandSep)},   // "" = none, " " = space, "," etc.
  changeDecimals: ${c.changeDecimals},
  separator:      ${JSON.stringify(c.separator)},
  iconShow:       ${c.iconShow},
  iconSvg:        ${JSON.stringify(c.iconSvg)},
  barColorDefault: ${JSON.stringify(c.barColorDefault)},
  barColorLast:    ${JSON.stringify(c.barColorLast)},
  barRadius:       ${c.barRadius},
  barGap:          ${c.barGap},
  statusShow:      ${c.statusShow},
  statusTextShow:  ${c.statusTextShow},
  infoShow:        ${c.infoShow},
  infoPosition:    ${JSON.stringify(c.infoPosition)},
popup: {
width: ${JSON.stringify(c.popupWidth)},
titleIcon: ${JSON.stringify(c.popupTitleIcon)},
title: ${JSON.stringify(c.popupTitle)},
titleColor: ${JSON.stringify(c.popupTitleColor)},
titleFont: "Tahoma, Arial, sans-serif",
titleSize: "13px",
bodyHtml: ${JSON.stringify(c.popupBodyHtml)},
bodyFont: "Tahoma, Arial, sans-serif",
bodySize: "12px",
bodyColor: ${JSON.stringify(c.popupBodyColor)},
divider: ${c.popupDivider},
sectionShow: ${c.popupSectionShow},
sectionTitle: ${JSON.stringify(c.popupSectionTitle)},
sectionTitleColor: ${JSON.stringify(c.popupSectionTitleColor)},
sectionTitleSize: "12px",
sectionHtml: '<span style="font-family:monospace;font-size:11px;color:#9AABB8;white-space:pre-wrap;">{VALUE}</span>',
linkShow: ${c.popupLinkShow},
linkText: ${JSON.stringify(c.popupLinkText)},
linkTooltip: ${JSON.stringify(c.popupLinkTooltip)},
linkTargetText: ${JSON.stringify(c.popupLinkTarget)},
linkColor: ${JSON.stringify(c.popupLinkColor)},
linkHoverColor: ${JSON.stringify(c.popupLinkHoverColor)},
},
};
/* ═══════════════════════════════════════════════════════════════ */
var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
var styleEl = document.getElementById('style-INSTANCE');
if (styleEl) { styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }
['mstr-data-y-INSTANCE','mstr-data-x-INSTANCE','mstr-data-status-INSTANCE'].forEach(function(id) { var el = document.getElementById(id); if (el) el.id = el.id.split('INSTANCE').join(uid); });
var rootEl = document.getElementById('kpi-root-INSTANCE');
if (rootEl) rootEl.id = 'kpi-root-' + uid;
var rawValues = (document.getElementById('mstr-data-y-' + uid) || {}).textContent || '';
var rawLabels = (document.getElementById('mstr-data-x-' + uid) || {}).textContent || '';
var statusText = (document.getElementById('mstr-data-status-' + uid) || {}).textContent || '';
var values = rawValues.split(CONFIG.separator).map(function(v) { return parseFloat(v.trim()); }).filter(function(v) { return !isNaN(v); });
var allLabels = rawLabels.split(CONFIG.separator).map(function(v) { return v.trim(); }).filter(function(v) { return v.length > 0; });
var labels = allLabels.length > values.length ? allLabels.slice(allLabels.length - values.length) : allLabels;
var lastVal = values.length > 0 ? values[values.length - 1] : null;
var prevVal = values.length > 1 ? values[values.length - 2] : null;
var changePct = (lastVal !== null && prevVal !== null && prevVal !== 0) ? ((lastVal - prevVal) / Math.abs(prevVal)) * 100 : null;
function fmtVal(v) {
  if (v === null) return '—';
  var str = (CONFIG.valueIsPercent ? v * 100 : v).toFixed(CONFIG.valueDecimals);
  if (CONFIG.thousandSep) { var parts = str.split('.'); parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, CONFIG.thousandSep); str = parts.join('.'); }
  return str + (CONFIG.valueIsPercent ? '%' : '');
}
var INFO_SVG = '<svg viewBox="0 0 22 22" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="7" r="1.2" fill="currentColor"/><rect x="10" y="9.8" width="2" height="6" rx="1" fill="currentColor"/></svg>';
var card = document.createElement('div'); card.className = 'kpi-card-' + uid;
${c.helpId ? `card.setAttribute('data-help-id', ${JSON.stringify(c.helpId)});` : ''}
var infoBtn = null;
if (CONFIG.infoShow && CONFIG.infoPosition === 'top-right') {
  infoBtn = document.createElement('div'); infoBtn.className = 'kpi-info-btn-' + uid;
  infoBtn.style.cssText = 'position:absolute;top:10px;right:10px;width:20px;height:20px;';
  infoBtn.innerHTML = INFO_SVG; card.appendChild(infoBtn);
}
var header = document.createElement('div'); header.className = 'kpi-header-' + uid;
if (CONFIG.infoShow && CONFIG.infoPosition === 'top-right') header.style.justifyContent = 'flex-start';
var title = document.createElement('div'); title.className = 'kpi-title-' + uid; title.textContent = CONFIG.title; header.appendChild(title);
if (CONFIG.iconShow && CONFIG.iconSvg) {
  var catIcon = document.createElement('div'); catIcon.className = 'kpi-cat-icon-' + uid; catIcon.innerHTML = CONFIG.iconSvg;
  if (CONFIG.infoShow && CONFIG.infoPosition === 'top-right') catIcon.style.cssText = 'margin-left:10px;margin-right:30px;flex-shrink:0;';
  header.appendChild(catIcon);
}
card.appendChild(header);
var valueRow = document.createElement('div'); valueRow.className = 'kpi-value-row-' + uid;
var valueEl = document.createElement('span'); valueEl.className = 'kpi-value-' + uid; valueEl.textContent = fmtVal(lastVal); valueRow.appendChild(valueEl);
if (changePct !== null) { var changeEl = document.createElement('span'); var changeClass = changePct > 0 ? 'kpi-change-pos-' : changePct < 0 ? 'kpi-change-neg-' : 'kpi-change-flat-'; changeEl.className = 'kpi-change-' + uid + ' ' + changeClass + uid; var arrow = changePct > 0 ? '▲' : changePct < 0 ? '▼' : '■'; changeEl.textContent = arrow + ' ' + (changePct >= 0 ? '+' : '') + changePct.toFixed(CONFIG.changeDecimals) + '%'; valueRow.appendChild(changeEl); }
card.appendChild(valueRow);
var sparkWrap = document.createElement('div'); sparkWrap.className = 'kpi-sparkline-' + uid;
var sparkSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); sparkSvg.setAttribute('width','100%'); sparkSvg.setAttribute('height','100%'); sparkSvg.setAttribute('preserveAspectRatio','none'); sparkWrap.appendChild(sparkSvg); card.appendChild(sparkWrap);
if (CONFIG.statusShow) {
  var statusDivider = document.createElement('div'); statusDivider.className = 'kpi-divider-' + uid; card.appendChild(statusDivider);
  var statusRow = document.createElement('div'); statusRow.className = 'kpi-status-row-' + uid;
  if (CONFIG.infoShow && CONFIG.infoPosition === 'bottom-left') {
    infoBtn = document.createElement('div'); infoBtn.className = 'kpi-info-btn-' + uid; infoBtn.innerHTML = INFO_SVG; statusRow.appendChild(infoBtn);
  }
  if (CONFIG.statusTextShow && statusText) { var statusEl = document.createElement('div'); statusEl.className = 'kpi-status-text-' + uid; statusEl.textContent = statusText; statusRow.appendChild(statusEl); }
  card.appendChild(statusRow);
}
rootEl.appendChild(card);
var sparkTip = document.createElement('div'); sparkTip.className = 'kpi-spark-tip-' + uid; document.body.appendChild(sparkTip);
requestAnimationFrame(function() {
if (values.length === 0) return;
var w = sparkWrap.clientWidth || 200; var h = sparkWrap.clientHeight || 36;
sparkSvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
var maxV = Math.max.apply(null, values); var range = maxV || 1;
var slotW = w / values.length; var barW = Math.max(2, slotW - CONFIG.barGap);
var barMeta = []; var svgContent = '';
for (var i = 0; i < values.length; i++) {
var barH = (values[i] / range) * (h - 2) + 2; var slotX = i * slotW;
var x = slotX + (slotW - barW) / 2; var isLast = (i === values.length - 1);
var fill = isLast ? CONFIG.barColorLast : CONFIG.barColorDefault;
svgContent += '<rect x="' + x + '" y="' + (h - barH) + '" width="' + barW + '" height="' + barH + '" fill="' + fill + '" rx="' + CONFIG.barRadius + '" style="cursor:pointer"/>';
barMeta.push({ x: slotX, w: slotW });
}
sparkSvg.innerHTML = svgContent;
var activeIdx = -1;
sparkSvg.addEventListener('mousemove', function(e) {
var rect = sparkSvg.getBoundingClientRect(); var scaleX = w / rect.width; var mouseX = (e.clientX - rect.left) * scaleX;
var idx = -1; for (var j = 0; j < barMeta.length; j++) { if (mouseX >= barMeta[j].x && mouseX <= barMeta[j].x + barMeta[j].w) { idx = j; break; } }
if (idx < 0 || idx === activeIdx) return; activeIdx = idx;
var lbl = labels[idx] || ''; var val = fmtVal(values[idx]);
sparkTip.innerHTML = '<span class="kpi-spark-tip-lbl-' + uid + '">' + lbl + '</span><span class="kpi-spark-tip-val-' + uid + '">' + val + '</span>';
sparkTip.style.opacity = '1';
var wrapRect = sparkWrap.getBoundingClientRect(); var barCenterPx = (barMeta[idx].x + barMeta[idx].w / 2) / scaleX;
var tipW = sparkTip.offsetWidth; var tipH = sparkTip.offsetHeight; var tipLeft = wrapRect.left + barCenterPx - tipW / 2;
if (tipLeft < 4) tipLeft = 4; if (tipLeft + tipW > window.innerWidth - 4) tipLeft = window.innerWidth - tipW - 4;
sparkTip.style.left = tipLeft + 'px'; sparkTip.style.top = (wrapRect.top - tipH - 6) + 'px';
});
sparkSvg.addEventListener('mouseleave', function() { sparkTip.style.opacity = '0'; activeIdx = -1; });
});
if (CONFIG.infoShow && infoBtn) {
var P = CONFIG.popup;
var popup = document.createElement('div');
popup.style.cssText = 'position:fixed;background:#0f1b2d;border:1px solid #2e3f55;box-shadow:0 6px 24px rgba(0,0,0,0.6);border-radius:8px;padding:14px 16px;width:' + P.width + ';max-width:90vw;white-space:normal;line-height:1.5;pointer-events:auto;z-index:9999;display:none;box-sizing:border-box;';
var popHeader = document.createElement('div'); popHeader.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:8px;';
var titleWrap = document.createElement('div'); titleWrap.style.cssText = 'display:flex;align-items:center;gap:6px;';
if (P.titleIcon) { var iconSpan = document.createElement('span'); iconSpan.textContent = P.titleIcon; iconSpan.style.fontSize = '15px'; titleWrap.appendChild(iconSpan); }
var titleEl = document.createElement('span'); titleEl.textContent = P.title; titleEl.style.cssText = 'font-family:' + P.titleFont + ';font-size:' + P.titleSize + ';font-weight:bold;color:' + P.titleColor + ';letter-spacing:0.03em;'; titleWrap.appendChild(titleEl); popHeader.appendChild(titleWrap);
var closeBtn = document.createElement('span'); closeBtn.textContent = '\u00d7'; closeBtn.style.cssText = 'margin-left:auto;flex-shrink:0;cursor:pointer;font-size:18px;line-height:1;color:#4a6080;padding:0 0 0 8px;transition:color 0.15s ease;'; closeBtn.addEventListener('mouseover', function() { closeBtn.style.color = '#DEDEDE'; }); closeBtn.addEventListener('mouseout', function() { closeBtn.style.color = '#4a6080'; }); closeBtn.addEventListener('click', function(e) { e.stopPropagation(); closePopup(); }); popHeader.appendChild(closeBtn); popup.appendChild(popHeader);
var popBody = document.createElement('div'); popBody.innerHTML = P.bodyHtml; popBody.style.cssText = 'font-family:' + P.bodyFont + ';font-size:' + P.bodySize + ';color:' + P.bodyColor + ';'; popup.appendChild(popBody);
if (P.divider && P.sectionShow) { var div2 = document.createElement('div'); div2.style.cssText = 'border-top:1px solid #2e3f55;margin:12px 0;'; popup.appendChild(div2); var secTitle = document.createElement('div'); secTitle.textContent = P.sectionTitle; secTitle.style.cssText = 'font-family:Tahoma,Arial,sans-serif;font-size:' + P.sectionTitleSize + ';color:' + P.sectionTitleColor + ';font-weight:bold;margin-bottom:6px;'; popup.appendChild(secTitle); var secBody = document.createElement('div'); secBody.innerHTML = P.sectionHtml.replace('{VALUE}', statusText || '\u2014'); popup.appendChild(secBody); }
if (P.linkShow) { var footer = document.createElement('div'); footer.style.cssText = 'margin-top:12px;display:flex;justify-content:flex-end;'; var linkEl = document.createElement('span'); linkEl.textContent = P.linkText; linkEl.style.cssText = 'font-family:Tahoma,Arial,sans-serif;font-size:11px;color:' + P.linkColor + ';white-space:nowrap;cursor:pointer;'; var linkTip = document.createElement('div'); linkTip.textContent = P.linkTooltip; linkTip.style.cssText = 'position:fixed;background:#0f1b2d;border:1px solid #2e3f55;border-radius:4px;padding:5px 9px;font-family:Tahoma,Arial,sans-serif;font-size:11px;color:#9AABB8;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:10000;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.5);'; document.body.appendChild(linkTip); linkEl.addEventListener('mousemove', function(e) { linkTip.style.left = (e.clientX+14)+'px'; linkTip.style.top = (e.clientY+14)+'px'; linkTip.style.opacity = '1'; }); linkEl.addEventListener('mouseleave', function() { linkTip.style.opacity = '0'; linkEl.style.color = P.linkColor; }); linkEl.addEventListener('mouseover', function() { linkEl.style.color = P.linkHoverColor; }); footer.appendChild(linkEl); popup.appendChild(footer); }
document.body.appendChild(popup);
var isOpen = false;
function openPopup() { var rect = infoBtn.getBoundingClientRect(); var popupW = parseInt(P.width); var left = rect.right + 8; if (left + popupW > window.innerWidth - 8) left = rect.left - popupW - 8; popup.style.left = left + 'px'; if (CONFIG.infoPosition === 'top-right') { popup.style.top = (rect.bottom + 8) + 'px'; popup.style.bottom = 'auto'; } else { popup.style.top = 'auto'; popup.style.bottom = (window.innerHeight - rect.top + 8) + 'px'; popup.style.display = 'block'; var popRect = popup.getBoundingClientRect(); if (popRect.top < 8) { popup.style.bottom = 'auto'; popup.style.top = (rect.bottom + 8) + 'px'; } } popup.style.display = 'block'; infoBtn.classList.add('kpi-info-active-' + uid); isOpen = true; }
function closePopup() { popup.style.display = 'none'; infoBtn.classList.remove('kpi-info-active-' + uid); isOpen = false; }
infoBtn.addEventListener('click', function(e) { e.stopPropagation(); isOpen ? closePopup() : openPopup(); });
document.addEventListener('click', function(e) { if (isOpen && !popup.contains(e.target)) closePopup(); });
}
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 2. BOX WITH HEADER
// ══════════════════════════════════════════════════════════════
{
  id: 'box-with-header',
  name: 'Box with Header',
  hasPreview: true,
  description: 'Container with a styled header bar and an empty body. The header supports MSTR variables and HTML formatting.',
  groups: [
    { name: 'Header — text', open: true, fields: [
      { key: 'headline', label: 'Header text (HTML)', type: 'html-textarea', default: 'Total Platform Users  <b style=\'color:#F4F4F4\'>{[UAA - Total]}</b> | <i>4W Change  <span style=\'color:#F4F4F4\'>{[Uaa 4w Change Pct - Total]}</span></i>' },
      { key: 'helpId',   label: 'Help Overlay ID (leave empty to skip)', type: 'text', default: '' },
    ]},
    { name: 'Header — appearance', open: true, fields: [
      { key: 'headerBgColor',    label: 'Header background color', type: 'color',  default: '#313131' },
      { key: 'headerBgOpacity',  label: 'Header opacity',          type: 'number', default: 1, min: 0, max: 1, step: 0.05 },
      { key: 'headerHeight',     label: 'Header height',           type: 'text',   default: '60px' },
      { key: 'headerFontColor',  label: 'Text color',              type: 'color',  default: '#C8C8C8' },
      { key: 'headerFontFamily', label: 'Font family',             type: 'text',   default: "'Segoe UI', sans-serif" },
      { key: 'headerFontSize',   label: 'Font size',               type: 'text',   default: '30px' },
      { key: 'headerFontWeight', label: 'Font weight',             type: 'number', default: 400, min: 100, max: 900, step: 100 },
      { key: 'headerFontOffset', label: 'Text vertical offset',    type: 'text',   default: '0px' },
    ]},
    { name: 'Body', open: true, fields: [
      { key: 'bodyBgColor',   label: 'Body background color', type: 'color',  default: '#1A1A1A' },
      { key: 'bodyBgOpacity', label: 'Body opacity',          type: 'number', default: 1, min: 0, max: 1, step: 0.05 },
    ]},
    { name: 'Border', open: false, fields: [
      { key: 'borderColor',        label: 'Border color',       type: 'color',  default: '#35383A' },
      { key: 'borderWidth',        label: 'Border width',       type: 'text',   default: '1px' },
      { key: 'borderRadiusPreset', label: 'Corner rounding',    type: 'select', default: 'top-only', options: [{v:'none',l:'None'},{v:'top-only',l:'Top only'},{v:'all',l:'All corners'}] },
      { key: 'borderRadiusSize',   label: 'Corner radius size', type: 'text',   default: '8px' },
    ]},
    { name: 'Header divider', open: false, fields: [
      { key: 'dividerColor',  label: 'Divider color',  type: 'color', default: '#555555' },
      { key: 'dividerWidth',  label: 'Divider width',  type: 'text',  default: '1px' },
      { key: 'dividerHeight', label: 'Divider height', type: 'text',  default: '60%' },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MSTR Container</title>
  <style id="mstr-config-INSTANCE">
    /* ═══════════════════════════════════════════════════════════════
       CONFIGURATION — edit CSS variables below to customise appearance.
       For headline text, edit the data-headline attribute on the div
       in the HTML body below.
       Use "|" in data-headline to insert a vertical divider.
       Standard HTML tags are supported; use single quotes inside.
       ═══════════════════════════════════════════════════════════════ */
    .mstr-container-INSTANCE {

      /* Header background */
      --header-bg-color:          ${c.headerBgColor};
      --header-bg-opacity:        ${c.headerBgOpacity};      /* 0–1 */

      /* Body background */
      --body-bg-color:            ${c.bodyBgColor};
      --body-bg-opacity:          ${c.bodyBgOpacity};        /* 0–1 */

      /* Border */
      --border-color:             ${c.borderColor};
      --border-width:             ${c.borderWidth};

      /* Border-radius preset: "none" | "top-only" | "all" */
      --border-radius-preset:     "${c.borderRadiusPreset}";
      --border-radius-size:       ${c.borderRadiusSize};

      /* Layout */
      --header-height:            ${c.headerHeight};
      --container-width:          100%;

      /* Header typography */
      --header-font-family:       ${c.headerFontFamily};
      --header-font-size:         ${c.headerFontSize};
      --header-font-weight:       ${c.headerFontWeight};
      --header-font-offset:       ${c.headerFontOffset};     /* fine-tune vertical text position */
      --header-font-color:        ${c.headerFontColor};

      /* Header divider — vertical line inserted where "|" appears in data-headline */
      --header-divider-color:     ${c.dividerColor};
      --header-divider-width:     ${c.dividerWidth};
      --header-divider-height:    ${c.dividerHeight};        /* relative to header height */

      box-sizing: border-box;
      width: var(--container-width);
      height: 100%;
      display: flex;
      flex-direction: column;
      border: var(--border-width) solid var(--border-color);
      overflow: hidden;
      border-radius: 0;
    }
    .mstr-header-INSTANCE {
      height: var(--header-height);
      display: flex; align-items: center; padding: 0 14px; overflow: hidden;
      background-color: var(--header-bg-color);
    }
    .mstr-title-INSTANCE {
      height: 100%; margin-top: var(--header-font-offset);
      font-size: var(--header-font-size); font-family: var(--header-font-family);
      font-weight: var(--header-font-weight); color: var(--header-font-color);
      letter-spacing: 0.02em; white-space: pre; text-overflow: ellipsis;
      display: flex; align-items: center;
    }
    .mstr-divider-INSTANCE {
      display: inline-block; width: var(--header-divider-width);
      height: var(--header-divider-height); background-color: var(--header-divider-color);
      margin: 0 14px; flex-shrink: 0; vertical-align: middle;
    }
    .mstr-body-INSTANCE { flex: 1; box-sizing: border-box; background-color: rgba(255,255,255,0.10); }
  </style>
</head>
<body>
  <!-- [INPUT][DATA] Headline text — MSTR {[Variable]} tokens are substituted here.
       Use "|" to insert a divider. HTML formatting supported (single quotes only).
       Wrap values in <span data-help-id="..."> to target them from Help Overlay. -->
  <div class="mstr-container-INSTANCE"
       data-headline="${c.headline}">
    <div class="mstr-header-INSTANCE">
      <div class="mstr-title-INSTANCE"></div>
    </div>
    <div class="mstr-body-INSTANCE"></div>
  </div>
  <script>
    (function () {
      var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
      var styleEl = document.getElementById('mstr-config-INSTANCE');
      styleEl.id  = 'mstr-config-' + uid;
      styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid);
      document.querySelectorAll('[class*="INSTANCE"]').forEach(function (el) {
        var updated = Array.from(el.classList).map(function (cls) { return cls.split('INSTANCE').join(uid); });
        el.className = updated.join(' ');
      });
      function hexToRgba(hex, opacity) {
        var h = hex.replace('#', ''); var r = parseInt(h.substring(0,2),16); var g = parseInt(h.substring(2,4),16); var b = parseInt(h.substring(4,6),16);
        return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
      }
      var container = document.querySelector('.mstr-container-' + uid);
      var header    = container.querySelector('.mstr-header-' + uid);
      ${c.helpId ? `header.setAttribute('data-help-id', ${JSON.stringify(c.helpId)});` : ''}
      var headline  = container.querySelector('.mstr-title-' + uid);
      var body      = container.querySelector('.mstr-body-' + uid);
      var styles    = getComputedStyle(container);
      var str = function (prop) { return styles.getPropertyValue(prop).trim().replace(/^["']|["']$/g, ''); };
      var num = function (prop) { return parseFloat(styles.getPropertyValue(prop).trim()); };
      var rawHeadline = container.getAttribute('data-headline') || '';
      var dividerSpan = '<span class="mstr-divider-' + uid + '"></span>';
      var parts = rawHeadline.split('|');
      headline.innerHTML = parts.map(function (part) { return part.trim(); }).join(dividerSpan);
      header.style.backgroundColor = hexToRgba(str('--header-bg-color'), num('--header-bg-opacity'));
      body.style.backgroundColor   = hexToRgba(str('--body-bg-color'),   num('--body-bg-opacity'));
      var preset = str('--border-radius-preset'); var radius = str('--border-radius-size');
      if (preset === 'none') { container.style.borderRadius = '0'; }
      else if (preset === 'top-only') { container.style.borderRadius = radius + ' ' + radius + ' 0 0'; header.style.borderRadius = 'calc(' + radius + ' - 1px) calc(' + radius + ' - 1px) 0 0'; }
      else if (preset === 'all') { container.style.borderRadius = radius; header.style.borderRadius = 'calc(' + radius + ' - 1px) calc(' + radius + ' - 1px) 0 0'; }
    })();
  <\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 3. TITLE WITH GLOW UP DOT
// ══════════════════════════════════════════════════════════════
{
  id: 'title-glow-dot',
  name: 'Title with Glow Dot',
  hasPreview: true,
  description: 'Coloured dot with a label and hover tooltip. The dot lights up with a glow effect on mouse-over.',
  groups: [
    { name: 'Basic', open: true, fields: [
      { key: 'text',      label: 'Label text',      type: 'text',    default: 'LINEAR TV' },
      { key: 'dotColor',  label: 'Dot color',       type: 'color',   default: '#24DBC9' },
      { key: 'textColor', label: 'Text color',      type: 'color',   default: '#DEDEDE' },
      { key: 'fontSize',  label: 'Font size',       type: 'text',    default: '14px' },
      { key: 'font',      label: 'Font family',     type: 'text',    default: 'Tahoma, Arial, sans-serif' },
      { key: 'align',     label: 'Alignment',       type: 'select',  default: 'right', options: [{v:'left',l:'Left'},{v:'right',l:'Right'}] },
      { key: 'tooltip',   label: 'Show tooltip',    type: 'boolean', default: true },
    ]},
    { name: 'Tooltip', open: false, fields: [
      { key: 'tooltipHtml',      label: 'Tooltip body (HTML)', type: 'textarea', default: 'Linear TV users create <strong style="color:#24DBC9;">{VALUE}</strong> of all Total Platform users.' },
      { key: 'tooltipFont',      label: 'Tooltip font',        type: 'text',     default: 'Tahoma, Arial, sans-serif' },
      { key: 'tooltipFontSize',  label: 'Tooltip font size',   type: 'text',     default: '12px' },
      { key: 'tooltipTextColor', label: 'Tooltip text color',  type: 'color',    default: '#b0bec5' },
    ]},
  ],
  mstrVars: [
    { key: 'metricValue', label: 'Metric value (shown in tooltip as {VALUE})', default: 'UAA - Linear TV %', fakeValue: '34%' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html>
<head>
<style id="style-INSTANCE">
  .root-INSTANCE { display:flex; width:100%; }
  .wrap-INSTANCE { position:relative; display:inline-flex; align-items:center; gap:10px; cursor:default; user-select:none; padding:8px 0 0 10px; }
  .dot-INSTANCE  { flex-shrink:0; border-radius:50%; transition:filter 0.2s ease,box-shadow 0.2s ease; }
  .wrap-INSTANCE:hover .dot-INSTANCE { filter:brightness(1.45); box-shadow:0 0 6px 2px var(--dot-color-INSTANCE); }
  .label-INSTANCE { white-space:nowrap; }
</style>
</head>
<body>
<!-- [INPUT][DATA] Metric — percentage value shown in tooltip as {VALUE}, e.g. "34%" -->
<span id="val-metric-INSTANCE" style="display:none">{[${v.metricValue}]}</span>
<div id="root-INSTANCE"></div>
<script>
(function () {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  var CONFIG = {
    text:      ${JSON.stringify(c.text)},
    font:      ${JSON.stringify(c.font)},
    fontSize:  ${JSON.stringify(c.fontSize)},
    textColor: ${JSON.stringify(c.textColor)},
    dotColor:  ${JSON.stringify(c.dotColor)},
    align:     ${JSON.stringify(c.align)},
    tooltip:   ${c.tooltip},
  };
  var TOOLTIP = {
    html:      ${JSON.stringify(c.tooltipHtml)},  /* {VALUE} is replaced by the metric value */
    font:      ${JSON.stringify(c.tooltipFont)},
    fontSize:  ${JSON.stringify(c.tooltipFontSize)},
    textColor: ${JSON.stringify(c.tooltipTextColor)},
  };
  /* ═══════════════════════════════════════════════════════════════ */
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('style-INSTANCE'); styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid);
  var valEl = document.getElementById('val-metric-INSTANCE'); valEl.id = 'val-metric-' + uid;
  var rootEl = document.getElementById('root-INSTANCE'); rootEl.id = 'root-' + uid; rootEl.className = 'root-' + uid;
  rootEl.style.justifyContent = CONFIG.align === 'right' ? 'flex-end' : 'flex-start';
  var metricValue = document.getElementById('val-metric-' + uid).textContent.trim();
  var fs = parseFloat(CONFIG.fontSize); var unit = CONFIG.fontSize.replace(/[\\d.]/g, '') || 'px'; var dotSize = (fs * 0.6).toFixed(1) + unit;
  var wrap = document.createElement('div'); wrap.className = 'wrap-' + uid; wrap.style.setProperty('--dot-color-' + uid, CONFIG.dotColor);
  var dot = document.createElement('span'); dot.className = 'dot-' + uid; dot.style.cssText = 'width:' + dotSize + ';height:' + dotSize + ';background-color:' + CONFIG.dotColor + ';';
  var label = document.createElement('span'); label.className = 'label-' + uid; label.textContent = CONFIG.text; label.style.cssText = 'font-family:' + CONFIG.font + ';font-size:' + CONFIG.fontSize + ';color:' + CONFIG.textColor + ';line-height:1;';
  wrap.appendChild(dot); wrap.appendChild(label); rootEl.appendChild(wrap);
  if (CONFIG.tooltip) {
    var tipHtml = TOOLTIP.html.replace('{VALUE}', metricValue);
    var tip = document.createElement('div');
    tip.style.cssText = 'position:fixed;background:#1a2535;border:1px solid #2e3f55;box-shadow:0 4px 16px rgba(0,0,0,0.45);border-radius:6px;padding:10px 13px;min-width:200px;max-width:280px;white-space:normal;line-height:1.5;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:9999;font-family:' + TOOLTIP.font + ';font-size:' + TOOLTIP.fontSize + ';color:' + TOOLTIP.textColor + ';';
    tip.innerHTML = tipHtml; document.body.appendChild(tip);
    wrap.addEventListener('mousemove', function (e) {
      var tw = tip.offsetWidth, th = tip.offsetHeight, ox = 14, oy = 14;
      var px = e.clientX + ox; var py = e.clientY + oy;
      if (px + tw > window.innerWidth)  px = e.clientX - tw - ox;
      if (py + th > window.innerHeight) py = e.clientY - th - oy;
      tip.style.left = px + 'px'; tip.style.top = py + 'px'; tip.style.opacity = '1';
    });
    wrap.addEventListener('mouseleave', function () { tip.style.opacity = '0'; });
  }
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 4. MGTV LOGO
// ══════════════════════════════════════════════════════════════
{
  id: 'mgtv-logo',
  name: 'MGTV Logo',
  hasPreview: true,
  description: 'Banner with the Deutsche Telekom T logo, a Magenta TV title, and a subtitle. In MSTR, paste only the content inside <body>.',
  groups: [
    { name: 'Text', open: true, fields: [
      { key: 'title',           label: 'Title (uppercase)',    type: 'text',     default: 'MAGENTA TV' },
      { key: 'subtitle',        label: 'Subtitle (HTML)',      type: 'textarea', default: 'Overall Platform<br>Performance' },
      { key: 'titleColor',      label: 'Title color',         type: 'color',    default: '#e20074' },
      { key: 'subtitleColor',   label: 'Subtitle color',      type: 'color',    default: '#5C6B81' },
      { key: 'titleFontSize',   label: 'Title font size',     type: 'text',     default: '20px' },
      { key: 'subtitleFontSize',label: 'Subtitle font size',  type: 'text',     default: '12px' },
    ]},
    { name: 'Logo', open: false, fields: [
      { key: 'logoColor', label: 'Logo T color',      type: 'color', default: '#ffffff' },
      { key: 'logoSize',  label: 'Logo size',         type: 'text',  default: '40px' },
      { key: 'padding',   label: 'Container padding', type: 'text',  default: '12px 18px' },
      { key: 'gap',       label: 'Logo–text gap',     type: 'text',  default: '12px' },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>html,body{margin:0;padding:0;height:100%;background:transparent;overflow:hidden;}</style>
<style id="style-INSTANCE">
/* ═══════════════════════════════════════════════════════════════
   MGTV LOGO — MicroStrategy HTML Container
   Edit CONFIG in the <script> block below to customise appearance.
   ═══════════════════════════════════════════════════════════════ */
.header-INSTANCE { display:flex; align-items:center; gap:${c.gap}; background:transparent; padding:${c.padding}; width:100%; box-sizing:border-box; font-family:Tahoma,Geneva,sans-serif; }
.logo-INSTANCE { flex:0 0 ${c.logoSize}; width:${c.logoSize}; height:calc(${c.logoSize} * 1.2); display:flex; align-items:center; justify-content:center; }
.logo-INSTANCE svg { display:block; width:100%; height:100%; }
.text-block-INSTANCE { display:flex; flex-direction:column; gap:0; min-width:0; }
.title-INSTANCE { color:${c.titleColor}; font-size:${c.titleFontSize}; font-weight:700; letter-spacing:2px; line-height:1.2; white-space:nowrap; }
.subtitle-INSTANCE { color:${c.subtitleColor}; font-size:${c.subtitleFontSize}; font-weight:500; letter-spacing:0.3px; line-height:1.35; }
</style>
</head>
<body>
<div class="header-INSTANCE">
  <div class="logo-INSTANCE">
    <svg viewBox="0 0 76.728 91.282" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(.2857 0 0 .2857 71.408 28.262)" fill="${c.logoColor}">
        <path d="m-33.599 218.73v-22.192h-15.256c-26.315 0-38.393-15.643-38.393-38.665v-232.6h4.5246c49.283 0 80.582 32.707 80.582 80.797v4.3092h18.745v-107.3h-264.58v107.3h18.745v-4.3092c0-48.09 31.298-80.797 80.582-80.797h4.5246v232.6c0 23.022-12.078 38.665-38.393 38.665h-15.256v22.192z"/>
        <path d="m16.603 111.43h-62.914v-63.129h62.914z"/>
        <path d="m-185.07 111.43h-62.914v-63.129h62.914z"/>
      </g>
    </svg>
  </div>
  <div class="text-block-INSTANCE">
    <div class="title-INSTANCE">${c.title}</div>
    <div class="subtitle-INSTANCE">${c.subtitle}</div>
  </div>
</div>
<script>
(function() {
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 4);
  var styleEl = document.getElementById('style-INSTANCE');
  if (styleEl) { styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }
  document.querySelectorAll('[class*="INSTANCE"]').forEach(function(el) { el.className = el.className.split('INSTANCE').join(uid); });
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 5. INFO ICON POPUP WINDOW
// ══════════════════════════════════════════════════════════════
{
  id: 'info-icon-popup',
  name: 'Info Icon Popup',
  hasPreview: true,
  description: 'Clickable ⓘ icon that opens an information popup with body text, an optional secondary section, and a detail link.',
  groups: [
    { name: 'Icon', open: true, fields: [
      { key: 'iconSize', label: 'Icon size', type: 'text', default: '22px' },
    ]},
    { name: 'Popup', open: true, fields: [
      { key: 'popupWidth',     label: 'Popup width',          type: 'text',    default: '400px' },
      { key: 'titleShow',      label: 'Show title',           type: 'boolean', default: true },
      { key: 'title',          label: 'Title',                type: 'text',    default: 'USER RETENTION' },
      { key: 'titleColor',     label: 'Title color',          type: 'color',   default: '#FAD47F' },
      { key: 'titleIcon',      label: 'Title icon (emoji)',   type: 'text',    default: '' },
      { key: 'bodyHtml',       label: 'Body HTML',            type: 'textarea',default: 'Description of the metric calculation methodology or additional context for the displayed data.' },
      { key: 'bodyColor',      label: 'Body text color',      type: 'color',   default: '#DEDEDE' },
      { key: 'bodySize',       label: 'Body font size',       type: 'text',    default: '12px' },
      { key: 'divider',        label: 'Show divider',         type: 'boolean', default: false },
      { key: 'sectionShow',    label: 'Show secondary section', type: 'boolean', default: false },
      { key: 'sectionTitle',   label: 'Secondary section title', type: 'text', default: 'Reason for actual status' },
      { key: 'sectionTitleColor',label:'Secondary title color', type:'color',  default: '#C9A227' },
      { key: 'linkShow',       label: 'Show detail link',     type: 'boolean', default: false },
      { key: 'linkText',       label: 'Link text',            type: 'text',    default: 'Detail View →' },
      { key: 'linkTooltip',    label: 'Link tooltip',         type: 'text',    default: '' },
      { key: 'linkTarget',     label: 'MSTR hasLink element text', type: 'text', default: '' },
      { key: 'linkColor',      label: 'Link color',           type: 'color',   default: '#4a9ebb' },
      { key: 'linkHoverColor', label: 'Link hover color',     type: 'color',   default: '#7ec8e3' },
    ]},
  ],
  mstrVars: [
    { key: 'reasonValue', label: 'Status/reason text (shown in secondary section)', default: 'Health Status Info Reason - FTV, Linear TV, Is Last Complete', fakeValue: 'Above baseline performance.' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="style-INSTANCE">
  .root-INSTANCE { display:inline-block; position:relative; padding:6px 0 0 6px; }
  .icon-btn-INSTANCE { width:${c.iconSize}; height:${c.iconSize}; border-radius:50%; background:transparent; color:#A7C4E5; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:color 0.2s ease,box-shadow 0.2s ease; user-select:none; padding:0; box-sizing:border-box; }
  .icon-btn-INSTANCE:hover { color:#D0E6F7; box-shadow:0 0 8px 2px rgba(167,196,229,0.5); border-radius:50%; }
  .icon-btn-INSTANCE.active-INSTANCE { color:#7EB3D8; box-shadow:0 0 8px 2px rgba(36,219,201,0.45); border-radius:50%; }
</style>
</head>
<body>
<!-- [INPUT][DATA] Attribute — single string shown in the secondary section, e.g. "Above baseline performance." -->
<span id="val-reason-INSTANCE" style="display:none">{[${v.reasonValue}]}</span>
<div id="root-INSTANCE"></div>
<script>
(function () {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  var CONFIG = { size: ${JSON.stringify(c.iconSize)} };
  var POPUP = {
    width: ${JSON.stringify(c.popupWidth)},
    titleShow: ${c.titleShow}, titleIcon: ${JSON.stringify(c.titleIcon)}, title: ${JSON.stringify(c.title)},
    titleColor: ${JSON.stringify(c.titleColor)}, titleFont: "Tahoma, Arial, sans-serif", titleSize: "13px",
    bodyHtml: ${JSON.stringify(c.bodyHtml)}, bodyFont: "Tahoma, Arial, sans-serif",
    bodySize: ${JSON.stringify(c.bodySize)}, bodyColor: ${JSON.stringify(c.bodyColor)},
    divider: ${c.divider}, sectionShow: ${c.sectionShow},
    sectionTitle: ${JSON.stringify(c.sectionTitle)}, sectionTitleColor: ${JSON.stringify(c.sectionTitleColor)}, sectionTitleSize: "12px",
    sectionHtml: '<span style="font-family:monospace;font-size:11px;color:#9AABB8;white-space:pre-wrap;">{VALUE}</span>',
    linkShow: ${c.linkShow}, linkText: ${JSON.stringify(c.linkText)}, linkTooltip: ${JSON.stringify(c.linkTooltip)},
    linkTargetText: ${JSON.stringify(c.linkTarget)},  /* exact innerText of the hidden MSTR hasLink element */
    linkColor: ${JSON.stringify(c.linkColor)}, linkHoverColor: ${JSON.stringify(c.linkHoverColor)},
  };
  /* ═══════════════════════════════════════════════════════════════ */
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('style-INSTANCE'); styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid);
  var valSpan = document.getElementById('val-reason-INSTANCE'); valSpan.id = 'val-reason-' + uid;
  var rootEl = document.getElementById('root-INSTANCE'); rootEl.id = 'root-' + uid;
  var reasonValue = document.getElementById('val-reason-' + uid).textContent.trim();
  var btn = document.createElement('div'); btn.className = 'icon-btn-' + uid; btn.style.width = CONFIG.size; btn.style.height = CONFIG.size; btn.style.margin = '6px 0 0 6px';
  btn.innerHTML = '<svg viewBox="0 0 22 22" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="9.5" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="7.2" r="1.4" fill="currentColor"/><rect x="9.8" y="10.0" width="2.4" height="5.8" rx="1.1" fill="currentColor"/></svg>';
  rootEl.appendChild(btn);
  var popup = document.createElement('div');
  popup.style.cssText = 'position:fixed;background:#0f1b2d;border:1px solid #2e3f55;box-shadow:0 6px 24px rgba(0,0,0,0.6);border-radius:8px;padding:14px 16px;width:' + POPUP.width + ';max-width:90vw;white-space:normal;line-height:1.5;pointer-events:auto;z-index:9999;display:none;box-sizing:border-box;';
  if (POPUP.titleShow) {
    var header = document.createElement('div'); header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:8px;';
    var titleWrap = document.createElement('div'); titleWrap.style.cssText = 'display:flex;align-items:center;gap:6px;';
    if (POPUP.titleIcon) { var iconSpan = document.createElement('span'); iconSpan.textContent = POPUP.titleIcon; iconSpan.style.fontSize = '15px'; titleWrap.appendChild(iconSpan); }
    var titleEl = document.createElement('span'); titleEl.textContent = POPUP.title; titleEl.style.cssText = 'font-family:' + POPUP.titleFont + ';font-size:' + POPUP.titleSize + ';font-weight:bold;color:' + POPUP.titleColor + ';letter-spacing:0.03em;'; titleWrap.appendChild(titleEl); header.appendChild(titleWrap); popup.appendChild(header);
  }
  var closeBtn = document.createElement('div'); closeBtn.textContent = '\u00d7'; closeBtn.style.cssText = 'position:absolute;top:10px;right:12px;cursor:pointer;font-size:18px;line-height:1;color:#4a6080;transition:color 0.15s ease;'; closeBtn.addEventListener('mouseover', function () { closeBtn.style.color = '#DEDEDE'; }); closeBtn.addEventListener('mouseout', function () { closeBtn.style.color = '#4a6080'; }); closeBtn.addEventListener('click', function (e) { e.stopPropagation(); closePopup(); }); popup.appendChild(closeBtn);
  var body = document.createElement('div'); body.innerHTML = POPUP.bodyHtml; body.style.cssText = 'font-family:' + POPUP.bodyFont + ';font-size:' + POPUP.bodySize + ';color:' + POPUP.bodyColor + ';'; popup.appendChild(body);
  if (POPUP.divider && POPUP.sectionShow) { var divEl = document.createElement('div'); divEl.style.cssText = 'border-top:1px solid #2e3f55;margin:12px 0;'; popup.appendChild(divEl); var secTitle = document.createElement('div'); secTitle.textContent = POPUP.sectionTitle; secTitle.style.cssText = 'font-family:Tahoma,Arial,sans-serif;font-size:' + POPUP.sectionTitleSize + ';color:' + POPUP.sectionTitleColor + ';font-weight:bold;margin-bottom:6px;'; popup.appendChild(secTitle); var secBody = document.createElement('div'); secBody.innerHTML = POPUP.sectionHtml.replace('{VALUE}', reasonValue || '\u2014'); popup.appendChild(secBody); }
  if (POPUP.linkShow) { var footer = document.createElement('div'); footer.style.cssText = 'margin-top:12px;display:flex;justify-content:flex-end;'; var link = document.createElement('span'); link.textContent = POPUP.linkText; link.style.cssText = 'font-family:Tahoma,Arial,sans-serif;font-size:11px;color:' + POPUP.linkColor + ';white-space:nowrap;cursor:pointer;'; link.addEventListener('mouseover', function () { link.style.color = POPUP.linkHoverColor; }); link.addEventListener('mouseleave', function () { link.style.color = POPUP.linkColor; }); footer.appendChild(link); popup.appendChild(footer); }
  document.body.appendChild(popup);
  var isOpen = false;
  function openPopup() { var rect = btn.getBoundingClientRect(); var popupW = parseInt(POPUP.width); var left = rect.right + 8; if (left + popupW > window.innerWidth - 8) left = rect.left - popupW - 8; var top = rect.top; if (top + 300 > window.innerHeight - 8) top = window.innerHeight - 310; popup.style.left = left + 'px'; popup.style.top = top + 'px'; popup.style.display = 'block'; btn.classList.add('active-' + uid); isOpen = true; }
  function closePopup() { popup.style.display = 'none'; btn.classList.remove('active-' + uid); isOpen = false; }
  btn.addEventListener('click', function (e) { e.stopPropagation(); isOpen ? closePopup() : openPopup(); });
  document.addEventListener('click', function (e) { if (isOpen && !popup.contains(e.target)) closePopup(); });
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 6. TIME INTERVAL SELECTOR
// ══════════════════════════════════════════════════════════════
{
  id: 'time-interval-selector',
  name: 'Time Interval Selector',
  hasPreview: true,
  description: 'Row of buttons for selecting a time interval. Each click drives hidden MSTR selectors (Is 1w, Is 1m, …).',
  groups: [
    { name: 'Buttons', open: true, fields: [
      { key: 'buttons', label: 'Buttons', type: 'array-panels',
        default: [
          { label: 'All',  selector: '' },
          { label: '1W',   selector: 'Is 1w' },
          { label: '1M',   selector: 'Is 1m' },
          { label: '3M',   selector: 'Is 3m' },
          { label: 'YTD',  selector: 'Is Ytd' },
          { label: '1Y',   selector: 'Is 1y' },
        ],
        col1: 'Label', col2: 'MSTR selector name (empty = All)',
      },
      { key: 'defaultLabel',  label: 'Default active',     type: 'text', default: 'All' },
      { key: 'storageKey',    label: 'localStorage key',   type: 'text', default: 'mstr_timesel_value' },
    ]},
    { name: 'Appearance', open: true, fields: [
      { key: 'activeColor',   label: 'Active color',   type: 'color', default: '#e20074' },
      { key: 'inactiveColor', label: 'Inactive color', type: 'color', default: '#999999' },
      { key: 'hoverColor',    label: 'Hover color',    type: 'color', default: '#ffffff' },
      { key: 'fontSize',      label: 'Font size',      type: 'text',  default: '12px' },
      { key: 'fontFamily',    label: 'Font family',    type: 'text',  default: 'Arial, sans-serif' },
      { key: 'gap',           label: 'Gap between buttons', type: 'text', default: '16px' },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    const btns = c.buttons || [];
    const allSelectors = btns.filter(b => b.selector).map(b => JSON.stringify(b.selector));
    const btnsDef = btns.map(b => `    { label: ${JSON.stringify(b.label)}, selector: ${b.selector ? JSON.stringify(b.selector) : 'null'} }`).join(',\n');
    return `<div id="ts-root-INSTANCE">
  <div class="ts-wrap-INSTANCE" id="ts-buttons-INSTANCE"></div>
</div>
<script>
(function() {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  /* [INPUT] Button definitions — label: displayed text; selector: MSTR attribute value (empty/null = All) */
  var BUTTONS = [
${btnsDef}
  ];
  /* [INPUT] All non-All selector values — used to reset filters when "All" is selected */
  var ALL_SELECTORS    = [${allSelectors.join(', ')}];
  /* [INPUT] Label of button active on first load */
  var DEFAULT_LABEL    = ${JSON.stringify(c.defaultLabel)};
  var STORAGE_KEY      = ${JSON.stringify(c.storageKey)};
  var INIT_DELAY_MS    = 1500;
  var WAIT_POLL_MS     = 300;
  var WAIT_TIMEOUT_MS  = 10000;
  /* ═══════════════════════════════════════════════════════════════ */
  var busy = false;
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.createElement('style'); styleEl.id = 'ts-style-' + uid; styleEl.textContent = ['.ts-wrap-' + uid + '{display:flex;align-items:center;justify-content:flex-end;gap:${c.gap};padding:4px 0;font-family:${c.fontFamily};font-size:${c.fontSize};}', '.ts-btn-' + uid + '{padding:4px 2px 6px;border:none;border-bottom:2px solid transparent;background:none;color:${c.inactiveColor};cursor:pointer;transition:color 0.15s,border-color 0.15s;user-select:none;letter-spacing:0.3px;}', '.ts-btn-' + uid + ':hover{color:${c.hoverColor};}', '.ts-btn-' + uid + '.ts-active-' + uid + '{color:${c.activeColor};border-bottom-color:${c.activeColor};}', '.ts-btn-' + uid + '.ts-busy-' + uid + '{opacity:0.4;pointer-events:none;}'].join(''); document.head.appendChild(styleEl);
  var rootEl = document.querySelector('[id="ts-root-INSTANCE"]:not([data-ts-claimed])'); if (rootEl) { rootEl.setAttribute('data-ts-claimed', '1'); rootEl.id = 'ts-root-' + uid; }
  var btnBar = document.querySelector('[id="ts-buttons-INSTANCE"]:not([data-ts-claimed])'); if (btnBar) { btnBar.setAttribute('data-ts-claimed', '1'); btnBar.id = 'ts-buttons-' + uid; btnBar.className = btnBar.className.split('INSTANCE').join(uid); }
  BUTTONS.forEach(function(def) { var btn = document.createElement('div'); btn.className = 'ts-btn-' + uid; btn.textContent = def.label; btn.setAttribute('data-label', def.label); btnBar.appendChild(btn); });
  btnBar.addEventListener('click', function(e) { var btn = e.target.closest('[data-label]'); if (!btn || busy) return; applySelection(btn.getAttribute('data-label')); });
  function applySelection(label) {
    setActiveButton(label); saveValue(label);
    var btnDef = null; for (var i = 0; i < BUTTONS.length; i++) { if (BUTTONS[i].label === label) { btnDef = BUTTONS[i]; break; } }
    if (!btnDef) return;
    var desiredState = {}; ALL_SELECTORS.forEach(function(selName) { desiredState[selName] = btnDef.selector === null ? '(All)' : (selName === btnDef.selector ? '1' : '(All)'); });
    var changes = []; ALL_SELECTORS.forEach(function(selName) { var current = readMstrSelectorValue(selName); var desired = desiredState[selName]; if (current === null) return; if (current !== desired) changes.push({ selector: selName, value: desired }); });
    if (changes.length === 0) return;
    changes.sort(function(a, b) { if (a.value === '1' && b.value !== '1') return -1; if (a.value !== '1' && b.value === '1') return 1; return 0; });
    setBusy(true); executeSequential(changes, 0);
  }
  function executeSequential(changes, index) { if (index >= changes.length) { setBusy(false); return; } var change = changes[index]; clickMstrSelector(change.selector, change.value); if (index + 1 < changes.length) { waitForIdle(function() { executeSequential(changes, index + 1); }); } else { setTimeout(function() { setBusy(false); }, 500); } }
  function setBusy(state) { busy = state; var allBtns = btnBar.querySelectorAll('[data-label]'); for (var i = 0; i < allBtns.length; i++) { if (state) { allBtns[i].classList.add('ts-busy-' + uid); } else { allBtns[i].classList.remove('ts-busy-' + uid); } } }
  function waitForIdle(cb) { var started = Date.now(); setTimeout(function poll() { if (Date.now() - started > WAIT_TIMEOUT_MS) { cb(); return; } isMstrLoading() ? setTimeout(poll, WAIT_POLL_MS) : setTimeout(cb, 300); }, 800); }
  function isMstrLoading() { var ind = document.querySelectorAll('[class*="loading"],[class*="Loading"],[class*="spinner"],[class*="Spinner"],[class*="progress"],[class*="Progress"],[class*="wait"],[class*="Wait"],.mstrmojo-LoadingDialog,.mstrmojo-WaitBox,[class*="mstrmojo"][class*="load"]'); for (var i = 0; i < ind.length; i++) { if (ind[i].offsetParent !== null || ind[i].offsetWidth > 0 || ind[i].offsetHeight > 0) return true; } return false; }
  function setActiveButton(label) { var allBtns = btnBar.querySelectorAll('[data-label]'); for (var i = 0; i < allBtns.length; i++) { var isA = allBtns[i].getAttribute('data-label') === label; allBtns[i].className = 'ts-btn-' + uid + (isA ? ' ts-active-' + uid : ''); } }
  function saveValue(label) { try { localStorage.setItem(STORAGE_KEY, label); } catch(e) {} }
  function readMstrSelectorValue(selectorName) { var c = findMstrContainer(selectorName); if (!c) return null; var items = c.querySelectorAll('[role="radio"],[role="checkbox"]'); for (var i = 0; i < items.length; i++) { if (items[i].getAttribute('aria-checked') === 'true') return items[i].innerText.trim(); } return null; }
  function clickMstrSelector(selectorName, value) { try { var c = findMstrContainer(selectorName); if (!c) return false; var items = c.querySelectorAll('[role="radio"],[role="checkbox"],[role="option"]'); var target = null; for (var i = 0; i < items.length; i++) { if (items[i].innerText.trim() === value) target = items[i]; } if (target) { simulateClick(target); return true; } return false; } catch(e) { return false; } }
  function findMstrContainer(name) { var cands = document.querySelectorAll('[class*="title"],[class*="Title"],[class*="label"],[class*="Label"],[class*="titlebar"],[class*="Titlebar"]'); var matched = null; for (var i = 0; i < cands.length; i++) { if (cands[i].innerText.trim() === name) matched = cands[i]; } if (!matched) { var all = document.querySelectorAll('*'); for (var j = 0; j < all.length; j++) { if (all[j].children.length < 3 && all[j].innerText.trim() === name) matched = all[j]; } } if (!matched) return null; var el = matched; var maxUp = 15; while (el && maxUp-- > 0) { if (el.querySelector && el.querySelector('[role="radio"],[role="checkbox"],[role="option"]')) return el; el = el.parentElement; } return null; }
  function simulateClick(el) { ['mousedown','mouseup','click'].forEach(function(t) { el.dispatchEvent(new MouseEvent(t, { bubbles:true, cancelable:true, view:window })); }); }
  function loadSavedValue() { try { return localStorage.getItem(STORAGE_KEY); } catch(err) { return null; } }
  setTimeout(function() { var saved = loadSavedValue(); var validLabels = BUTTONS.map(function(b) { return b.label; }); var initLabel = (saved && validLabels.indexOf(saved) >= 0) ? saved : DEFAULT_LABEL; applySelection(initLabel); }, INIT_DELAY_MS);
})();
<\/script>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 7. PANEL SELECTOR
// ══════════════════════════════════════════════════════════════
{
  id: 'panel-selector',
  name: 'Panel Selector',
  hasPreview: true,
  effectDescription: 'Replaces the native MSTR Panel Selector with custom styled tabs aligned to the right. Clicking a tab finds the corresponding native button in the DOM and simulates a click — MSTR switches the Panel Stack. A MutationObserver keeps tab state in sync when switching occurs externally (bookmarks, URL).',
  groups: [
    { name: 'Panels', open: true, fields: [
      { key: 'panels', label: 'Panels', type: 'array-panels',
        default: [
          { label: 'Total Users',     selector: 'Total Users' },
          { label: 'Duration',        selector: 'Duration' },
          { label: 'Duration Median', selector: 'Duration Median' },
        ],
        col1: 'MSTR Panel Name', col2: 'Button Label', colSwap: true,
      },
      { key: 'defaultPanel', label: 'Default panel index', type: 'number', default: 0, min: 0 },
    ]},
    { name: 'Appearance', open: true, fields: [
      { key: 'activeColor',   label: 'Active tab color',    type: 'color', default: '#e20074' },
      { key: 'inactiveColor', label: 'Inactive tab color',  type: 'color', default: '#888888' },
      { key: 'hoverColor',    label: 'Tab hover color',     type: 'color', default: '#cccccc' },
      { key: 'separatorColor',label: 'Separator line color', type: 'color', default: '#35383A' },
      { key: 'fontSize',      label: 'Font size',           type: 'text',  default: '13px' },
      { key: 'fontFamily',    label: 'Font family',         type: 'text',  default: "'Segoe UI', Arial, sans-serif" },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    const panels = c.panels || [];
    const panelsDef = panels.map(p => `    { native: ${JSON.stringify(p.selector)}, label: ${JSON.stringify(p.label)} }`).join(',\n');
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="style-INSTANCE">
  .INSTANCE-bar { position:relative; width:100%; box-sizing:border-box; display:flex; align-items:center; overflow:hidden; background:transparent; font-family:${c.fontFamily}; }
  .INSTANCE-tabs { position:relative; display:flex; gap:0; margin-left:auto; }
  .INSTANCE-tabs::before { content:''; position:absolute; bottom:0; right:10px; left:-9999px; height:1px; background:${c.separatorColor}; }
  .INSTANCE-tab { position:relative; padding:6px 20px 8px 20px; font-size:${c.fontSize}; font-weight:400; letter-spacing:0.5px; color:${c.inactiveColor}; cursor:pointer; user-select:none; white-space:nowrap; transition:color 0.2s ease; text-transform:uppercase; }
  .INSTANCE-tab::after { content:''; position:absolute; bottom:0; left:10px; right:10px; height:1px; background:${c.activeColor}; opacity:0; transition:opacity 0.25s ease; }
  .INSTANCE-tab.INSTANCE-active { color:#fff; font-weight:700; }
  .INSTANCE-tab.INSTANCE-active::after { opacity:1; }
  .INSTANCE-tab:not(.INSTANCE-active):hover { color:${c.hoverColor}; }
</style>
</head>
<body>
<div class="INSTANCE-bar">
  <div class="INSTANCE-tabs" id="tabs-INSTANCE"></div>
</div>
<script>
(function() {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  /* [INPUT] Panel definitions — native: exact MSTR Panel name; label: button text */
  var PANELS = [
${panelsDef}
  ];
  /* [INPUT] Index of the panel active on first load (0 = first) */
  var DEFAULT_PANEL = ${c.defaultPanel};
  /* ═══════════════════════════════════════════════════════════════ */
  var MAX_RETRIES = 15; var RETRY_MS = 500;
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('style-INSTANCE'); if (styleEl) { styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }
  var allEls = document.querySelectorAll('[class*="INSTANCE"]'); for (var i = 0; i < allEls.length; i++) { allEls[i].className = allEls[i].className.split('INSTANCE').join(uid); }
  var tabsContainer = document.getElementById('tabs-INSTANCE'); if (tabsContainer) tabsContainer.id = 'tabs-' + uid;
  var tabs = document.getElementById('tabs-' + uid); var tabElements = [];
  PANELS.forEach(function(panel, idx) { var tab = document.createElement('div'); tab.className = uid + '-tab'; tab.textContent = panel.label; if (idx === DEFAULT_PANEL) tab.className += ' ' + uid + '-active'; tab.addEventListener('click', function() { onTabClick(idx); }); tabs.appendChild(tab); tabElements.push(tab); });
  function onTabClick(idx) { setActiveTab(idx); clickNativeButton(PANELS[idx].native); }
  function setActiveTab(idx) { var activeCls = uid + '-active'; tabElements.forEach(function(el, i) { if (i === idx) { if (el.className.indexOf(activeCls) === -1) el.className += ' ' + activeCls; } else { el.className = el.className.split(' ' + activeCls).join('').split(activeCls).join(''); } }); }
  function findNativeButton(name) { var all = Array.from(document.querySelectorAll('div.item.equal-width')); var matches = all.filter(function(el) { return el.textContent.trim().toLowerCase() === name.toLowerCase(); }); return matches.length > 0 ? matches[matches.length - 1] : null; }
  function clickNativeButton(name) { var btn = findNativeButton(name); if (!btn) return; ['mousedown','mouseup','click'].forEach(function(evtType) { btn.dispatchEvent(new MouseEvent(evtType, { bubbles:true, cancelable:true, view:window })); }); }
  function syncFromNative() { var observer = new MutationObserver(function(mutations) { mutations.forEach(function(m) { if (m.type !== 'attributes' || m.attributeName !== 'class') return; var hadSelected = (m.oldValue || '').split(' ').indexOf('selected') !== -1; if (hadSelected) return; var el = m.target; if (el.tagName !== 'DIV') return; var cls = el.classList; if (!cls.contains('item') || !cls.contains('equal-width') || !cls.contains('selected')) return; var name = el.textContent.trim().toLowerCase(); PANELS.forEach(function(panel, idx) { if (panel.native.toLowerCase() === name) setActiveTab(idx); }); }); }); observer.observe(document.documentElement, { subtree:true, attributes:true, attributeFilter:['class'], attributeOldValue:true }); }
  var retries = 0;
  function init() { var firstBtn = findNativeButton(PANELS[0].native); if (!firstBtn && retries < MAX_RETRIES) { retries++; setTimeout(init, RETRY_MS); return; } PANELS.forEach(function(panel, idx) { var btn = findNativeButton(panel.native); if (btn && btn.classList.contains('selected')) setActiveTab(idx); }); syncFromNative(); }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 800); }); } else { setTimeout(init, 800); }
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 8. HOVER OVERRIDE
// ══════════════════════════════════════════════════════════════
{
  id: 'hover-override',
  name: 'Hover Override',
  hasPreview: false,
  effectDescription: 'CSS override for MSTR grid (Xtab) elements. Removes the default white/coloured cell highlight on hover and replaces it with a subtle text-shadow glow effect. Scoped to visualizations whose MSTR name starts with the configured prefix (default "KPI:") — all other grids are unaffected. Charts and HTML containers are never affected.',
  groups: [
    { name: 'Scope', open: true, fields: [
      { key: 'kpiPrefix', label: 'Grid name prefix (MSTR viz name must start with this)', type: 'text', default: 'KPI:' },
    ]},
    { name: 'Glow effect', open: true, fields: [
      { key: 'glowColorOuter', label: 'Glow color',              type: 'color',  default: '#ffffff' },
      { key: 'glowAlpha1',     label: 'Glow opacity 1 (0–1)',    type: 'number', default: 0.5, min: 0, max: 1, step: 0.05 },
      { key: 'glowAlpha2',     label: 'Glow opacity 2 (0–1)',    type: 'number', default: 0.15, min: 0, max: 1, step: 0.05 },
      { key: 'glowRadius1',    label: 'Glow radius 1 (px)',      type: 'number', default: 8, min: 0, max: 40 },
      { key: 'glowRadius2',    label: 'Glow radius 2 (px)',      type: 'number', default: 20, min: 0, max: 80 },
      { key: 'disableGlow',    label: 'Disable glow (remove highlight only)', type: 'boolean', default: false },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    const uid = 'INSTANCE';
    const p = c.kpiPrefix;
    const glowRule = c.disableGlow ? '' : `
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox[aria-label^="${p}"]:hover td.xtab-td {
    text-shadow: 0 0 ${c.glowRadius1}px rgba(255,255,255,${c.glowAlpha1}),
                 0 0 ${c.glowRadius2}px rgba(255,255,255,${c.glowAlpha2}) !important;
    transition: text-shadow 0.3s ease !important;
  }`;
    return `<!--
  MSTR HTML Container: Grid Hover Override
  SCOPE: targets MSTR grids whose aria-label starts with "${p}".
  To retarget after pasting, update the [aria-label^="..."] prefix in every CSS selector below.
-->
<div id="hover-override-${uid}">
  <div id="hover-info-${uid}">
    <b>Grid Hover Override</b><br>
    Removes MSTR default hover highlight and adds a text glow on grids whose MSTR name starts with "${p}".
  </div>
</div>
<style id="hover-style-${uid}">
  #hover-info-${uid} { font-family:'Segoe UI',Tahoma,sans-serif; font-size:10px; color:#8899aa; line-height:1.5; padding:6px 8px; border-left:2px solid #4A9EBF; margin:2px 0; background:rgba(74,158,191,0.05); border-radius:0 3px 3px 0; }
  #hover-info-${uid} b { color:#4A9EBF; }
  .mstrmojo-VIBox[aria-label^="${p}"] td.xtab-td:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-VIBox[aria-label^="${p}"] .mstrmojo-XtabZone:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-VIBox[aria-label^="${p}"] .mstrmojo-Xtab:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-VIBox[aria-label^="${p}"] .mstrmojo-Xtab-content:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-VIBox[aria-label^="${p}"] .mstrmojo-Xtab .mstrmojo-scrollNode:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox[aria-label^="${p}"]:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox[aria-label^="${p}"]:hover > .mstrmojo-UnitContainer-SplitterHost { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox[aria-label^="${p}"]:hover .mstrmojo-UnitContainer-ContentBox { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox[aria-label^="${p}"]:hover .mstrmojo-UnitContainer-content { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-VIBox[aria-label^="${p}"] .mstrmojo-UnitContainer-titlebar:hover { background-color:transparent !important; background:transparent !important; }${glowRule}
</style>
<script>
(function() {
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('hover-style-${uid}');
  if (styleEl) { styleEl.id = styleEl.id.split('${uid}').join(uid); styleEl.textContent = styleEl.textContent.split('${uid}').join(uid); }
  var root = document.getElementById('hover-override-${uid}');
  if (root) { var allEls = root.querySelectorAll('*'); for (var i = 0; i < allEls.length; i++) { if (allEls[i].id) allEls[i].id = allEls[i].id.split('${uid}').join(uid); } root.id = root.id.split('${uid}').join(uid); }
})();
<\/script>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 9. SELECTOR RESTYLER
// ══════════════════════════════════════════════════════════════
{
  id: 'selector-restyler',
  name: 'Selector Restyler',
  hasPreview: false,
  effectDescription: 'Overrides MSTR DocSelector (filter) CSS for a dark dashboard. Restyled: search box, checkboxes (SVG sprite → CSS boxes), and search result highlighting. Only affects selectors inside the dashboard area (.mstrmojo-FilterBox); the filter side-panel is not touched.',
  groups: [
    { name: 'Colors', open: true, fields: [
      { key: 'searchBoxBg',        label: 'Search box background',  type: 'color', default: '#313131' },
      { key: 'searchBoxBorder',    label: 'Search box border',       type: 'color', default: '#35383A' },
      { key: 'checkboxBg',         label: 'Checkbox background',     type: 'color', default: '#313131' },
      { key: 'checkboxBorder',     label: 'Checkbox border',         type: 'color', default: '#35383A' },
      { key: 'checkboxCheckedBg',  label: 'Checked checkbox fill',   type: 'color', default: '#4A9EBF' },
      { key: 'checkboxHoverBorder',label: 'Checkbox hover border',   type: 'color', default: '#505456' },
      { key: 'searchHighlight',    label: 'Search highlight color',  type: 'color', default: '#E0A030' },
      { key: 'inputTextColor',     label: 'Input text color',        type: 'color', default: '#FFFFFF' },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    return `<!--
  MSTR HTML Container: Selector Restyler
  Overrides MSTR DocSelector styling to match dark dashboard theme.
  Colors are baked in at generation time — use the web configurator to regenerate with different values.
-->
<div id="selectorRestylerDoc_INSTANCE" style="background:#141C28;color:#8A95A5;font-family:Consolas,monospace;font-size:10px;padding:8px 10px;line-height:1.5;border-radius:4px;border:1px solid #2A3A50;">
<strong style="color:#E0E0E0;font-size:11px;">SELECTOR RESTYLER</strong><br><br>
<strong style="color:#BCBCBC;">WHAT:</strong> Overrides MSTR DocSelector styling to match dark dashboard theme.<br>
<strong style="color:#BCBCBC;">SCOPE:</strong> Only affects DocSelectors inside .mstrmojo-FilterBox.
</div>
<script>
(function() {
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var STYLE_ID = 'selectorRestyler_style_' + uid;
  var M = 'jk-dash-selector';
  var docPanel = document.getElementById('selectorRestylerDoc_INSTANCE');
  if (docPanel) docPanel.id = 'selectorRestylerDoc_' + uid;
  var ITEM      = '.' + M + ' div.item[role="checkbox"] > span.icon, .' + M + ' div.item:not([role]) > span.icon';
  var ITEM_SEL  = '.' + M + ' div.item.selected[role="checkbox"] > span.icon, .' + M + ' div.item.selected:not([role]) > span.icon';
  var ITEM_HOV  = '.' + M + ' div.item[role="checkbox"]:hover > span.icon, .' + M + ' div.item:not([role]):hover > span.icon';
  var css = [
    '.' + M + ' .mstrmojo-ui-SearchBox { background-color:${c.searchBoxBg} !important; border:1px solid ${c.searchBoxBorder} !important; border-radius:3px !important; }',
    '.' + M + ' .mstrmojo-ui-sb-input { color:${c.inputTextColor} !important; caret-color:${c.inputTextColor} !important; }',
    '.' + M + ' .mstrmojo-ui-sb-input::placeholder { color:#7A7D80 !important; opacity:1 !important; }',
    '.' + M + ' .mstrmojo-ui-sb-btn { opacity:0.6 !important; }',
    ITEM + ' { background-image:none !important; background-color:${c.checkboxBg} !important; border:2px solid ${c.checkboxBorder} !important; border-radius:3px !important; width:14px !important; height:14px !important; display:inline-block !important; vertical-align:middle !important; position:relative !important; box-sizing:border-box !important; }',
    ITEM_SEL + ' { background-color:${c.checkboxCheckedBg} !important; border-color:${c.checkboxCheckedBg} !important; }',
    '.' + M + ' div.item.selected[role="checkbox"] > span.icon::after, .' + M + ' div.item.selected:not([role]) > span.icon::after { content:"" !important; position:absolute !important; left:2px !important; top:-3px !important; width:5px !important; height:9px !important; border:solid #FFFFFF !important; border-width:0 2px 2px 0 !important; transform:rotate(45deg) !important; display:block !important; }',
    ITEM_HOV + ' { border-color:${c.checkboxHoverBorder} !important; }',
    '.' + M + ' div.item span.text em { background-color:transparent !important; background:transparent !important; color:${c.searchHighlight} !important; font-style:normal !important; text-decoration:none !important; }',
  ].join('\\n');
  function markDashboardSelectors() { var selectors = document.querySelectorAll('.mstrmojo-DocSelector'); selectors.forEach(function(el) { if (el.classList.contains(M)) return; if (el.closest('.mstrmojo-FilterBox')) el.classList.add(M); }); }
  function injectCSS(doc) { if (doc.getElementById(STYLE_ID)) return; var tag = doc.createElement('style'); tag.id = STYLE_ID; tag.type = 'text/css'; tag.textContent = css; doc.head.appendChild(tag); }
  function injectToAllFrames() { injectCSS(document); try { if (window.parent && window.parent.document !== document) injectCSS(window.parent.document); } catch(e) {} try { if (window.top && window.top.document !== document) injectCSS(window.top.document); } catch(e) {} }
  function init() { injectToAllFrames(); markDashboardSelectors(); }
  init(); setTimeout(init, 1000); setTimeout(init, 2000); setTimeout(init, 4000);
  var debounceTimer = null;
  var observer = new MutationObserver(function() { if (debounceTimer) clearTimeout(debounceTimer); debounceTimer = setTimeout(markDashboardSelectors, 100); });
  observer.observe(document.body, { childList:true, subtree:true });
  setInterval(markDashboardSelectors, 2000);
})();
<\/script>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 10. AUTOMATIC INFO OVERLAY
// ══════════════════════════════════════════════════════════════
{
  id: 'auto-info-overlay',
  name: 'Automatic Info Overlay',
  hasPreview: false,
  effectDescription: 'Automatic animation when navigating to a specific dashboard page: shows a dark overlay with cutouts around KPI boxes and informational popups. First show: cutouts + popups; second show: cutouts only. Clicking anywhere closes the animation. The container must be named KPI_OVERLAY and positioned at X:0 Y:0 W:100 H:100.',
  groups: [
    { name: 'Basic', open: true, fields: [
      { key: 'mode',               label: 'Mode', type: 'select', default: 'informal', options: [{v:'informal',l:'Informal (popups on 1st show)'},{v:'standard',l:'Standard (cutouts only, no popups)'}] },
      { key: 'triggerPageId',      label: 'MSTR page ID (trigger)',  type: 'text',   default: 'W55F213CB2D2A4A40A2AEE585EDC76A10--K46' },
      { key: 'containerAriaLabel', label: 'Container aria-label',    type: 'text',   default: 'KPI_OVERLAY' },
      { key: 'maxShowsPerSession', label: 'Max shows per session',   type: 'number', default: 2, min: 1, max: 10 },
    ]},
    { name: 'KPI objects', open: true, fields: [
      { key: 'kpiConfigs', label: 'KPI entries', type: 'array-kpi',
        default: [
          { name: 'Total User Linear TV',  title: 'Linear TV — Total Users',       info: 'Unique users who watched Linear TV in the selected period.' },
          { name: 'Total User Live TV',    title: 'Live TV — Total Users',          info: 'Unique users who watched Live TV.' },
          { name: 'Total User IR',         title: 'Instant Restart — Total Users',  info: 'Unique users who used the Instant Restart feature.' },
          { name: 'Total User TS',         title: 'Timeshift — Total Users',        info: 'Unique users who watched time-shifted content.' },
          { name: 'Total User Rec',        title: 'Recordings — Total Users',       info: 'Unique users who played back personal recordings.' },
          { name: 'Duration Median',       title: 'Median Duration per User',       info: 'The middle value of total viewing duration across all users.' },
        ],
        col1: 'MSTR aria-label', col2: 'Popup title', col3: 'Popup text',
      },
    ]},
    { name: 'Overlay appearance', open: false, fields: [
      { key: 'dimColor',      label: 'Overlay color',        type: 'color',  default: '#06080e' },
      { key: 'dimAlpha',      label: 'Overlay opacity',      type: 'number', default: 0.68, min: 0, max: 1, step: 0.05 },
      { key: 'cutoutPadding', label: 'Cutout padding (px)',  type: 'number', default: 6, min: 0, max: 30 },
      { key: 'edgeBlur',      label: 'Edge blur (px)',       type: 'number', default: 10, min: 0, max: 40 },
      { key: 'cornerR',       label: 'Cutout corner radius (px)', type: 'number', default: 6, min: 0, max: 20 },
    ]},
    { name: 'Timing (ms)', open: false, fields: [
      { key: 'initDelay',      label: 'Startup delay',        type: 'number', default: 2000 },
      { key: 'dimFadeIn',      label: 'Overlay fade-in',      type: 'number', default: 600 },
      { key: 'cutoutStagger',  label: 'Cutout stagger delay', type: 'number', default: 350 },
      { key: 'allVisibleHold', label: 'Hold duration',        type: 'number', default: 900 },
      { key: 'finalFadeOut',   label: 'Overlay fade-out',     type: 'number', default: 700 },
    ]},
  ],
  mstrVars: [],
  generateCode(c) {
    const kpiConfigs = (c.kpiConfigs || []).map(k =>
      `  { name: ${JSON.stringify(k.name)}, title: ${JSON.stringify(k.title)}, info: ${JSON.stringify(k.info)} }`
    ).join(',\n');
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden; background:transparent; }
</style>
</head>
<body>
<script>
/* ═══════════════════════════════════════════════════════════════
   CONFIGURATION — edit values below
   ═══════════════════════════════════════════════════════════════ */
const MODE = ${JSON.stringify(c.mode)};
/* [INPUT][DATA] KPI objects — name: exact MSTR aria-label; title/info: popup content */
const KPI_CONFIG = [
${kpiConfigs}
];
const CUTOUT_PADDING = ${c.cutoutPadding};
const EDGE_BLUR      = ${c.edgeBlur};
const CORNER_R       = ${c.cornerR};
const DIM_COLOR      = 'rgba(${parseInt(c.dimColor.slice(1,3),16)},${parseInt(c.dimColor.slice(3,5),16)},${parseInt(c.dimColor.slice(5,7),16)},${c.dimAlpha})';
const POPUP_WIDTH        = 220;
const POPUP_MARGIN       = 16;
const POPUP_CORNER_R     = 8;
const POPUP_ACCENT_H     = 3;
const POPUP_ACCENT_COLOR = 'rgba(255,255,255,0.55)';
const POPUP_BG           = 'rgba(255,255,255,0.13)';
const POPUP_BORDER       = 'rgba(255,255,255,0.28)';
const POPUP_TITLE_COLOR  = 'rgba(255,255,255,0.97)';
const POPUP_TEXT_COLOR   = 'rgba(255,255,255,0.75)';
const LINE_COLOR = 'rgba(255,255,255,0.25)';
const LINE_WIDTH = 1;
const LINE_DOT_R = 3;
const TIMING = {
  initDelay: ${c.initDelay}, dimFadeIn: ${c.dimFadeIn}, dimHold: 200,
  cutoutStagger: ${c.cutoutStagger}, popupDelay: 120, allVisibleHold: ${c.allVisibleHold},
  dismissStagger: 220, finalFadeOut: ${c.finalFadeOut},
};
const CONTAINER_ARIA_LABEL = ${JSON.stringify(c.containerAriaLabel)};
const Z_FRONT              = 99990;
const TRIGGER_PAGE_ID      = ${JSON.stringify(c.triggerPageId)};
const URL_POLL_MS          = 300;
const MAX_SHOWS_PER_SESSION = ${c.maxShowsPerSession};
/* ═══════════════════════════════════════════════════════════════ */

// ── State ────────────────────────────────────────────────────
let _canvas = null, _svg = null, _skipLabel = null, _popups = [];
let _cycleActive = false, _lastTriggeredPath = '', _showCount = 0;

// ── DOM helpers ──────────────────────────────────────────────
function getObjectRect(name) {
  const candidates = document.querySelectorAll('[aria-label="' + name + '"]');
  if (!candidates.length) return null;
  const el = candidates[candidates.length - 1];
  const r = el.getBoundingClientRect();
  return (r.width > 0 || r.height > 0) ? r : null;
}
function getContainerEl() {
  const cands = document.querySelectorAll('[aria-label="' + CONTAINER_ARIA_LABEL + '"]');
  return cands.length ? cands[cands.length - 1] : null;
}

// ── Canvas & SVG layer ───────────────────────────────────────
function ensureLayers() {
  if (!_canvas) {
    _canvas = document.createElement('canvas');
    Object.assign(_canvas.style, { position:'fixed', top:0, left:0, pointerEvents:'none', opacity:0, zIndex: Z_FRONT, transition:'opacity ' + TIMING.dimFadeIn + 'ms ease' });
    document.body.appendChild(_canvas);
  }
  if (!_svg) {
    _svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    Object.assign(_svg.style, { position:'fixed', top:0, left:0, pointerEvents:'none', opacity:0, zIndex: Z_FRONT + 1 });
    document.body.appendChild(_svg);
  }
}

function resizeLayers() {
  const W = window.innerWidth, H = window.innerHeight;
  _canvas.width = W; _canvas.height = H;
  _canvas.style.width = W + 'px'; _canvas.style.height = H + 'px';
  _svg.setAttribute('width', W); _svg.setAttribute('height', H);
}

function paintDim(cutouts) {
  const W = window.innerWidth, H = window.innerHeight;
  const ctx = _canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = DIM_COLOR;
  ctx.fillRect(0, 0, W, H);
  cutouts.forEach(function(r) {
    if (!r) return;
    const p = CUTOUT_PADDING, bl = EDGE_BLUR, cr = CORNER_R;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    if (bl > 0) { ctx.filter = 'blur(' + bl + 'px)'; }
    ctx.beginPath();
    const x = r.left - p, y = r.top - p, w = r.width + p*2, h = r.height + p*2;
    ctx.moveTo(x + cr, y); ctx.lineTo(x + w - cr, y); ctx.quadraticCurveTo(x+w, y, x+w, y+cr);
    ctx.lineTo(x+w, y+h-cr); ctx.quadraticCurveTo(x+w, y+h, x+w-cr, y+h);
    ctx.lineTo(x+cr, y+h); ctx.quadraticCurveTo(x, y+h, x, y+h-cr);
    ctx.lineTo(x, y+cr); ctx.quadraticCurveTo(x, y, x+cr, y);
    ctx.closePath(); ctx.fill(); ctx.restore();
  });
}

// ── Popups ───────────────────────────────────────────────────
function createPopup(kpiRect, cfg) {
  if (!cfg.title && !cfg.info) return null;
  const popup = document.createElement('div');
  const W = window.innerWidth;
  let left = kpiRect.right + CUTOUT_PADDING + POPUP_MARGIN;
  if (left + POPUP_WIDTH > W - 10) left = kpiRect.left - CUTOUT_PADDING - POPUP_MARGIN - POPUP_WIDTH;
  const top = kpiRect.top + CUTOUT_PADDING;
  Object.assign(popup.style, { position:'fixed', left: left+'px', top: top+'px', width: POPUP_WIDTH+'px', background: POPUP_BG, border: '1px solid ' + POPUP_BORDER, borderRadius: POPUP_CORNER_R+'px', padding:'14px 14px 12px', boxSizing:'border-box', fontFamily:'Segoe UI,Arial,sans-serif', zIndex: Z_FRONT+2, opacity:0, transition:'opacity 0.25s ease', overflow:'hidden', backdropFilter:'blur(4px)' });
  const accent = document.createElement('div');
  Object.assign(accent.style, { position:'absolute', top:0, left:0, right:0, height: POPUP_ACCENT_H+'px', background: POPUP_ACCENT_COLOR, borderRadius: POPUP_CORNER_R+'px ' + POPUP_CORNER_R+'px 0 0' });
  popup.appendChild(accent);
  if (cfg.title) {
    const titleEl = document.createElement('div');
    titleEl.textContent = cfg.title;
    Object.assign(titleEl.style, { fontSize:'13px', fontWeight:'700', color: POPUP_TITLE_COLOR, marginBottom:'8px', paddingTop: POPUP_ACCENT_H+'px' });
    popup.appendChild(titleEl);
  }
  if (cfg.info) {
    const infoEl = document.createElement('div');
    infoEl.textContent = cfg.info;
    Object.assign(infoEl.style, { fontSize:'12px', color: POPUP_TEXT_COLOR, lineHeight:'1.5' });
    popup.appendChild(infoEl);
  }
  document.body.appendChild(popup);
  return popup;
}

function removePopups() {
  _popups.forEach(function(p) { if (p && p.parentNode) p.parentNode.removeChild(p); });
  _popups = [];
  _svg.innerHTML = '';
}

// ── Skip label ───────────────────────────────────────────────
function showSkipLabel() {
  if (!_skipLabel) {
    _skipLabel = document.createElement('div');
    Object.assign(_skipLabel.style, { position:'fixed', bottom:'24px', left:'50%', transform:'translateX(-50%)', background:'rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.7)', fontFamily:'Segoe UI,Arial,sans-serif', fontSize:'12px', padding:'6px 18px', borderRadius:'20px', border:'1px solid rgba(255,255,255,0.2)', zIndex: Z_FRONT+3, cursor:'pointer', userSelect:'none' });
    _skipLabel.textContent = 'Click to dismiss';
    document.body.appendChild(_skipLabel);
  }
  _skipLabel.style.opacity = '1';
}
function hideSkipLabel() { if (_skipLabel) _skipLabel.style.opacity = '0'; }

// ── Main animation ───────────────────────────────────────────
function runCycle() {
  if (_cycleActive || _showCount >= MAX_SHOWS_PER_SESSION) return;
  _cycleActive = true; _showCount++;
  ensureLayers(); resizeLayers();
  const showPopups = (MODE === 'informal' && _showCount === 1);
  const rects = KPI_CONFIG.map(function(k) { return getObjectRect(k.name); });
  const containerEl = getContainerEl();
  if (containerEl) { containerEl.style.zIndex = Z_FRONT - 1; containerEl.style.position = 'relative'; }
  document.addEventListener('click', dismissOnClick);
  paintDim([]);
  setTimeout(function() {
    _canvas.style.opacity = '1'; _svg.style.opacity = '1';
    if (showPopups) showSkipLabel();
    let delay = TIMING.dimHold;
    KPI_CONFIG.forEach(function(kpi, i) {
      setTimeout(function() {
        paintDim(rects.slice(0, i+1));
        if (showPopups && rects[i]) {
          setTimeout(function() {
            const p = createPopup(rects[i], kpi);
            _popups.push(p);
            if (p) requestAnimationFrame(function() { p.style.opacity = '1'; });
          }, TIMING.popupDelay);
        }
      }, delay);
      delay += TIMING.cutoutStagger;
    });
    setTimeout(function() {
      if (!showPopups) { dismissAnimation(); }
    }, delay + TIMING.allVisibleHold);
  }, TIMING.dimFadeIn);
}

function dismissAnimation() {
  hideSkipLabel();
  document.removeEventListener('click', dismissOnClick);
  removePopups();
  _canvas.style.opacity = '0'; _svg.style.opacity = '0';
  setTimeout(function() {
    _canvas.style.cssText = _canvas.style.cssText;
    paintDim([]);
    _cycleActive = false;
  }, TIMING.finalFadeOut);
}

function dismissOnClick() { dismissAnimation(); }

// ── URL polling ───────────────────────────────────────────────
function checkUrl() {
  const path = location.href;
  if (path.includes(TRIGGER_PAGE_ID) && path !== _lastTriggeredPath) {
    _lastTriggeredPath = path;
    setTimeout(runCycle, TIMING.initDelay);
  }
}

if (TRIGGER_PAGE_ID) { setInterval(checkUrl, URL_POLL_MS); checkUrl(); }
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 11. HELP OVERLAY
// ══════════════════════════════════════════════════════════════
{
  id: 'help-overlay',
  name: 'Help Overlay',
  hasPreview: false,
  effectDescription: 'A small ? button that activates a full-screen dim overlay highlighting specific MSTR elements. Hovering over a highlighted area shows an info popup with title and description. Data is loaded from an MSTR metric (format: ariaLabel|Title|Description, items separated by ;;). ⚠ The data source must be a Metric — loading it as an Attribute will result in an empty overlay. The container must be named as configured in the aria-label field.',
  groups: [
    { name: 'Button', open: true, fields: [
      { key: 'btnTooltip',         label: 'Button hover tooltip',                       type: 'text', default: 'Click to activate the help overlay. Then hover over highlighted areas for pop-up help.' },
      { key: 'closeLabel',         label: 'Close button label',                         type: 'text', default: '× Close' },
      { key: 'containerAriaLabel', label: 'Container aria-label (MSTR Name field)',     type: 'text', default: 'HELP_OVERLAY' },
    ]},
    { name: 'Overlay appearance', open: false, fields: [
      { key: 'dimColor',      label: 'Overlay color',              type: 'color',  default: '#06080e' },
      { key: 'dimAlpha',      label: 'Overlay opacity',            type: 'number', default: 0.68, min: 0, max: 1, step: 0.05 },
      { key: 'cutoutPadding', label: 'Cutout padding (px)',        type: 'number', default: 6,  min: 0, max: 30 },
      { key: 'edgeBlur',      label: 'Edge blur (px)',             type: 'number', default: 10, min: 0, max: 40 },
      { key: 'cornerR',       label: 'Cutout corner radius (px)',  type: 'number', default: 6,  min: 0, max: 20 },
    ]},
    { name: 'Hover popup', open: false, fields: [
      { key: 'popupMinWidth', label: 'Popup min width (px)', type: 'number', default: 220, min: 100, max: 800 },
      { key: 'popupMaxWidth', label: 'Popup max width (px)', type: 'number', default: 400, min: 100, max: 800 },
    ]},
  ],
  mstrVars: [
    { key: 'helpData', label: 'Help items — MSTR attribute (ariaLabel|Title|Description;;...)', default: 'Help Overlay Concat Value', fakeValue: '' },
  ],
  generateCode(c, v) {
    const dr = parseInt(c.dimColor.slice(1,3),16);
    const dg = parseInt(c.dimColor.slice(3,5),16);
    const db = parseInt(c.dimColor.slice(5,7),16);
    const dimColor = `rgba(${dr},${dg},${db},${c.dimAlpha})`;
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="style-INSTANCE">
  .ho-wrapper-INSTANCE { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; }
  .ho-btn-INSTANCE { width:30px; height:30px; border-radius:50%; background:rgba(255,255,255,0.08); border:1.5px solid rgba(255,255,255,0.28); color:rgba(255,255,255,0.80); font-family:Tahoma,Arial,sans-serif; font-size:16px; font-weight:bold; display:flex; align-items:center; justify-content:center; cursor:pointer; user-select:none; flex-shrink:0; transition:background 0.2s,border-color 0.2s,box-shadow 0.2s,color 0.2s; }
  .ho-btn-INSTANCE:hover { background:rgba(255,255,255,0.17); border-color:rgba(255,255,255,0.60); color:rgba(255,255,255,1); box-shadow:0 0 10px 2px rgba(255,255,255,0.12); }
</style>
</head>
<body>
<!-- [INPUT][DATA] Metric (⚠ must be Metric, not Attribute) — format: ariaLabel|Title|Description;;... -->
<span id="mstr-data-INSTANCE" style="display:none">{[${v.helpData}]}</span>
<div id="ho-root-INSTANCE" class="ho-wrapper-INSTANCE">
  <div id="ho-btn-INSTANCE" class="ho-btn-INSTANCE">?</div>
</div>
<script>
(function () {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  var CONFIG = {
    separator: ';;', fieldSep: '|',
    btnTooltip: ${JSON.stringify(c.btnTooltip)},
    closeLabel: ${JSON.stringify(c.closeLabel)},
    cutoutPadding: ${c.cutoutPadding}, edgeBlur: ${c.edgeBlur}, cornerR: ${c.cornerR},
    dimColor: '${dimColor}',
    popupMinWidth: ${c.popupMinWidth}, popupMaxWidth: ${c.popupMaxWidth}, popupMargin: 16, popupCornerR: 8, popupAccentH: 3,
    popupAccentColor: 'rgba(255,255,255,0.55)', popupBg: 'rgba(255,255,255,0.13)',
    popupBorder: 'rgba(255,255,255,0.28)', popupTitleColor: 'rgba(255,255,255,0.97)',
    popupTextColor: 'rgba(255,255,255,0.75)',
    containerAriaLabel: ${JSON.stringify(c.containerAriaLabel)}, zFront: 99990,
  };
  /* ═══════════════════════════════════════════════════════════════ */
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('style-INSTANCE');
  if (styleEl) { styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }
  ['mstr-data-INSTANCE','ho-root-INSTANCE','ho-btn-INSTANCE'].forEach(function(id) { var el = document.getElementById(id); if (el) el.id = el.id.split('INSTANCE').join(uid); });
  var rootEl = document.getElementById('ho-root-' + uid); if (rootEl) rootEl.className = rootEl.className.split('INSTANCE').join(uid);
  var btnEl  = document.getElementById('ho-btn-'  + uid); if (btnEl)  btnEl.className  = btnEl.className.split('INSTANCE').join(uid);
  var rawData = ((document.getElementById('mstr-data-' + uid) || {}).innerHTML || '').trim().replace(/^["']|["']$/g, '');
  var items = rawData.split(CONFIG.separator).map(function(s){return s.trim();}).filter(function(s){return s.length>0;}).map(function(s){var p=s.split(CONFIG.fieldSep);return{name:(p[0]||'').trim(),title:(p[1]||'').trim(),info:(p[2]||'').trim()};}).filter(function(item){return item.name.length>0;});
  var _canvas=null,_closeBtn=null,_popups=[],_hoveredIdx=-1,_overlayActive=false,_allRects=[],_originalZ='',_mstrContainer=null;
  function getObjectRect(name){var isH=name.indexOf('helpid:')===0;var sel=isH?'[data-help-id="'+name.slice(7)+'"]':'[aria-label="'+name+'"]';var els=document.querySelectorAll(sel);for(var i=0;i<els.length;i++){var el=els[i];if(!isH&&(el.getAttribute('aria-label')||'').indexOf('Drag Icon')===0)continue;var r=el.getBoundingClientRect();if(r.width===0&&r.height===0)continue;return{x:r.left-CONFIG.cutoutPadding,y:r.top-CONFIG.cutoutPadding,w:r.width+CONFIG.cutoutPadding*2,h:r.height+CONFIG.cutoutPadding*2};}return null;}
  function findMstrContainer() { var els=document.querySelectorAll('[aria-label="'+CONFIG.containerAriaLabel+'"]'); for (var i=0;i<els.length;i++){var cs=window.getComputedStyle(els[i]);if(cs.position==='fixed'&&!isNaN(parseInt(cs.zIndex)))return els[i];} return null; }
  function roundedRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}
  function renderFrame(rects){var ctx=_canvas.getContext('2d'),vw=_canvas.width,vh=_canvas.height;ctx.clearRect(0,0,vw,vh);ctx.globalCompositeOperation='source-over';ctx.fillStyle=CONFIG.dimColor;ctx.fillRect(0,0,vw,vh);ctx.globalCompositeOperation='destination-out';ctx.filter='blur('+CONFIG.edgeBlur+'px)';for(var i=0;i<rects.length;i++){var r=rects[i];if(!r)continue;ctx.fillStyle='rgba(0,0,0,1)';roundedRect(ctx,r.x,r.y,r.w,r.h,CONFIG.cornerR);ctx.fill();}ctx.filter='none';ctx.globalCompositeOperation='source-over';}
  function calcPopupPos(cutout,popupH){var vw=window.innerWidth,vh=window.innerHeight,m=CONFIG.popupMargin,pw=CONFIG.popupMaxWidth,ph=popupH;var cands=[{x:cutout.x+cutout.w+m,y:cutout.y+cutout.h/2-ph/2},{x:cutout.x+cutout.w/2-pw/2,y:cutout.y+cutout.h+m},{x:cutout.x-pw-m,y:cutout.y+cutout.h/2-ph/2},{x:cutout.x+cutout.w/2-pw/2,y:cutout.y-ph-m}];for(var i=0;i<cands.length;i++){var cd=cands[i];var cx=Math.max(8,Math.min(cd.x,vw-pw-8));var cy=Math.max(8,Math.min(cd.y,vh-ph-8));if(Math.abs(cx-cd.x)<40&&Math.abs(cy-cd.y)<40)return{x:cx,y:cy};}return{x:Math.max(8,Math.min(cands[0].x,vw-pw-8)),y:Math.max(8,Math.min(cands[0].y,vh-ph-8))};}
  function showPopup(index){var el=_popups[index],r=_allRects[index];if(!el||!r)return;el.style.visibility='hidden';el.style.display='block';var pos=calcPopupPos(r,el.offsetHeight);el.style.left=pos.x+'px';el.style.top=pos.y+'px';el.style.visibility='visible';}
  function hidePopup(index){var el=_popups[index];if(el)el.style.display='none';}
  function hideAllPopups(){for(var i=0;i<_popups.length;i++)hidePopup(i);_hoveredIdx=-1;}
  function activateOverlay(){if(_overlayActive)return;_overlayActive=true;_canvas.width=window.innerWidth;_canvas.height=window.innerHeight;_allRects=items.map(function(item){return getObjectRect(item.name);});_mstrContainer=findMstrContainer();if(_mstrContainer){_originalZ=window.getComputedStyle(_mstrContainer).zIndex;_mstrContainer.style.zIndex=CONFIG.zFront;}renderFrame(_allRects);_canvas.style.opacity='1';_canvas.style.pointerEvents='all';_closeBtn.style.opacity='1';_closeBtn.style.pointerEvents='auto';}
  function dismissOverlay(){if(!_overlayActive)return;_overlayActive=false;hideAllPopups();_canvas.style.opacity='0';_canvas.style.pointerEvents='none';_closeBtn.style.opacity='0';_closeBtn.style.pointerEvents='none';_canvas.getContext('2d').clearRect(0,0,_canvas.width,_canvas.height);if(_mstrContainer)_mstrContainer.style.zIndex=_originalZ;}
  function init() {
    var btn = document.getElementById('ho-btn-' + uid);
    var btnTip = document.createElement('div');
    btnTip.style.cssText = 'position:fixed;background:rgba(15,27,45,0.95);border:1px solid #2e3f55;border-radius:6px;padding:6px 10px;font-family:Tahoma,Arial,sans-serif;font-size:11px;color:#DEDEDE;pointer-events:none;opacity:0;z-index:99994;box-shadow:0 2px 8px rgba(0,0,0,0.5);max-width:200px;white-space:normal;text-align:center;line-height:1.4;';
    btnTip.textContent = CONFIG.btnTooltip;
    document.body.appendChild(btnTip);
    btn.addEventListener('mouseenter', function(){var r=btn.getBoundingClientRect();var tw=btnTip.offsetWidth||160,th=btnTip.offsetHeight||36;var tx=r.left+r.width/2-tw/2,ty=r.top-th-8;if(tx<4)tx=4;if(tx+tw>window.innerWidth-4)tx=window.innerWidth-tw-4;if(ty<4)ty=r.bottom+8;btnTip.style.left=tx+'px';btnTip.style.top=ty+'px';btnTip.style.opacity='1';});
    btn.addEventListener('mouseleave', function(){btnTip.style.opacity='0';});
    btn.addEventListener('click', function(e){e.stopPropagation();btnTip.style.opacity='0';activateOverlay();});
    _canvas = document.createElement('canvas');
    _canvas.style.cssText = 'position:fixed;inset:0;z-index:99990;pointer-events:none;opacity:0;transition:opacity 350ms ease;';
    document.body.appendChild(_canvas);
    _closeBtn = document.createElement('div');
    _closeBtn.textContent = CONFIG.closeLabel;
    _closeBtn.style.cssText = 'position:fixed;top:20px;right:24px;z-index:99993;opacity:0;pointer-events:none;font-family:Tahoma,Arial,sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,0.85);letter-spacing:0.05em;padding:6px 16px;border:1px solid rgba(255,255,255,0.35);border-radius:20px;background:rgba(255,255,255,0.08);backdrop-filter:blur(4px);transition:opacity 300ms ease,background 0.2s;cursor:pointer;user-select:none;';
    _closeBtn.addEventListener('mouseover', function(){_closeBtn.style.background='rgba(255,255,255,0.16)';});
    _closeBtn.addEventListener('mouseout',  function(){_closeBtn.style.background='rgba(255,255,255,0.08)';});
    _closeBtn.addEventListener('click', function(e){e.stopPropagation();dismissOverlay();});
    document.body.appendChild(_closeBtn);
    items.forEach(function(item){
      if(!item.title&&!item.info){_popups.push(null);return;}
      var el=document.createElement('div');
      el.style.cssText='position:fixed;min-width:'+CONFIG.popupMinWidth+'px;max-width:'+CONFIG.popupMaxWidth+'px;background:'+CONFIG.popupBg+';border:1px solid '+CONFIG.popupBorder+';border-radius:'+CONFIG.popupCornerR+'px;z-index:99993;display:none;pointer-events:none;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.35);backdrop-filter:blur(16px);';
      var accent=document.createElement('div');accent.style.cssText='height:'+CONFIG.popupAccentH+'px;background:'+CONFIG.popupAccentColor+';width:100%;';
      var content=document.createElement('div');content.style.cssText='padding:10px 12px 12px;';
      var titleEl=document.createElement('div');titleEl.innerHTML=item.title||item.name;titleEl.style.cssText='color:'+CONFIG.popupTitleColor+';font-family:Tahoma,Arial,sans-serif;font-size:16px;font-weight:600;letter-spacing:0.03em;margin-bottom:6px;line-height:1.3;';
      var textEl=document.createElement('div');textEl.innerHTML=item.info;textEl.style.cssText='color:'+CONFIG.popupTextColor+';font-family:Tahoma,Arial,sans-serif;font-size:13px;line-height:1.5;font-weight:400;';
      content.appendChild(titleEl);content.appendChild(textEl);el.appendChild(accent);el.appendChild(content);
      document.body.appendChild(el);_popups.push(el);
    });
    _canvas.addEventListener('mousemove', function(e){if(!_overlayActive)return;var x=e.clientX,y=e.clientY,found=-1;for(var i=0;i<_allRects.length;i++){var r=_allRects[i];if(r&&x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h){found=i;break;}}if(found!==_hoveredIdx){if(_hoveredIdx>=0)hidePopup(_hoveredIdx);_hoveredIdx=found;if(found>=0)showPopup(found);}});
    _canvas.addEventListener('mouseleave', function(){if(_hoveredIdx>=0)hidePopup(_hoveredIdx);_hoveredIdx=-1;});
    _canvas.addEventListener('click', function(){dismissOverlay();});
    document.addEventListener('keydown', function(e){if(e.key==='Escape')dismissOverlay();});
  }
  if (document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 12. FILTER SUMMARY
// ══════════════════════════════════════════════════════════════
{
  id: 'filter-summary',
  name: 'Filter Summary',
  hasPreview: true,
  effectDescription: 'Displays the currently active filter selection with a funnel icon and an engraved text effect. ⚠ Each attribute must have exactly one value selected at any given time — configure the linked MSTR filter for single-value selection only.',
  groups: [
    { name: 'Text', open: true, fields: [
      { key: 'fontFamily', label: 'Font family',    type: 'text',   default: 'Tahoma, Geneva, Verdana, sans-serif' },
      { key: 'fontSize',   label: 'Font size (px)', type: 'number', default: 18, min: 8, max: 72 },
      { key: 'fontWeight', label: 'Font weight',    type: 'select', default: '400', options: [{v:'300',l:'300 — Light'},{v:'400',l:'400 — Regular'},{v:'600',l:'600 — Semi-bold'},{v:'700',l:'700 — Bold'}] },
      { key: 'color',      label: 'Text color',     type: 'color',  default: '#DEDEDE' },
      { key: 'alignment',  label: 'Alignment',      type: 'select', default: 'flex-end', options: [{v:'flex-start',l:'Left'},{v:'center',l:'Center'},{v:'flex-end',l:'Right'}] },
    ]},
    { name: 'Engraving effect', open: false, fields: [
      { key: 'surfaceScale',     label: 'Surface scale (negative = carved in)', type: 'number', default: -6,  min: -20, max: 20,  step: 0.5 },
      { key: 'specularConstant', label: 'Specular constant',                    type: 'number', default: 2.2, min: 0,   max: 10,  step: 0.1 },
      { key: 'specularExponent', label: 'Specular exponent',                    type: 'number', default: 22,  min: 1,   max: 50 },
      { key: 'lightX',           label: 'Light X position',                     type: 'number', default: 50 },
      { key: 'lightY',           label: 'Light Y position',                     type: 'number', default: -80 },
      { key: 'lightZ',           label: 'Light Z position',                     type: 'number', default: 60 },
      { key: 'bumpBlur',         label: 'Bump blur radius',                     type: 'number', default: 1.5, min: 0, max: 10, step: 0.5 },
    ]},
    { name: 'Tooltip', open: false, fields: [
      { key: 'tooltipText', label: 'Hover tooltip text', type: 'text', default: 'These are the current filter settings. To change, please use the Chapter Filter.' },
    ]},
  ],
  mstrVars: [
    { key: 'filterValue', label: 'Filter attribute (one value at a time)', default: 'Platform', fakeValue: 'Linear TV' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="engrave-style-INSTANCE">
  .engrave-wrap-INSTANCE {
    width:100%; height:100%; display:flex; flex-direction:row-reverse;
    align-items:center; justify-content:flex-start; gap:16px;
    box-sizing:border-box; padding:8px 8px;
    background:transparent;
  }
  .engrave-icon-INSTANCE { flex-shrink:0; display:flex; align-items:center; opacity:0.7; }
  .engrave-text-INSTANCE { display:flex; flex-direction:column; align-items:flex-end; }
  .engrave-line-INSTANCE {
    filter:url(#engrave-filter-INSTANCE);
    line-height:1.7; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-size:18px; font-weight:400; color:#DEDEDE;
  }
</style>
</head>
<body>
<svg width="0" height="0" style="position:absolute" id="engrave-svg-INSTANCE">
  <defs>
    <filter id="engrave-filter-INSTANCE" x="-10%" y="-30%" width="120%" height="160%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="bump"/>
      <feSpecularLighting in="bump" surfaceScale="-6" specularConstant="2.2" specularExponent="22" lighting-color="white" result="specular">
        <fePointLight x="50" y="-80" z="60"/>
      </feSpecularLighting>
      <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularClipped"/>
      <feBlend in="SourceGraphic" in2="specularClipped" mode="screen" result="blended"/>
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="shadowBlur"/>
      <feOffset in="shadowBlur" dx="1" dy="2" result="shadowOffset"/>
      <feFlood flood-color="rgba(0,0,0,0.95)" result="shadowColor"/>
      <feComposite in="shadowColor" in2="shadowOffset" operator="in" result="shadow"/>
      <feMerge><feMergeNode in="shadow"/><feMergeNode in="blended"/></feMerge>
    </filter>
  </defs>
</svg>
<div class="engrave-wrap-INSTANCE">
  <div class="engrave-icon-INSTANCE">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#DEDEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
  </div>
  <!-- [INPUT][DATA] Attribute — single value; the linked MSTR filter must allow single-value selection only -->
  <div class="engrave-text-INSTANCE">
    <div class="engrave-line-INSTANCE">{[${v.filterValue}]}</div>
  </div>
</div>
<script>
(function () {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  var CONFIG = {
    fontFamily:       ${JSON.stringify(c.fontFamily)},
    fontSize:         ${JSON.stringify(c.fontSize + 'px')},
    fontWeight:       ${JSON.stringify(c.fontWeight)},
    color:            ${JSON.stringify(c.color)},
    alignment:        ${JSON.stringify(c.alignment)},
    surfaceScale:     ${c.surfaceScale},
    specularConstant: ${c.specularConstant},
    specularExponent: ${c.specularExponent},
    lightX:           ${c.lightX},
    lightY:           ${c.lightY},
    lightZ:           ${c.lightZ},
    bumpBlur:         ${c.bumpBlur},
    tooltipText:      ${JSON.stringify(c.tooltipText)},
  };
  /* ═══════════════════════════════════════════════════════════════ */

  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

  var styleEl = document.getElementById('engrave-style-INSTANCE');
  if (styleEl) { styleEl.id = 'engrave-style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }

  var svgEl = document.getElementById('engrave-svg-INSTANCE');
  if (svgEl) {
    svgEl.id = 'engrave-svg-' + uid;
    svgEl.innerHTML = svgEl.innerHTML.split('INSTANCE').join(uid);
    var filterEl = svgEl.querySelector('filter');
    if (filterEl) {
      var spec = filterEl.querySelector('feSpecularLighting');
      if (spec) { spec.setAttribute('surfaceScale', CONFIG.surfaceScale); spec.setAttribute('specularConstant', CONFIG.specularConstant); spec.setAttribute('specularExponent', CONFIG.specularExponent); }
      var light = filterEl.querySelector('fePointLight');
      if (light) { light.setAttribute('x', CONFIG.lightX); light.setAttribute('y', CONFIG.lightY); light.setAttribute('z', CONFIG.lightZ); }
      var firstBlur = filterEl.querySelector('feGaussianBlur');
      if (firstBlur) firstBlur.setAttribute('stdDeviation', CONFIG.bumpBlur);
    }
  }

  document.querySelectorAll('[class*="INSTANCE"]').forEach(function (el) {
    el.className = el.className.split('INSTANCE').join(uid);
  });

  var textBlock = document.querySelector('.engrave-text-' + uid);
  if (textBlock) textBlock.style.alignItems = CONFIG.alignment;

  document.querySelectorAll('.engrave-line-' + uid).forEach(function (el) {
    el.style.fontFamily = CONFIG.fontFamily;
    el.style.fontSize   = CONFIG.fontSize;
    el.style.fontWeight = CONFIG.fontWeight;
    el.style.color      = CONFIG.color;
  });

  var tooltip = document.createElement('div');
  tooltip.style.cssText = 'position:fixed;background:rgba(30,30,30,0.92);color:#DEDEDE;font-family:Segoe UI,Tahoma,sans-serif;font-size:12px;padding:7px 11px;border-radius:4px;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:9999;max-width:260px;line-height:1.5;box-shadow:0 2px 8px rgba(0,0,0,0.5);';
  tooltip.textContent = CONFIG.tooltipText;
  document.body.appendChild(tooltip);

  var wrapEl = document.querySelector('.engrave-wrap-' + uid);
  if (wrapEl) {
    wrapEl.addEventListener('mousemove', function (e) { tooltip.style.left=(e.clientX+14)+'px'; tooltip.style.top=(e.clientY+14)+'px'; tooltip.style.opacity='1'; });
    wrapEl.addEventListener('mouseleave', function () { tooltip.style.opacity='0'; });
  }
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 13. LAST DATA UPDATE INFO
// ══════════════════════════════════════════════════════════════
{
  id: 'last-data-update',
  name: 'Last Data Update Info',
  hasPreview: true,
  effectDescription: 'Displays the most recent date for which data has been loaded, with a calendar icon and an engraved text effect. The label and the MSTR date value appear on two lines.',
  groups: [
    { name: 'Text', open: true, fields: [
      { key: 'label',      label: 'Label (first line)',  type: 'text',   default: 'Last update' },
      { key: 'fontFamily', label: 'Font family',         type: 'text',   default: 'Tahoma, Geneva, Verdana, sans-serif' },
      { key: 'fontSize',   label: 'Font size (px)',      type: 'number', default: 18, min: 8, max: 72 },
      { key: 'fontWeight', label: 'Font weight',         type: 'select', default: '400', options: [{v:'300',l:'300 — Light'},{v:'400',l:'400 — Regular'},{v:'600',l:'600 — Semi-bold'},{v:'700',l:'700 — Bold'}] },
      { key: 'color',      label: 'Text color',          type: 'color',  default: '#DEDEDE' },
    ]},
    { name: 'Engraving effect', open: false, fields: [
      { key: 'surfaceScale',     label: 'Surface scale (negative = carved in)', type: 'number', default: -6,  min: -20, max: 20,  step: 0.5 },
      { key: 'specularConstant', label: 'Specular constant',                    type: 'number', default: 2.2, min: 0,   max: 10,  step: 0.1 },
      { key: 'specularExponent', label: 'Specular exponent',                    type: 'number', default: 22,  min: 1,   max: 50 },
      { key: 'lightX',           label: 'Light X position',                     type: 'number', default: 50 },
      { key: 'lightY',           label: 'Light Y position',                     type: 'number', default: -80 },
      { key: 'lightZ',           label: 'Light Z position',                     type: 'number', default: 60 },
      { key: 'bumpBlur',         label: 'Bump blur radius',                     type: 'number', default: 1.5, min: 0, max: 10, step: 0.5 },
    ]},
    { name: 'Tooltip', open: false, fields: [
      { key: 'tooltipText', label: 'Hover tooltip text', type: 'text', default: 'Shows the most recent date for which data has been loaded into the dashboard.' },
    ]},
  ],
  mstrVars: [
    { key: 'dateVar', label: 'Date/time attribute or metric', default: 'Timeinterval with Name - Last Complete', fakeValue: 'Mon, 16 Jun 2026' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="engrave-style-INSTANCE">
  .engrave-wrap-INSTANCE {
    width:100%; height:100%; display:flex; flex-direction:row-reverse;
    align-items:center; justify-content:flex-start; gap:16px;
    box-sizing:border-box; padding:8px 8px;
    background:transparent;
  }
  .engrave-icon-INSTANCE { flex-shrink:0; display:flex; align-items:center; opacity:0.7; }
  .engrave-text-INSTANCE { display:flex; flex-direction:column; align-items:flex-end; justify-content:center; }
  .engrave-line-INSTANCE {
    filter:url(#engrave-filter-INSTANCE);
    line-height:1.7; font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;
    font-size:18px; font-weight:400; color:#DEDEDE; text-align:right;
  }
</style>
</head>
<body>
<svg width="0" height="0" style="position:absolute" id="engrave-svg-INSTANCE">
  <defs>
    <filter id="engrave-filter-INSTANCE" x="-10%" y="-30%" width="120%" height="160%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="bump"/>
      <feSpecularLighting in="bump" surfaceScale="-6" specularConstant="2.2" specularExponent="22" lighting-color="white" result="specular">
        <fePointLight x="50" y="-80" z="60"/>
      </feSpecularLighting>
      <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularClipped"/>
      <feBlend in="SourceGraphic" in2="specularClipped" mode="screen" result="blended"/>
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="shadowBlur"/>
      <feOffset in="shadowBlur" dx="1" dy="2" result="shadowOffset"/>
      <feFlood flood-color="rgba(0,0,0,0.95)" result="shadowColor"/>
      <feComposite in="shadowColor" in2="shadowOffset" operator="in" result="shadow"/>
      <feMerge><feMergeNode in="shadow"/><feMergeNode in="blended"/></feMerge>
    </filter>
  </defs>
</svg>
<div class="engrave-wrap-INSTANCE">
  <div class="engrave-icon-INSTANCE">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="#DEDEDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  </div>
  <!-- [INPUT][DATA] Attribute or Metric — single date/time value, e.g. "Mon, 16 Jun 2026" -->
  <div class="engrave-text-INSTANCE">
    <div class="engrave-line-INSTANCE" id="engrave-content-INSTANCE">${c.label}<br>{[${v.dateVar}]}</div>
  </div>
</div>
<script>
(function () {
  /* ═══════════════════════════════════════════════════════════════
     CONFIGURATION — edit values below
     ═══════════════════════════════════════════════════════════════ */
  var CONFIG = {
    fontFamily:       ${JSON.stringify(c.fontFamily)},
    fontSize:         ${JSON.stringify(c.fontSize + 'px')},
    fontWeight:       ${JSON.stringify(c.fontWeight)},
    color:            ${JSON.stringify(c.color)},
    surfaceScale:     ${c.surfaceScale},
    specularConstant: ${c.specularConstant},
    specularExponent: ${c.specularExponent},
    lightX:           ${c.lightX},
    lightY:           ${c.lightY},
    lightZ:           ${c.lightZ},
    bumpBlur:         ${c.bumpBlur},
    tooltipText:      ${JSON.stringify(c.tooltipText)},
  };
  /* ═══════════════════════════════════════════════════════════════ */

  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);

  var styleEl = document.getElementById('engrave-style-INSTANCE');
  if (styleEl) { styleEl.id = 'engrave-style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }

  var svgEl = document.getElementById('engrave-svg-INSTANCE');
  if (svgEl) {
    svgEl.id = 'engrave-svg-' + uid;
    svgEl.innerHTML = svgEl.innerHTML.split('INSTANCE').join(uid);
    var filterEl = svgEl.querySelector('filter');
    if (filterEl) {
      var spec = filterEl.querySelector('feSpecularLighting');
      if (spec) { spec.setAttribute('surfaceScale', CONFIG.surfaceScale); spec.setAttribute('specularConstant', CONFIG.specularConstant); spec.setAttribute('specularExponent', CONFIG.specularExponent); }
      var light = filterEl.querySelector('fePointLight');
      if (light) { light.setAttribute('x', CONFIG.lightX); light.setAttribute('y', CONFIG.lightY); light.setAttribute('z', CONFIG.lightZ); }
      var firstBlur = filterEl.querySelector('feGaussianBlur');
      if (firstBlur) firstBlur.setAttribute('stdDeviation', CONFIG.bumpBlur);
    }
  }

  document.querySelectorAll('[class*="INSTANCE"]').forEach(function (el) { el.className = el.className.split('INSTANCE').join(uid); });
  document.querySelectorAll('[id*="INSTANCE"]').forEach(function (el) { el.id = el.id.split('INSTANCE').join(uid); });

  document.querySelectorAll('.engrave-line-' + uid).forEach(function (el) {
    el.style.fontFamily = CONFIG.fontFamily;
    el.style.fontSize   = CONFIG.fontSize;
    el.style.fontWeight = CONFIG.fontWeight;
    el.style.color      = CONFIG.color;
  });

  var tooltip = document.createElement('div');
  tooltip.style.cssText = 'position:fixed;background:rgba(30,30,30,0.92);color:#DEDEDE;font-family:Segoe UI,Tahoma,sans-serif;font-size:12px;padding:7px 11px;border-radius:4px;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:9999;max-width:260px;line-height:1.5;box-shadow:0 2px 8px rgba(0,0,0,0.5);';
  tooltip.textContent = CONFIG.tooltipText;
  document.body.appendChild(tooltip);

  var wrapEl = document.querySelector('.engrave-wrap-' + uid);
  if (wrapEl) {
    wrapEl.addEventListener('mousemove', function (e) { tooltip.style.left=(e.clientX+14)+'px'; tooltip.style.top=(e.clientY+14)+'px'; tooltip.style.opacity='1'; });
    wrapEl.addEventListener('mouseleave', function () { tooltip.style.opacity='0'; });
  }
})();
<\/script>
</body>
</html>`;
  }
},

// ══════════════════════════════════════════════════════════════
// 14. TREND LINE CHART
// ══════════════════════════════════════════════════════════════
{
  id: 'trend-line-chart',
  name: 'Trend Line Chart',
  hasPreview: true,
  description: 'Compact line chart (e.g. UAA trend) that opens scrolled to the latest data. Horizontal scroll / drag / wheel to see history.',
  effectDescription: 'Smooth line chart with area fill and value labels. Unlike native MSTR charts it opens scrolled to the RIGHT (latest data) and stays pinned there on resize. Drag, mouse wheel or the scrollbar reveal history; the » button jumps back to the latest point.',
  groups: [
    { name: 'Basic', open: true, fields: [
      { key: 'title',           label: 'Title (empty = no header)',  type: 'text',    default: 'UAA' },
      { key: 'headerValueShow', label: 'Show last value + change in header', type: 'boolean', default: true },
      { key: 'separator',       label: 'Data separator (MSTR concat)', type: 'text',  default: ';' },
      { key: 'valueFormat',     label: 'Value label format',         type: 'select',  default: 'compact', options: [{v:'compact',l:'Compact (3.03M)'},{v:'full',l:'Full (3,031,235)'}] },
      { key: 'decimals',        label: 'Decimal places',             type: 'number',  default: 2, min: 0, max: 4 },
      { key: 'helpId',          label: 'Help Overlay ID (leave empty to skip)', type: 'text', default: '' },
    ]},
    { name: 'Scrolling', open: true, fields: [
      { key: 'startPosition',   label: 'Initial position',           type: 'select',  default: 'right', options: [{v:'right',l:'Right — latest data'},{v:'left',l:'Left — oldest data'}] },
      { key: 'visiblePoints',   label: 'Points visible at once',     type: 'number',  default: 14, min: 3, max: 200 },
      { key: 'minPointSpacing', label: 'Min. spacing between points (px)', type: 'number', default: 28, min: 6, max: 200 },
      { key: 'wheelScroll',     label: 'Mouse wheel scrolls horizontally', type: 'boolean', default: true },
      { key: 'dragScroll',      label: 'Drag to scroll',             type: 'boolean', default: true },
    ]},
    { name: 'Line', open: true, fields: [
      { key: 'lineColor',       label: 'Line color',                 type: 'color',   default: '#FF7F27' },
      { key: 'lineWidth',       label: 'Line width (px)',            type: 'number',  default: 2.5, min: 1, max: 8, step: 0.5 },
      { key: 'smooth',          label: 'Smooth curve',               type: 'boolean', default: true },
      { key: 'areaFill',        label: 'Gradient area under line',   type: 'boolean', default: true },
      { key: 'areaOpacity',     label: 'Area opacity (0–1)',         type: 'number',  default: 0.28, min: 0, max: 1, step: 0.02 },
      { key: 'dotShow',         label: 'Show points',                type: 'boolean', default: true },
      { key: 'dotRadius',       label: 'Point radius (px)',          type: 'number',  default: 3.5, min: 1, max: 10, step: 0.5 },
      { key: 'lastPulse',       label: 'Pulsing halo on last point', type: 'boolean', default: true },
    ]},
    { name: 'Labels & axes', open: true, fields: [
      { key: 'valueLabels',     label: 'Value labels',               type: 'select',  default: 'all', options: [{v:'all',l:'All (thinned when crowded)'},{v:'minmax',l:'Min, max and last'},{v:'last',l:'Last only'},{v:'none',l:'None'}] },
      { key: 'labelColor',      label: 'Value label color',          type: 'color',   default: '#DEDEDE' },
      { key: 'labelFontSize',   label: 'Value label size (px)',      type: 'number',  default: 10, min: 7, max: 18 },
      { key: 'xLabelColor',     label: 'X-axis label color',         type: 'color',   default: '#919FB4' },
      { key: 'xLabelFontSize',  label: 'X-axis label size (px)',     type: 'number',  default: 10, min: 7, max: 18 },
      { key: 'xLabelRotate',    label: 'X-axis label rotation',      type: 'select',  default: '0', options: [{v:'0',l:'Horizontal (thinned)'},{v:'-45',l:'-45°'},{v:'-90',l:'Vertical'}] },
      { key: 'yAxisShow',       label: 'Show Y-axis labels',         type: 'boolean', default: true },
      { key: 'gridShow',        label: 'Show horizontal gridlines',  type: 'boolean', default: true },
      { key: 'yFromZero',       label: 'Y-axis starts at zero',      type: 'boolean', default: false },
    ]},
    { name: 'Title tooltip', open: false, fields: [
      { key: 'tipShow',      label: 'Show tooltip on title hover', type: 'boolean',  default: false },
      { key: 'tipHtml',      label: 'Tooltip body (HTML) — {VALUE1}, {VALUE2} from MSTR; {LAST}, {PERIOD}, {CHANGE} from chart', type: 'textarea', default: 'Live TV users create<ul style="margin:6px 0 0 0;padding-left:16px;"><li><strong style="color:#FF7F27;">{VALUE1}</strong> of all Total Platform users</li><li><strong style="color:#FF7F27;">{VALUE2}</strong> of Linear TV users</li></ul>' },
      { key: 'tipFont',      label: 'Tooltip font',                type: 'text',     default: 'Tahoma, Arial, sans-serif' },
      { key: 'tipFontSize',  label: 'Tooltip font size',           type: 'text',     default: '12px' },
      { key: 'tipTextColor', label: 'Tooltip text color',          type: 'color',    default: '#b0bec5' },
    ]},
    { name: 'Card', open: false, fields: [
      { key: 'bgColor',         label: 'Background (also edge fades)', type: 'color', default: '#16161E' },
      { key: 'borderShow',      label: 'Show border',                type: 'boolean', default: true },
      { key: 'borderColor',     label: 'Border color',               type: 'color',   default: '#393D52' },
      { key: 'changePosColor',  label: 'Change ▲ color',             type: 'color',   default: '#3FA9D0' },
      { key: 'changeNegColor',  label: 'Change ▼ color',             type: 'color',   default: '#9A8FC4' },
    ]},
  ],
  mstrVars: [
    { key: 'yData', label: 'Metric values — Y-axis (separator-joined numbers)', default: 'UAA Concat',
      fakeValue: (function(){ var a=[], v=3100000; for (var i=0;i<60;i++){ v += Math.round(Math.sin(i/4)*180000 + (Math.random()-0.45)*160000); a.push(v); } return a.join(';'); })() },
    { key: 'xData', label: 'Time labels — X-axis (separator-joined strings)', default: 'Timeinterval Concat',
      fakeValue: (function(){ var a=[]; for (var i=0;i<60;i++){ var y=2025+Math.floor((i+34)/52), w=((i+34)%52)+1; a.push(y+'-W'+(w<10?'0':'')+w); } return a.join(';'); })() },
    { key: 'tipValue1', label: 'Title tooltip {VALUE1} (optional, empty = unused)', default: 'UAA - Live TV % of Total',     fakeValue: '41.2%' },
    { key: 'tipValue2', label: 'Title tooltip {VALUE2} (optional, empty = unused)', default: 'UAA - Live TV % of Linear TV', fakeValue: '63.8%' },
  ],
  generateCode(c, v) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style id="style-INSTANCE">
/* ═══════════════════════════════════════════════════════════════
   TREND LINE CHART — MicroStrategy HTML Container
   Styles are scoped via INSTANCE placeholder (replaced at runtime).
   ═══════════════════════════════════════════════════════════════ */
.tlc-card-INSTANCE { position:absolute; top:5px; left:5px; right:5px; bottom:5px; box-sizing:border-box; border-radius:8px; padding:10px 12px 6px 12px; display:flex; flex-direction:column; overflow:hidden; font-family:Tahoma, Arial, sans-serif; color:#DEDEDE; }
.tlc-header-INSTANCE { display:flex; align-items:baseline; gap:10px; flex-shrink:0; margin-bottom:4px; min-width:0; }
.tlc-title-INSTANCE { font-size:11px; color:#919FB4; letter-spacing:1.2px; text-transform:uppercase; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.tlc-period-INSTANCE { font-size:10px; color:#6B7890; white-space:nowrap; }
.tlc-hval-INSTANCE { margin-left:auto; font-size:16px; font-weight:bold; color:#F4F4F4; white-space:nowrap; }
.tlc-hchg-INSTANCE { font-size:11px; font-weight:600; white-space:nowrap; }
.tlc-body-INSTANCE { position:relative; flex:1; min-height:0; }
.tlc-scroll-INSTANCE { position:absolute; top:0; left:0; right:0; bottom:0; overflow-x:auto; overflow-y:hidden; scrollbar-width:thin; scrollbar-color:rgba(145,159,180,0.35) transparent; }
.tlc-scroll-INSTANCE::-webkit-scrollbar { height:5px; }
.tlc-scroll-INSTANCE::-webkit-scrollbar-track { background:transparent; }
.tlc-scroll-INSTANCE::-webkit-scrollbar-thumb { background:rgba(145,159,180,0.35); border-radius:3px; }
.tlc-scroll-INSTANCE.tlc-drag-INSTANCE { cursor:grab; }
.tlc-scroll-INSTANCE.tlc-dragging-INSTANCE { cursor:grabbing; }
.tlc-scroll-INSTANCE svg { display:block; user-select:none; }
.tlc-yaxis-INSTANCE { position:absolute; top:0; left:0; bottom:0; pointer-events:none; z-index:2; }
.tlc-fade-INSTANCE { position:absolute; top:0; width:26px; pointer-events:none; z-index:2; transition:opacity 0.2s ease; }
.tlc-jump-INSTANCE { position:absolute; top:0; right:2px; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; z-index:3; color:#DEDEDE; background:rgba(57,61,82,0.85); opacity:0; pointer-events:none; transition:opacity 0.2s ease, box-shadow 0.2s ease; }
.tlc-jump-INSTANCE:hover { box-shadow:0 0 8px 2px rgba(255,255,255,0.2); }
.tlc-jump-INSTANCE.tlc-on-INSTANCE { opacity:1; pointer-events:auto; }
.tlc-tip-INSTANCE { position:fixed; background:#151E2B; border:1px solid rgba(74,158,191,0.3); border-radius:5px; padding:5px 9px; font-family:Tahoma, Arial, sans-serif; font-size:11px; color:#DEDEDE; white-space:nowrap; pointer-events:none; opacity:0; transition:opacity 0.12s ease; z-index:10000; box-shadow:0 4px 12px rgba(0,0,0,0.4); }
.tlc-tip-lbl-INSTANCE { color:#8A9BB0; margin-right:6px; }
.tlc-tip-val-INSTANCE { font-weight:bold; color:#FFFFFF; }
@keyframes tlc-pulse-INSTANCE { 0% { opacity:0.55; r:4px; } 100% { opacity:0; r:13px; } }
.tlc-pulse-INSTANCE { animation:tlc-pulse-INSTANCE 1.8s ease-out infinite; }
</style>
</head>
<body>
<!-- [INPUT][DATA] Metric — Y-axis values (separator-joined numbers), e.g. "3031235;3069311;3161581" -->
<span id="mstr-data-y-INSTANCE" style="display:none">{[${v.yData}]}</span>
<!-- [INPUT][DATA] Attribute — X-axis time labels (separator-joined strings), e.g. "2026-W17;2026-W18;2026-W19" -->
<span id="mstr-data-x-INSTANCE" style="display:none">{[${v.xData}]}</span>
<!-- [INPUT][DATA] Metric — title tooltip {VALUE1} / {VALUE2} (optional), e.g. "41.2%" -->
<span id="mstr-data-t1-INSTANCE" style="display:none">${c.tipShow && v.tipValue1 ? '{[' + v.tipValue1 + ']}' : ''}</span>
<span id="mstr-data-t2-INSTANCE" style="display:none">${c.tipShow && v.tipValue2 ? '{[' + v.tipValue2 + ']}' : ''}</span>
<div id="tlc-root-INSTANCE"></div>
<script>
(function() {
/* ═══════════════════════════════════════════════════════════════
   CONFIGURATION — edit values below
   ═══════════════════════════════════════════════════════════════ */
var CONFIG = {
  title:           ${JSON.stringify(c.title)},
  headerValueShow: ${c.headerValueShow},
  separator:       ${JSON.stringify(c.separator)},
  valueFormat:     ${JSON.stringify(c.valueFormat)},   // 'compact' | 'full'
  decimals:        ${c.decimals},
  startPosition:   ${JSON.stringify(c.startPosition)}, // 'right' = open on latest data
  visiblePoints:   ${c.visiblePoints},
  minPointSpacing: ${c.minPointSpacing},
  wheelScroll:     ${c.wheelScroll},
  dragScroll:      ${c.dragScroll},
  lineColor:       ${JSON.stringify(c.lineColor)},
  lineWidth:       ${c.lineWidth},
  smooth:          ${c.smooth},
  areaFill:        ${c.areaFill},
  areaOpacity:     ${c.areaOpacity},
  dotShow:         ${c.dotShow},
  dotRadius:       ${c.dotRadius},
  lastPulse:       ${c.lastPulse},
  valueLabels:     ${JSON.stringify(c.valueLabels)},   // 'all' | 'minmax' | 'last' | 'none'
  labelColor:      ${JSON.stringify(c.labelColor)},
  labelFontSize:   ${c.labelFontSize},
  xLabelColor:     ${JSON.stringify(c.xLabelColor)},
  xLabelFontSize:  ${c.xLabelFontSize},
  xLabelRotate:    ${parseInt(c.xLabelRotate, 10) || 0},  // 0 | -45 | -90
  yAxisShow:       ${c.yAxisShow},
  gridShow:        ${c.gridShow},
  yFromZero:       ${c.yFromZero},
  bgColor:         ${JSON.stringify(c.bgColor)},
  borderShow:      ${c.borderShow},
  borderColor:     ${JSON.stringify(c.borderColor)},
  changePosColor:  ${JSON.stringify(c.changePosColor)},
  changeNegColor:  ${JSON.stringify(c.changeNegColor)},
};
var TOOLTIP = {
  show:      ${c.tipShow},
  html:      ${JSON.stringify(c.tipHtml)},  /* {VALUE1}/{VALUE2} = MSTR values; {LAST}, {PERIOD}, {CHANGE} = from chart data */
  font:      ${JSON.stringify(c.tipFont)},
  fontSize:  ${JSON.stringify(c.tipFontSize)},
  textColor: ${JSON.stringify(c.tipTextColor)},
};
/* ═══════════════════════════════════════════════════════════════ */
var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
var styleEl = document.getElementById('style-INSTANCE');
if (styleEl) { styleEl.id = 'style-' + uid; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid); }
['mstr-data-y-INSTANCE','mstr-data-x-INSTANCE','mstr-data-t1-INSTANCE','mstr-data-t2-INSTANCE','tlc-root-INSTANCE'].forEach(function(id) { var el = document.getElementById(id); if (el) el.id = id.split('INSTANCE').join(uid); });
var rootEl = document.getElementById('tlc-root-' + uid);
var SVGNS = 'http://www.w3.org/2000/svg';

/* ── Data ─────────────────────────────────────────────────────── */
function parseNum(s) {
  s = s.split(' ').join('').split(String.fromCharCode(160)).join('');
  if (/^-?[0-9]{1,3}(,[0-9]{3})+([.][0-9]+)?$/.test(s)) s = s.split(',').join('');
  else s = s.replace(',', '.');
  return parseFloat(s);
}
var rawY = ((document.getElementById('mstr-data-y-' + uid) || {}).textContent || '').split(CONFIG.separator);
var rawX = ((document.getElementById('mstr-data-x-' + uid) || {}).textContent || '').split(CONFIG.separator).map(function(s) { return s.trim(); });
var offset = rawX.length > rawY.length ? rawX.length - rawY.length : 0;
var values = [], labels = [];
for (var i = 0; i < rawY.length; i++) {
  var num = parseNum(rawY[i]);
  if (!isNaN(num)) { values.push(num); labels.push(rawX[i + offset] || ''); }
}
var n = values.length;
/* X-axis diagnostics — shown inside the chart so a broken MSTR binding is visible, not silent */
var xCount = rawX.filter(function(s) { return s.length > 0; }).length;
var xWarn = xCount === 0 ? 'X-axis data is empty \\u2014 check the X attribute in the container'
  : xCount !== rawY.length ? 'X-axis: ' + xCount + ' labels vs ' + rawY.length + ' values \\u2014 check separator "' + CONFIG.separator + '"'
  : '';
if (xWarn && window.console) console.warn('[Trend Line Chart] ' + xWarn);
var MAX_LBL = 20;
labels = labels.map(function(s) { return s.length > MAX_LBL ? s.slice(0, MAX_LBL - 1) + '\\u2026' : s; });

function fmtFull(x) { return x.toLocaleString('en-US', { maximumFractionDigits: CONFIG.decimals }); }
function fmtCompact(x) {
  var a = Math.abs(x);
  if (a >= 1e9) return (x / 1e9).toFixed(CONFIG.decimals) + 'B';
  if (a >= 1e6) return (x / 1e6).toFixed(CONFIG.decimals) + 'M';
  if (a >= 1e3) return (x / 1e3).toFixed(Math.min(CONFIG.decimals, 1)) + 'K';
  return fmtFull(x);
}
function fmt(x) { return CONFIG.valueFormat === 'full' ? fmtFull(x) : fmtCompact(x); }
function fmtAxis(x) { var a = Math.abs(x); if (a >= 1e9) return +(x / 1e9).toFixed(2) + 'B'; if (a >= 1e6) return +(x / 1e6).toFixed(2) + 'M'; if (a >= 1e3) return +(x / 1e3).toFixed(1) + 'K'; return +x.toFixed(2) + ''; }

/* ── DOM skeleton ─────────────────────────────────────────────── */
var card = document.createElement('div'); card.className = 'tlc-card-' + uid;
card.style.background = CONFIG.bgColor;
card.style.border = CONFIG.borderShow ? '1px solid ' + CONFIG.borderColor : 'none';
${c.helpId ? `card.setAttribute('data-help-id', ${JSON.stringify(c.helpId)});` : ''}
var header = null;
if (CONFIG.title || CONFIG.headerValueShow) {
  header = document.createElement('div'); header.className = 'tlc-header-' + uid;
  if (CONFIG.title) { var t = document.createElement('span'); t.className = 'tlc-title-' + uid; t.textContent = CONFIG.title; header.appendChild(t); }
  if (CONFIG.headerValueShow && n > 0) {
    var per = document.createElement('span'); per.className = 'tlc-period-' + uid; per.textContent = labels[n - 1]; header.appendChild(per);
    var hv = document.createElement('span'); hv.className = 'tlc-hval-' + uid; hv.textContent = fmtFull(values[n - 1]); header.appendChild(hv);
    if (n > 1 && values[n - 2] !== 0) {
      var pct = (values[n - 1] - values[n - 2]) / Math.abs(values[n - 2]) * 100;
      var hc = document.createElement('span'); hc.className = 'tlc-hchg-' + uid;
      hc.textContent = (pct > 0 ? '\\u25B2 +' : pct < 0 ? '\\u25BC ' : '\\u25A0 ') + pct.toFixed(1) + '%';
      hc.style.color = pct >= 0 ? CONFIG.changePosColor : CONFIG.changeNegColor;
      header.appendChild(hc);
    }
  }
  card.appendChild(header);
}
var body = document.createElement('div'); body.className = 'tlc-body-' + uid; card.appendChild(body);
var scroller = document.createElement('div'); scroller.className = 'tlc-scroll-' + uid + (CONFIG.dragScroll ? ' tlc-drag-' + uid : ''); body.appendChild(scroller);
var yAxis = document.createElement('div'); yAxis.className = 'tlc-yaxis-' + uid; body.appendChild(yAxis);
var fadeL = document.createElement('div'); fadeL.className = 'tlc-fade-' + uid; body.appendChild(fadeL);
var fadeR = document.createElement('div'); fadeR.className = 'tlc-fade-' + uid; fadeR.style.right = '0'; body.appendChild(fadeR);
var jumpBtn = document.createElement('div'); jumpBtn.className = 'tlc-jump-' + uid; jumpBtn.title = 'Jump to latest';
jumpBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 6 12 12 6 18"/><polyline points="12 6 18 12 12 18"/></svg>';
body.appendChild(jumpBtn);
if (xWarn) {
  var warnEl = document.createElement('div'); warnEl.textContent = '\\u26A0 ' + xWarn;
  warnEl.style.cssText = 'position:absolute;left:44px;right:8px;bottom:10px;z-index:3;font-size:10px;color:#E5A04B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;pointer-events:none;';
  body.appendChild(warnEl);
}
rootEl.appendChild(card);
var tip = document.createElement('div'); tip.className = 'tlc-tip-' + uid; document.body.appendChild(tip);

/* ── Title tooltip (hover on header) ──────────────────────────── */
if (TOOLTIP.show && header) {
  var tv1 = ((document.getElementById('mstr-data-t1-' + uid) || {}).textContent || '').trim();
  var tv2 = ((document.getElementById('mstr-data-t2-' + uid) || {}).textContent || '').trim();
  var chg = n > 1 && values[n - 2] !== 0 ? (values[n - 1] - values[n - 2]) / Math.abs(values[n - 2]) * 100 : null;
  var titleTip = document.createElement('div');
  titleTip.style.cssText = 'position:fixed;background:#1a2535;border:1px solid #2e3f55;box-shadow:0 4px 16px rgba(0,0,0,0.45);border-radius:6px;padding:10px 13px;min-width:200px;max-width:280px;white-space:normal;line-height:1.5;pointer-events:none;opacity:0;transition:opacity 0.15s ease;z-index:9999;font-family:' + TOOLTIP.font + ';font-size:' + TOOLTIP.fontSize + ';color:' + TOOLTIP.textColor + ';';
  titleTip.innerHTML = TOOLTIP.html.split('{VALUE1}').join(tv1).split('{VALUE2}').join(tv2)
    .split('{LAST}').join(n ? fmtFull(values[n - 1]) : '')
    .split('{PERIOD}').join(n ? labels[n - 1] : '')
    .split('{CHANGE}').join(chg === null ? '' : (chg >= 0 ? '+' : '') + chg.toFixed(1) + '%');
  document.body.appendChild(titleTip);
  header.style.cursor = 'help';
  header.addEventListener('mousemove', function(e) {
    var tw = titleTip.offsetWidth, th = titleTip.offsetHeight, px = e.clientX + 14, py = e.clientY + 14;
    if (px + tw > window.innerWidth) px = e.clientX - tw - 14;
    if (py + th > window.innerHeight) py = e.clientY - th - 14;
    titleTip.style.left = px + 'px'; titleTip.style.top = py + 'px'; titleTip.style.opacity = '1';
  });
  header.addEventListener('mouseleave', function() { titleTip.style.opacity = '0'; });
}

/* ── Helpers ──────────────────────────────────────────────────── */
function el(tag, attrs, parent) { var e = document.createElementNS(SVGNS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
function linePath(p) {
  var d = 'M' + p[0].x + ',' + p[0].y, k;
  if (!CONFIG.smooth || p.length < 3) { for (k = 1; k < p.length; k++) d += 'L' + p[k].x + ',' + p[k].y; return d; }
  /* monotone cubic (Fritsch–Carlson) — smooth, never overshoots the data */
  var m = [], tg = [], len = p.length;
  for (k = 0; k < len - 1; k++) m[k] = (p[k + 1].y - p[k].y) / (p[k + 1].x - p[k].x);
  tg[0] = m[0]; tg[len - 1] = m[len - 2];
  for (k = 1; k < len - 1; k++) tg[k] = m[k - 1] * m[k] <= 0 ? 0 : (m[k - 1] + m[k]) / 2;
  for (k = 0; k < len - 1; k++) {
    if (m[k] === 0) { tg[k] = 0; tg[k + 1] = 0; continue; }
    var a = tg[k] / m[k], b = tg[k + 1] / m[k], s = a * a + b * b;
    if (s > 9) { var q = 3 / Math.sqrt(s); tg[k] = q * a * m[k]; tg[k + 1] = q * b * m[k]; }
  }
  for (k = 0; k < len - 1; k++) {
    var h = (p[k + 1].x - p[k].x) / 3;
    d += 'C' + (p[k].x + h) + ',' + (p[k].y + tg[k] * h) + ',' + (p[k + 1].x - h) + ',' + (p[k + 1].y - tg[k + 1] * h) + ',' + p[k + 1].x + ',' + p[k + 1].y;
  }
  return d;
}
function niceStep(range, count) { var raw = range / count, p = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), f = raw / p; return (f < 1.5 ? 1 : f < 3 ? 2 : f < 7 ? 5 : 10) * p; }

/* ── Scroll state ─────────────────────────────────────────────── */
var stickEnd = CONFIG.startPosition !== 'left';
function atEnd() { return scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2; }
function updateEdges() {
  var end = atEnd();
  fadeL.style.opacity = scroller.scrollLeft > 2 ? '1' : '0';
  fadeR.style.opacity = end ? '0' : '1';
  if (end) jumpBtn.classList.remove('tlc-on-' + uid); else jumpBtn.classList.add('tlc-on-' + uid);
}
function scrollToEnd() { scroller.scrollLeft = scroller.scrollWidth; }
scroller.addEventListener('scroll', function() { stickEnd = atEnd(); updateEdges(); hideTip(); });
jumpBtn.addEventListener('click', function(e) { e.stopPropagation(); if (scroller.scrollTo) scroller.scrollTo({ left: scroller.scrollWidth, behavior: 'smooth' }); else scrollToEnd(); });
if (CONFIG.wheelScroll) {
  scroller.addEventListener('wheel', function(e) {
    var d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; var before = scroller.scrollLeft;
    scroller.scrollLeft += d; if (scroller.scrollLeft !== before) e.preventDefault();
  }, { passive: false });
}
var drag = null;
if (CONFIG.dragScroll) {
  scroller.addEventListener('mousedown', function(e) { if (e.button !== 0) return; drag = { x: e.clientX, s: scroller.scrollLeft }; scroller.classList.add('tlc-dragging-' + uid); e.preventDefault(); });
  document.addEventListener('mousemove', function(e) { if (drag) scroller.scrollLeft = drag.s - (e.clientX - drag.x); });
  document.addEventListener('mouseup', function() { if (drag) { drag = null; scroller.classList.remove('tlc-dragging-' + uid); } });
}
function hideTip() { tip.style.opacity = '0'; }

/* ── Render ───────────────────────────────────────────────────── */
var lastW = 0, lastH = 0;
function render() {
  var W = body.clientWidth, H = body.clientHeight;
  if (W < 20 || H < 20 || n === 0) return;
  if (W === lastW && H === lastH) return; lastW = W; lastH = H;
  var prevRatio = scroller.scrollWidth > scroller.clientWidth ? scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) : 0;
  var rot = CONFIG.xLabelRotate, xf = CONFIG.xLabelFontSize, lf = CONFIG.labelFontSize;
  var maxLblChars = 0; for (var i = 0; i < n; i++) maxLblChars = Math.max(maxLblChars, labels[i].length);
  var lblTextW = maxLblChars * xf * 0.58;
  var xAxisH = rot === 0 ? xf + 8 : rot === -90 ? lblTextW + 8 : lblTextW * 0.72 + 10;
  var padL = CONFIG.yAxisShow ? 40 : 6, padR = CONFIG.valueLabels === 'none' ? 12 : 26, padT = CONFIG.valueLabels === 'none' ? 8 : lf + 8, padB = xAxisH + 8;
  var plotH = Math.max(10, H - padT - padB);
  var avail = W - padL - padR;
  var spacing = n <= 1 ? 0 : n <= CONFIG.visiblePoints ? avail / (n - 1) : Math.max(CONFIG.minPointSpacing, avail / (CONFIG.visiblePoints - 1));
  var totalW = Math.max(W, padL + spacing * (n - 1) + padR);

  var lo = Math.min.apply(null, values), hi = Math.max.apply(null, values);
  var pad = (hi - lo) * 0.12 || Math.abs(hi) * 0.1 || 1; lo -= pad; hi += pad;
  if (CONFIG.yFromZero && Math.min.apply(null, values) >= 0) lo = 0;
  var step = niceStep(hi - lo, Math.max(2, Math.min(4, Math.floor(plotH / 28))));
  function Y(val) { return padT + (hi - val) / (hi - lo) * plotH; }
  function X(idx) { return n === 1 ? padL + avail / 2 : padL + idx * spacing; }
  var pts = values.map(function(val, idx) { return { x: X(idx), y: Y(val) }; });
  var baseY = padT + plotH;

  scroller.innerHTML = '';
  var svg = el('svg', { width: totalW, height: H }, scroller);
  var defs = el('defs', {}, svg);
  var grad = el('linearGradient', { id: 'tlc-grad-' + uid, x1: 0, y1: 0, x2: 0, y2: 1 }, defs);
  el('stop', { offset: '0%', 'stop-color': CONFIG.lineColor, 'stop-opacity': CONFIG.areaOpacity }, grad);
  el('stop', { offset: '100%', 'stop-color': CONFIG.lineColor, 'stop-opacity': 0 }, grad);
  var glow = el('filter', { id: 'tlc-glow-' + uid, x: '-20%', y: '-50%', width: '140%', height: '200%' }, defs);
  el('feGaussianBlur', { stdDeviation: 3, result: 'b' }, glow);
  var mg = el('feMerge', {}, glow); el('feMergeNode', { in: 'b' }, mg); el('feMergeNode', { in: 'SourceGraphic' }, mg);

  /* gridlines + y-axis labels (labels in a pinned overlay) */
  yAxis.innerHTML = ''; yAxis.style.width = padL + 'px';
  yAxis.style.background = CONFIG.bgColor;
  var ySvg = el('svg', { width: padL, height: H }, yAxis);
  for (var tv = Math.ceil(lo / step) * step; tv <= hi; tv += step) {
    var gy = Math.round(Y(tv)) + 0.5;
    if (CONFIG.gridShow) el('line', { x1: 0, x2: totalW, y1: gy, y2: gy, stroke: 'rgba(145,159,180,0.12)', 'stroke-width': 1 }, svg);
    if (CONFIG.yAxisShow) { var yt = el('text', { x: padL - 8, y: gy + 3, 'text-anchor': 'end', fill: '#6B7890', 'font-size': 9, 'font-family': 'Tahoma, Arial, sans-serif' }, ySvg); yt.textContent = fmtAxis(tv); }
  }
  fadeL.style.left = padL + 'px'; fadeL.style.height = (H - 6) + 'px';
  fadeL.style.background = 'linear-gradient(to right,' + CONFIG.bgColor + ', transparent)';
  fadeR.style.height = (H - 6) + 'px';
  fadeR.style.background = 'linear-gradient(to left,' + CONFIG.bgColor + ', transparent)';

  /* area + line */
  var d = linePath(pts);
  if (CONFIG.areaFill && n > 1) el('path', { d: d + 'L' + pts[n - 1].x + ',' + baseY + 'L' + pts[0].x + ',' + baseY + 'Z', fill: 'url(#tlc-grad-' + uid + ')' }, svg);
  if (n > 1) el('path', { d: d, fill: 'none', stroke: CONFIG.lineColor, 'stroke-width': CONFIG.lineWidth, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', filter: 'url(#tlc-glow-' + uid + ')' }, svg);

  /* x-axis labels — thinned, anchored to the LAST point so the latest period is always labelled */
  var need = rot === 0 ? lblTextW + 14 : xf * 1.5;
  var xStep = spacing > 0 ? Math.max(1, Math.ceil(need / spacing)) : 1;
  for (i = n - 1; i >= 0; i -= xStep) {
    var lx = pts[i].x, ly = baseY + 6 + xf;
    var xt = el('text', { x: lx, y: ly, fill: CONFIG.xLabelColor, 'font-size': xf, 'font-family': 'Tahoma, Arial, sans-serif', 'text-anchor': rot === 0 ? 'middle' : 'end' }, svg);
    if (rot !== 0) xt.setAttribute('transform', 'rotate(' + rot + ' ' + lx + ' ' + (baseY + 8) + ')'), xt.setAttribute('y', baseY + 8 + xf * 0.35);
    if (i === n - 1) { xt.setAttribute('fill', '#DEDEDE'); if (rot === 0) xt.setAttribute('text-anchor', 'end'), xt.setAttribute('x', lx + 6); }
    xt.textContent = labels[i];
  }

  /* points */
  var dotLayer = el('g', {}, svg);
  if (CONFIG.dotShow) for (i = 0; i < n; i++) el('circle', { cx: pts[i].x, cy: pts[i].y, r: i === n - 1 ? CONFIG.dotRadius + 1 : CONFIG.dotRadius, fill: CONFIG.lineColor, stroke: CONFIG.bgColor, 'stroke-width': 1.5 }, dotLayer);
  if (CONFIG.lastPulse) el('circle', { cx: pts[n - 1].x, cy: pts[n - 1].y, r: 4, fill: 'none', stroke: CONFIG.lineColor, 'stroke-width': 2, 'class': 'tlc-pulse-' + uid }, svg);

  /* value labels */
  var show = {};
  if (CONFIG.valueLabels === 'all') { var vStep = spacing > 0 ? Math.max(1, Math.ceil((fmt(hi).length * lf * 0.6 + 8) / spacing)) : 1; for (i = n - 1; i >= 0; i -= vStep) show[i] = 1; }
  if (CONFIG.valueLabels === 'minmax') { show[values.indexOf(Math.min.apply(null, values))] = 1; show[values.indexOf(Math.max.apply(null, values))] = 1; }
  if (CONFIG.valueLabels !== 'none') show[n - 1] = 1;
  for (var key in show) {
    i = +key;
    var nb = i === 0 ? values[1] : i === n - 1 ? values[n - 2] : (values[i - 1] + values[i + 1]) / 2;
    var above = nb === undefined || values[i] >= nb;
    var vy = above ? pts[i].y - CONFIG.dotRadius - 5 : pts[i].y + CONFIG.dotRadius + lf + 3;
    if (vy > baseY - 2) vy = pts[i].y - CONFIG.dotRadius - 5;
    var vt = el('text', { x: pts[i].x, y: vy, 'text-anchor': i === n - 1 ? 'end' : 'middle', fill: i === n - 1 ? '#FFFFFF' : CONFIG.labelColor, 'font-size': lf, 'font-weight': i === n - 1 ? 'bold' : 'normal', 'font-family': 'Tahoma, Arial, sans-serif', stroke: CONFIG.bgColor, 'stroke-width': 3, 'paint-order': 'stroke', 'stroke-linejoin': 'round' }, svg);
    if (i === n - 1) vt.setAttribute('x', pts[i].x + 4);
    vt.textContent = fmt(values[i]);
  }

  /* hover: crosshair + tooltip */
  var cross = el('line', { y1: padT - 4, y2: baseY, stroke: 'rgba(222,222,222,0.35)', 'stroke-width': 1, 'stroke-dasharray': '3 3', opacity: 0 }, svg);
  var hDot = el('circle', { r: CONFIG.dotRadius + 2.5, fill: CONFIG.lineColor, stroke: '#FFFFFF', 'stroke-width': 2, opacity: 0 }, svg);
  var hit = el('rect', { x: 0, y: 0, width: totalW, height: H, fill: 'transparent' }, svg);
  hit.addEventListener('mousemove', function(e) {
    if (drag) return;
    var r = svg.getBoundingClientRect(), mx = e.clientX - r.left;
    var idx = n === 1 ? 0 : Math.max(0, Math.min(n - 1, Math.round((mx - padL) / spacing)));
    var p = pts[idx];
    cross.setAttribute('x1', p.x); cross.setAttribute('x2', p.x); cross.setAttribute('opacity', 1);
    hDot.setAttribute('cx', p.x); hDot.setAttribute('cy', p.y); hDot.setAttribute('opacity', 1);
    tip.innerHTML = '<span class="tlc-tip-lbl-' + uid + '">' + labels[idx] + '</span><span class="tlc-tip-val-' + uid + '">' + fmtFull(values[idx]) + '</span>';
    tip.style.opacity = '1';
    var tw = tip.offsetWidth, th = tip.offsetHeight, tl = r.left + p.x - tw / 2, tt = r.top + p.y - th - 12;
    if (tl < 4) tl = 4; if (tl + tw > window.innerWidth - 4) tl = window.innerWidth - tw - 4; if (tt < 4) tt = r.top + p.y + 14;
    tip.style.left = tl + 'px'; tip.style.top = tt + 'px';
  });
  hit.addEventListener('mouseleave', function() { cross.setAttribute('opacity', 0); hDot.setAttribute('opacity', 0); hideTip(); });

  if (stickEnd) scrollToEnd(); else scroller.scrollLeft = prevRatio * (scroller.scrollWidth - scroller.clientWidth);
  updateEdges();
}

/* MSTR often lays out the container after the script runs → re-render on every size change */
var rafId = 0;
function schedule() { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(render); }
if (window.ResizeObserver) new ResizeObserver(schedule).observe(body); else window.addEventListener('resize', schedule);
schedule();
setTimeout(schedule, 300);
})();
<\/script>
</body>
</html>`;
  }
},

]; // end ELEMENTS
