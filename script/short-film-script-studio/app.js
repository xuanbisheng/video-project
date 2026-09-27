const STORAGE_KEY = "shortFilmScriptStudio.v1";

const stages = [
  { id: "briefResearch", title: "题材研究 Agent", short: "Research Agent", description: "输入一个创意、目标平台和市场，调用 Agent 搜索相近题材并产出 3 个故事简介。", gate: "确认创意并调用 Agent", hint: "填写创意、类型、平台和市场，确认后调用题材研究 Agent。" },
  { id: "concepts", title: "故事方案", short: "Concepts", description: "把用户创意转化为 3 个可比较、可制作的原创故事简介。", gate: "确认故事方案", hint: "选择一个方案；如果 3 个都不符合，可以重新生成下一组。" },
  { id: "story", title: "故事成稿", short: "Story", description: "把选定创意写成完整故事正文，确认人物、规则、冲突、反转和结尾。", gate: "确认故事成稿", hint: "确认故事正文后，编剧才开始写完整初稿。" },
  { id: "draft", title: "剧本初稿", short: "Draft", description: "生成可拍摄、可表演、可剪辑的短片剧本初稿。", gate: "授权剧本审查", hint: "确认初稿后，才进入剧本医生审查。" },
  { id: "review", title: "剧本审查", short: "Review", description: "按照 A/B/C 级别检查逻辑、节奏、人物和制作可行性。", gate: "确认修改范围", hint: "选择需要处理的问题等级，再生成最终稿。" },
  { id: "final", title: "最终剧本", short: "Final", description: "根据确认的修改范围，整理最终可用的短片剧本。", gate: "完成项目", hint: "导出最终 Markdown，交给后续导演或制作流程。" }
];

const defaultState = () => ({
  version: 1,
  currentStage: "briefResearch",
  updatedAt: null,
  gates: { briefResearch: false, concepts: false, story: false, draft: false, review: false, final: false },
  brief: { projectTitle: "", idea: "", duration: "", platform: "", market: "", audience: "", genre: "", tone: "", language: "中文", constraints: "", references: "" },
  research: { task: "", report: "", searchFeedback: "", searchStatus: "idle", searchStarted: false, conceptStatus: "idle", conceptRound: 0, agentError: "", topics: [{ name: "", heat: "中", affinity: "中", fit: "中", evidence: "" }] },
  concepts: [blankConcept()],
  selectedConcept: 0,
  story: "",
  draft: "",
  review: { overall: "", issues: [blankIssue()], strengths: "" },
  final: "",
  activity: []
});

function blankConcept() { return { title: "", logline: "", genre: "", theme: "", protagonist: "", conflict: "", ending: "", originality: "", feasibility: "" }; }
function blankIssue() { return { severity: "A", location: "", problem: "", suggestion: "", apply: true }; }

function sampleState() {
  const s = defaultState();
  s.currentStage = "briefResearch";
  s.gates = { briefResearch: true, concepts: true, story: true, draft: true, review: true, final: false };
  s.brief = { projectTitle: "《回声未读》", idea: "一个女孩在前任去世后收到一条延迟发送的语音，语音里的时间却还没有到。", duration: "3分钟", platform: "抖音 / 小红书", market: "中国大陆", audience: "18—35岁，喜欢悬疑和情感反转的观众", genre: "悬疑 / 情感", tone: "克制、压迫、最后一击", language: "中文", constraints: "2名演员，1个室内场景，尽量适合 AI 视频生成", references: "只参考都市悬疑的节奏，不复制具体作品" };
  s.research = { task: "研究最近90天适合3分钟悬疑情感短片的热门题材，重点关注用户对秘密、误会和关系反转的情绪反馈。", report: "执行摘要：观众对短时长、强钩子、关系秘密和结尾反转保持较高兴趣。题材开发应避免单纯模仿聊天记录或失踪叙事，改用更具体的情感代价。\n\n数据备注：此处为界面演示内容，正式项目应由 Agent 搜索并补充来源、日期和交叉验证。", topics: [
    { name: "被隐藏的语音留言", heat: "高", affinity: "高", fit: "高", evidence: "适合单场景，情绪信息密度高" },
    { name: "亲密关系中的身份误认", heat: "中高", affinity: "高", fit: "高", evidence: "容易在前30秒建立悬念" },
    { name: "一个决定改变结局的倒计时", heat: "中", affinity: "中高", fit: "中高", evidence: "视觉化明确，但需要控制信息量" }
  ] };
  s.research.searchFeedback = "已收到演示搜索反馈：优先关注关系秘密、隐藏留言和限时选择等方向。正式项目应替换为带日期和来源的真实搜索结果。";
  s.research.searchStatus = "feedback";
  s.research.searchStarted = true;
  s.research.conceptStatus = "ready";
  s.research.conceptRound = 1;
  s.concepts = [
    { title: "未读语音", logline: "一个女孩在前任去世后收到一条延迟发送的语音，却发现语音里的时间还没有到。", genre: "悬疑 / 情感", theme: "真正迟到的不是消息，而是承认", protagonist: "林夏，习惯逃避告别的剪辑师", conflict: "她必须在语音失效前决定是否面对那段关系", ending: "她听完语音，发现对方留下的不是解释，而是一个让她重新生活的选择", originality: "把反转落在情感选择，而不是身份骗局", feasibility: "2名演员，1个房间，手机和声音承担主要叙事" },
    { title: "陌生人的合照", logline: "男孩发现母亲手机里有一张和陌生人拍的合照，而照片背景正是今天的街道。", genre: "悬疑 / 家庭", theme: "我们以为了解家人，其实只了解他们愿意说的部分", protagonist: "周野，试图修复母子关系的年轻人", conflict: "他要在照片中的人出现前问出真相", ending: "陌生人不是秘密情人，而是母亲为他准备的另一种人生", originality: "用家庭关系代替猎奇揭密", feasibility: "3名演员，1个室内场景加一张照片" },
    { title: "替我接电话", logline: "一名保安接起陌生来电，对方准确说出他接下来每一个动作，直到电话要求他离开岗位。", genre: "悬疑 / 惊悚", theme: "服从指令是否也是一种选择", protagonist: "陈默，害怕犯错的夜班保安", conflict: "他必须判断电话是在救他，还是把他引向危险", ending: "电话来自未来的自己，但最后一句是他从未说过的话", originality: "将超自然设定压缩为行为选择", feasibility: "单一值班室，声音和灯光制造变化" }
  ];
  s.selectedConcept = 0;
  s.story = "《回声未读》故事成稿：林夏在前任去世后收到一条延迟发送的语音，语音里的时间却还没有到。她本想删除消息，却发现语音知道她删掉的细节，并要求她打开一块旧硬盘。硬盘里没有解释，只有一段两人共同拍摄、从未剪完的视频。林夏最终没有删除语音，而是把视频发给一直不敢联系的人，允许自己完成告别。";
  s.draft = "《回声未读》\n\nINT. 林夏公寓 - 夜\n\n手机屏幕亮起。一个未读语音，发送时间显示为：明天 00:03。\n\n林夏盯着屏幕，没有点开。\n\n手机自动播放。\n\n周衡（语音）\n你又在删东西。\n\n林夏的手停在硬盘上。\n\n她抬头看向空房间。\n\n林夏\n你已经死了。\n\n语音停顿。\n\n周衡（语音）\n所以这次，别替我剪掉结尾。\n\n林夏打开抽屉，拿出一块旧硬盘。屏幕上是一段未完成的视频。画面里，周衡笑着看向镜头，却没有说话。\n\n语音最后一次响起。\n\n周衡（语音）\n林夏，听完以后，把它发出去。\n\n林夏看着发送键。天快亮了。她没有删除语音，而是把视频发给了一个一直没有联系的人。\n\n屏幕上，未读标记消失。\n\nCUT TO BLACK.";
  s.review = { overall: "整体成立，核心优势是单场景、声音驱动和情感落点。需要加强语音与人物选择之间的因果，避免最后一段只靠解释完成反转。", issues: [
    { severity: "A", location: "场景2—3", problem: "语音为什么知道林夏删掉的细节，目前缺少可感知的因果线索。", suggestion: "在前段加入一个具体的剪辑文件或共同习惯，后段让语音引用它。", apply: true },
    { severity: "B", location: "最后画面", problem: "林夏把视频发给谁不够明确，情感选择还可以更具体。", suggestion: "在故事成稿中确定收件人，并在前段埋下这段关系。", apply: true },
    { severity: "C", location: "对白整体", problem: "部分语音台词偏功能性，缺少周衡独特的说话习惯。", suggestion: "加入一个只有两人知道的称呼或生活细节。", apply: false }
  ], strengths: "单场景可控，声音具备悬疑功能，结尾没有依赖纯身份骗局。" };
  s.activity = [{ text: "已加载演示项目，可浏览全部阶段。", time: nowLabel() }];
  return s;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return mergeState(JSON.parse(raw));
  } catch (error) { console.warn("读取本地项目失败", error); }
  return defaultState();
}

