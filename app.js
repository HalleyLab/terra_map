const events = [
  {
    id: "y797",
    year: "797",
    sortYear: 797,
    place: "七城联邦",
    region: "莱塔尼亚旧地",
    x: 440,
    y: 250,
    type: "state",
    title: "七城联邦覆灭",
    text: "附录年表将 797 年列为已知泰拉历史中的早期关键节点：七城联邦覆灭，旧政治秩序走向终结。",
  },
  {
    id: "y845",
    year: "845",
    sortYear: 845,
    place: "哥伦比亚",
    region: "西部拓殖地",
    x: 235,
    y: 315,
    type: "state",
    title: "哥伦比亚拓殖启动",
    text: "哥伦比亚方向的各地移民与拓殖活动开始活跃，为后来新国家的形成埋下基础。",
  },
  {
    id: "y885",
    year: "885",
    sortYear: 885,
    place: "伊比利亚",
    region: "南方海岸",
    x: 350,
    y: 475,
    type: "culture",
    title: "伊比利亚海外扩张",
    text: "伊比利亚依靠航海与技术力量走向远海，海外探索与殖民活动成为黄金时代的先声。",
  },
  {
    id: "y897",
    year: "897",
    sortYear: 897,
    place: "莱塔尼亚",
    region: "中部城邦",
    x: 470,
    y: 295,
    type: "state",
    title: "巫王统治确立",
    text: "莱塔尼亚进入巫王相关的高压政治时期，艺术、法术与权力被集中到统治秩序之中。",
  },
  {
    id: "y898",
    year: "898",
    sortYear: 898,
    place: "卡兹戴尔",
    region: "中央荒原",
    x: 515,
    y: 380,
    type: "war",
    title: "卡兹戴尔内战爆发",
    text: "旧王朝战争失败后，卡兹戴尔内部矛盾激化，漫长内战与军事化政治成为萨卡兹历史的主线。",
  },
  {
    id: "y913",
    year: "913",
    sortYear: 913,
    place: "伊比利亚",
    region: "南方海岸",
    x: 350,
    y: 475,
    type: "culture",
    title: "海洋威胁进入记录",
    text: "伊比利亚相关记录开始出现关于深海与恐鱼的记述，后来这些威胁改变了整个海岸文明的命运。",
  },
  {
    id: "y930",
    year: "930",
    sortYear: 930,
    place: "伊比利亚",
    region: "南方海岸",
    x: 350,
    y: 475,
    type: "culture",
    title: "伊比利亚黄金时代",
    text: "伊比利亚迎来黄金时代，远洋、科学与城市文明在这一时期达到高峰。",
  },
  {
    id: "y969",
    year: "969",
    sortYear: 969,
    place: "莱塔尼亚",
    region: "中部城邦",
    x: 470,
    y: 295,
    type: "state",
    title: "莱塔尼亚权力重组",
    text: "莱塔尼亚的统治结构出现关键更替，巫王时代的政治阴影持续影响此后的中部诸国。",
  },
  {
    id: "y990",
    year: "990",
    sortYear: 990,
    place: "哥伦比亚",
    region: "西部拓殖地",
    x: 235,
    y: 315,
    type: "state",
    title: "哥伦比亚命名",
    text: "维多利亚发现并命名一片新的地区为“哥伦比亚”，西部拓殖从地理发现转向政治实体。",
  },
  {
    id: "y1016",
    year: "1016-1019",
    sortYear: 1016,
    place: "高卢 / 四国",
    region: "维多利亚周边",
    x: 560,
    y: 265,
    type: "war",
    title: "第七次高卢战争",
    text: "高卢扩张引发列强冲突，随后牵动维多利亚、莱塔尼亚等大国，成为四国战争的前奏。",
  },
  {
    id: "y1029",
    year: "1029-1031",
    sortYear: 1029,
    place: "高卢 / 莱塔尼亚",
    region: "中西部",
    x: 520,
    y: 265,
    type: "war",
    title: "高卢与莱塔尼亚战争",
    text: "高卢与莱塔尼亚的战争进入关键阶段，列强平衡被打破，旧欧洲式大国秩序加速崩解。",
  },
  {
    id: "y1031",
    year: "1031",
    sortYear: 1031,
    place: "卡兹戴尔",
    region: "中央荒原",
    x: 515,
    y: 380,
    type: "war",
    title: "军事委员会形成",
    text: "卡兹戴尔战争议会改组为军事委员会，战争治理成为萨卡兹政治结构的核心。",
  },
  {
    id: "y1038",
    year: "1038",
    sortYear: 1038,
    place: "伊比利亚",
    region: "南方海岸",
    x: 350,
    y: 475,
    type: "war",
    title: "大静谧爆发",
    text: "大静谧爆发，伊比利亚王国崩溃；海洋灾难把黄金时代推入封闭、衰落与恐惧。",
  },
  {
    id: "y1039",
    year: "1039",
    sortYear: 1039,
    place: "叙拉古",
    region: "南部城邦",
    x: 505,
    y: 505,
    type: "state",
    title: "城邦联合议事会成立",
    text: "叙拉古形成城邦联合议事会，地方城邦与家族势力在新制度下重组。",
  },
  {
    id: "y1050",
    year: "1050",
    sortYear: 1050,
    place: "玻利瓦尔",
    region: "西南部",
    x: 175,
    y: 475,
    type: "state",
    title: "自治运动爆发",
    text: "玻利瓦尔自治运动爆发，外部势力、地方派别与独立诉求交织，地区局势长期动荡。",
  },
  {
    id: "y1062",
    year: "1062",
    sortYear: 1062,
    place: "乌萨斯 / 卡兹戴尔",
    region: "北方至中央荒原",
    x: 650,
    y: 170,
    type: "war",
    title: "乌萨斯与卡兹戴尔战争结束",
    text: "第十次乌萨斯-卡兹戴尔战争结束，北方帝国与萨卡兹之间的军事创伤继续延伸。",
  },
  {
    id: "y1063",
    year: "1063",
    sortYear: 1063,
    place: "拉特兰",
    region: "中部圣城",
    x: 575,
    y: 345,
    type: "culture",
    title: "新一代教宗继位",
    text: "拉特兰的伊万杰利斯塔十一世成为新一代教宗，信仰共同体维持其独特的国际影响。",
  },
  {
    id: "y1073",
    year: "1073",
    sortYear: 1073,
    place: "乌萨斯",
    region: "北方帝国",
    x: 690,
    y: 165,
    type: "state",
    title: "乌萨斯皇帝驾崩",
    text: "乌萨斯皇帝费奥多尔·伊凡诺维奇驾崩，帝国进入动荡的权力过渡。",
  },
  {
    id: "y1074",
    year: "1074-1076",
    sortYear: 1074,
    place: "乌萨斯",
    region: "北方帝国",
    x: 690,
    y: 165,
    type: "war",
    title: "大叛乱",
    text: "乌萨斯爆发大叛乱，帝国秩序遭遇严重冲击，也改变了周边国家对北方的判断。",
  },
  {
    id: "y1077",
    year: "1077",
    sortYear: 1077,
    place: "维多利亚",
    region: "中西部王国",
    x: 595,
    y: 300,
    type: "state",
    title: "维多利亚女皇时代",
    text: "维多利亚进入关键王权时代，贵族、大公与王位继承问题塑造了近代政治危机。",
  },
  {
    id: "y1091",
    year: "1091",
    sortYear: 1091,
    place: "谢拉格",
    region: "西北雪境",
    x: 365,
    y: 185,
    type: "modern",
    title: "谢拉格对外开放",
    text: "谢拉格开始对外开放，雪境国家从封闭宗教与家族秩序迈向外部贸易和现代政治。",
  },
  {
    id: "y1096",
    year: "1096-1097",
    sortYear: 1096,
    place: "切尔诺伯格 / 龙门",
    region: "乌萨斯与炎国边境",
    x: 770,
    y: 260,
    type: "modern",
    title: "切尔诺伯格-龙门事件",
    text: "整合运动、乌萨斯移动城市切尔诺伯格与龙门卷入危机，成为近代泰拉感染者问题的标志性事件。",
  },
  {
    id: "y1098",
    year: "1098",
    sortYear: 1098,
    place: "维多利亚",
    region: "中西部王国",
    x: 595,
    y: 300,
    type: "modern",
    title: "维多利亚事件",
    text: "维多利亚政治危机公开化，王权、诸公爵和外来势力交错，改变了大国格局。",
  },
  {
    id: "y1099",
    year: "1099",
    sortYear: 1099,
    place: "万国峰会",
    region: "泰拉国际舞台",
    x: 620,
    y: 420,
    type: "modern",
    title: "第一届泰拉摇篮万国峰会",
    text: "第一届泰拉摇篮万国峰会召开，各国议题首次被放入更明确的国际框架中讨论。",
  },
];

