const d = window.REPORT_DATA;

d.meta = {
  title: "AIGC影视情报日报",
  issue: "2026.10.04",
  label: "日报 · 36小时增量核验",
  date: "2026年10月4日",
  window: "2026年10月2日12:00—10月4日00:00（北京时间）",
  thesis: "AI影视生产正在形成‘低成本试稿—自动编排—质量验收—分发反馈’的新闭环。"
};

d.judgments = [
  { label: "生产", text: "Runway把Seedance 2.5的480p草稿模式接入Agent，试稿与最终交付开始显式分层。" },
  { label: "质检", text: "字幕渲染、配音口型和事件逻辑同时出现新基准，‘看起来像电影’已不足以证明可交付。" },
  { label: "分发", text: "Astana AI Film Festival提出Mooncast.ai分发计划，但截至截点官网仍未公布获奖名单。" }
];

d.lead = {
  title: "480p草稿模式把‘抽卡’变成分层决策",
  evidenceLevel: "A",
  evidenceLabel: "厂商官方更新日志",
  standfirst: "Runway于10月2日为Agent加入Seedance 2.5 Draft Mode：先生成快速480p草稿，再决定是否增强。官方未披露单条价格或实际节省比例。",
  chain: [
    { key: "证据", value: "官方更新日志明确写明480p草稿、生成后增强，并可由Agent自动建议或手动开关。" },
    { key: "机制", value: "把构图、动作和节奏验证前置到低清草稿阶段，只让通过检查的镜头进入增强与精修。" },
    { key: "利益相关者", value: "导演与制片获得更清晰的审批节点；工具商则把模型选择、生成和返工留在同一Agent会话。" },
    { key: "边界", value: "‘更快、更便宜’是厂商表述；没有独立样本证明节省比例，也不能等同最终成片质量提升。" },
    { key: "行动", value: "为镜头建立草稿通过率、增强成功率、返工次数和最终可用率四项指标。" }
  ],
  evidence: ["Seedance 2.5 Draft Mode输出480p草稿，并支持后续增强。", "功能在Runway Agent中面向All Plans列出。"],
  sources: ["runway"]
};

d.briefs = [
  { number: "01", tag: "节展", level: "A/B", title: "Astana闭幕日已到，官方获奖页仍待更新", fact: "AAIFF于10月1—3日举行，25部作品从8,067份投稿中进入现场阶段；截至10月4日00:00，官网仍显示‘selection updates to follow’。", read: "颁奖日不等于结果已公开；本期不抢跑写入获奖名单。", sources: ["astana", "astanagov"] },
  { number: "02", tag: "分发", level: "B/C", title: "AAIFF提出Mooncast.ai AI电影分发平台计划", fact: "Astana Times援引主办方规划，拟让未进入终选的作品也能获得分发窗口。", read: "这是建设计划，不是已上线平台；但说明AI电影节开始向长期片库与发行渠道延伸。", sources: ["astanatimes"] },
  { number: "03", tag: "评测", level: "A", title: "VTR-Bench把视频内文字错误单独量化", fact: "论文提供300条提示词、5类场景并测试11个模型；作者报告最佳模型总体WER仍为0.250。", read: "广告、路牌和科学视频的文字需要OCR复核或关键帧重做，不能只看整体画质。", sources: ["vtr"] },
  { number: "04", tag: "本地化", level: "A", title: "Netflix研究团队提出多语种口型质检器", fact: "Align Then Reason用无声视频和候选台词判断内容与时序是否匹配，并在7种语言基准上报告提升。", read: "这是一项研究结果，不是已部署产品；它补上AI配音流程中‘生成之后如何验收’的一环。", sources: ["atr"] },
  { number: "05", tag: "平台样本", level: "A", title: "B站《标签》两天内播放约171万升至321.4万", fact: "同一作品页10月4日00时快照为3,214,374播放、105,060点赞、21,901收藏；页面标注含AI生成内容。", read: "按10月2日约171万播放基线估算增幅约88%；这是单片追踪，不代表B站全站趋势。", sources: ["biaoqian"] },
  { number: "06", tag: "世界模型", level: "A", title: "PROWBench开始检查视频是否遵守程序事件", fact: "基准包含170个程序化事件、600个代理视频，并记录时间戳、实体状态和镜头外事件。", read: "长时序一致性开始从主观观感转向可重放的事件账本。", sources: ["rowbench"] }
];

