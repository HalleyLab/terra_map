const regions = [
  { key: "bolivar", name: "BOLIVAR / 玻利瓦尔", shortName: "玻利瓦尔", color: "#8ca0a8", points: "275,160 392,145 448,205 390,268 278,255 235,205" },
  { key: "columbia", name: "COLUMBIA / 哥伦比亚", shortName: "哥伦比亚", color: "#d7edf3", points: "450,170 670,145 770,230 680,312 462,296 350,220" },
  { key: "sargon", name: "SARGON / 萨尔贡", shortName: "萨尔贡", color: "#62bd67", points: "80,350 420,315 575,450 450,605 130,575 35,470" },
  { key: "minos", name: "MINOS / 米诺斯", shortName: "米诺斯", color: "#e4f5ee", points: "515,300 635,290 680,355 615,425 505,410 455,352" },
  { key: "siesta", name: "SIESTA / 汐斯塔", shortName: "汐斯塔", color: "#e5edf7", points: "680,325 805,318 860,385 792,450 675,430 630,370" },
  { key: "sami", name: "SAMI / 萨米", shortName: "萨米", color: "#62b5ef", points: "690,58 815,52 862,118 800,170 682,155 640,95" },
  { key: "kjerag", name: "KJERAG / 谢拉格", shortName: "谢拉格", color: "#e9f2f7", points: "690,175 830,160 890,238 815,305 680,285 635,220" },
  { key: "kazimierz", name: "KAZIMIERZ / 卡西米尔", shortName: "卡西米尔", color: "#f8e64a", points: "810,120 1018,95 1115,188 1010,285 820,265 730,185" },
  { key: "victoria", name: "VICTORIA / 维多利亚", shortName: "维多利亚", color: "#ff9e1a", points: "780,250 1030,235 1135,360 1028,482 790,455 682,335" },
  { key: "leithanien", name: "LEITHANIEN / 莱塔尼亚", shortName: "莱塔尼亚", color: "#a83dd6", points: "1015,205 1228,198 1300,300 1192,390 1000,360 940,275" },
  { key: "laterano", name: "LATERANO / 拉特兰", shortName: "拉特兰", color: "#f3efd7", points: "1030,345 1200,345 1265,435 1182,520 1022,492 958,420" },
  { key: "iberia", name: "IBERIA / 伊比利亚", shortName: "伊比利亚", color: "#dce645", points: "940,445 1228,430 1345,560 1200,720 960,660 875,525" },
  { key: "ursus", name: "URSUS / 乌萨斯", shortName: "乌萨斯", color: "#dd2b2f", points: "1030,35 1415,30 1535,145 1435,255 1085,230 935,120" },
  { key: "chernobog", name: "CHERNOBOG / 切尔诺伯格", shortName: "切尔诺伯格", color: "#dd2b2f", points: "1240,120 1298,112 1322,155 1285,190 1230,178 1210,142" },
  { key: "lungmen", name: "LUNGMEN / 龙门", shortName: "龙门", color: "#ffd032", points: "1345,115 1410,110 1440,158 1398,200 1335,188 1312,148" },
  { key: "kazdel", name: "KAZDEL / 卡兹戴尔", shortName: "卡兹戴尔", color: "#dfe8ec", points: "1245,202 1470,200 1575,315 1460,420 1248,400 1160,290" },
  { key: "siracusa", name: "SIRACUSA / 叙拉古", shortName: "叙拉古", color: "#a6d768", points: "1190,275 1332,275 1390,365 1310,450 1175,430 1115,350" },
  { key: "rim", name: "RIM BILLITON / 雷姆必拓", shortName: "雷姆必拓", color: "#9d7461", points: "1325,365 1545,360 1645,485 1540,600 1315,570 1230,455" },
  { key: "yan", name: "YEN / 炎国", shortName: "炎国", color: "#ffc429", points: "1495,120 1780,110 1865,230 1755,360 1488,335 1395,220" },
  { key: "higashi", name: "HIGASHI / 东国", shortName: "东国", color: "#2ab2ad", points: "1575,42 1725,42 1770,115 1692,178 1565,158 1518,90" },
];

