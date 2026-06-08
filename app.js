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
const mapCache = new Map();
const regionPanel = document.querySelector(".region-panel");
const timeline = document.querySelector("#timeline");
const regionTimeline = document.querySelector("#regionTimeline");
const regionTitle = document.querySelector("#regionTitle");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");
const tabs = document.querySelectorAll("[data-view]");
const views = document.querySelectorAll(".view");
const clearRegion = document.querySelector("#clearRegion");

const referenceHex = { w: 8.1, h: 4.7, stepX: 12.0, stepY: 7.0, depth: 16 };
const hex = { ...referenceHex };
const referenceMapSrc = "map.png";
const referenceMapOffset = { x: 0, y: 0 };
const iconBaseUrl = "https://arknights.fandom.com/wiki/Special:Redirect/file/";
const regionIconFiles = {
  bolivar: "Bolívar.png",
  columbia: "Columbia.png",
  sargon: "Sargon.png",
  minos: "Minos.png",
  siesta: "Siesta.png",
  sami: "Sami.png",
  kjerag: "Kjerag.png",
  kazimierz: "Kazimierz.png",
  victoria: "Victoria.png",
  leithanien: "Leithanien.png",
  laterano: "Laterano.png",
  iberia: "Iberia.png",
  ursus: "Ursus.png",
  chernobog: "Ursus.png",
  lungmen: "Lungmen.png",
  kazdel: "Kazdel.png",
  siracusa: "Siracusa.png",
  rim: "Rim Billiton.png",
  yan: "Yan.png",
  higashi: "Higashi.png",
};
const regionIcons = new Map();
const displayRegionColors = {
  bolivar: "#829ead",
  columbia: "#bcebf5",
  sargon: "#44c96b",
  minos: "#cef4e4",
  siesta: "#c9e2ff",
  sami: "#43b8f6",
  kjerag: "#d7eef7",
  kazimierz: "#f0e13f",
  victoria: "#f39220",
  leithanien: "#9a3fde",
  laterano: "#f0e4bd",
  iberia: "#d8e43c",
  ursus: "#d9363d",
  chernobog: "#ce2934",
  lungmen: "#e6bd2c",
  kazdel: "#d4e8ee",
  siracusa: "#8bd25a",
  rim: "#a56e56",
  yan: "#efb42b",
  higashi: "#22aaa4",
};
const referencePalette = [
  { key: "sargon", rgb: [98, 189, 103], threshold: 82 },
  { key: "sami", rgb: [98, 181, 239], threshold: 82 },
  { key: "kazimierz", rgb: [248, 230, 74], threshold: 92 },
  { key: "victoria", rgb: [255, 158, 26], threshold: 82 },
  { key: "leithanien", rgb: [168, 61, 214], threshold: 86 },
  { key: "iberia", rgb: [220, 230, 69], threshold: 92 },
  { key: "ursus", rgb: [221, 43, 47], threshold: 82 },
  { key: "lungmen", rgb: [255, 208, 50], threshold: 82 },
  { key: "siracusa", rgb: [166, 215, 104], threshold: 82 },
  { key: "rim", rgb: [157, 116, 97], threshold: 74 },
  { key: "yan", rgb: [255, 196, 41], threshold: 86 },
  { key: "higashi", rgb: [42, 178, 173], threshold: 84 },
];
const referenceRegionIds = new Map(referencePalette.map((item, index) => [item.key, index + 1]));
const referenceRegionKeys = ["", ...referencePalette.map((item) => item.key)];
const referenceBounds = {
  sargon: [0, 260, 760, 650],
  sami: [600, 30, 900, 185],
  kazimierz: [690, 80, 1135, 285],
  victoria: [660, 230, 1135, 500],
  leithanien: [915, 185, 1335, 410],
  iberia: [830, 415, 1370, 710],
  ursus: [900, 0, 1560, 280],
  lungmen: [1260, 78, 1480, 225],
  siracusa: [1080, 245, 1425, 480],
  rim: [1200, 320, 1680, 630],
  yan: [1360, 80, 1885, 390],
  higashi: [1470, 20, 1810, 200],
};
const regionScale = {
  sargon: 0.7,
  yan: 0.68,
  iberia: 0.68,
  victoria: 0.7,
  ursus: 0.82,
  columbia: 0.68,
  kazdel: 0.66,
  kazimierz: 0.7,
  leithanien: 0.66,
  rim: 0.66,
  bolivar: 0.66,
  laterano: 0.62,
  siracusa: 0.64,
  kjerag: 0.62,
  minos: 0.6,
  siesta: 0.6,
  sami: 0.74,
  higashi: 0.74,
  chernobog: 0.8,
  lungmen: 0.8,
};
const regionTexture = {
  bolivar: { spread: 0.06, hole: 0.04, island: 0.08, seed: 1 },
  columbia: { spread: 0.08, hole: 0.05, island: 0.1, seed: 2 },
  sargon: { spread: 0.18, hole: 0.12, island: 0.18, seed: 3 },
  minos: { spread: 0.06, hole: 0.03, island: 0.08, seed: 4 },
  siesta: { spread: 0.08, hole: 0.04, island: 0.1, seed: 5 },
  sami: { spread: 0.08, hole: 0.05, island: 0.1, seed: 6 },
  kjerag: { spread: 0.08, hole: 0.04, island: 0.1, seed: 7 },
  kazimierz: { spread: 0.12, hole: 0.08, island: 0.14, seed: 8 },
  victoria: { spread: 0.16, hole: 0.08, island: 0.16, seed: 9 },
  leithanien: { spread: 0.1, hole: 0.06, island: 0.12, seed: 10 },
  laterano: { spread: 0.08, hole: 0.04, island: 0.08, seed: 11 },
  iberia: { spread: 0.16, hole: 0.1, island: 0.16, seed: 12 },
  ursus: { spread: 0.1, hole: 0.08, island: 0.14, seed: 13 },
  chernobog: { spread: 0.04, hole: 0, island: 0, seed: 14 },
  lungmen: { spread: 0.04, hole: 0, island: 0, seed: 15 },
  kazdel: { spread: 0.1, hole: 0.06, island: 0.12, seed: 16 },
  siracusa: { spread: 0.08, hole: 0.04, island: 0.1, seed: 17 },
  rim: { spread: 0.14, hole: 0.08, island: 0.14, seed: 18 },
  yan: { spread: 0.16, hole: 0.08, island: 0.16, seed: 19 },
  higashi: { spread: 0.08, hole: 0.04, island: 0.1, seed: 20 },
};
const regionShapes = regions.map((region) => {
  const polygon = parsePoints(region.points);
  const scale = regionScale[region.key] ?? 0.74;
  const texture = regionTexture[region.key] || {};
  return {
    ...region,
    polygon,
    center: polygonCenter(polygon),
    tilePolygon: scalePolygon(polygon, scale),
    scatterPolygon: scalePolygon(polygon, Math.min(0.98, scale + (texture.spread ?? 0.08))),
  };
});
const regionByKey = new Map(regionShapes.map((region) => [region.key, region]));
const labelPositionOverrides = {
  bolivar: [330, 176],
  columbia: [600, 200],
  sargon: [330, 432],
  minos: [575, 348],
  siesta: [750, 370],
  sami: [742, 50],
  kjerag: [770, 226],
  kazimierz: [862, 154],
  victoria: [900, 296],
  leithanien: [1092, 246],
  laterano: [1134, 360],
  iberia: [1124, 502],
  ursus: [1245, 104],
  chernobog: [1238, 138],
  lungmen: [1375, 138],
  kazdel: [1328, 220],
  siracusa: [1264, 276],
  rim: [1410, 350],
  yan: [1630, 184],
  higashi: [1640, 66],
};
const labelPositions = Object.fromEntries(regionShapes.map((region) => [
  region.key,
  labelPositionOverrides[region.key] || polygonCenter(region.polygon),
]));
const inferredRegionProfiles = [
  { key: "bolivar", center: [330, 176], rx: 118, ry: 72 },
  { key: "columbia", center: [585, 200], rx: 178, ry: 72 },
  { key: "kjerag", center: [768, 226], rx: 112, ry: 66 },
  { key: "minos", center: [575, 348], rx: 92, ry: 56 },
  { key: "siesta", center: [750, 370], rx: 122, ry: 64 },
  { key: "kazdel", center: [1328, 220], rx: 182, ry: 84 },
  { key: "laterano", center: [1134, 360], rx: 112, ry: 60 },
];
let activeRegion = null;
let activeFilter = "all";
let hoverRegion = null;
let baseReady = false;
let pendingMapFrame = null;
let referenceMasks = null;
let mapLayout = {
  scale: 1,
  offsetX: 0,
  offsetY: 0,
  referenceWidth: 1883,
  referenceHeight: 760,
};

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
  const south = ((x - 1060) / 335) ** 2 + ((y - 560) / 158) ** 2 < 1;
  const southEastShelf = ((x - 1260) / 190) ** 2 + ((y - 585) / 88) ** 2 < 1;
  const northBite = ((x - 505) / 210) ** 2 + ((y - 125) / 80) ** 2 < 1;
  const eastBite = ((x - 1545) / 250) ** 2 + ((y - 535) / 110) ** 2 < 1;
  return (main || west || east || south || southEastShelf) && !northBite && !eastBite;
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