function mergeState(raw) {
  const base = defaultState();
  if (!raw || typeof raw !== "object") return base;
  const normalized = Object.assign({}, raw);
  if (normalized.currentStage === "brief" || normalized.currentStage === "research") normalized.currentStage = "briefResearch";
  if (normalized.currentStage === "bible" || normalized.currentStage === "outline") normalized.currentStage = "story";
  const oldGates = normalized.gates || {};
  const migratedGate = oldGates.briefResearch !== undefined ? oldGates.briefResearch : Boolean(oldGates.brief && oldGates.research);
  const migratedStory = oldGates.story !== undefined ? oldGates.story : Boolean(oldGates.bible || oldGates.outline || oldGates.draft);
  const gates = Object.assign({}, oldGates, { briefResearch: migratedGate, story: migratedStory });
  delete gates.bible;
  delete gates.outline;
  delete normalized.bible;
  delete normalized.outline;
  const mergedResearch = Object.assign(base.research, normalized.research || {});
  if (gates.briefResearch) {
    mergedResearch.searchStarted = true;
    if (mergedResearch.searchStatus === "idle") mergedResearch.searchStatus = "feedback";
  }
  return Object.assign(base, normalized, { gates: Object.assign(base.gates, gates), brief: Object.assign(base.brief, normalized.brief || {}), research: mergedResearch, story: String(normalized.story || ""), review: Object.assign(base.review, normalized.review || {}) });
}

let state = loadState();
let toastTimer = null;