const events = [
  { id: "y797", year: "797", sortYear: 797, regionKey: "leithanien", place: "七城联邦", type: "state", title: "七城联邦覆灭", text: "七城联邦覆灭，旧政治秩序走向终结。" },
  { id: "y845", year: "845", sortYear: 845, regionKey: "columbia", place: "哥伦比亚", type: "state", title: "拓殖活动启动", text: "哥伦比亚方向的移民与拓殖活动开始活跃。" },
  { id: "y885", year: "885", sortYear: 885, regionKey: "iberia", place: "伊比利亚", type: "culture", title: "海外扩张", text: "伊比利亚依靠航海与技术力量走向远海。" },
  { id: "y897", year: "897", sortYear: 897, regionKey: "leithanien", place: "莱塔尼亚", type: "state", title: "巫王统治确立", text: "莱塔尼亚进入巫王相关的高压政治时期。" },
  { id: "y898", year: "898", sortYear: 898, regionKey: "kazdel", place: "卡兹戴尔", type: "war", title: "内战爆发", text: "卡兹戴尔内部矛盾激化，漫长内战成为萨卡兹历史主线。" },
  { id: "y913", year: "913", sortYear: 913, regionKey: "iberia", place: "伊比利亚", type: "culture", title: "海洋威胁进入记录", text: "关于深海与恐鱼的记述开始进入伊比利亚记录。" },
  { id: "y930", year: "930", sortYear: 930, regionKey: "iberia", place: "伊比利亚", type: "culture", title: "黄金时代", text: "伊比利亚远洋、科学与城市文明达到高峰。" },
  { id: "y969", year: "969", sortYear: 969, regionKey: "leithanien", place: "莱塔尼亚", type: "state", title: "权力重组", text: "莱塔尼亚统治结构出现关键更替。" },
  { id: "y990", year: "990", sortYear: 990, regionKey: "columbia", place: "哥伦比亚", type: "state", title: "哥伦比亚命名", text: "维多利亚发现并命名新的地区为哥伦比亚。" },
  { id: "y1016", year: "1016-1019", sortYear: 1016, regionKey: "victoria", place: "高卢 / 四国", type: "war", title: "第七次高卢战争", text: "高卢扩张引发列强冲突，成为四国战争前奏。" },
  { id: "y1029", year: "1029-1031", sortYear: 1029, regionKey: "leithanien", place: "高卢 / 莱塔尼亚", type: "war", title: "高卢与莱塔尼亚战争", text: "列强平衡被打破，旧大国秩序加速崩解。" },
  { id: "y1031", year: "1031", sortYear: 1031, regionKey: "kazdel", place: "卡兹戴尔", type: "war", title: "军事委员会形成", text: "卡兹戴尔战争议会改组为军事委员会。" },
  { id: "y1038", year: "1038", sortYear: 1038, regionKey: "iberia", place: "伊比利亚", type: "war", title: "大静谧爆发", text: "大静谧爆发，伊比利亚王国崩溃。" },
  { id: "y1039", year: "1039", sortYear: 1039, regionKey: "siracusa", place: "叙拉古", type: "state", title: "城邦联合议事会成立", text: "叙拉古城邦与家族势力在新制度下重组。" },
  { id: "y1050", year: "1050", sortYear: 1050, regionKey: "bolivar", place: "玻利瓦尔", type: "state", title: "自治运动爆发", text: "玻利瓦尔自治运动爆发，地区局势长期动荡。" },
  { id: "y1062", year: "1062", sortYear: 1062, regionKey: "ursus", place: "乌萨斯 / 卡兹戴尔", type: "war", title: "乌萨斯与卡兹戴尔战争结束", text: "北方帝国与萨卡兹之间的军事创伤继续延伸。" },
  { id: "y1063", year: "1063", sortYear: 1063, regionKey: "laterano", place: "拉特兰", type: "culture", title: "新一代教宗继位", text: "拉特兰信仰共同体维持其独特的国际影响。" },
  { id: "y1073", year: "1073", sortYear: 1073, regionKey: "ursus", place: "乌萨斯", type: "state", title: "皇帝驾崩", text: "乌萨斯帝国进入动荡的权力过渡。" },
  { id: "y1074", year: "1074-1076", sortYear: 1074, regionKey: "ursus", place: "乌萨斯", type: "war", title: "大叛乱", text: "乌萨斯帝国秩序遭遇严重冲击。" },
  { id: "y1077", year: "1077", sortYear: 1077, regionKey: "victoria", place: "维多利亚", type: "state", title: "女皇时代", text: "王权、贵族与继承问题塑造近代政治危机。" },
  { id: "y1091", year: "1091", sortYear: 1091, regionKey: "kjerag", place: "谢拉格", type: "modern", title: "对外开放", text: "雪境国家迈向外部贸易和现代政治。" },
  { id: "y1096", year: "1096-1097", sortYear: 1096, regionKey: "lungmen", place: "切尔诺伯格 / 龙门", type: "modern", title: "切尔诺伯格-龙门事件", text: "整合运动、切尔诺伯格与龙门卷入危机。" },
  { id: "y1098", year: "1098", sortYear: 1098, regionKey: "victoria", place: "维多利亚", type: "modern", title: "维多利亚事件", text: "王权、诸公爵和外来势力交错，改变大国格局。" },
  { id: "y1099", year: "1099", sortYear: 1099, regionKey: "yan", place: "万国峰会", type: "modern", title: "第一届泰拉摇篮万国峰会", text: "各国议题首次被放入更明确的国际框架中讨论。" },
];