const typeNames = {
  war: "战争与冲突",
  state: "国家与政体",
  culture: "文化与技术",
  modern: "近代事件",
};

const timeline = document.querySelector("#timeline");
const markers = document.querySelector("#mapMarkers");
const detail = document.querySelector("#detail");
const activePlace = document.querySelector("#activePlace");
const routePath = document.querySelector("#routePath");
const eventCount = document.querySelector("#eventCount");
const regionCount = document.querySelector("#regionCount");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll("[data-filter]");

let activeFilter = "all";
let activeId = events[events.length - 1].id;

function filteredEvents() {
  const query = searchInput.value.trim().toLowerCase();
  return events.filter((event) => {
    const filterMatch = activeFilter === "all" || event.type === activeFilter;
    const queryText = `${event.year} ${event.place} ${event.region} ${event.title} ${event.text}`.toLowerCase();
    return filterMatch && (!query || queryText.includes(query));
  });
}

function renderTimeline(list) {
  timeline.innerHTML = "";
  list.forEach((event) => {
    const item = document.createElement("article");
    item.className = `event ${event.id === activeId ? "active" : ""}`;
    item.dataset.id = event.id;
    item.innerHTML = `
      <div class="event-year">
        <span class="year">${event.year}</span>
        <span class="place">${event.place}</span>
      </div>
      <h3>${event.title}</h3>
      <p>${event.text}</p>
    `;
    item.addEventListener("click", () => selectEvent(event.id));
    timeline.appendChild(item);
  });
}