function referenceHexPoints(cx, cy, grow = 0) {
  const w = referenceHex.w + grow;
  const h = referenceHex.h + grow * 0.57;
  return [
    [cx, cy - h],
    [cx + w, cy - h / 2],
    [cx + w, cy + h / 2],
    [cx, cy + h],
    [cx - w, cy + h / 2],
    [cx - w, cy - h / 2],
  ];
}

function updateMapLayout(referenceWidth = mapLayout.referenceWidth, referenceHeight = mapLayout.referenceHeight) {
  const paddingX = 18;
  const paddingY = 14;
  const scale = Math.min(
    (canvas.width - paddingX * 2) / referenceWidth,
    (canvas.height - paddingY * 2) / referenceHeight,
  );
  mapLayout = {
    scale,
    offsetX: (canvas.width - referenceWidth * scale) / 2,
    offsetY: (canvas.height - referenceHeight * scale) / 2,
    referenceWidth,
    referenceHeight,
  };
  hex.w = referenceHex.w * scale;
  hex.h = referenceHex.h * scale;
  hex.stepX = referenceHex.stepX * scale;
  hex.stepY = referenceHex.stepY * scale;
  hex.depth = referenceHex.depth * scale;
}

function referenceToCanvasPoint(point) {
  return [
    mapLayout.offsetX + point[0] * mapLayout.scale,
    mapLayout.offsetY + point[1] * mapLayout.scale,
  ];
}

function referenceTileCenter(row, col) {
  return [
    34 + col * referenceHex.stepX + (row % 2 ? referenceHex.stepX / 2 : 0),
    48 + row * referenceHex.stepY,
  ];
}