const typeNames = { war: "战争", state: "国家", culture: "文化", modern: "近代" };
const canvas = document.querySelector("#terraCanvas");
const ctx = canvas.getContext("2d");
const baseCanvas = document.createElement("canvas");
baseCanvas.width = canvas.width;
baseCanvas.height = canvas.height;
const baseCtx = baseCanvas.getContext("2d");
const regionPanel = document.querySelector(".region-panel");
const timeline = document.querySelector("#timeline");
const regionTimeline = document.querySelector("#regionTimeline");
const regionTitle = document.querySelector("#regionTitle");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
const tabs = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const clearRegion = document.querySelector("#clearRegion");

const hex = { w: 14.4, h: 8.2, stepX: 21.5, stepY: 12.4, depth: 20 };
const regionScale = {
  sargon: 0.5,
  yan: 0.52,
  iberia: 0.54,
  victoria: 0.58,
  ursus: 0.82,
  columbia: 0.62,
  kazdel: 0.62,
  kazimierz: 0.64,
  leithanien: 0.64,
  rim: 0.64,
  bolivar: 0.66,
  laterano: 0.66,
  siracusa: 0.66,
  kjerag: 0.68,
  minos: 0.68,
  siesta: 0.68,
  sami: 0.74,
  higashi: 0.74,
  chernobog: 0.8,
  lungmen: 0.8,
};
const regionShapes = regions.map((region) => {
  const polygon = parsePoints(region.points);
  return {
    ...region,
    polygon,
    tilePolygon: scalePolygon(polygon, regionScale[region.key] ?? 0.74),
  };
});
const labelPositions = Object.fromEntries(regionShapes.map((region) => [region.key, polygonCenter(region.polygon)]));
let activeRegion = null;
let activeFilter = "all";
let hitTiles = [];
let hoverRegion = null;
let baseReady = false;
let timeStart = performance.now();

function parsePoints(points) {
  return points.split(" ").map((pair) => pair.split(",").map(Number));
}

function polygonCenter(points) {
  const total = points.reduce((sum, point) => [sum[0] + point[0], sum[1] + point[1]], [0, 0]);
  return [total[0] / points.length, total[1] / points.length];
}

function scalePolygon(points, scale) {
  const [cx, cy] = polygonCenter(points);
  return points.map(([x, y]) => [cx + (x - cx) * scale, cy + (y - cy) * scale]);
}

function pointInPolygon(x, y, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function inLand(x, y) {
  const main = ((x - 910) / 900) ** 2 + ((y - 310) / 245) ** 2 < 1;
  const west = ((x - 360) / 380) ** 2 + ((y - 370) / 220) ** 2 < 1;
  const east = ((x - 1560) / 350) ** 2 + ((y - 280) / 180) ** 2 < 1;
  const south = ((x - 1060) / 340) ** 2 + ((y - 560) / 170) ** 2 < 1;
  const northBite = ((x - 505) / 210) ** 2 + ((y - 125) / 80) ** 2 < 1;
  const eastBite = ((x - 1540) / 280) ** 2 + ((y - 540) / 115) ** 2 < 1;
  return (main || west || east || south) && !northBite && !eastBite;
}

function hexPoints(cx, cy, grow = 0) {
  const w = hex.w + grow;
  const h = hex.h + grow * 0.57;
  return [
    [cx, cy - h],
    [cx + w, cy - h / 2],
    [cx + w, cy + h / 2],
    [cx, cy + h],
    [cx - w, cy + h / 2],
    [cx - w, cy - h / 2],
  ];
}

function drawPolygon(target, points, fill, stroke = null, lineWidth = 1) {
  target.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) target.moveTo(x, y);
    else target.lineTo(x, y);
  });
  target.closePath();
  target.fillStyle = fill;
  target.fill();
  if (stroke && lineWidth > 0) {
    target.strokeStyle = stroke;
    target.lineWidth = lineWidth;
    target.stroke();
  }
}