function renderMap(list) {
  markers.innerHTML = "";
  const path = list.map((event, index) => `${index === 0 ? "M" : "L"} ${event.x} ${event.y}`).join(" ");
  routePath.setAttribute("d", path);

  const seen = new Map();
  list.forEach((event) => {
    const key = `${event.x},${event.y}`;
    const count = seen.get(key) || 0;
    seen.set(key, count + 1);
    const offset = count * 15;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.classList.add("marker");
    if (event.id === activeId) group.classList.add("active");
    group.setAttribute("transform", `translate(${event.x + offset}, ${event.y - offset})`);
    group.dataset.id = event.id;
    group.innerHTML = `
      <circle r="12"></circle>
      <text x="18" y="5">${event.place}</text>
    `;
    group.addEventListener("click", () => selectEvent(event.id));
    markers.appendChild(group);
  });
}

function renderDetail(event) {
  activePlace.textContent = `${event.place} · ${event.year}`;
  detail.innerHTML = `
    <h3>${event.year}｜${event.title}</h3>
    <div class="meta">${event.place} / ${event.region} / ${typeNames[event.type]}</div>
    <p>${event.text}</p>
  `;
}

function selectEvent(id) {
  activeId = id;
  const event = events.find((item) => item.id === id) || events[0];
  render();
  renderDetail(event);
  const activeCard = timeline.querySelector(`[data-id="${id}"]`);
  if (activeCard) activeCard.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function render() {
  const list = filteredEvents();
  eventCount.textContent = String(list.length);
  regionCount.textContent = String(new Set(list.map((event) => event.place)).size);
  renderTimeline(list);
  renderMap(list);
  if (!list.some((event) => event.id === activeId) && list.length > 0) {
    activeId = list[0].id;
    renderDetail(list[0]);
  } else if (list.length === 0) {
    activePlace.textContent = "没有匹配项";
    detail.innerHTML = `<p class="empty">没有找到匹配的事件。</p>`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);

render();
renderDetail(events.find((item) => item.id === activeId));
