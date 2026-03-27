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
      { key: 'changeDecimals', label: 'Change % decimal places',   type: 'number',  default: 1, min: 0, max: 4 },
      { key: 'separator',      label: 'Data separator (MSTR concat)', type: 'text', default: ';' },
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
<html>
<head>
<style id="style-INSTANCE">
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
<span id="mstr-data-y-INSTANCE" style="display:none">{[${v.yData}]}</span>
<span id="mstr-data-x-INSTANCE" style="display:none">{[${v.xData}]}</span>
<span id="mstr-data-status-INSTANCE" style="display:none">{[${v.statusData}]}</span>
<div id="kpi-root-INSTANCE"></div>
<script>
(function() {
var CONFIG = {
  title:          ${JSON.stringify(c.title)},
  valueDecimals:  ${c.valueDecimals},
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
var INFO_SVG = '<svg viewBox="0 0 22 22" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="7" r="1.2" fill="currentColor"/><rect x="10" y="9.8" width="2" height="6" rx="1" fill="currentColor"/></svg>';
var card = document.createElement('div'); card.className = 'kpi-card-' + uid;
var infoBtn = null;
if (CONFIG.infoShow && CONFIG.infoPosition === 'top-right') {
  infoBtn = document.createElement('div'); infoBtn.className = 'kpi-info-btn-' + uid;
  infoBtn.style.cssText = 'position:absolute;top:10px;right:10px;width:20px;height:20px;';
  infoBtn.innerHTML = INFO_SVG; card.appendChild(infoBtn);
}
var header = document.createElement('div'); header.className = 'kpi-header-' + uid;
if (CONFIG.infoPosition === 'top-right') header.style.justifyContent = 'flex-start';
var title = document.createElement('div'); title.className = 'kpi-title-' + uid; title.textContent = CONFIG.title; header.appendChild(title);
if (CONFIG.iconShow && CONFIG.iconSvg) {
  var catIcon = document.createElement('div'); catIcon.className = 'kpi-cat-icon-' + uid; catIcon.innerHTML = CONFIG.iconSvg;
  if (CONFIG.infoPosition === 'top-right') catIcon.style.cssText = 'margin-left:10px;margin-right:30px;flex-shrink:0;';
  header.appendChild(catIcon);
}
card.appendChild(header);
var valueRow = document.createElement('div'); valueRow.className = 'kpi-value-row-' + uid;
var valueEl = document.createElement('span'); valueEl.className = 'kpi-value-' + uid; valueEl.textContent = lastVal !== null ? lastVal.toFixed(CONFIG.valueDecimals) : '—'; valueRow.appendChild(valueEl);
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
var lbl = labels[idx] || ''; var val = values[idx].toFixed(CONFIG.valueDecimals);
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
    .mstr-container-INSTANCE {
      --header-bg-color:          ${c.headerBgColor};
      --header-bg-opacity:        ${c.headerBgOpacity};
      --body-bg-color:            ${c.bodyBgColor};
      --body-bg-opacity:          ${c.bodyBgOpacity};
      --border-color:             ${c.borderColor};
      --border-width:             ${c.borderWidth};
      --border-radius-preset:     "${c.borderRadiusPreset}";
      --border-radius-size:       ${c.borderRadiusSize};
      --header-height:            ${c.headerHeight};
      --container-width:          100%;
      --header-font-family:       ${c.headerFontFamily};
      --header-font-size:         ${c.headerFontSize};
      --header-font-weight:       ${c.headerFontWeight};
      --header-font-offset:       ${c.headerFontOffset};
      --header-font-color:        ${c.headerFontColor};
      --header-divider-color:     ${c.dividerColor};
      --header-divider-width:     ${c.dividerWidth};
      --header-divider-height:    ${c.dividerHeight};
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
<span id="val-metric-INSTANCE" style="display:none">{[${v.metricValue}]}</span>
<div id="root-INSTANCE"></div>
<script>
(function () {
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
    html:      ${JSON.stringify(c.tooltipHtml)},
    font:      ${JSON.stringify(c.tooltipFont)},
    fontSize:  ${JSON.stringify(c.tooltipFontSize)},
    textColor: ${JSON.stringify(c.tooltipTextColor)},
  };
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
<html>
<head>
<meta charset="UTF-8">
<style>html,body{margin:0;padding:0;height:100%;background:transparent;overflow:hidden;}</style>
<style id="style-INSTANCE">
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
  var uid = Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
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
<html>
<head>
<style id="style-INSTANCE">
  .root-INSTANCE { display:inline-block; position:relative; padding:6px 0 0 6px; }
  .icon-btn-INSTANCE { width:${c.iconSize}; height:${c.iconSize}; border-radius:50%; background:transparent; color:#A7C4E5; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:color 0.2s ease,box-shadow 0.2s ease; user-select:none; padding:0; box-sizing:border-box; }
  .icon-btn-INSTANCE:hover { color:#D0E6F7; box-shadow:0 0 8px 2px rgba(167,196,229,0.5); border-radius:50%; }
  .icon-btn-INSTANCE.active-INSTANCE { color:#7EB3D8; box-shadow:0 0 8px 2px rgba(36,219,201,0.45); border-radius:50%; }
</style>
</head>
<body>
<span id="val-reason-INSTANCE" style="display:none">{[${v.reasonValue}]}</span>
<div id="root-INSTANCE"></div>
<script>
(function () {
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
    linkTargetText: ${JSON.stringify(c.linkTarget)}, linkColor: ${JSON.stringify(c.linkColor)}, linkHoverColor: ${JSON.stringify(c.linkHoverColor)},
  };
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
    return `<style id="ts-INSTANCE">
.ts-wrap-INSTANCE { display:flex; align-items:center; justify-content:flex-end; gap:${c.gap}; padding:4px 0; font-family:${c.fontFamily}; font-size:${c.fontSize}; }
.ts-btn-INSTANCE { padding:4px 2px 6px; border:none; border-bottom:2px solid transparent; background:none; color:${c.inactiveColor}; cursor:pointer; transition:color 0.15s,border-color 0.15s; user-select:none; letter-spacing:0.3px; }
.ts-btn-INSTANCE:hover { color:${c.hoverColor}; }
.ts-btn-INSTANCE.ts-active-INSTANCE { color:${c.activeColor}; border-bottom-color:${c.activeColor}; }
.ts-btn-INSTANCE.ts-busy-INSTANCE { opacity:0.4; pointer-events:none; }
</style>
<div id="ts-root-INSTANCE">
  <div class="ts-wrap-INSTANCE" id="ts-buttons-INSTANCE"></div>
</div>
<script>
(function() {
  var BUTTONS = [
${btnsDef}
  ];
  var ALL_SELECTORS    = [${allSelectors.join(', ')}];
  var DEFAULT_LABEL    = ${JSON.stringify(c.defaultLabel)};
  var STORAGE_KEY      = ${JSON.stringify(c.storageKey)};
  var INIT_DELAY_MS    = 1500;
  var WAIT_POLL_MS     = 300;
  var WAIT_TIMEOUT_MS  = 10000;
  var busy = false;
  var uid = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('ts-INSTANCE'); if (styleEl) styleEl.textContent = styleEl.textContent.split('INSTANCE').join(uid);
  var rootEl = document.getElementById('ts-root-INSTANCE'); if (rootEl) rootEl.id = 'ts-root-' + uid;
  var btnBar = document.getElementById('ts-buttons-INSTANCE'); if (btnBar) { btnBar.id = 'ts-buttons-' + uid; btnBar.className = btnBar.className.split('INSTANCE').join(uid); }
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
  function executeSequential(changes, index) { if (index >= changes.length) { setBusy(false); return; } clickMstrSelector(changes[index].selector, changes[index].value); if (index + 1 < changes.length) { waitForIdle(function() { executeSequential(changes, index + 1); }); } else { setTimeout(function() { setBusy(false); }, 500); } }
  function setBusy(state) { busy = state; var allBtns = btnBar.querySelectorAll('[data-label]'); for (var i = 0; i < allBtns.length; i++) { allBtns[i].className = 'ts-btn-' + uid + (state ? ' ts-busy-' + uid : (allBtns[i].getAttribute('data-label') === getCurrentActive() ? ' ts-active-' + uid : '')); } }
  function getCurrentActive() { try { return localStorage.getItem(STORAGE_KEY); } catch(e) { return DEFAULT_LABEL; } }
  function waitForIdle(cb) { var started = Date.now(); setTimeout(function poll() { if (Date.now() - started > WAIT_TIMEOUT_MS) { cb(); return; } isMstrLoading() ? setTimeout(poll, WAIT_POLL_MS) : setTimeout(cb, 300); }, 800); }
  function isMstrLoading() { var ind = document.querySelectorAll('[class*="loading"],[class*="Loading"],[class*="spinner"],[class*="Spinner"],[class*="progress"],[class*="Progress"],[class*="wait"],[class*="Wait"],.mstrmojo-LoadingDialog,.mstrmojo-WaitBox'); for (var i = 0; i < ind.length; i++) { if (ind[i].offsetParent !== null || ind[i].offsetWidth > 0) return true; } return false; }
  function setActiveButton(label) { var allBtns = btnBar.querySelectorAll('[data-label]'); for (var i = 0; i < allBtns.length; i++) { var isA = allBtns[i].getAttribute('data-label') === label; allBtns[i].className = 'ts-btn-' + uid + (isA ? ' ts-active-' + uid : ''); } }
  function saveValue(label) { try { localStorage.setItem(STORAGE_KEY, label); } catch(e) {} }
  function readMstrSelectorValue(selectorName) { var c = findMstrContainer(selectorName); if (!c) return null; var items = c.querySelectorAll('[role="radio"],[role="checkbox"]'); for (var i = 0; i < items.length; i++) { if (items[i].getAttribute('aria-checked') === 'true') return items[i].innerText.trim(); } return null; }
  function clickMstrSelector(selectorName, value) { try { var c = findMstrContainer(selectorName); if (!c) return false; var items = c.querySelectorAll('[role="radio"],[role="checkbox"],[role="option"]'); var target = null; for (var i = 0; i < items.length; i++) { if (items[i].innerText.trim() === value) target = items[i]; } if (target) { simulateClick(target); return true; } return false; } catch(e) { return false; } }
  function findMstrContainer(name) { var cands = document.querySelectorAll('[class*="title"],[class*="Title"],[class*="label"],[class*="Label"],[class*="titlebar"],[class*="Titlebar"]'); var matched = null; for (var i = 0; i < cands.length; i++) { if (cands[i].innerText.trim() === name) matched = cands[i]; } if (!matched) { var all = document.querySelectorAll('*'); for (var j = 0; j < all.length; j++) { if (all[j].children.length < 3 && all[j].innerText.trim() === name) matched = all[j]; } } if (!matched) return null; var el = matched; var maxUp = 15; while (el && maxUp-- > 0) { if (el.querySelector && el.querySelector('[role="radio"],[role="checkbox"],[role="option"]')) return el; el = el.parentElement; } return null; }
  function simulateClick(el) { ['mousedown','mouseup','click'].forEach(function(t) { el.dispatchEvent(new MouseEvent(t, { bubbles:true, cancelable:true, view:window })); }); }
  setTimeout(function() { var saved = null; try { saved = localStorage.getItem(STORAGE_KEY); } catch(e) {} var validLabels = BUTTONS.map(function(b) { return b.label; }); var initLabel = (saved && validLabels.indexOf(saved) >= 0) ? saved : DEFAULT_LABEL; applySelection(initLabel); }, INIT_DELAY_MS);
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
        col1: 'Display label', col2: 'Native MSTR button text',
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
  var PANELS = [
${panelsDef}
  ];
  var DEFAULT_PANEL = ${c.defaultPanel};
  var MAX_RETRIES = 15; var RETRY_MS = 500;
  var SUFFIX = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  var styleEl = document.getElementById('style-INSTANCE'); if (styleEl) { styleEl.id = 'style-' + SUFFIX; styleEl.textContent = styleEl.textContent.split('INSTANCE').join(SUFFIX); }
  var allEls = document.querySelectorAll('[class*="INSTANCE"]'); for (var i = 0; i < allEls.length; i++) { allEls[i].className = allEls[i].className.split('INSTANCE').join(SUFFIX); }
  var tabsContainer = document.getElementById('tabs-INSTANCE'); if (tabsContainer) tabsContainer.id = 'tabs-' + SUFFIX;
  var tabs = document.getElementById('tabs-' + SUFFIX); var tabElements = [];
  PANELS.forEach(function(panel, idx) { var tab = document.createElement('div'); tab.className = SUFFIX + '-tab'; tab.textContent = panel.label; if (idx === DEFAULT_PANEL) tab.className += ' ' + SUFFIX + '-active'; tab.addEventListener('click', function() { onTabClick(idx); }); tabs.appendChild(tab); tabElements.push(tab); });
  function onTabClick(idx) { setActiveTab(idx); clickNativeButton(PANELS[idx].native); }
  function setActiveTab(idx) { var activeCls = SUFFIX + '-active'; tabElements.forEach(function(el, i) { if (i === idx) { if (el.className.indexOf(activeCls) === -1) el.className += ' ' + activeCls; } else { el.className = el.className.split(' ' + activeCls).join('').split(activeCls).join(''); } }); }
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
  effectDescription: 'Global CSS override for MSTR grid (Xtab) elements. Removes the default white/coloured cell highlight on hover and replaces it with a subtle text-shadow glow effect. Applies to all grids on the page; charts and HTML containers are unaffected.',
  groups: [
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
    const glowRule = c.disableGlow ? '' : `
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox:hover td.xtab-td {
    text-shadow: 0 0 ${c.glowRadius1}px rgba(255,255,255,${c.glowAlpha1}),
                 0 0 ${c.glowRadius2}px rgba(255,255,255,${c.glowAlpha2}) !important;
    transition: text-shadow 0.3s ease !important;
  }`;
    return `<div id="hover-override-${uid}">
  <div id="hover-info-${uid}">
    <b>Grid Hover Override</b><br>
    Replaces default MSTR white rectangle hover highlight on grid elements with a subtle text glow effect.
  </div>
</div>
<style id="hover-style-${uid}">
  #hover-info-${uid} { font-family:'Segoe UI',Tahoma,sans-serif; font-size:10px; color:#8899aa; line-height:1.5; padding:6px 8px; border-left:2px solid #4A9EBF; margin:2px 0; background:rgba(74,158,191,0.05); border-radius:0 3px 3px 0; }
  #hover-info-${uid} b { color:#4A9EBF; }
  td.xtab-td:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-XtabZone:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-Xtab:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-Xtab-content:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-Xtab .mstrmojo-scrollNode:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox:hover { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox:hover > .mstrmojo-UnitContainer-SplitterHost { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox:hover .mstrmojo-UnitContainer-ContentBox { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-root.mstrmojo-VIBox:hover .mstrmojo-UnitContainer-content { background-color:transparent !important; background:transparent !important; }
  .mstrmojo-UnitContainer-titlebar:hover { background-color:transparent !important; background:transparent !important; }${glowRule}
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
<html lang="cs">
<head>
<meta charset="UTF-8">
<style>
  html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden; background:transparent; }
</style>
</head>
<body>
<script>
const MODE = ${JSON.stringify(c.mode)};
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

]; // end ELEMENTS