function shade(color, amount) {
  const raw = color.replace("#", "");
  const values = [0, 2, 4].map((start) => parseInt(raw.slice(start, start + 2), 16));
  const next = values.map((value) => Math.max(0, Math.min(255, value + amount)));
  return `rgb(${next.join(",")})`;
}

function tilePath(points) {
  const path = new Path2D();
  points.forEach(([x, y], index) => {
    if (index === 0) path.moveTo(x, y);
    else path.lineTo(x, y);
  });
  path.closePath();
  return path;
}

function drawHexPrism(target, x, y, color, options = {}) {
  const top = hexPoints(x, y, options.grow ?? 0);
  const bottom = top.map(([px, py]) => [px, py + (options.depth ?? hex.depth)]);
  drawPolygon(target, [top[3], top[4], bottom[4], bottom[3]], shade(color, -64));
  drawPolygon(target, [top[1], top[2], bottom[2], bottom[1]], shade(color, -42));
  drawPolygon(target, [top[2], top[3], bottom[3], bottom[2]], shade(color, -78));
  drawPolygon(target, top, color, options.stroke ?? "rgba(40, 68, 80, 0.14)", options.strokeWidth ?? 0.35);
  if (options.shine) {
    drawPolygon(target, [top[0], top[1], [x + 3, y], top[5]], `rgba(255,255,255,${options.shine})`);
  }
  if (options.key) {
    hitTiles.push({ key: options.key, path: tilePath(top) });
  }
}

function drawBackground(target) {
  target.fillStyle = "#547381";
  target.fillRect(0, 0, canvas.width, canvas.height);
  target.fillStyle = "#0b131a";
  target.font = "900 36px Arial, sans-serif";
  target.fillText("PRTS", 84, 96);
  target.font = "900 15px Arial, sans-serif";
  target.fillText("SYNTHESIZE INFORMATION", 85, 122);
  target.font = "500 24px Arial, sans-serif";
  target.fillText("ANALYSIS  OS", 85, 148);
}

function buildLandTiles() {
  const tiles = [];
  const rows = 49;
  const cols = 92;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const x = 40 + col * hex.stepX + (row % 2 ? hex.stepX / 2 : 0);
      const y = 72 + row * hex.stepY;
      if (inLand(x, y)) tiles.push({ x, y, row, col });
    }
  }
  return tiles;
}

const landTiles = buildLandTiles();
const regionTiles = new Map(regionShapes.map((region) => [
  region.key,
  landTiles.filter((tile) => pointInPolygon(tile.x, tile.y, region.tilePolygon)),
]));

function renderBaseCache() {
  if (baseReady) return;
  baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
  drawBackground(baseCtx);
  baseCtx.save();
  baseCtx.shadowColor = "rgba(7, 20, 30, 0.46)";
  baseCtx.shadowBlur = 28;
  baseCtx.shadowOffsetX = 26;
  baseCtx.shadowOffsetY = 40;
  landTiles.forEach((tile) => {
    const edge = !inLand(tile.x - hex.stepX, tile.y) || !inLand(tile.x + hex.stepX, tile.y) || !inLand(tile.x, tile.y + hex.stepY);
    if (edge) drawHexPrism(baseCtx, tile.x, tile.y + 12, "#304855", { depth: 25, grow: 0.6, stroke: "rgba(8,16,22,0.22)" });
  });
  landTiles.forEach((tile) => {
    const shine = 0.03 + ((tile.row + tile.col) % 4) * 0.028;
    drawHexPrism(baseCtx, tile.x, tile.y, "#eef8fb", { depth: 24, grow: 0.65, shine, strokeWidth: 0.2 });
  });
  baseCtx.restore();
  baseReady = true;
}