function $(selector) { return document.querySelector(selector); }
function nowLabel() { return new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }); }
function activeStage() { return stages.find(function (stage) { return stage.id === state.currentStage; }) || stages[0]; }
function activeIndex() { return Math.max(0, stages.findIndex(function (stage) { return stage.id === state.currentStage; })); }
function isUnlocked(index) { return index === 0 || stages.slice(0, index).every(function (stage) { return state.gates[stage.id]; }); }
function escapeHtml(value) { return String(value == null ? "" : value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"); }
function setPath(object, path, value) { const parts = path.replace(/\[(\d+)\]/g, ".$1").split("."); let target = object; parts.forEach(function (key, index) { if (index === parts.length - 1) target[key] = value; else { if (target[key] == null) target[key] = /^\d+$/.test(parts[index + 1]) ? [] : {}; target = target[key]; } }); }
function field(label, path, value, options) {
  const opts = options || {};
  const full = opts.full ? " full" : "";
  const cls = opts.className ? " " + opts.className : "";
  const helper = opts.helper ? "<small>" + escapeHtml(opts.helper) + "</small>" : "";
  if (opts.type === "select") {
    const choices = (opts.options || []).map(function (choice) { return "<option value=\"" + escapeHtml(choice) + "\"" + (choice === value ? " selected" : "") + ">" + escapeHtml(choice) + "</option>"; }).join("");
    return "<div class=\"field" + full + cls + "\"><label>" + escapeHtml(label) + "</label><select data-bind=\"" + path + "\">" + choices + "</select>" + helper + "</div>";
  }
  if (opts.type === "textarea") return "<div class=\"field" + full + cls + "\"><label>" + escapeHtml(label) + "</label><textarea class=\"" + (opts.large ? "large" : "") + "\" data-bind=\"" + path + "\" placeholder=\"" + escapeHtml(opts.placeholder || "") + "\">" + escapeHtml(value) + "</textarea>" + helper + "</div>";
  return "<div class=\"field" + full + cls + "\"><label>" + escapeHtml(label) + "</label><input type=\"" + (opts.type || "text") + "\" data-bind=\"" + path + "\" value=\"" + escapeHtml(value) + "\" placeholder=\"" + escapeHtml(opts.placeholder || "") + "\">" + helper + "</div>";
}
function tableInput(path, value, className) { return "<input class=\"table-input " + (className || "") + "\" data-bind=\"" + path + "\" value=\"" + escapeHtml(value) + "\">"; }
function tableTextarea(path, value) { return "<textarea class=\"table-input table-textarea\" data-bind=\"" + path + "\">" + escapeHtml(value) + "</textarea>"; }
function stageStatus(stage, index) { if (state.gates[stage.id]) return "已确认"; if (!isUnlocked(index)) return "锁定"; if (stage.id === state.currentStage) return "当前"; return "待处理"; }
function statusClass(stage, index) { return state.gates[stage.id] ? "done" : stage.id === state.currentStage ? "active" : !isUnlocked(index) ? "locked" : ""; }

function render() {
  const stage = activeStage();
  const index = activeIndex();
  renderSidebar();
  $("#projectMini").textContent = state.brief.projectTitle || "未命名短片";
  $("#stageEyebrow").textContent = "阶段 " + String(index + 1).padStart(2, "0");
  $("#stageTitle").textContent = stage.title;
  $("#stageDescription").textContent = stage.description;
  $("#stageState").textContent = state.gates[stage.id] ? "已确认" : stage.id === "briefResearch" && state.research.searchStatus === "error" ? "Agent 未连接" : stage.id === "briefResearch" && state.research.searchStarted ? "等待搜索反馈" : "进行中";
  $("#stageState").style.color = state.gates[stage.id] ? "var(--green)" : "var(--accent-2)";
  $("#stageState").style.borderColor = state.gates[stage.id] ? "rgba(52, 211, 153, 0.35)" : "rgba(245, 158, 11, 0.28)";
  $("#stageState").style.background = state.gates[stage.id] ? "rgba(52, 211, 153, 0.1)" : "rgba(245, 158, 11, 0.1)";
  $("#editor").innerHTML = renderEditor(stage.id);
  $("#footerHint").textContent = stage.hint;
  $("#confirmBtn").textContent = stage.id === "final" ? "完成项目" : stage.id === "briefResearch" ? (state.research.searchStarted ? "确认反馈并进入下一步" : "确认条件并调用 Agent") : state.gates[stage.id] ? "重新确认并继续" : "确认并进入下一步";
  updateInspector(stage, index);
  $("#saveState").textContent = state.updatedAt ? "已保存 " + new Date(state.updatedAt).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }) : "未保存";
}
function renderSidebar() {
  $("#stageList").innerHTML = stages.map(function (stage, index) { const disabled = !isUnlocked(index) ? " disabled" : ""; return "<button class=\"stage-item " + statusClass(stage, index) + "\" type=\"button\" data-stage=\"" + stage.id + "\"" + disabled + "><span class=\"stage-index\">" + (index + 1) + "</span><span class=\"stage-copy\"><span class=\"stage-name\">" + escapeHtml(stage.title) + "</span><span class=\"stage-meta\">" + escapeHtml(stage.short) + "</span></span><span class=\"stage-status\">" + stageStatus(stage, index) + "</span></button>"; }).join("");
}
function renderEditor(id) { if (id === "briefResearch") return renderBriefResearch(); if (id === "concepts") return renderConcepts(); if (id === "story") return renderStory(); if (id === "draft") return renderDraft(); if (id === "review") return renderReview(); return renderFinal(); }
function renderBriefResearch() {
  const b = state.brief;
  const r = state.research;
  const started = r.searchStarted;
  const hasFeedback = Boolean((r.searchFeedback || '').trim() || (r.report || '').trim());
  const statusText = r.searchStatus === 'searching' ? 'Agent 已调用，等待相近题材研究和 3 个故事简介。' : r.searchStatus === 'feedback' ? '已收到 Agent 反馈，可以进入故事方案。' : r.searchStatus === 'error' ? 'Agent 未连接，尚未发送任务。' : '填写创意和三项条件后调用 Agent。';
  const action = started || hasFeedback ? '<button class="btn btn-primary" type="button" data-action="complete-search">搜索反馈已返回，进入故事方案</button>' : '<button class="btn btn-primary" type="button" data-action="start-search">确认条件并调用 Agent</button>';
  const topicRows = r.topics.map(function (topic, index) {
    return '<tr><td>' + (index + 1) + '</td><td>' + tableInput('research.topics[' + index + '].name', topic.name, 'wide') + '</td><td>' + tableInput('research.topics[' + index + '].heat', topic.heat, 'small') + '</td><td>' + tableInput('research.topics[' + index + '].affinity', topic.affinity, 'small') + '</td><td>' + tableInput('research.topics[' + index + '].fit', topic.fit, 'small') + '</td><td>' + tableInput('research.topics[' + index + '].evidence', topic.evidence, 'wide') + '</td><td><button class="text-btn danger-btn" type="button" data-action="remove-topic" data-index="' + index + '">删除</button></td></tr>';
  }).join('');
  return '<div class="editor-intro"><h3>题材研究 Agent</h3><p>先提供一个创意。Agent 会搜索相近题材的剧本或短片作为参考，再围绕你的创意产出 3 个原创故事简介；不会直接复制参考作品。</p></div><div class="form-grid">' +
    field('我的创意', 'brief.idea', b.idea, { full: true, type: 'textarea', large: true, placeholder: '用几句话描述你想做的故事、人物或核心冲突' }) +
    field('内容类型', 'brief.genre', b.genre, { placeholder: '例如：悬疑、情感、科幻、喜剧' }) +
    field('目标平台', 'brief.platform', b.platform, { placeholder: '例如：抖音、小红书、B站、YouTube' }) +
    field('市场 / 地区', 'brief.market', b.market, { placeholder: '例如：中国大陆、北美、东南亚' }) +
    '</div><div class="section-card search-card"><div class="section-card-heading"><div><h3>搜索任务状态</h3><p>Agent 会先找相近题材，再严格产出 3 个可比较的故事简介。</p></div><span class="chip ' + (started ? 'active' : '') + '">' + statusText + '</span></div><div class="search-task-preview"><span class="table-label">将发送给 Agent 的条件</span><p>创意：' + escapeHtml(b.idea || '待填写') + '</p><p>类型：' + escapeHtml(b.genre || '待填写') + '　平台：' + escapeHtml(b.platform || '待填写') + '　市场：' + escapeHtml(b.market || '待填写') + '</p></div><div class="row-actions" style="margin-top:14px">' + action + '</div>' + (r.agentError ? '<p class="field-error">' + escapeHtml(r.agentError) + '</p>' : '') + '</div>' +
    field('Agent 返回的研究与 3 个故事简介', 'research.searchFeedback', r.searchFeedback, { full: true, type: 'textarea', large: true, placeholder: started ? '粘贴 Agent 返回的相近题材来源和 3 个故事简介；若按页面提示返回 JSON，系统会自动填入方案卡' : '调用 Agent 后，将返回内容粘贴到这里' }) +
    '<div class="section-card"><div class="section-card-heading"><div><h3>候选题材</h3><p>搜索反馈确认后，可以在这里整理优先方向。</p></div><button class="btn btn-ghost" type="button" data-action="add-topic">+ 添加题材</button></div><div class="table-wrap"><table class="topic-table"><thead><tr><th>#</th><th>题材方向</th><th>热度</th><th>偏好</th><th>短片适配</th><th>证据 / 备注</th><th></th></tr></thead><tbody>' + topicRows + '</tbody></table></div></div>';
}