d.workflow = {
  eyebrow: "今日工作流判断",
  title: "先便宜试稿，再让质检门决定哪些镜头值得增强。",
  summary: "草稿模式解决试错成本，VTR-Bench、口型判断和PROWBench分别补文字、配音与事件逻辑的验收接口。",
  metrics: [{ value: "480p", label: "Seedance 2.5草稿输出" }, { value: "300", label: "VTR-Bench提示词" }, { value: "170", label: "PROWBench程序化事件" }],
  caution: "论文指标均为作者结果；厂商没有公布草稿模式的独立成本对照。",
  interpretation: "建议在出高清前设置三道自动门：画面内文字OCR、对白口型对齐、跨镜头事件状态核对；只有通过的候选才进入增强和人工精修。",
  sources: ["runway", "vtr", "atr", "rowbench"]
};

d.radar = [
  { channel: "B站", signal: "《标签》同页播放从约171万增至321.4万。", limit: "抓取于10月4日00时；单片不能外推全站。", sources: ["biaoqian"] },
  { channel: "抖音 / 小红书", signal: "本窗口未取得可复现的全站AIGC影视榜单。", limit: "不以搜索摘要拼接热度排名。" },
  { channel: "GitHub", signal: "未核验到10月3日可独立成稿的影视生产Release。", limit: "仓库更新时间与star快照不写成采用增长。" },
  { channel: "Hugging Face / arXiv", signal: "文字、口型、世界事件与音画联合训练四条研究线集中更新。", limit: "论文存在为A级，性能结论仍是作者自报。", sources: ["vtr", "atr", "rowbench", "arr"] },
  { channel: "Reddit", signal: "社区出现RTX 4080本地MiniMax-H3工作流自述。", limit: "D级单人经验，只作本地化生产线索。", sources: ["redditlocal"] }
];

d.watchlist = [
  { date: "待更新", title: "Astana AI Film Festival获奖名单", action: "只在官网或主办方正式账号发布后入库。", sources: ["astana"] },
  { date: "10.13—17", title: "Burano AI Film Festival", action: "跟踪入选作品、工具披露与权利说明。", sources: ["baiff"] },
  { date: "10.16—17", title: "Austin AI Film Festival", action: "跟踪40部入选作品的方法披露。", sources: ["austin"] },
  { date: "10.23", title: "《三星堆：未来往事》计划院线上映", action: "核验实际排片、票房与观众反馈。", sources: ["sanxingdui"] },
  { date: "11.30", title: "2026国际微短剧大赛征集截止", action: "准备备案、权利承诺与传播证明。", sources: ["nrtafair"] }
];

d.method = [
  "本期承接上一版10月2日12:00截点，统计至10月4日00:00，共36小时；平台快照取数时间单独标注。",
  "A=官方/一手；B=一手与可信媒体互证；C=单一媒体或主体自报；D=社区线索。",
  "论文发布与数据集存在可作A级事实，性能数字仍标记为作者结果，不写成独立复现。",
  "节展举办、入选、获奖和平台上线分别核验；官网未出名单时保留为空。",
  "三大社区无统一公开榜单时，只做同一作品页的纵向追踪。"
];