function renderRegions(time = 0) {
  hitTiles = [];
  regionShapes.forEach((region) => {
    const isActive = activeRegion === region.key || hoverRegion === region.key;
    const pulse = isActive ? Math.sin(time * 0.006) * 2.2 : 0;
    const tiles = regionTiles.get(region.key) || [];
    tiles.forEach((tile) => {
      ctx.save();
      if (activeRegion && activeRegion !== region.key) ctx.globalAlpha = 0.42;
      const shine = 0.045 + ((tile.row * 2 + tile.col) % 5) * 0.018;
      drawHexPrism(ctx, tile.x, tile.y - 6 - pulse, region.color, {
        depth: 26,
        grow: 3.35,
        shine,
        key: region.key,
        stroke: null,
        strokeWidth: 0,
      });
      ctx.restore();
    });
  });
}

function drawLabels() {
  regionShapes.forEach((region) => {
    const [x, y] = labelPositions[region.key];
    const lines = region.name.includes(" / ") ? [region.name] : region.name.split("\n");
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = region.key === "chernobog" || region.key === "lungmen" ? "900 15px Arial, sans-serif" : "900 27px Arial, sans-serif";
    ctx.lineJoin = "round";
    ctx.shadowColor = "rgba(0,0,0,0.5)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 3;
    lines.forEach((line, index) => {
      const lineY = y + index * 24;
      ctx.strokeStyle = "#071017";
      ctx.lineWidth = region.key === "chernobog" || region.key === "lungmen" ? 5 : 7;
      ctx.strokeText(line, x, lineY);
      ctx.fillStyle = "#ffffff";
      ctx.fillText(line, x, lineY);
    });
    ctx.restore();
  });
}

function renderMap(time = performance.now()) {
  renderBaseCache();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseCanvas, 0, 0);
  renderRegions(time);
  drawLabels();
}

function regionEvents(regionKey = activeRegion) {
  return events.filter((event) => !regionKey || event.regionKey === regionKey);
}

function eventCard(event) {
  const region = regions.find((item) => item.key === event.regionKey);
  return `
    <article class="event">
      <div class="event-year">
        <span class="year">${event.year}</span>
        <span class="place">${region ? region.shortName : event.place}</span>
      </div>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
      <span class="tag">${typeNames[event.type]}</span>
    </article>
  `;
}

function filteredEvents() {
  const query = searchInput.value.trim().toLowerCase();
  return events.filter((event) => {
    const region = regions.find((item) => item.key === event.regionKey);
    const filterMatch = activeFilter === "all" || event.type === activeFilter;
    const queryText = `${event.year} ${event.place} ${region?.name || ""} ${event.title} ${event.text}`.toLowerCase();
    return filterMatch && (!query || queryText.includes(query));
  });
}

function renderTimelines() {
  const selectedEvents = regionEvents();
  const activeRegionObject = regions.find((region) => region.key === activeRegion);
  regionPanel.classList.toggle("open", Boolean(activeRegionObject));
  regionTitle.textContent = activeRegionObject ? activeRegionObject.name : "选择地区";
  regionTimeline.innerHTML = selectedEvents.length && activeRegionObject
    ? selectedEvents.map(eventCard).join("")
    : `<p class="empty">这个地区暂时没有整理到年表事件。</p>`;
  const all = filteredEvents();
  timeline.innerHTML = all.length ? all.map(eventCard).join("") : `<p class="empty">没有找到匹配事件。</p>`;
}

function selectRegion(regionKey) {
  activeRegion = regionKey;
  renderTimelines();
}

function setView(viewName) {
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewName));
  views.forEach((view) => view.classList.toggle("active", view.id === `${viewName}View`));
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  return [
    (event.clientX - rect.left) * (canvas.width / rect.width),
    (event.clientY - rect.top) * (canvas.height / rect.height),
  ];
}

tabs.forEach((tab) => tab.addEventListener("click", () => setView(tab.dataset.view)));
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderTimelines();
  });
});
searchInput.addEventListener("input", renderTimelines);
canvas.addEventListener("click", (event) => {
  const [x, y] = canvasPoint(event);
  const hit = [...hitTiles].reverse().find((tile) => ctx.isPointInPath(tile.path, x, y));
  if (hit) selectRegion(hit.key);
});
canvas.addEventListener("mousemove", (event) => {
  const [x, y] = canvasPoint(event);
  const hit = [...hitTiles].reverse().find((tile) => ctx.isPointInPath(tile.path, x, y));
  hoverRegion = hit?.key || null;
  canvas.style.cursor = hit ? "pointer" : "default";
});
clearRegion.addEventListener("click", () => {
  activeRegion = null;
  renderTimelines();
});

function animate(now) {
  renderMap(now - timeStart);
  requestAnimationFrame(animate);
}

renderTimelines();
requestAnimationFrame(animate);