function renderBrief() {
  const b = state.brief;
  return "<div class=\"editor-intro\"><h3>先把短片的边界定下来</h3><p>这些信息会影响题材筛选、故事规模、场次数量和剧本节奏。缺失的内容可以先留空，确认前再补齐。</p></div><div class=\"form-grid\">" + field("项目名称", "brief.projectTitle", b.projectTitle, { placeholder: "例如：回声未读" }) + field("短片时长", "brief.duration", b.duration, { placeholder: "例如：3分钟" }) + field("目标平台", "brief.platform", b.platform, { placeholder: "例如：抖音 / 小红书 / B站" }) + field("市场 / 地区", "brief.market", b.market, { placeholder: "例如：中国大陆" }) + field("目标观众", "brief.audience", b.audience, { full: true, placeholder: "年龄、兴趣、观看场景" }) + field("类型", "brief.genre", b.genre, { placeholder: "例如：悬疑、情感、科幻" }) + field("情绪基调", "brief.tone", b.tone, { placeholder: "例如：克制、压迫、温暖" }) + field("语言", "brief.language", b.language, { type: "select", options: ["中文", "英文", "中英双语", "其他"] }) + field("制作限制", "brief.constraints", b.constraints, { full: true, type: "textarea", placeholder: "演员数量、场景数量、是否使用 AI、预算或拍摄限制" }) + field("参考作品 / 禁区", "brief.references", b.references, { full: true, type: "textarea", placeholder: "只写气质、节奏或主题参考，不要复制具体作品" }) + "</div>";
}
function renderResearch() {
  const r = state.research;
  const rows = r.topics.map(function (topic, index) { return "<tr><td>" + (index + 1) + "</td><td>" + tableInput("research.topics[" + index + "].name", topic.name, "wide") + "</td><td>" + tableInput("research.topics[" + index + "].heat", topic.heat, "small") + "</td><td>" + tableInput("research.topics[" + index + "].affinity", topic.affinity, "small") + "</td><td>" + tableInput("research.topics[" + index + "].fit", topic.fit, "small") + "</td><td>" + tableInput("research.topics[" + index + "].evidence", topic.evidence, "wide") + "</td><td><button class=\"text-btn danger-btn\" type=\"button\" data-action=\"remove-topic\" data-index=\"" + index + "\">删除</button></td></tr>"; }).join("");
  return "<div class=\"editor-intro\"><h3>把外部趋势变成可判断的题材机会</h3><p>正式研究时由 Agent 搜索和交叉验证；这里负责保存研究任务、报告正文和你要比较的题材方向。</p></div>" + field("研究任务", "research.task", r.task, { full: true, type: "textarea", large: true, placeholder: "写清平台、市场、时间窗口、类型和研究问题" }) + "<div class=\"section-card\"><div class=\"section-card-heading\"><div><h3>候选题材总览</h3><p>热度和用户偏好分开填写，不要用同一个指标代替。</p></div><button class=\"btn btn-ghost\" type=\"button\" data-action=\"add-topic\">+ 添加题材</button></div><div class=\"table-wrap\"><table class=\"topic-table\"><thead><tr><th>#</th><th>题材方向</th><th>热度</th><th>偏好</th><th>短片适配</th><th>证据 / 备注</th><th></th></tr></thead><tbody>" + rows + "</tbody></table></div></div>" + field("研究报告正文", "research.report", r.report, { full: true, type: "textarea", large: true, placeholder: "粘贴或整理题材研究报告，保留来源和具体日期" });
}
function renderConcepts() {
  const cards = state.concepts.map(function (concept, index) { const selected = state.selectedConcept === index; return "<div class=\"option-card " + (selected ? "selected-card" : "") + "\"><div class=\"option-card-header\"><label><input type=\"radio\" name=\"selectedConcept\" data-action=\"select-concept\" data-index=\"" + index + "\"" + (selected ? " checked" : "") + "> 方案 " + (index + 1) + "：" + (escapeHtml(concept.title) || "未命名") + "</label><button class=\"text-btn danger-btn\" type=\"button\" data-action=\"remove-concept\" data-index=\"" + index + "\">删除</button></div><div class=\"form-grid\">" + field("暂定片名", "concepts[" + index + "].title", concept.title, { placeholder: "一句能留下记忆的名字" }) + field("类型 / 基调", "concepts[" + index + "].genre", concept.genre, { placeholder: "例如：悬疑 / 克制" }) + field("一句话梗概", "concepts[" + index + "].logline", concept.logline, { full: true, type: "textarea" }) + field("主题", "concepts[" + index + "].theme", concept.theme, { full: true, type: "textarea" }) + field("主角", "concepts[" + index + "].protagonist", concept.protagonist, { type: "textarea" }) + field("核心冲突", "concepts[" + index + "].conflict", concept.conflict, { type: "textarea" }) + field("结局方向", "concepts[" + index + "].ending", concept.ending, { type: "textarea" }) + field("原创角度", "concepts[" + index + "].originality", concept.originality, { type: "textarea" }) + field("制作可行性", "concepts[" + index + "].feasibility", concept.feasibility, { type: "textarea" }) + "</div></div>"; }).join("");
  const r = state.research;
  const conceptStatus = r.conceptStatus === 'searching' ? 'Agent 正在重新生成 3 个故事简介。' : r.conceptStatus === 'error' ? 'Agent 未连接，未发送重新生成任务。' : r.conceptStatus === 'ready' ? '已生成一组方案；如果都不合适，可以重新生成。' : '先确认题材研究反馈，再选择方案。';
  const regenerate = '<button class="btn btn-ghost" type="button" data-action="regenerate-concepts">重新生成 3 个故事简介</button>';
  const feedbackEditor = field('本轮 Agent 返回内容', 'research.searchFeedback', r.searchFeedback, { full: true, type: 'textarea', large: true, placeholder: '粘贴本轮 Agent 的研究依据和 3 个故事简介（末尾 JSON 数组）' }) + '<div class="row-actions" style="margin:12px 0 18px"><button class="btn btn-primary" type="button" data-action="apply-concept-feedback">载入这组 3 个故事简介</button></div>';
  return "<div class=\"editor-intro\"><h3>从 3 个故事简介中选出真正的故事</h3><p>Agent 每轮只产出 3 个原创方向。选择一个方案后进入故事成稿；如果全部不符合要求，直接重新生成下一组。</p></div><div class=\"section-card search-card\"><div class=\"section-card-heading\"><div><h3>Agent 方案生成</h3><p>当前为第 " + (r.conceptRound || 1) + " 组。</p></div><span class=\"chip " + (r.conceptStatus === 'searching' || r.conceptStatus === 'ready' ? 'active' : '') + "\">" + conceptStatus + "</span></div><div class=\"row-actions\">" + regenerate + "</div>" + (r.agentError ? '<p class="field-error">' + escapeHtml(r.agentError) + '</p>' : '') + "</div>" + feedbackEditor + "<div class=\"section-card-heading\"><div><h3>故事方案</h3><p>当前选中：方案 " + (state.selectedConcept + 1) + "</p></div><button class=\"btn btn-ghost\" type=\"button\" data-action=\"add-concept\">+ 手动添加方案</button></div>" + cards;
}
function renderConcepts() {
  const cards = state.concepts.map(function (concept, index) {
    const selected = state.selectedConcept === index;
    return '<div class="option-card ' + (selected ? 'selected-card' : '') + '"><div class="option-card-header"><label><input type="radio" name="selectedConcept" data-action="select-concept" data-index="' + index + '"' + (selected ? ' checked' : '') + '> 方案 ' + (index + 1) + '：' + (escapeHtml(concept.title) || '未命名') + '</label><button class="text-btn danger-btn" type="button" data-action="remove-concept" data-index="' + index + '">删除</button></div><div class="form-grid">' + field('暂定片名', 'concepts[' + index + '].title', concept.title, { placeholder: '一句能留下记忆的名字' }) + field('类型 / 基调', 'concepts[' + index + '].genre', concept.genre, { placeholder: '例如：悬疑 / 克制' }) + field('一句话梗概', 'concepts[' + index + '].logline', concept.logline, { full: true, type: 'textarea' }) + field('主题', 'concepts[' + index + '].theme', concept.theme, { full: true, type: 'textarea' }) + field('主角', 'concepts[' + index + '].protagonist', concept.protagonist, { type: 'textarea' }) + field('核心冲突', 'concepts[' + index + '].conflict', concept.conflict, { type: 'textarea' }) + field('结局方向', 'concepts[' + index + '].ending', concept.ending, { type: 'textarea' }) + field('原创角度', 'concepts[' + index + '].originality', concept.originality, { type: 'textarea' }) + field('制作可行性', 'concepts[' + index + '].feasibility', concept.feasibility, { type: 'textarea' }) + '</div></div>';
  }).join('');
  const r = state.research;
  const regenerate = '<button class="btn btn-ghost" type="button" data-action="regenerate-concepts">重新生成 3 个故事简介</button>';
  const feedbackEditor = field('本轮 Agent 返回内容', 'research.searchFeedback', r.searchFeedback, { full: true, type: 'textarea', large: true, placeholder: '粘贴本轮 Agent 的研究依据和 3 个故事简介（末尾 JSON 数组）' }) + '<div class="row-actions" style="margin:12px 0 18px"><button class="btn btn-primary" type="button" data-action="apply-concept-feedback">载入这组 3 个故事简介</button></div>';
  return '<div class="editor-intro"><h3>从 3 个故事简介中选出真正的故事</h3><p>选择一个方案后进入故事成稿；如果全部不符合要求，可以重新生成下一组。</p></div>' + feedbackEditor + '<div class="section-card-heading"><div><h3>故事方案</h3><p>当前选中：方案 ' + (state.selectedConcept + 1) + '</p></div>' + regenerate + '</div>' + cards;
}
function renderStory() { return '<div class="editor-intro"><h3>把选定创意写成完整故事</h3><p>这是剧本之前的故事确认稿。写清起因、目标、阻力、升级、反转和结尾；确认前不会进入剧本写作。</p></div><div class="row-actions" style="margin-bottom:12px"><span class="chip active">产物：03_story.md</span><span class="word-count">当前字数：' + (state.story.trim() ? state.story.trim().length : 0) + '</span></div>' + field('故事成稿', 'story', state.story, { full: true, type: 'textarea', className: 'script-field', large: true, placeholder: '标题、故事定位、角色关系、完整故事正文、节拍、反转逻辑、AI 制作建议和确认区' }); }
function renderDraft() { return '<div class="editor-intro"><h3>短片剧本初稿</h3><p>使用已确认的 03_story.md 写作场景、动作和对白，不在这里加入分镜或视频提示词。</p></div><div class="row-actions" style="margin-bottom:12px"><span class="chip active">依据：03_story.md</span><span class="word-count">当前字数：' + (state.draft.trim() ? state.draft.trim().length : 0) + '</span></div>' + field('剧本正文', 'draft', state.draft, { full: true, type: 'textarea', className: 'script-field', large: true, placeholder: 'INT./EXT. 地点 - 时间\n\n动作描述\n\n人物\n对白' }); }
function renderReview() {
  const issues = state.review.issues || [];
  const a = issues.filter(function (issue) { return issue.severity === "A"; }).length;
  const b = issues.filter(function (issue) { return issue.severity === "B"; }).length;
  const c = issues.filter(function (issue) { return issue.severity === "C"; }).length;
  const rows = issues.map(function (issue, index) { return "<tr><td><select class=\"table-select\" data-bind=\"review.issues[" + index + "].severity\"><option value=\"A\"" + (issue.severity === "A" ? " selected" : "") + ">A 必须修</option><option value=\"B\"" + (issue.severity === "B" ? " selected" : "") + ">B 重要</option><option value=\"C\"" + (issue.severity === "C" ? " selected" : "") + ">C 润色</option></select></td><td>" + tableInput("review.issues[" + index + "].location", issue.location, "wide") + "</td><td>" + tableTextarea("review.issues[" + index + "].problem", issue.problem) + "</td><td>" + tableTextarea("review.issues[" + index + "].suggestion", issue.suggestion) + "</td><td><label class=\"table-label\"><input type=\"checkbox\" data-bind=\"review.issues[" + index + "].apply\"" + (issue.apply ? " checked" : "") + "> 处理</label><br><button class=\"text-btn danger-btn\" type=\"button\" data-action=\"remove-issue\" data-index=\"" + index + "\">删除</button></td></tr>"; }).join("");
  return "<div class=\"editor-intro\"><h3>剧本医生诊断</h3><p>这里记录问题，不直接覆盖剧本。确认修改范围后，最终稿阶段才会应用勾选的问题。</p></div><div class=\"review-summary\"><span class=\"severity severity-a\">A级 " + a + " 条</span><span class=\"severity severity-b\">B级 " + b + " 条</span><span class=\"severity severity-c\">C级 " + c + " 条</span></div>" + field("总体结论", "review.overall", state.review.overall, { full: true, type: "textarea", large: true }) + "<div class=\"section-card\"><div class=\"section-card-heading\"><div><h3>问题清单</h3><p>A：不改故事难成立；B：明显影响质量；C：可选优化。</p></div><button class=\"btn btn-ghost\" type=\"button\" data-action=\"add-issue\">+ 添加问题</button></div><div class=\"table-wrap\"><table class=\"issue-table\"><thead><tr><th>等级</th><th>位置</th><th>问题</th><th>建议</th><th>处理</th></tr></thead><tbody>" + (rows || "<tr><td colspan=\"5\"><div class=\"empty-state\">暂无审查问题</div></td></tr>") + "</tbody></table></div></div>" + field("值得保留的优点", "review.strengths", state.review.strengths, { full: true, type: "textarea" });
}
function renderFinal() { return "<div class=\"editor-intro\"><h3>最终剧本</h3><p>根据审查阶段确认的范围整理最终稿。你可以直接编辑，也可以先载入初稿作为基础。</p></div><div class=\"row-actions\" style=\"margin-bottom:12px\"><button class=\"btn btn-ghost\" type=\"button\" data-action=\"load-draft\">载入剧本初稿</button><span class=\"word-count\">最终稿字数：" + (state.final.trim() ? state.final.trim().length : 0) + "</span></div>" + field("最终剧本正文", "final", state.final, { full: true, type: "textarea", large: true, placeholder: "确认修改范围后，在这里形成最终剧本" }) + "<div class=\"section-card\"><div class=\"section-card-heading\"><div><h3>交付检查</h3><p>确认已处理的问题、仍开放的问题和后续制作注意事项。</p></div></div><div class=\"chip-row\"><span class=\"chip active\">剧本正文</span><span class=\"chip active\">人物连续性</span><span class=\"chip active\">短片时长</span><span class=\"chip\">分镜：后续阶段</span><span class=\"chip\">AI 提示词：后续阶段</span></div></div>"; }