d.intel = {
  note: "本期新增主要集中在生产分层、质量验收、节展分发与单片受众走势；国内监管与工会线无合格新增。",
  lanes: [
    { id: "works", name: "作品与创作者", en: "Works & Creators", status: "partial", target: "#catalog", summary: "《标签》继续增长，AAIFF终选完成但获奖名单未公开。", sources: ["biaoqian", "astana"] },
    { id: "audience", name: "受众表现", en: "Audience Performance", status: "partial", target: "#platform", summary: "取得B站单片同页纵向快照，缺少跨平台同口径数据。", sources: ["biaoqian"] },
    { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "partial", target: "#platform", summary: "点赞与收藏同步增长，但尚未完成评论语义抽样。", sources: ["biaoqian"] },
    { id: "models", name: "模型与工具", en: "Models & Tools", status: "verified", target: "#workflow", summary: "Seedance 2.5草稿模式进入Runway Agent。", sources: ["runway"] },
    { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "verified", target: "#workflow", summary: "文字、口型、事件逻辑和音画同步出现新研究。", sources: ["vtr", "atr", "rowbench", "arr"] },
    { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "verified", target: "#workflow", summary: "草稿/增强分层与三类质量门可以组合为新的镜头审批流。", sources: ["runway", "vtr", "atr", "rowbench"] },
    { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "partial", target: "#economics", summary: "取得主办方单片成本估计，但没有独立样本或行业均值。", sources: ["astanatimes"] },
    { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "partial", target: "#commercial", summary: "Mooncast.ai仍是规划；Google Asset Studio已进入广告创意链。", sources: ["astanatimes", "googleads"] },
    { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "unchanged", target: "#commercial", summary: "本增量窗口未出现新的A级资本事件。", sources: [] },
    { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "unchanged", target: "#rights", summary: "国内外监管与工会线未见本窗口新规或新协议。", sources: [] },
    { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist", summary: "AAIFF完成三天活动；官方获奖页仍待更新。", sources: ["astana", "astanagov"] },
    { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "partial", target: "#coverage", summary: "质检器与事件账本提示AI影视岗位将增加技术验收职责。", sources: ["atr", "rowbench"] }
  ]
};

d.moduleNav = [
  { label: "作品目录", href: "#catalog", state: "partial" }, { label: "平台样本", href: "#platform", state: "partial" },
  { label: "生产经济", href: "#economics", state: "partial" }, { label: "发行与商业化", href: "#commercial", state: "partial" },
  { label: "权利与合规", href: "#rights", state: "unchanged" }, { label: "故障与事故", href: "#incidents", state: "unchanged" },
  { label: "覆盖状态", href: "#coverage", state: "partial" }, { label: "工作流信号", href: "#workflow", state: "verified" },
  { label: "观察日历", href: "#watchlist", state: "verified" }
];

d.workCatalog = {
  status: "partial",
  note: "只登记可定位到作品页或正式节展结果的项目；AAIFF获奖作品待官方名单。",
  rows: [
    { title: "《标签》", creator: "星辰岭Starrr", type: "AI短片", stage: "已发布 / 持续增长", level: "A", note: "10月4日00时为321.4万播放，页面标注含AI生成内容。", sources: ["biaoqian"] },
    { title: "AAIFF 2026终选", creator: "25部作品", type: "AI电影节", stage: "活动结束 / 结果待公开", level: "A/B", note: "不以颁奖日期替代正式获奖名单。", sources: ["astana", "astanagov"] },
    { title: "Above the Waterline", creator: "Yifei Li、Zheng Bao", type: "AI短片", stage: "World AI Cinema Festival九月最佳短片", level: "A", note: "结果页于10月1日发布，列为72小时背景。", sources: ["waicf"] }
  ]
};

d.platformSamples = {
  note: "只保留可复核页面和抓取时间；不把单片增长写成平台排名。",
  rows: [
    { platform: "B站", metric: "《标签》播放 / 点赞 / 收藏", value: "321.4万 / 10.51万 / 2.19万", basis: "10月4日00时作品页快照", status: "verified", sources: ["biaoqian"] },
    { platform: "B站", metric: "《标签》播放增幅", value: "约+88%", basis: "对比10月2日约171万快照，基线为约数", status: "partial", sources: ["biaoqian"] },
    { platform: "抖音 / 小红书", metric: "近36小时全站AIGC影视榜单", value: null, basis: "无同口径可复现公开榜单", status: "unavailable", sources: [] }
  ]
};

d.productionEconomics = {
  note: "本期没有可独立复核的单分钟报价；主办方估计与厂商‘更便宜’表述均保留边界。",
  rows: [
    { item: "AAIFF参赛短片", metric: "单片制作成本估计", value: "$3,000—$5,000", basis: "Astana Times转述主办方估计，非审计样本", status: "partial", sources: ["astanatimes"] },
    { item: "Seedance 2.5 Draft Mode", metric: "节省比例 / 单条价格", value: null, basis: "官方未披露", status: "unavailable", sources: ["runway"] },
    { item: "《标签》", metric: "制作成本 / 商业收入", value: null, basis: "作品页未公开", status: "unavailable", sources: ["biaoqian"] }
  ]
};

d.commercial = {
  note: "区分已上线功能、平台规划和广告工作流。",
  cases: [
    { title: "Mooncast.ai拟承接AI电影节长尾作品", org: "AAIFF", type: "分发平台", level: "B/C", stage: "规划中", fact: "主办方希望让未进入终选的作品也能获得传播窗口。", sources: ["astanatimes"] },
    { title: "Asset Studio把网址和照片转为YouTube视频资产", org: "Google Ads", type: "广告创意", level: "A", stage: "已发布说明", fact: "由Gemini Omni驱动，素材可在发布前由利益相关者预览。", sources: ["googleads"] },
    { title: "Dots规划镜头、Runway执行生成", org: "OpenAI Dots × Runway", type: "Agent生产", level: "A", stage: "厂商集成", fact: "Runway 10月1日更新说明描述了从简报到成片的异步工作流。", sources: ["runway"] }
  ]
};

d.rights = {
  status: "unchanged",
  note: "本窗口未检得新的A级法规、法院判决或工会协议；沿用项目级权利检查，不重复上周旧闻。",
  cases: [],
  checks: ["真人声音、肖像与表演授权", "参考图、音乐、字体与IP许可", "模型版本、生成日期与AI标识", "提示词、筛选、剪辑与人工贡献记录", "供应商退役时的素材导出和替代路径"]
};

d.incidents = { note: "本窗口未核验到影响主流AI影视生产的大规模服务故障或新退役事件。", cases: [] };

d.coverage = {
  note: "覆盖厂商官方、论文与开源平台、B站作品页、电影节官网/政府/行业媒体、监管与工会观察线。",
  gaps: ["AAIFF获奖名单截至截点未在官网公开。", "抖音与小红书缺少可复现的公开全站榜单。", "GitHub未检得本窗口可独立成稿的影视生产Release。", "国内监管、法院与工会线无新增A级事件。", "大部分作品仍不公开返工率、可用率和完整成本。"]
};

d.sources = {
  runway: { title: "Runway Product Changelog", publisher: "Runway", url: "https://runway.com/changelog" },
  astana: { title: "Astana AI Film Festival", publisher: "AAIFF", url: "https://www.aaiff.ai/" },
  astanagov: { title: "Astana AI Film Festival官方市政公告", publisher: "Astana市政府", url: "https://www.gov.kz/memleket/entities/astana/press/news/details/1293128?lang=ru" },
  astanatimes: { title: "Astana AI Film Festival Opens New Chapter", publisher: "The Astana Times", url: "https://astanatimes.com/2026/10/astana-ai-film-festival-opens-new-chapter-for-cinema-industry/" },
  vtr: { title: "VTR-Bench", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.01499" },
  atr: { title: "Align Then Reason", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.00825" },
  rowbench: { title: "PROWBench", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.02205" },
  arr: { title: "Adaptive Reward Routing", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2609.37200" },
  biaoqian: { title: "原创AI短片《标签》", publisher: "Bilibili", url: "https://www.bilibili.com/video/BV1dChQ6XEaS/" },
  googleads: { title: "Turn social assets into YouTube ads", publisher: "Google Ads", url: "https://blog.google/products/ads-commerce/creating-assets-youtube-ads/" },
  waicf: { title: "WAIFF September 2026 Winners", publisher: "World AI Cinema Festival", url: "https://worldaicinema.com/en/winners-september-2026/" },
  redditlocal: { title: "Local MiniMax-H3 workflow self-report", publisher: "Reddit", url: "https://www.reddit.com/r/StableDiffusion/comments/1wwnztw/commercial_video_models_are_over_for_me_at_least/" },
  baiff: { title: "Burano AI Film Festival", publisher: "BAIFF", url: "https://baiff.eu/" },
  austin: { title: "Austin AI Film Festival 2026 selection", publisher: "Austin AI Film Festival", url: "https://www.prnewswire.com/news-releases/austin-ai-film-festival-announces-2026-official-selection-and-speaker-lineup-302895376.html" },
  sanxingdui: { title: "博纳影业项目公告", publisher: "深交所", url: "https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-09-29/8e080fb5-3990-421a-a477-24928a160659.PDF" },
  nrtafair: { title: "2026国际微短剧大赛", publisher: "国家广播电视总局", url: "https://www.nrta.gov.cn/art/2026/9/30/art_113_74164.html?xxgkhide=1" }
};

d.newsStream = {
  layerNote: "24小时层严格记录10月3日；72小时层补入10月1—2日的模型、论文与分发背景。",
  layers: [
    { id: "h24", window: "2026-10-03 00:00 → 23:59（北京时间）", note: "最后一个完整自然日。", items: [
      { id: "d1", time: "10-03", title: "AAIFF进入闭幕日，官网尚未发布获奖名单", level: "A", origin: "电影节官网", fact: "活动日程已到颁奖日，但公开页仍停留在selection updates to follow。", refs: ["astana2026"] },
      { id: "d2", time: "10-04 00:00抓取", title: "B站《标签》播放达到321.4万", level: "A", origin: "作品页快照", fact: "较10月2日约171万基线增加约88%；同页105,060点赞、21,901收藏。", refs: ["biaoqian"] }
    ] },
    { id: "h72", window: "2026-10-01 00:00 → 10-03 23:59（北京时间）", note: "包含本期增量的技术与分发背景。", items: [
      { id: "d3", time: "10-02", title: "Runway Agent加入Seedance 2.5草稿模式", level: "A", origin: "厂商官方", fact: "先输出480p草稿，再选择增强；官方未披露独立成本对照。", refs: ["runwaychangelog"] },
      { id: "d4", time: "10-01—02", title: "VTR-Bench与口型判断研究发布", level: "A", origin: "论文", fact: "视频内文字与多语种配音口型分别出现新的可计算验收方法。", refs: ["vtr", "atr"] },
      { id: "d5", time: "10-01—02", title: "PROWBench记录程序事件与长时序状态", level: "A", origin: "论文", fact: "用170个事件和600个代理视频核对实体控制、记忆与交互结果。", refs: ["rowbench"] },
      { id: "d6", time: "10-01", title: "Google Asset Studio把现有素材转成YouTube视频", level: "A", origin: "厂商官方", fact: "网址和照片可生成视频资产并在发布前预览。", refs: ["googleads"] }
    ] },
    { id: "week", window: "2026-10-01 00:00 → 10-04 00:00（北京时间）", note: "本周滚动观察。", items: [
      { id: "d7", time: "10-01", title: "World AI Cinema Festival公布九月获奖名单", level: "A", origin: "电影节官网", fact: "中国团队作品Above the Waterline获最佳AI短片。", refs: ["waicf"] },
      { id: "d8", time: "10-01—03", title: "AAIFF完成25部终选作品现场放映", level: "A/B", origin: "电影节", fact: "主办方同时提出建设Mooncast.ai分发平台的计划。", refs: ["astana2026", "astanatimes"] }
    ] }
  ]
};