function makeTile(row, col, refX = null, refY = null) {
  const [nextRefX, nextRefY] = refX === null || refY === null
    ? referenceTileCenter(row, col)
    : [refX, refY];
  const [x, y] = referenceToCanvasPoint([nextRefX, nextRefY]);
  return { x, y, refX: nextRefX, refY: nextRefY, row, col };
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

function blendColor(color, target, targetWeight) {
  const sourceRaw = color.replace("#", "");
  const targetRaw = target.replace("#", "");
  const values = [0, 2, 4].map((start) => {
    const source = parseInt(sourceRaw.slice(start, start + 2), 16);
    const next = parseInt(targetRaw.slice(start, start + 2), 16);
    return Math.round(source * (1 - targetWeight) + next * targetWeight);
  });
  return `#${values.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function colorDistance(rgb, targetRgb) {
  return Math.hypot(rgb[0] - targetRgb[0], rgb[1] - targetRgb[1], rgb[2] - targetRgb[2]);
}

function displayColorFor(region) {
  return displayRegionColors[region.key] || region.color;
}

function colorChroma(rgb) {
  return Math.max(...rgb) - Math.min(...rgb);
}

function inReferenceBounds(key, x, y) {
  const bounds = referenceBounds[key];
  if (!bounds) return true;
  return x >= bounds[0] && y >= bounds[1] && x <= bounds[2] && y <= bounds[3];
}

function matchesReferenceHue(key, rgb) {
  const [r, g, b] = rgb;
  if (key === "sargon") return g > 145 && g - r > 22 && g - b > 18;
  if (key === "sami") return b > 170 && g > 130 && b - r > 70 && b - g > 24;
  if (key === "kazimierz") return r > 205 && g > 185 && b < 130;
  if (key === "victoria") return r > 205 && g > 100 && g < 190 && b < 95;
  if (key === "leithanien") return r > 115 && b > 150 && g < 125;
  if (key === "iberia") return r > 175 && g > 185 && b < 120;
  if (key === "ursus") return r > 145 && g < 105 && b < 110;
  if (key === "lungmen") return r > 205 && g > 155 && b < 115;
  if (key === "siracusa") return g > 150 && r > 105 && b < 155 && g - b > 32;
  if (key === "rim") return r > 105 && g > 65 && g < 155 && b < 135 && r - b > 18;
  if (key === "yan") return r > 205 && g > 145 && b < 115;
  if (key === "higashi") return g > 140 && b > 125 && r < 105 && Math.abs(g - b) < 70;
  return true;
}

function classifyReferenceColor(rgb, x, y) {
  if (rgb[0] + rgb[1] + rgb[2] < 82 || colorChroma(rgb) < 34) return null;
  const match = referencePalette
    .map((item) => ({ ...item, distance: colorDistance(rgb, item.rgb) }))
    .sort((a, b) => a.distance - b.distance)[0];
  return match
    && match.distance < match.threshold
    && matchesReferenceHue(match.key, rgb)
    && inReferenceBounds(match.key, x, y)
    ? match.key
    : null;
}

function isReferenceTerrainPixel(rgb, x, y) {
  if (classifyReferenceColor(rgb, x, y)) return true;
  const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;
  const chroma = colorChroma(rgb);
  const neutralTop = brightness > 175 && chroma < 72;
  const greyTop = brightness > 122 && brightness < 205 && chroma < 30;
  const brightEdge = brightness > 205 && chroma < 92;
  return neutralTop || greyTop || brightEdge;
}

function isReferenceTerrainPixelFast(rgb, regionKey) {
  if (regionKey) return true;
  const brightness = (rgb[0] + rgb[1] + rgb[2]) / 3;
  const chroma = colorChroma(rgb);
  const neutralTop = brightness > 176 && chroma < 70;
  const greyTop = brightness > 128 && brightness < 205 && chroma < 28;
  const brightEdge = brightness > 212 && chroma < 86;
  return neutralTop || greyTop || brightEdge;
}

function buildReferenceMasks(imageData, width, height) {
  const landMask = new Uint8Array(width * height);
  const regionMask = new Uint8Array(width * height);
  const data = imageData.data;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      const offset = index * 4;
      const rgb = [data[offset], data[offset + 1], data[offset + 2]];
      const regionKey = classifyReferenceColor(rgb, x, y);
      if (isReferenceTerrainPixelFast(rgb, regionKey)) landMask[index] = 1;
      if (regionKey) regionMask[index] = referenceRegionIds.get(regionKey) || 0;
    }
  }
  return { width, height, landMask, regionMask };
}

function tileNoise(row, col, seed) {
  const value = Math.sin(row * 12.9898 + col * 78.233 + seed * 37.719) * 43758.5453;
  return value - Math.floor(value);
}

function selectRegionTile(tile, region) {
  const texture = regionTexture[region.key] || {};
  const insideCore = pointInPolygon(tile.x, tile.y, region.tilePolygon);
  const seed = texture.seed ?? 0;
  const noise = tileNoise(tile.row, tile.col, seed);
  const coarseNoise = tileNoise(Math.floor(tile.row / 2), Math.floor(tile.col / 2), seed + 29);
  const labelGuard = Math.hypot(tile.x - region.center[0], tile.y - region.center[1]) < 44;
  if (insideCore) {
    return labelGuard || coarseNoise * 0.68 + noise * 0.32 > (texture.hole ?? 0.04);
  }
  return pointInPolygon(tile.x, tile.y, region.scatterPolygon) && coarseNoise > 1 - (texture.island ?? 0.08);
}

function iconForRegion(region) {
  return regionIcons.get(region.key) || null;
}

function drawFallbackIcon(target, x, y, size, color) {
  const cx = x + size / 2;
  const cy = y + size / 2;
  const radius = size / 2;
  target.save();
  target.shadowColor = "rgba(0,0,0,0.55)";
  target.shadowBlur = 3;
  target.lineWidth = Math.max(2, size * 0.14);
  target.strokeStyle = "#071017";
  target.fillStyle = color;
  target.beginPath();
  target.moveTo(cx, cy - radius);
  target.lineTo(cx + radius * 0.82, cy - radius * 0.28);
  target.lineTo(cx + radius * 0.62, cy + radius * 0.86);
  target.lineTo(cx - radius * 0.62, cy + radius * 0.86);
  target.lineTo(cx - radius * 0.82, cy - radius * 0.28);
  target.closePath();
  target.fill();
  target.stroke();
  target.restore();
}

function drawCrownSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx - r * 0.55, cy + r * 0.26);
  target.lineTo(cx - r * 0.48, cy - r * 0.22);
  target.lineTo(cx - r * 0.16, cy + r * 0.02);
  target.lineTo(cx, cy - r * 0.36);
  target.lineTo(cx + r * 0.16, cy + r * 0.02);
  target.lineTo(cx + r * 0.48, cy - r * 0.22);
  target.lineTo(cx + r * 0.55, cy + r * 0.26);
  target.closePath();
  target.stroke();
}

function drawFlameSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx, cy - r * 0.52);
  target.bezierCurveTo(cx + r * 0.52, cy - r * 0.1, cx + r * 0.36, cy + r * 0.44, cx, cy + r * 0.52);
  target.bezierCurveTo(cx - r * 0.44, cy + r * 0.28, cx - r * 0.32, cy - r * 0.08, cx, cy - r * 0.52);
  target.closePath();
  target.stroke();
  target.beginPath();
  target.moveTo(cx - r * 0.08, cy + r * 0.34);
  target.bezierCurveTo(cx + r * 0.18, cy + r * 0.08, cx + r * 0.08, cy - r * 0.08, cx + r * 0.02, cy - r * 0.22);
  target.stroke();
}

function drawMountainSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx - r * 0.62, cy + r * 0.38);
  target.lineTo(cx - r * 0.24, cy - r * 0.28);
  target.lineTo(cx + r * 0.02, cy + r * 0.08);
  target.lineTo(cx + r * 0.28, cy - r * 0.42);
  target.lineTo(cx + r * 0.62, cy + r * 0.38);
  target.stroke();
}

function drawTowerSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.strokeRect(cx - r * 0.25, cy - r * 0.36, r * 0.5, r * 0.74);
  target.beginPath();
  target.moveTo(cx - r * 0.42, cy - r * 0.36);
  target.lineTo(cx, cy - r * 0.6);
  target.lineTo(cx + r * 0.42, cy - r * 0.36);
  target.stroke();
  target.beginPath();
  target.moveTo(cx - r * 0.12, cy + r * 0.38);
  target.lineTo(cx - r * 0.12, cy + r * 0.05);
  target.lineTo(cx + r * 0.12, cy + r * 0.05);
  target.lineTo(cx + r * 0.12, cy + r * 0.38);
  target.stroke();
}

function drawHornSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx - r * 0.44, cy - r * 0.24);
  target.quadraticCurveTo(cx - r * 0.56, cy + r * 0.08, cx - r * 0.2, cy + r * 0.22);
  target.moveTo(cx + r * 0.44, cy - r * 0.24);
  target.quadraticCurveTo(cx + r * 0.56, cy + r * 0.08, cx + r * 0.2, cy + r * 0.22);
  target.moveTo(cx - r * 0.26, cy + r * 0.24);
  target.lineTo(cx + r * 0.26, cy + r * 0.24);
  target.stroke();
}

function drawWingSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.arc(cx, cy, r * 0.22, 0, Math.PI * 2);
  target.moveTo(cx - r * 0.18, cy + r * 0.06);
  target.quadraticCurveTo(cx - r * 0.55, cy - r * 0.1, cx - r * 0.64, cy - r * 0.42);
  target.moveTo(cx + r * 0.18, cy + r * 0.06);
  target.quadraticCurveTo(cx + r * 0.55, cy - r * 0.1, cx + r * 0.64, cy - r * 0.42);
  target.stroke();
}

function drawPickSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx - r * 0.44, cy - r * 0.32);
  target.quadraticCurveTo(cx + r * 0.1, cy - r * 0.56, cx + r * 0.54, cy - r * 0.14);
  target.moveTo(cx + r * 0.12, cy - r * 0.18);
  target.lineTo(cx - r * 0.26, cy + r * 0.44);
  target.stroke();
}

function drawLeafSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.ellipse(cx, cy, r * 0.38, r * 0.58, -0.75, 0, Math.PI * 2);
  target.moveTo(cx - r * 0.2, cy + r * 0.28);
  target.lineTo(cx + r * 0.26, cy - r * 0.3);
  target.stroke();
}

function drawWaveSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx - r * 0.55, cy + r * 0.08);
  target.bezierCurveTo(cx - r * 0.22, cy - r * 0.28, cx + r * 0.1, cy + r * 0.42, cx + r * 0.54, cy - r * 0.04);
  target.moveTo(cx - r * 0.46, cy + r * 0.34);
  target.lineTo(cx + r * 0.45, cy + r * 0.34);
  target.stroke();
}

function drawRingSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.arc(cx, cy - r * 0.12, r * 0.38, 0, Math.PI * 2);
  target.moveTo(cx, cy - r * 0.5);
  target.lineTo(cx, cy + r * 0.46);
  target.moveTo(cx - r * 0.34, cy + r * 0.12);
  target.lineTo(cx + r * 0.34, cy + r * 0.12);
  target.stroke();
}

function drawShieldSymbol(target, cx, cy, size) {
  const r = size / 2;
  target.beginPath();
  target.moveTo(cx, cy - r * 0.54);
  target.lineTo(cx + r * 0.46, cy - r * 0.22);
  target.lineTo(cx + r * 0.32, cy + r * 0.34);
  target.lineTo(cx, cy + r * 0.56);
  target.lineTo(cx - r * 0.32, cy + r * 0.34);
  target.lineTo(cx - r * 0.46, cy - r * 0.22);
  target.closePath();
  target.stroke();
  target.beginPath();
  target.moveTo(cx, cy - r * 0.32);
  target.lineTo(cx, cy + r * 0.3);
  target.stroke();
}

function drawFactionSymbol(target, region, cx, cy, size) {
  const key = region.key;
  if (key === "yan" || key === "lungmen") drawFlameSymbol(target, cx, cy, size);
  else if (key === "victoria") drawCrownSymbol(target, cx, cy, size);
  else if (key === "sami" || key === "kjerag") drawMountainSymbol(target, cx, cy, size);
  else if (key === "laterano" || key === "columbia") drawWingSymbol(target, cx, cy, size);
  else if (key === "rim") drawPickSymbol(target, cx, cy, size);
  else if (key === "sargon" || key === "siracusa") drawLeafSymbol(target, cx, cy, size);
  else if (key === "iberia" || key === "siesta") drawWaveSymbol(target, cx, cy, size);
  else if (key === "kazimierz" || key === "bolivar") drawShieldSymbol(target, cx, cy, size);
  else if (key === "ursus" || key === "chernobog" || key === "higashi") drawTowerSymbol(target, cx, cy, size);
  else if (key === "kazdel" || key === "minos") drawHornSymbol(target, cx, cy, size);
  else if (key === "leithanien") drawRingSymbol(target, cx, cy, size);
  else drawShieldSymbol(target, cx, cy, size);
}

function drawLocalFactionIcon(target, region, x, y, size) {
  const color = displayColorFor(region);
  const cx = x + size / 2;
  const cy = y + size / 2;
  drawFallbackIcon(target, x, y, size, color);
  target.save();
  target.lineCap = "round";
  target.lineJoin = "round";
  target.lineWidth = Math.max(1.4, size * 0.1);
  target.strokeStyle = "rgba(5, 12, 18, 0.72)";
  drawFactionSymbol(target, region, cx + size * 0.03, cy + size * 0.06, size);
  target.strokeStyle = "#f8fdff";
  target.lineWidth = Math.max(1.05, size * 0.075);
  drawFactionSymbol(target, region, cx, cy, size);
  target.restore();
}

function drawLabelIcon(target, region, labelX, labelY, labelWidth, cityLabel) {
  const size = cityLabel ? 15 : 23;
  const gap = cityLabel ? 5 : 7;
  const iconX = labelX - labelWidth / 2 - size - gap;
  const iconY = labelY - size / 2;
  drawLocalFactionIcon(target, region, iconX, iconY, size);
}

function loadRegionIcons() {
  regionIcons.clear();
}

function referenceTileStats(reference, tile) {
  const cx = tile.refX + referenceMapOffset.x;
  const cy = tile.refY + referenceMapOffset.y;
  const points = referenceHexPoints(cx, cy, 0.45);
  const minX = Math.max(0, Math.floor(Math.min(...points.map(([x]) => x))));
  const maxX = Math.min(reference.width - 1, Math.ceil(Math.max(...points.map(([x]) => x))));
  const minY = Math.max(0, Math.floor(Math.min(...points.map(([, y]) => y))));
  const maxY = Math.min(reference.height - 1, Math.ceil(Math.max(...points.map(([, y]) => y))));
  const regionVotes = new Uint16Array(referenceRegionKeys.length);
  let total = 0;
  let landCount = 0;
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      if (!pointInPolygon(x, y, points)) continue;
      total += 1;
      const index = y * reference.width + x;
      if (reference.landMask[index]) landCount += 1;
      const regionId = reference.regionMask[index];
      if (regionId) regionVotes[regionId] += 1;
    }
  }
  let regionId = 0;
  let regionCount = 0;
  for (let index = 1; index < regionVotes.length; index += 1) {
    if (regionVotes[index] > regionCount) {
      regionCount = regionVotes[index];
      regionId = index;
    }
  }
  const landRatio = total ? landCount / total : 0;
  const regionRatio = total ? regionCount / total : 0;
  return {
    landRatio,
    regionRatio,
    regionKey: regionRatio > 0.13 ? referenceRegionKeys[regionId] : null,
  };
}

function sampleReferenceRegion(reference, image, tile) {
  return tile.referenceRegionKey || referenceTileStats(reference, tile).regionKey;
}

function buildReferenceLandTiles(reference, image) {
  const tiles = [];
  const rows = Math.ceil(reference.height / referenceHex.stepY) + 3;
  const cols = Math.ceil(reference.width / referenceHex.stepX) + 3;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const [refX, refY] = referenceTileCenter(row, col);
      const tile = makeTile(row, col, refX, refY);
      const stats = referenceTileStats(reference, tile);
      if (stats.landRatio >= 0.19) {
        tile.referenceRegionKey = stats.regionKey;
        tiles.push(tile);
      }
    }
  }
  return tiles;
}

function largestConnectedTileGroup(tiles) {
  const tileMap = new Map(tiles.map((tile) => [tileKey(tile.row, tile.col), tile]));
  const visited = new Set();
  let largest = [];
  tileMap.forEach((tile, key) => {
    if (visited.has(key)) return;
    const group = [];
    const queue = [tile];
    visited.add(key);
    for (let index = 0; index < queue.length; index += 1) {
      const current = queue[index];
      group.push(current);
      neighborCoords(current.row, current.col).forEach(([row, col]) => {
        const nextKey = tileKey(row, col);
        if (visited.has(nextKey) || !tileMap.has(nextKey)) return;
        visited.add(nextKey);
        queue.push(tileMap.get(nextKey));
      });
    }
    if (group.length > largest.length) largest = group;
  });
  return largest;
}

function fillReferenceTileGaps(tiles) {
  const tileMap = new Map(tiles.map((tile) => [tileKey(tile.row, tile.col), tile]));
  for (let pass = 0; pass < 5; pass += 1) {
    const additions = new Map();
    tileMap.forEach((tile) => {
      neighborCoords(tile.row, tile.col).forEach(([row, col]) => {
        const key = tileKey(row, col);
        if (tileMap.has(key) || additions.has(key)) return;
        const neighbors = neighborCoords(row, col)
          .map(([nextRow, nextCol]) => tileMap.get(tileKey(nextRow, nextCol)))
          .filter(Boolean);
        const landNeighborCount = neighbors.length;
        const originalNeighborCount = neighbors.filter((neighbor) => !neighbor.isGapFill).length;
        if (landNeighborCount < 4 || originalNeighborCount < 3) return;
        const [refX, refY] = referenceTileCenter(row, col);
        const [x, y] = referenceToCanvasPoint([refX, refY]);
        if (x < 16 || x > canvas.width - 16 || y < 32 || y > canvas.height - 24) return;
        additions.set(key, { x, y, refX, refY, row, col, isGapFill: true });
      });
    });
    additions.forEach((tile, key) => tileMap.set(key, tile));
  }
  return [...tileMap.values()];
}

function fillReferenceRegionWhiteGaps(tiles, tilesByRegion) {
  const tileMap = new Map(tiles.map((tile) => [tileKey(tile.row, tile.col), tile]));
  const regionKeys = new Set();
  tilesByRegion.forEach((regionTileList) => {
    regionTileList.forEach((tile) => regionKeys.add(tileKey(tile.row, tile.col)));
  });

  for (let pass = 0; pass < 2; pass += 1) {
    const additions = new Map();
    regionKeys.forEach((regionTileKey) => {
      const tile = tileMap.get(regionTileKey);
      if (!tile) return;
      neighborCoords(tile.row, tile.col).forEach(([row, col]) => {
        const key = tileKey(row, col);
        if (tileMap.has(key) || additions.has(key)) return;
        const neighborKeys = neighborCoords(row, col).map(([nextRow, nextCol]) => tileKey(nextRow, nextCol));
        const landNeighborCount = neighborKeys.filter((nextKey) => tileMap.has(nextKey)).length;
        const regionNeighborCount = neighborKeys.filter((nextKey) => regionKeys.has(nextKey)).length;
        if (landNeighborCount < 5 || regionNeighborCount < 3) return;
        const [refX, refY] = referenceTileCenter(row, col);
        const [x, y] = referenceToCanvasPoint([refX, refY]);
        if (x < 16 || x > canvas.width - 16 || y < 32 || y > canvas.height - 24) return;
        additions.set(key, { x, y, refX, refY, row, col, isGapFill: true });
      });
    });
    additions.forEach((tile, key) => tileMap.set(key, tile));
  }

  return [...tileMap.values()];
}

function addWhiteBufferAroundRegions(tiles, tilesByRegion) {
  const tileMap = new Map(tiles.map((tile) => [tileKey(tile.row, tile.col), tile]));
  const regionKeys = new Set();
  const frontier = [];
  tilesByRegion.forEach((regionTileList) => {
    regionTileList.forEach((tile) => {
      const key = tileKey(tile.row, tile.col);
      regionKeys.add(key);
      frontier.push(tile);
    });
  });
  for (let ring = 0; ring < 2; ring += 1) {
    const additions = [];
    frontier.forEach((tile) => {
      neighborCoords(tile.row, tile.col).forEach(([row, col]) => {
        const key = tileKey(row, col);
        if (tileMap.has(key) || regionKeys.has(key)) return;
        const [x, y] = tileCenter(row, col);
        if (x < 18 || x > canvas.width - 18 || y < 36 || y > canvas.height - 34) return;
        const [refX, refY] = referenceTileCenter(row, col);
        const nextTile = { x, y, refX, refY, row, col };
        tileMap.set(key, nextTile);
        additions.push(nextTile);
      });
    });
    frontier.push(...additions);
  }
  return [...tileMap.values()];
}

function nearLandEdge(tile) {
  return neighborCoords(tile.row, tile.col).some(([row, col]) => !landTileKeys.has(tileKey(row, col)));
}

function keepSampledRegionTile(key, tile) {
  if (key === "sargon" && tile.refY > 620 && nearLandEdge(tile)) return false;
  return true;
}

function inferredRegionForTile(tile, assignedTiles) {
  if (tile.isGapFill) return null;
  if (assignedTiles.has(tileKey(tile.row, tile.col))) return null;
  let best = null;
  inferredRegionProfiles.forEach((profile) => {
    const dx = (tile.refX - profile.center[0]) / profile.rx;
    const dy = (tile.refY - profile.center[1]) / profile.ry;
    const score = dx * dx + dy * dy;
    if (score <= 1 && (!best || score < best.score)) best = { key: profile.key, score };
  });
  return best?.key || null;
}

function buildReferenceRegionTiles(referenceCtx, image) {
  const sampledRegionKeys = new Set(referencePalette.map((item) => item.key));
  const tilesByRegion = new Map(regionShapes.map((region) => [region.key, []]));
  const assignedTiles = new Set();
  landTiles.forEach((tile) => {
    const key = sampleReferenceRegion(referenceCtx, image, tile);
    const region = key ? regionByKey.get(key) : null;
    if (region && sampledRegionKeys.has(key) && keepSampledRegionTile(key, tile)) {
      tilesByRegion.get(key).push(tile);
      assignedTiles.add(tileKey(tile.row, tile.col));
    }
  });
  landTiles.forEach((tile) => {
    const inferredKey = inferredRegionForTile(tile, assignedTiles);
    if (!inferredKey) return;
    tilesByRegion.get(inferredKey).push(tile);
    assignedTiles.add(tileKey(tile.row, tile.col));
  });
  return tilesByRegion;
}

function loadReferenceMap() {
  const image = new Image();
  image.decoding = "async";
  image.onload = () => {
    try {
      const referenceCanvas = document.createElement("canvas");
      referenceCanvas.width = image.width;
      referenceCanvas.height = image.height;
      const referenceCtx = referenceCanvas.getContext("2d", { willReadFrequently: true });
      referenceCtx.drawImage(image, 0, 0);
      updateMapLayout(image.width, image.height);
      referenceMasks = buildReferenceMasks(referenceCtx.getImageData(0, 0, image.width, image.height), image.width, image.height);
      landTiles = fillReferenceTileGaps(largestConnectedTileGroup(buildReferenceLandTiles(referenceMasks, image)));
      landTileKeys = new Set(landTiles.map((tile) => tileKey(tile.row, tile.col)));
      regionTiles = buildReferenceRegionTiles(referenceMasks, image);
      landTiles = fillReferenceRegionWhiteGaps(landTiles, regionTiles);
      landTileKeys = new Set(landTiles.map((tile) => tileKey(tile.row, tile.col)));
      perimeterTiles = buildPerimeterTiles();
      tileStyles = buildTileStyles();
      mapCache.clear();
      scheduleRenderMap();
    } catch (error) {
      console.warn("map.png could not be used as a region mask; procedural map kept.", error);
    }
  };
  image.src = referenceMapSrc;
}

function drawHexPrism(target, x, y, color, options = {}) {
  const lift = options.lift ?? 0;
  const topY = y - lift;
  const grow = options.part === "sides"
    ? (options.sideGrow ?? options.grow ?? 0)
    : (options.topGrow ?? options.grow ?? 0);
  const top = hexPoints(x, topY, grow);
  const depth = options.depth ?? hex.depth;
  const bottom = top.map(([px, py]) => [px, py + depth]);
  const sideGradient = (stops, offset = 0) => {
    const gradient = target.createLinearGradient(x, topY + offset, x, topY + depth);
    stops.forEach(([position, fill]) => gradient.addColorStop(position, fill));
    return gradient;
  };
  const leftSide = options.leftSide ?? sideGradient([
    [0, shade(color, -30)],
    [0.45, shade(color, -48)],
    [1, shade(color, -70)],
  ], hex.h * 0.35);
  const rightSide = options.rightSide ?? sideGradient([
    [0, shade(color, -38)],
    [0.5, shade(color, -56)],
    [1, shade(color, -78)],
  ], hex.h * 0.2);
  const frontSide = options.frontSide ?? sideGradient([
    [0, blendColor(color, "#ffffff", 0.08)],
    [0.35, shade(color, -22)],
    [1, shade(color, -58)],
  ]);
  if (options.part !== "top") {
    drawPolygon(target, [top[3], top[4], bottom[4], bottom[3]], leftSide);
    drawPolygon(target, [top[1], top[2], bottom[2], bottom[1]], rightSide);
    drawPolygon(target, [top[2], top[3], bottom[3], bottom[2]], frontSide);
  }
  let topFill = color;
  if (options.gradientTo) {
    topFill = target.createLinearGradient(x - hex.w * 0.9, topY - hex.h * 1.1, x + hex.w * 0.95, topY + hex.h * 1.15);
    topFill.addColorStop(0, blendColor(color, "#ffffff", 0.24));
    topFill.addColorStop(0.52, color);
    topFill.addColorStop(1, options.gradientTo);
  }
  if (options.part === "sides") return;
  target.save();
  if (options.topAlpha !== undefined) target.globalAlpha *= options.topAlpha;
  target.shadowColor = "rgba(0,0,0,0)";
  target.shadowBlur = 0;
  target.shadowOffsetX = 0;
  target.shadowOffsetY = 0;
  drawPolygon(target, top, topFill, options.stroke ?? null, options.strokeWidth ?? 0);
  if (options.shine) {
    drawPolygon(target, top, `rgba(255,255,255,${options.shine * 0.42})`);
  }
  target.restore();
}

function drawOriginiumShard(target, cx, cy, size, rotation, alpha = 0.34) {
  const points = [
    [0.02, -1.2],
    [0.48, -0.52],
    [0.86, -0.08],
    [0.26, 0.42],
    [0.1, 1.12],
    [-0.38, 0.58],
    [-0.72, 0.22],
    [-0.32, -0.44],
  ];
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const mapped = points.map(([x, y]) => [
    cx + (x * cos - y * sin) * size,
    cy + (x * sin + y * cos) * size,
  ]);
  const lower = mapped.map(([x, y]) => [x + size * 0.16, y + size * 0.36]);
  const shadow = mapped.map(([x, y]) => [x + size * 0.32, y + size * 0.54]);
  drawPolygon(target, shadow, `rgba(0, 0, 0, ${alpha * 0.58})`);
  drawPolygon(target, [mapped[1], mapped[2], lower[2], lower[1]], `rgba(10, 12, 15, ${alpha * 0.95})`);
  drawPolygon(target, [mapped[2], mapped[4], lower[4], lower[2]], `rgba(2, 3, 5, ${alpha})`);
  drawPolygon(target, [mapped[4], mapped[6], lower[6], lower[4]], `rgba(24, 28, 32, ${alpha * 0.76})`);
  const glow = target.createLinearGradient(cx - size, cy - size, cx + size, cy + size);
  glow.addColorStop(0, `rgba(235, 239, 240, ${alpha * 0.82})`);
  glow.addColorStop(0.24, `rgba(55, 60, 66, ${alpha * 1.12})`);
  glow.addColorStop(0.6, `rgba(9, 10, 13, ${alpha * 1.32})`);
  glow.addColorStop(1, `rgba(0, 0, 0, ${alpha * 1.5})`);
  drawPolygon(target, mapped, glow, `rgba(250, 250, 246, ${alpha * 0.34})`, 1.1);

  drawPolygon(target, [mapped[0], mapped[1], [cx + size * 0.05, cy - size * 0.08]], `rgba(250,250,246,${alpha * 0.6})`);
  drawPolygon(target, [mapped[1], mapped[2], mapped[3], [cx + size * 0.08, cy + size * 0.1]], `rgba(210,213,213,${alpha * 0.34})`);
  drawPolygon(target, [mapped[5], mapped[6], [cx - size * 0.1, cy + size * 0.16]], `rgba(92,96,100,${alpha * 0.38})`);

  target.save();
  target.globalAlpha = alpha * 0.82;
  target.strokeStyle = "#f6f3eb";
  target.lineWidth = 1.2;
  target.beginPath();
  target.moveTo(mapped[0][0], mapped[0][1]);
  target.lineTo(cx, cy + size * 0.18);
  target.lineTo(mapped[3][0], mapped[3][1]);
  target.stroke();
  target.restore();
}

function drawOriginiumCluster(target, cx, cy, scale = 1, alpha = 0.34) {
  target.save();
  target.globalAlpha = alpha * 0.7;
  target.fillStyle = "rgba(3, 14, 21, 0.42)";
  target.beginPath();
  target.ellipse(cx + 18 * scale, cy + 44 * scale, 96 * scale, 26 * scale, -0.12, 0, Math.PI * 2);
  target.fill();
  target.restore();

  [
    [-48, 12, 36, -0.42, 0.8],
    [-8, -16, 58, 0.05, 1],
    [34, 6, 38, 0.5, 0.82],
    [4, 34, 28, -0.1, 0.66],
    [62, 34, 22, 0.24, 0.58],
    [-76, 34, 18, -0.58, 0.54],
  ].forEach(([dx, dy, size, rotation, weight]) => {
    drawOriginiumShard(target, cx + dx * scale, cy + dy * scale, size * scale, rotation, alpha * weight);
  });

  const coreSize = 12 * scale;
  const core = [
    [cx, cy - coreSize],
    [cx + coreSize, cy],
    [cx, cy + coreSize],
    [cx - coreSize, cy],
  ];
  const coreGlow = target.createRadialGradient(cx, cy, 1, cx, cy, coreSize * 2.4);
  coreGlow.addColorStop(0, `rgba(255, 235, 214, ${alpha})`);
  coreGlow.addColorStop(0.34, `rgba(119, 23, 20, ${alpha * 0.9})`);
  coreGlow.addColorStop(1, "rgba(119, 23, 20, 0)");
  target.fillStyle = coreGlow;
  target.beginPath();
  target.arc(cx, cy, coreSize * 2.4, 0, Math.PI * 2);
  target.fill();
  drawPolygon(target, core, `rgba(60, 12, 12, ${alpha * 1.05})`, `rgba(250, 244, 235, ${alpha * 0.9})`, 2);
}

function drawFloatingPrism(target, cx, cy, width, height, depth, color, alpha = 0.24) {
  const top = [
    [cx, cy - height / 2],
    [cx + width / 2, cy],
    [cx, cy + height / 2],
    [cx - width / 2, cy],
  ];
  const bottom = top.map(([x, y]) => [x + depth * 0.58, y + depth]);
  target.save();
  target.globalAlpha = alpha;
  target.shadowColor = "rgba(5, 16, 24, 0.7)";
  target.shadowBlur = 18;
  target.shadowOffsetX = 8;
  target.shadowOffsetY = 14;
  drawPolygon(target, [top[1], top[2], bottom[2], bottom[1]], shade(color, -52));
  drawPolygon(target, [top[2], top[3], bottom[3], bottom[2]], shade(color, -38));
  drawPolygon(target, top, color, "rgba(232, 252, 255, 0.48)", 1.4);
  target.restore();
}

function drawTerminalFrame(target, x, y, w, h, alpha = 0.18) {
  const tick = 34;
  target.save();
  target.globalAlpha = alpha;
  target.strokeStyle = "#d7edf3";
  target.lineWidth = 2;
  [
    [[x, y + tick], [x, y], [x + tick, y]],
    [[x + w - tick, y], [x + w, y], [x + w, y + tick]],
    [[x + w, y + h - tick], [x + w, y + h], [x + w - tick, y + h]],
    [[x + tick, y + h], [x, y + h], [x, y + h - tick]],
  ].forEach((corner) => {
    target.beginPath();
    corner.forEach(([px, py], index) => {
      if (index === 0) target.moveTo(px, py);
      else target.lineTo(px, py);
    });
    target.stroke();
  });
  target.restore();
}

function drawHazardBand(target, x, y, w, h, alpha = 0.22) {
  target.save();
  target.globalAlpha = alpha;
  target.fillStyle = "#f5c934";
  target.fillRect(x, y, w, h);
  target.strokeStyle = "rgba(9, 18, 24, 0.68)";
  target.lineWidth = h * 0.9;
  for (let px = x - h * 2; px < x + w + h * 2; px += h * 2.8) {
    target.beginPath();
    target.moveTo(px, y + h);
    target.lineTo(px + h * 1.4, y);
    target.stroke();
  }
  target.restore();
}

function drawBackground(target) {
  const gradient = target.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#718b96");
  gradient.addColorStop(0.48, "#4f707e");
  gradient.addColorStop(1, "#3a5966");
  target.fillStyle = gradient;
  target.fillRect(0, 0, canvas.width, canvas.height);

  const glow = target.createRadialGradient(
    canvas.width * 0.58,
    canvas.height * 0.34,
    canvas.width * 0.08,
    canvas.width * 0.58,
    canvas.height * 0.34,
    canvas.width * 0.58,
  );
  glow.addColorStop(0, "rgba(231, 247, 250, 0.14)");
  glow.addColorStop(0.54, "rgba(231, 247, 250, 0.05)");
  glow.addColorStop(1, "rgba(231, 247, 250, 0)");
  target.fillStyle = glow;
  target.fillRect(0, 0, canvas.width, canvas.height);

  target.save();
  target.globalAlpha = 0.12;
  target.strokeStyle = "#d4eaf0";
  target.lineWidth = 1.2;
  for (let x = -canvas.height; x < canvas.width; x += 58) {
    target.beginPath();
    target.moveTo(x, canvas.height);
    target.lineTo(x + canvas.height, 0);
    target.stroke();
  }
  target.restore();

  target.save();
  target.globalAlpha = 0.22;
  target.strokeStyle = "#c9e3e9";
  target.lineWidth = 1.5;
  for (let y = 88; y < canvas.height; y += 88) {
    target.beginPath();
    target.moveTo(0, y);
    target.lineTo(canvas.width, y);
    target.stroke();
  }
  for (let x = 86; x < canvas.width; x += 118) {
    target.beginPath();
    target.moveTo(x, 0);
    target.lineTo(x, canvas.height);
    target.stroke();
  }
  target.restore();

  drawTerminalFrame(target, 62, 72, 370, 126, 0.2);
  drawTerminalFrame(target, canvas.width - 430, 72, 320, 112, 0.18);
  drawOriginiumCluster(target, 142, 154, 0.82, 0.34);
  drawOriginiumCluster(target, canvas.width - 142, 154, 0.78, 0.32);
  drawOriginiumCluster(target, 168, canvas.height - 164, 0.78, 0.3);
  drawOriginiumCluster(target, canvas.width - 170, canvas.height - 158, 0.82, 0.32);

  target.save();
  target.globalAlpha = 0.16;
  target.strokeStyle = "#e1f1f5";
  target.lineWidth = 1.8;
  target.beginPath();
  target.arc(canvas.width * 0.72, canvas.height * 0.62, 96, 0, Math.PI * 2);
  target.stroke();
  target.beginPath();
  target.arc(canvas.width * 0.72, canvas.height * 0.62, 58, 0.25, Math.PI * 1.7);
  target.stroke();
  target.restore();

  target.save();
  target.globalAlpha = 0.22;
  target.fillStyle = "#e8f7fa";
  target.font = "900 22px Arial, sans-serif";
  target.fillText("RHODES ISLAND // PRTS", 72, canvas.height - 112);
  target.font = "800 13px Arial, sans-serif";
  target.fillText("ORIGINIUM MONITORING FIELD", 72, canvas.height - 132);
  target.restore();
}

function tileCenter(row, col) {
  return referenceToCanvasPoint(referenceTileCenter(row, col));
}

function buildLandTiles() {
  const tiles = [];
  const rows = Math.ceil(canvas.height / hex.stepY) + 3;
  const cols = Math.ceil(canvas.width / hex.stepX) + 3;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const [x, y] = tileCenter(row, col);
      if (inLand(x, y)) tiles.push({ x, y, row, col });
    }
  }
  return tiles;
}

updateMapLayout();
let landTiles = [];
let landTileKeys = new Set();
let perimeterTiles = [];
let regionTiles = new Map(regionShapes.map((region) => [region.key, []]));
let tileStyles = buildTileStyles();

function tileKey(row, col) {
  return `${row}:${col}`;
}

function neighborCoords(row, col) {
  const diagonalLeft = row % 2 === 0 ? col - 1 : col;
  const diagonalRight = row % 2 === 0 ? col : col + 1;
  return [
    [row, col - 1],
    [row, col + 1],
    [row - 1, diagonalLeft],
    [row - 1, diagonalRight],
    [row + 1, diagonalLeft],
    [row + 1, diagonalRight],
  ];
}

function buildPerimeterTiles() {
  const perimeter = new Map();
  landTiles.forEach((tile) => {
    neighborCoords(tile.row, tile.col).forEach(([row, col]) => {
      const key = tileKey(row, col);
      if (landTileKeys.has(key) || perimeter.has(key)) return;
      const [x, y] = tileCenter(row, col);
      const landNeighborCount = neighborCoords(row, col).filter(([nextRow, nextCol]) => landTileKeys.has(tileKey(nextRow, nextCol))).length;
      if (landNeighborCount > 2) return;
      if (x > -hex.stepX && x < canvas.width + hex.stepX && y > 20 && y < canvas.height + hex.stepY) {
        perimeter.set(key, { x, y, row, col });
      }
    });
  });
  return [...perimeter.values()];
}

function buildTileStyles() {
  const styles = new Map();
  regionShapes.forEach((region) => {
    (regionTiles.get(region.key) || []).forEach((tile) => {
      const color = displayColorFor(region);
      styles.set(tileKey(tile.row, tile.col), {
        kind: "region",
        regionKey: region.key,
        color,
        gradientTo: blendColor(color, "#eef8fb", 0.24),
      });
    });
  });
  return styles;
}

function renderBaseCache() {
  if (baseReady) return;
  baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
  drawBackground(baseCtx);
  baseReady = true;
}

function drawPerimeterTile(target, tile, part = "all") {
  const bottomFade = tile.y > canvas.height * 0.64
    ? Math.max(0.04, 1 - (tile.y - canvas.height * 0.64) / 72) * 0.22
    : 0.55;
  target.save();
  target.globalAlpha *= bottomFade;
  target.shadowColor = "rgba(7, 20, 30, 0.3)";
  target.shadowBlur = (tile.y > canvas.height * 0.64 ? 5 : 10) * mapLayout.scale;
  target.shadowOffsetX = 4 * mapLayout.scale;
  target.shadowOffsetY = 7 * mapLayout.scale;
  drawHexPrism(target, tile.x, tile.y, "#273d49", {
    part,
    depth: 20 * mapLayout.scale,
    sideGrow: 0.08 * mapLayout.scale,
    topGrow: 0.08 * mapLayout.scale,
    gradientTo: "#344f5e",
    stroke: null,
    strokeWidth: 0,
  });
  target.restore();
}

function drawLandTile(target, tile, part = "all") {
  const style = tileStyles.get(tileKey(tile.row, tile.col)) || {
    kind: "background",
    color: "#eef8fb",
    gradientTo: "#ffffff",
  };
  const isActive = style.regionKey && activeRegion === style.regionKey;
  const isUnselectedRegion = activeRegion && style.regionKey && activeRegion !== style.regionKey;
  const tileColor = isUnselectedRegion ? blendColor(style.color, "#dce8ec", 0.34) : style.color;
  const tileGradientTo = isUnselectedRegion
    ? blendColor(style.gradientTo || style.color, "#edf6f8", 0.34)
    : style.gradientTo;
  const topAlpha = 1;
  const lift = 0;
  const tileDepth = 18 * mapLayout.scale;
  const sideGrow = 0.1 * mapLayout.scale;
  const topGrow = 0.58 * mapLayout.scale;

  target.save();
  target.shadowColor = part === "sides" ? "rgba(8, 24, 32, 0.14)" : "rgba(0,0,0,0)";
  target.shadowBlur = part === "sides" ? 4 * mapLayout.scale : 0;
  target.shadowOffsetX = part === "sides" ? 2 * mapLayout.scale : 0;
  target.shadowOffsetY = part === "sides" ? 3 * mapLayout.scale : 0;
  drawHexPrism(target, tile.x, tile.y, tileColor, {
    part,
    depth: tileDepth,
    lift,
    sideGrow,
    topGrow,
    shine: 0,
    gradientTo: part === "top" ? null : tileGradientTo,
    topAlpha,
    stroke: null,
    strokeWidth: 0,
  });
  target.restore();
}

function renderTiles(target) {
  const sortedPerimeter = perimeterTiles
    .slice()
    .sort((a, b) => a.y - b.y || a.x - b.x);
  const sortedLand = landTiles
    .slice()
    .sort((a, b) => a.y - b.y || a.x - b.x);
  sortedPerimeter
    .filter((tile) => tile.y > canvas.height * 0.54)
    .forEach((tile) => drawPerimeterTile(target, tile, "all"));
  sortedLand.filter(nearLandEdge).forEach((tile) => drawLandTile(target, tile, "sides"));
  sortedLand.forEach((tile) => drawLandTile(target, tile, "top"));
}

function drawLabels(target) {
  regionShapes.forEach((region) => {
    const [x, y] = referenceToCanvasPoint(labelPositions[region.key]);
    const cityLabel = region.key === "chernobog" || region.key === "lungmen";
    const labelLift = (cityLabel ? 28 : 32) * mapLayout.scale;
    const lineStep = 20 * mapLayout.scale;
    const lines = region.name.includes(" / ") ? [region.name] : region.name.split("\n");
    target.save();
    target.textAlign = "center";
    target.textBaseline = "middle";
    target.font = cityLabel
      ? `900 ${Math.max(10, 12 * mapLayout.scale)}px Arial, sans-serif`
      : `900 ${Math.max(15, 20 * mapLayout.scale)}px Arial, sans-serif`;
    target.lineJoin = "round";
    target.shadowColor = "rgba(0,0,0,0.5)";
    target.shadowBlur = 4 * mapLayout.scale;
    target.shadowOffsetY = 3 * mapLayout.scale;
    lines.forEach((line, index) => {
      const lineY = y - labelLift + index * lineStep;
      target.strokeStyle = "#071017";
      target.lineWidth = (cityLabel ? 4 : 5.4) * mapLayout.scale;
      target.strokeText(line, x, lineY);
      target.fillStyle = "#ffffff";
      target.fillText(line, x, lineY);
    });
    target.restore();
  });
}

function buildMapCache() {
  const previousRegion = activeRegion;
  activeRegion = null;
  const cachedCanvas = document.createElement("canvas");
  cachedCanvas.width = canvas.width;
  cachedCanvas.height = canvas.height;
  const cachedCtx = cachedCanvas.getContext("2d");
  cachedCtx.drawImage(baseCanvas, 0, 0);
  renderTiles(cachedCtx);
  activeRegion = previousRegion;
  mapCache.set("all", cachedCanvas);
}

function drawSelectionOverlay(target) {
  if (!activeRegion) return;
  landTiles.forEach((tile) => {
    const style = tileStyles.get(tileKey(tile.row, tile.col));
    if (!style?.regionKey || style.regionKey === activeRegion) return;
    const top = hexPoints(tile.x, tile.y - 32, 1.15);
    const alpha = 0.28;
    drawPolygon(target, top, `rgba(238,248,251,${alpha})`);
  });
}

function renderMap() {
  renderBaseCache();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (activeRegion) {
    ctx.drawImage(baseCanvas, 0, 0);
    renderTiles(ctx);
  } else {
    if (!mapCache.has("all")) buildMapCache();
    ctx.drawImage(mapCache.get("all"), 0, 0);
  }
  drawLabels(ctx);
}

function scheduleRenderMap() {
  if (pendingMapFrame) return;
  pendingMapFrame = requestAnimationFrame(() => {
    pendingMapFrame = null;
    renderMap();
  });
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
  scheduleRenderMap();
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

function hitRegionAt(x, y) {
  for (let index = landTiles.length - 1; index >= 0; index -= 1) {
    const tile = landTiles[index];
    const style = tileStyles.get(tileKey(tile.row, tile.col));
    if (!style?.regionKey) continue;
    if (pointInPolygon(x, y, hexPoints(tile.x, tile.y - 26 * mapLayout.scale, 0.35 * mapLayout.scale))) return style.regionKey;
  }
  for (let index = regionShapes.length - 1; index >= 0; index -= 1) {
    const region = regionShapes[index];
    const [labelX, labelY] = referenceToCanvasPoint(labelPositions[region.key]);
    const cityLabel = region.key === "chernobog" || region.key === "lungmen";
    const labelLift = (cityLabel ? 28 : 32) * mapLayout.scale;
    const hitRadius = (cityLabel ? 54 : 92) * mapLayout.scale;
    if (Math.hypot(x - labelX, y - labelLift) < hitRadius) return region.key;
  }
  return null;
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
  const hit = hitRegionAt(x, y);
  if (hit) selectRegion(hit);
});
canvas.addEventListener("mousemove", (event) => {
  const [x, y] = canvasPoint(event);
  const nextHoverRegion = hitRegionAt(x, y);
  canvas.style.cursor = nextHoverRegion ? "pointer" : "default";
  hoverRegion = nextHoverRegion;
});
clearRegion.addEventListener("click", () => {
  activeRegion = null;
  renderTimelines();
  scheduleRenderMap();
});

loadRegionIcons();
loadReferenceMap();
renderTimelines();
renderMap();