function updateInspector(stage, index) {
  const confirmedCount = stages.filter(function (item) { return state.gates[item.id]; }).length;
  const percent = Math.round((confirmedCount / stages.length) * 100);
  $("#progressLabel").textContent = (index + 1) + " / " + stages.length;
  $("#progressPercent").textContent = percent + "%";
  $("#progressBar").style.width = percent + "%";
  $(".progress-track").setAttribute("aria-valuenow", String(percent));
  $("#gateTitle").textContent = stage.gate;
  $("#gateCopy").textContent = state.gates[stage.id] ? "本阶段已确认。你可以继续编辑，或进入下一阶段。" : stage.id === "briefResearch" && state.research.searchStatus === "error" ? "Agent 未连接，任务没有发送。可复制右侧提示词手动交给 Agent，返回后粘贴反馈。" : stage.id === "briefResearch" && state.research.searchStarted ? "Agent 已调用。把相近题材研究和 3 个故事简介填入中间区域，再点击确认进入故事方案。" : "完成当前阶段后点击确认，系统会解锁下一阶段。";
  $("#nextPrompt").textContent = handoffPrompt(stage.id);
  const entries = (state.activity || []).slice(-6).reverse();
  $("#activityLog").innerHTML = entries.length ? entries.map(function (entry) { return "<li><div>" + escapeHtml(entry.text) + "<span class=\"activity-time\">" + escapeHtml(entry.time) + "</span></div></li>"; }).join("") : "<li><div>还没有操作记录。</div></li>";
}
function handoffPrompt(id) {
  const prompts = { briefResearch: "用户提供了一个创意以及类型、平台、市场。请调用 $video-trend-research 搜索相近题材的剧本或短片，记录具体日期和来源，避免复制；然后围绕用户创意产出恰好 3 个原创故事简介。每个方案包含：标题、logline、类型/基调、主题、主角、核心冲突、结局方向、原创角度、制作可行性。请先返回研究依据，再返回一个可解析的 JSON 数组。不要直接写完整剧本，完成后等待用户选择。", concepts: "用户正在比较 Agent 生成的 3 个故事简介。如果 3 个都不符合，请再次调用 $video-trend-research 搜索相近题材并重新产出恰好 3 个不同的原创方案；不要写完整剧本。用户选定方案后，调用 $story-drafting。", story: "用户已选定故事方案。请调用 $story-drafting，读取项目简报和已选方案，生成 03_story.md：完整故事正文、人物关系、世界规则、节拍、反转逻辑和 AI 视频制作建议。标记为待用户确认；确认前不要写剧本。", draft: "用户已确认 03_story.md。请调用 $screenplay-writing，读取 03_story.md 和项目简报，生成 05_screenplay_v1.md，完成后等待用户授权审查。", review: "用户授权审查后：请调用 $screenplay-review，读取 03_story.md 和 05_screenplay_v1.md，生成 06_review_report.md，只诊断不改稿。", final: "用户确认修改范围后：请调用 $screenplay-writing 的修改模式，根据 03_story.md 和 06_review_report.md 处理指定问题，生成 07_final_screenplay.md，并列出已解决与仍开放的问题。" };
  return prompts[id] || "完成当前阶段并确认后继续。";
}
function addActivity(text) { state.activity = state.activity || []; state.activity.push({ text: text, time: nowLabel() }); if (state.activity.length > 30) state.activity = state.activity.slice(-30); }
function persist(showToast, shouldRender) { state.updatedAt = new Date().toISOString(); try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) { console.warn("保存项目失败", error); } if (shouldRender !== false) render(); if (showToast) showToastMessage("项目已保存到本机浏览器"); }
function markDirty() { state.updatedAt = null; $("#saveState").textContent = "有未保存修改"; clearTimeout(markDirty.timer); markDirty.timer = setTimeout(function () { persist(false, false); }, 650); }
function showToastMessage(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(toastTimer); toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200); }
function setStage(id) { const index = stages.findIndex(function (stage) { return stage.id === id; }); if (index < 0 || !isUnlocked(index)) { showToastMessage("请先完成前置阶段并确认"); return; } state.currentStage = id; render(); }
function buildSearchTask() {
  const b = state.brief;
  return [
    "你是题材研究 Agent。请围绕用户提供的创意，搜索相近题材的剧本或短片作为研究参考，并产出恰好 3 个原创故事简介。",
    "用户创意：" + b.idea,
    "类型：" + b.genre + "；目标平台：" + b.platform + "；市场/地区：" + b.market,
    "研究要求：记录具体观察日期和来源；说明相近作品的可借鉴点与差异化空间；不要复制任何具体作品。",
    "输出要求：先给研究反馈，再给 3 个方案。每个方案包含：title、logline、genre、theme、protagonist、conflict、ending、originality、feasibility。不要写完整剧本。最后附一个可解析的 JSON 数组，数组必须恰好有 3 项。"
  ].join("\n");
}
function buildConceptRegenerationTask(round) {
  const b = state.brief;
  const previous = (state.concepts || []).map(function (concept, index) { return (index + 1) + ". " + (concept.title || "未命名") + "：" + (concept.logline || ""); }).join("\n");
  return [
    "请重新调用题材研究能力，围绕用户创意搜索相近题材，并产出第 " + round + " 组、恰好 3 个不同于上一组的原创故事简介。",
    "用户创意：" + b.idea,
    "类型：" + b.genre + "；目标平台：" + b.platform + "；市场/地区：" + b.market,
    "上一组方案（必须避免重复）：\n" + previous,
    "保留具体日期和来源，不能复制参考作品。每个方案包含 title、logline、genre、theme、protagonist、conflict、ending、originality、feasibility；最后附恰好 3 项的 JSON 数组，不要写完整剧本。"
  ].join("\n");
}
function agentBridgeError() { return "当前网页未连接 Agent 桥接，任务没有发送。请在支持 Agent 桥接的工作台中打开页面，或复制右侧提示词到 Agent。"; }
function invokeAgent(prompt, title, onFailure) {
  const bridge = window.openai;
  if (!bridge || typeof bridge.sendFollowUpMessage !== "function") return { ok: false, error: agentBridgeError() };
  try {
    const result = bridge.sendFollowUpMessage({ prompt: prompt, title: title });
    if (result && typeof result.catch === "function") result.catch(function (error) { onFailure(error); });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: "Agent 调用失败：" + (error && error.message ? error.message : "未知错误") };
  }
}
function recordAgentFailure(kind, error) {
  const message = typeof error === "string" ? error : "Agent 调用失败：" + (error && error.message ? error.message : "未知错误");
  state.research.agentError = message;
  if (kind === "research") { state.research.searchStatus = "error"; state.research.searchStarted = false; }
  else state.research.conceptStatus = "error";
  addActivity(message);
  persist(false);
  showToastMessage(message);
}
function startSearch() {
  const missing = [];
  if (!state.brief.idea.trim()) missing.push("创意");
  if (!state.brief.genre.trim()) missing.push("类型");
  if (!state.brief.platform.trim()) missing.push("目标平台");
  if (!state.brief.market.trim()) missing.push("市场");
  if (missing.length) { showToastMessage("请先填写：" + missing.join("、")); return; }
  const task = buildSearchTask();
  const request = invokeAgent(task, "题材研究 Agent：搜索相近题材并产出 3 个故事简介", function (error) { recordAgentFailure("research", error); });
  state.research.task = task;
  if (!request.ok) { recordAgentFailure("research", request.error); return; }
  state.research.searchStatus = "searching";
  state.research.searchStarted = true;
  state.research.conceptStatus = "searching";
  state.research.conceptRound = 1;
  state.research.agentError = "";
  state.gates.briefResearch = false;
  addActivity("已调用题材研究 Agent，等待相近题材和 3 个故事简介");
  persist(true);
}
function completeSearch() {
  const feedback = state.research.searchFeedback.trim() || state.research.report.trim();
  if (!feedback) { showToastMessage("请先粘贴或填写 Agent 返回的搜索反馈"); return; }
  const parsed = parseConceptsFromFeedback(feedback);
  if (parsed.length === 3) { state.concepts = parsed; state.selectedConcept = 0; state.research.conceptStatus = "ready"; }
  state.research.report = feedback;
  state.research.searchStatus = "feedback";
  state.research.searchStarted = true;
  state.research.agentError = "";
  state.gates.briefResearch = true;
  addActivity(parsed.length === 3 ? "已确认题材搜索反馈，并自动载入 3 个故事方案" : "已确认题材搜索反馈，请检查并填写 3 个故事方案");
  state.currentStage = stages[1].id;
  persist(true);
}
function normalizeConcept(raw) {
  if (!raw || typeof raw !== "object") return null;
  function value(keys) { for (let i = 0; i < keys.length; i += 1) if (raw[keys[i]] != null) return String(raw[keys[i]]); return ""; }
  return { title: value(["title", "name", "片名", "标题"]), logline: value(["logline", "summary", "synopsis", "一句话梗概", "故事简介"]), genre: value(["genre", "类型", "类型/基调"]), theme: value(["theme", "主题"]), protagonist: value(["protagonist", "主角"]), conflict: value(["conflict", "核心冲突"]), ending: value(["ending", "结局方向", "endingDirection"]), originality: value(["originality", "原创角度", "差异化"]), feasibility: value(["feasibility", "制作可行性"]) };
}
function parseConceptsFromFeedback(text) {
  const sources = [];
  const fenced = text.match(/\x60\x60\x60(?:json)?\s*([\s\S]*?)\x60\x60\x60/gi) || [];
  fenced.forEach(function (block) { sources.push(block.replace(/^\x60\x60\x60(?:json)?\s*/i, "").replace(/\x60\x60\x60\s*$/, "")); });
  sources.push(text);
  for (let i = 0; i < sources.length; i += 1) {
    const source = sources[i].trim();
    const start = source.indexOf("[");
    if (start < 0) continue;
    for (let end = source.length; end > start; end -= 1) {
      try {
        const value = JSON.parse(source.slice(start, end));
        const list = Array.isArray(value) ? value : Array.isArray(value.concepts) ? value.concepts : [];
        const normalized = list.map(normalizeConcept).filter(function (item) { return item && (item.title || item.logline); }).slice(0, 3);
        if (normalized.length === 3) return normalized;
      } catch (error) { /* keep looking for the complete JSON span */ }
    }
  }
  return [];
}
function applyConceptFeedback() {
  const parsed = parseConceptsFromFeedback(state.research.searchFeedback || "");
  if (parsed.length !== 3) { showToastMessage("未识别到恰好 3 个方案，请按右侧提示词返回 JSON 数组"); return; }
  state.concepts = parsed;
  state.selectedConcept = 0;
  state.research.conceptStatus = "ready";
  state.research.agentError = "";
  addActivity("已将 Agent 返回的 3 个故事简介载入方案卡");
  persist(true);
}
function regenerateConcepts() {
  const missing = [];
  if (!state.brief.idea.trim()) missing.push("创意");
  if (!state.brief.genre.trim()) missing.push("类型");
  if (!state.brief.platform.trim()) missing.push("目标平台");
  if (!state.brief.market.trim()) missing.push("市场");
  if (missing.length) { showToastMessage("请先补充：" + missing.join("、")); return; }
  const round = (state.research.conceptRound || 1) + 1;
  const task = buildConceptRegenerationTask(round);
  const request = invokeAgent(task, "题材研究 Agent：重新产出 3 个故事简介", function (error) { recordAgentFailure("concepts", error); });
  if (!request.ok) { recordAgentFailure("concepts", request.error); return; }
  state.research.conceptStatus = "searching";
  state.research.conceptRound = round;
  state.research.agentError = "";
  addActivity("已调用 Agent 重新生成第 " + round + " 组 3 个故事简介");
  persist(true);
}
function confirmStage() { const stage = activeStage(); if (stage.id === "briefResearch") { const hasFeedback = Boolean((state.research.searchFeedback || '').trim() || (state.research.report || '').trim()); if (!state.research.searchStarted && !hasFeedback) startSearch(); else completeSearch(); return; } state.gates[stage.id] = true; addActivity("已确认：" + stage.title); const index = activeIndex(); if (index < stages.length - 1) state.currentStage = stages[index + 1].id; else addActivity("项目已完成，可以导出最终剧本"); persist(true); }
function goPrevious() { const index = activeIndex(); if (index > 0) state.currentStage = stages[index - 1].id; render(); }
function addTopic() { state.research.topics.push({ name: "", heat: "中", affinity: "中", fit: "中", evidence: "" }); markDirty(); render(); }
function removeTopic(index) { if (state.research.topics.length <= 1) { showToastMessage("至少保留一个题材方向"); return; } state.research.topics.splice(index, 1); markDirty(); render(); }
function addConcept() { state.concepts.push(blankConcept()); markDirty(); render(); }
function removeConcept(index) { if (state.concepts.length <= 1) { showToastMessage("至少保留一个故事方案"); return; } state.concepts.splice(index, 1); state.selectedConcept = Math.min(state.selectedConcept, state.concepts.length - 1); markDirty(); render(); }
function addScene() { return; }
function removeScene(index) { return; }
function addIssue() { state.review.issues.push(blankIssue()); markDirty(); render(); }
function removeIssue(index) { state.review.issues.splice(index, 1); markDirty(); render(); }
function seedDraft() { if (!state.story.trim()) { showToastMessage("请先填写并确认故事成稿"); return; } state.draft = state.draft || "请根据 03_story.md 写作剧本初稿。"; addActivity("已根据故事成稿准备剧本初稿"); markDirty(); render(); }
function loadDraft() { state.final = state.draft; addActivity("已将剧本初稿载入最终稿编辑区"); markDirty(); render(); }
function resetProject() { if (!window.confirm("确定新建空白项目吗？当前项目已保存的数据会被替换。")) return; state = defaultState(); addActivity("已新建空白项目"); persist(true); }
function loadSample() { state = sampleState(); persist(false); showToastMessage("已加载演示项目，可以浏览全部阶段"); }
function clearActivity() { state.activity = []; markDirty(); render(); }
function downloadFile(filename, content) { const blob = new Blob([content], { type: "text/markdown;charset=utf-8" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 500); }
function exportProject() {
  const b = state.brief;
  const lines = ["# " + (b.projectTitle || "短片剧本项目"), "\n## 项目简报\n", "- 时长：" + (b.duration || "未填写"), "- 平台：" + (b.platform || "未填写"), "- 市场：" + (b.market || "未填写"), "- 观众：" + (b.audience || "未填写"), "- 类型：" + (b.genre || "未填写"), "- 基调：" + (b.tone || "未填写"), "- 制作限制：" + (b.constraints || "未填写"), "\n## 题材研究\n\n" + (state.research.report || "未填写")];
  lines.push("\n\n### 候选题材\n\n| 题材 | 热度 | 偏好 | 适配 | 证据 |\n|---|---|---|---|---|\n" + (state.research.topics || []).map(function (t) { return "| " + t.name + " | " + t.heat + " | " + t.affinity + " | " + t.fit + " | " + t.evidence + " |"; }).join("\n"));
  lines.push("\n\n## 故事方案\n\n" + (state.concepts || []).map(function (c, i) { return "### 方案 " + (i + 1) + "：" + c.title + "\n\n**一句话梗概**：" + c.logline + "\n\n**主题**：" + c.theme + "\n\n**核心冲突**：" + c.conflict + "\n\n**结局方向**：" + c.ending + "\n"; }).join("\n"));
  lines.push("\n## 故事成稿\n\n" + (state.story || "未填写"));
  lines.push("\n\n## 剧本初稿\n\n" + (state.draft || "未填写"));
  lines.push("\n\n## 剧本审查\n\n" + (state.review.overall || "未填写") + "\n\n" + (state.review.issues || []).map(function (issue, i) { return (i + 1) + ". [" + issue.severity + "] " + issue.location + "：" + issue.problem + "\n   - 建议：" + issue.suggestion + "\n   - 处理：" + (issue.apply ? "是" : "否"); }).join("\n\n"));
  lines.push("\n\n## 最终剧本\n\n" + (state.final || "未填写"));
  downloadFile((b.projectTitle || "short-film-project").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g, "-") + "-project.md", lines.join("\n"));
  addActivity("已导出完整项目 Markdown"); persist(false); showToastMessage("已导出完整项目 Markdown");
}
function copyPrompt() { const prompt = $("#nextPrompt").textContent; if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(prompt).then(function () { showToastMessage("下一步提示词已复制"); }); else { const area = document.createElement("textarea"); area.value = prompt; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); showToastMessage("下一步提示词已复制"); } }

document.addEventListener("input", function (event) { const element = event.target.closest("[data-bind]"); if (!element) return; setPath(state, element.dataset.bind, element.type === "checkbox" ? element.checked : element.value); markDirty(); });
document.addEventListener("change", function (event) { const element = event.target.closest("[data-bind]"); if (!element) return; setPath(state, element.dataset.bind, element.type === "checkbox" ? element.checked : element.value); markDirty(); });
document.addEventListener("click", function (event) {
  const stageButton = event.target.closest("[data-stage]");
  if (stageButton) { setStage(stageButton.dataset.stage); return; }
  const control = event.target.closest("[data-action]");
  if (!control) return;
  const action = control.dataset.action;
  if (action === "save") persist(true);
  if (action === "load-sample") loadSample();
  if (action === "reset") resetProject();
  if (action === "confirm") confirmStage();
  if (action === "start-search") startSearch();
  if (action === "regenerate-concepts") regenerateConcepts();
  if (action === "apply-concept-feedback") applyConceptFeedback();
  if (action === "complete-search") completeSearch();
  if (action === "previous") goPrevious();
  if (action === "copy-prompt") copyPrompt();
  if (action === "clear-log") clearActivity();
  if (action === "add-topic") addTopic();
  if (action === "remove-topic") removeTopic(Number(control.dataset.index));
  if (action === "add-concept") addConcept();
  if (action === "remove-concept") removeConcept(Number(control.dataset.index));
  if (action === "select-concept") { state.selectedConcept = Number(control.dataset.index); markDirty(); render(); }
  if (action === "add-scene") addScene();
  if (action === "remove-scene") removeScene(Number(control.dataset.index));
  if (action === "seed-draft") seedDraft();
  if (action === "add-issue") addIssue();
  if (action === "remove-issue") removeIssue(Number(control.dataset.index));
  if (action === "load-draft") loadDraft();
  if (action === "export-project") exportProject();
});

render();



