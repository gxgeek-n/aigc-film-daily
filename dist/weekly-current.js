const d = window.REPORT_DATA;

d.meta = {
  title: "AIGC影视情报滚动周报",
  issue: "2026.10.01—10.04",
  label: "周报 · 首周滚动核验",
  date: "2026年10月4日",
  window: "2026年10月1日00:00—10月4日00:00（北京时间，未满七天）",
  thesis: "本周最强信号不是又多一个模型，而是生成、质检、发行和资产经营开始连成系统。"
};

d.judgments = [
  { label: "工作流", text: "480p草稿、Agent编排与发布前预览把高成本生成留到镜头通过初审之后。" },
  { label: "质量门", text: "画面文字、配音口型、事件逻辑和音画同步出现专门基准，验收正在从审美判断变成可计算流程。" },
  { label: "发行与IP", text: "AI电影节开始规划长期分发，上市公司和地方项目则把AI内容连接到资本开支、角色授权与衍生硬件。" }
];

d.lead = {
  title: "AI影视从‘生成模型’走向‘交付系统’",
  evidenceLevel: "A/B",
  evidenceLabel: "厂商官方、论文、平台与节展互证",
  standfirst: "10月首周前四天的信号可以串成一条完整管线：Runway降低试稿成本，论文团队补齐文字、口型与事件验收，Google把素材送入广告分发，AAIFF则提出长期片库计划。",
  chain: [
    { key: "证据", value: "Seedance 2.5草稿模式、VTR-Bench、Align Then Reason、PROWBench、Google Asset Studio与Mooncast.ai计划在同一窗口出现。" },
    { key: "机制", value: "低清候选先通过结构化检查，再进入高清增强、配音本地化、投放测试和资产复用。" },
    { key: "利益相关者", value: "制片团队降低无效精修，平台获得可测量素材，品牌主与发行方获得更清晰的审批和责任链。" },
    { key: "边界", value: "论文性能是作者结果，Mooncast尚未上线，厂商也未公布草稿模式的实际节省比例。" },
    { key: "行动", value: "下周把质量门接入镜头台账，并为每条成片保留模型、素材、授权、版本和投放反馈。" }
  ],
  evidence: [
    "Runway 10月2日上线Seedance 2.5 480p Draft Mode。",
    "四项研究分别覆盖文字、口型、事件逻辑和音画联合优化。",
    "AAIFF吸引8,067份投稿，并提出Mooncast.ai分发规划。"
  ],
  sources: ["runway", "vtr", "atr", "rowbench", "astanatimes"]
};

d.briefs = [
  { number: "01", tag: "生产分层", level: "A", title: "Runway Agent加入Seedance 2.5 Draft Mode", fact: "可先生成480p草稿并在之后增强，功能可由Agent建议或手动切换。", read: "试稿与最终交付显式分层，但节省比例尚无独立验证。", sources: ["runway"] },
  { number: "02", tag: "Agent", level: "A", title: "OpenAI Dots与Runway串起镜头规划和生成", fact: "Runway更新说明称，用户提交简报后，Dot可规划镜头并调用Runway生成成片。", read: "这是厂商描述的集成能力，实际稳定性与人工介入仍需项目测试。", sources: ["runway"] },
  { number: "03", tag: "广告", level: "A", title: "Google Asset Studio把网址和照片变成视频资产", fact: "Google称Gemini Omni可将现有网站和图片转换为YouTube广告视频，并支持发布前预览。", read: "AI视频开始直接进入素材测试；Google同时建议渐进修改、让数据驱动判断。", sources: ["googleads"] },
  { number: "04", tag: "质量基准", level: "A", title: "文字、口型和程序事件成为独立验收对象", fact: "VTR-Bench用300提示词测视频文字；ATR测7种语言口型；PROWBench用170个程序事件测试逻辑一致性。", read: "这三项研究共同把‘可交付’拆成可计算门槛。", sources: ["vtr", "atr", "rowbench"] },
  { number: "05", tag: "音画生成", level: "A", title: "Adaptive Reward Routing协调音画质量与同步目标", fact: "论文提出动态选择更新位置和奖励权重，作者报告在语义一致性与音画同步上优于基线。", read: "仍属训练方法研究，不代表现有商用模型已采用。", sources: ["arr"] },
  { number: "06", tag: "节展", level: "A/B", title: "AAIFF完成三天活动，获奖名单仍待官网更新", fact: "8,067份投稿来自125个国家和地区，25部进入终选；截至截点官网未列出获奖作品。", read: "颁奖日与结果公开必须分开记录。", sources: ["astana", "astanagov"] },
  { number: "07", tag: "发行", level: "B/C", title: "AAIFF提出Mooncast.ai AI电影分发计划", fact: "主办方计划为未入围作品提供持续传播入口，并将电影节办成年度活动。", read: "规划尚未上线，但‘赛事—片库—发行’的链条已经出现。", sources: ["astanatimes"] },
  { number: "08", tag: "作品", level: "A", title: "中国团队获WAIFF九月最佳AI短片", fact: "World AI Cinema Festival结果页列出Above the Waterline为Best AI Short Film，作者为Yifei Li、Zheng Bao。", read: "该结果来自主办方官网，可作为作品发现入口；制作流程仍需逐片核验。", sources: ["waicf"] },
  { number: "09", tag: "受众样本", level: "A", title: "B站《标签》播放两天约增88%", fact: "同一作品页由10月2日约171万播放升至10月4日00时321.4万，点赞10.51万、收藏2.19万。", read: "纵向增长可信，但单片不能外推全平台。", sources: ["biaoqian"] }
];

d.workflow = {
  eyebrow: "本周工作流判断",
  title: "把生成管线改造成‘便宜试稿—自动质检—人工签核—效果回流’。",
  summary: "草稿模式降低候选成本，专用基准提供质量门，Google与Runway的Agent/广告链路再把素材送入分发与反馈。",
  metrics: [{ value: "300", label: "视频文字测试提示词" }, { value: "7", label: "口型基准语言" }, { value: "170", label: "程序化世界事件" }],
  caution: "工具上线不等于生产稳定；任何自动门都应保留失败样本和人工覆核。",
  interpretation: "建议镜头台账新增四列：草稿通过、文字OCR、口型对齐、事件连续性；投放后再回填留存、完播和转化。",
  sources: ["runway", "googleads", "vtr", "atr", "rowbench"]
};

d.radar = [
  { channel: "B站 / 抖音 / 小红书", signal: "B站《标签》取得同页纵向增长；抖音和小红书仍无同口径公开全站榜。", limit: "只报告具名作品页，不做伪Top 10。", sources: ["biaoqian"] },
  { channel: "GitHub", signal: "本窗口未核验到足以改变生产线的重大影视Release。", limit: "仓库更新时间、star与fork不代表本周增长。" },
  { channel: "Hugging Face / arXiv", signal: "四条新研究线集中指向生成后的可验收性。", limit: "作者实验不等同独立复现。", sources: ["vtr", "atr", "rowbench", "arr"] },
  { channel: "Reddit", signal: "社区继续讨论本地视频模型与云API成本。", limit: "仅作D级线索，不进入成本均值。", sources: ["redditlocal", "redditcost"] },
  { channel: "监管 / 工会", signal: "10月1—4日未核验到新的正式规则、判决或集体协议。", limit: "保留上一周权利清单，不把旧闻重复算作本周新增。" }
];

d.watchlist = [
  { date: "待更新", title: "AAIFF 2026获奖名单", action: "等待官网或主办方正式账号发布。", sources: ["astana"] },
  { date: "10.13—17", title: "Burano AI Film Festival", action: "核验入选作品、工具链与AI披露。", sources: ["baiff"] },
  { date: "10.15", title: "Global AI Video Awards征集截止", action: "跟踪入选目录与制作声明。", sources: ["gava"] },
  { date: "10.16—17", title: "Austin AI Film Festival", action: "跟踪40部入选作品与现场方法分享。", sources: ["austin"] },
  { date: "10.23", title: "《三星堆：未来往事》计划院线上映", action: "核验实际排片、票房与口碑。", sources: ["sanxingdui"] },
  { date: "11.30", title: "2026国际微短剧大赛截止", action: "准备备案号、权利承诺和传播证明。", sources: ["nrtafair"] }
];

d.method = [
  "本期是10月首周滚动版，仅覆盖10月1日00:00至10月4日00:00，未满七天；下个完整周报将按自然周冻结。",
  "A=官方/一手；B=一手与可信媒体互证；C=单一媒体或主体自报；D=社区线索。",
  "事件日期、发布日期、抓取时间分开记录；同一事件不因二次报道重复计数。",
  "论文的发布、方法和数据集规模可作A级事实，性能数字均注明为作者结果。",
  "节展举办、入选、获奖、基金和平台上线分别表述。",
  "平台指标只做具名页面纵向追踪，不跨平台强行排名。"
];

d.intel = {
  note: "12条情报线覆盖作品、受众、模型、基准、工作流、成本、发行、资本、权利、电影节与社区；无新增处明确标记。",
  lanes: [
    { id: "works", name: "作品与创作者", en: "Works & Creators", status: "verified", target: "#catalog", summary: "《标签》、Above the Waterline和AAIFF 25部终选形成具名目录。", sources: ["biaoqian", "waicf", "astana"] },
    { id: "audience", name: "受众表现", en: "Audience Performance", status: "partial", target: "#platform", summary: "取得B站单片两次快照，缺少三平台同口径榜单。", sources: ["biaoqian"] },
    { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "partial", target: "#platform", summary: "《标签》点赞与收藏同步增长，评论语义尚未抽样。", sources: ["biaoqian"] },
    { id: "models", name: "模型与工具", en: "Models & Tools", status: "verified", target: "#workflow", summary: "Seedance 2.5 Draft Mode与Dots × Runway进入官方更新。", sources: ["runway"] },
    { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "verified", target: "#workflow", summary: "文字、口型、事件逻辑和音画优化均有新论文。", sources: ["vtr", "atr", "rowbench", "arr"] },
    { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "verified", target: "#workflow", summary: "草稿分层、Agent编排和自动质检可以组成新的制片管线。", sources: ["runway", "vtr", "atr", "rowbench"] },
    { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "partial", target: "#economics", summary: "取得主办方单片成本估计与上市公司募投额，但不是行业均值或已实现收入。", sources: ["astanatimes", "col"] },
    { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "verified", target: "#commercial", summary: "Google广告素材、Mooncast规划与AI内容IP衍生构成三种去向。", sources: ["googleads", "astanatimes", "walulu"] },
    { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "verified", target: "#commercial", summary: "中文在线将AI短剧、模型和AIGC平台列入定增募投方向。", sources: ["col"] },
    { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "partial", target: "#rights", summary: "HKAIIFF以实质创作作用替代固定AI占比；本窗口无新法规或工会协议。", sources: ["hkaiiff"] },
    { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist", summary: "AAIFF、WAIFF、Austin与BAIFF构成连续节展日历。", sources: ["astana", "waicf", "austin", "baiff"] },
    { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "partial", target: "#coverage", summary: "技术质检、口型判断和事件账本正在增加新的制作职责。", sources: ["atr", "rowbench"] }
  ]
};

d.moduleNav = [
  { label: "作品目录", href: "#catalog", state: "verified" }, { label: "平台样本", href: "#platform", state: "partial" },
  { label: "生产经济", href: "#economics", state: "partial" }, { label: "发行与商业化", href: "#commercial", state: "verified" },
  { label: "权利与合规", href: "#rights", state: "partial" }, { label: "故障与事故", href: "#incidents", state: "partial" },
  { label: "覆盖状态", href: "#coverage", state: "partial" }, { label: "工作流信号", href: "#workflow", state: "verified" },
  { label: "观察日历", href: "#watchlist", state: "verified" }
];

d.workCatalog = {
  status: "verified",
  note: "只登记有作品页、主办方结果页或正式节展数据的具名项目。",
  rows: [
    { title: "《标签》", creator: "星辰岭Starrr", type: "AI短片", stage: "B站持续传播", level: "A", note: "10月4日00时321.4万播放；含AI生成内容标识。", sources: ["biaoqian"] },
    { title: "Above the Waterline", creator: "Yifei Li、Zheng Bao", type: "AI短片", stage: "WAIFF九月最佳AI短片", level: "A", note: "主办方结果页10月1日发布。", sources: ["waicf"] },
    { title: "Plastic Erosion", creator: "Yifei Li、Zheng Bao", type: "AI主题短片", stage: "WAIFF Best Cause-Driven Film", level: "A", note: "同一中国团队获得另一项Vision Award。", sources: ["waicf"] },
    { title: "AAIFF 2026终选", creator: "25部作品", type: "AI电影节", stage: "放映完成 / 奖项待公开", level: "A/B", note: "官网截至截点未列出获奖名单。", sources: ["astana", "astanagov"] },
    { title: "Austin AI Film Festival Official Selection", creator: "40部作品", type: "AI / 混合制作", stage: "10月16—17日活动", level: "C", note: "由主办方新闻稿披露，奖项尚未产生。", sources: ["austin"] }
  ]
};

d.platformSamples = {
  note: "平台与节展指标的口径不同，不做横向排名。",
  rows: [
    { platform: "B站", metric: "《标签》播放 / 点赞 / 收藏", value: "321.4万 / 10.51万 / 2.19万", basis: "10月4日00时作品页快照", status: "verified", sources: ["biaoqian"] },
    { platform: "B站", metric: "《标签》两次快照播放增幅", value: "约+88%", basis: "10月2日约171万 → 10月4日321.4万", status: "partial", sources: ["biaoqian"] },
    { platform: "AAIFF", metric: "投稿 / 国家地区 / 终选", value: "8,067 / 125 / 25", basis: "主办方与市政公告", status: "verified", sources: ["astana", "astanagov"] },
    { platform: "抖音 / 小红书", metric: "本窗口全站AIGC影视榜单", value: null, basis: "无同口径可复现公开榜单", status: "unavailable", sources: [] }
  ]
};

d.productionEconomics = {
  note: "融资计划、奖金基金与主办方成本估计分别记录，不换算行业均价。",
  rows: [
    { item: "AAIFF参赛短片", metric: "单片制作成本估计", value: "$3,000—$5,000", basis: "主办方经Astana Times披露，非审计", status: "partial", sources: ["astanatimes"] },
    { item: "AAIFF", metric: "奖金 + 制作基金", value: "$1M + $1M", basis: "官方总基金口径", status: "verified", sources: ["astana"] },
    { item: "中文在线定增", metric: "拟募资上限", value: "28.33亿元", basis: "10月1日预案，非已到账资金", status: "verified", sources: ["col"] },
    { item: "Seedance 2.5 Draft Mode", metric: "单条成本 / 节省比例", value: null, basis: "官方未披露", status: "unavailable", sources: ["runway"] }
  ]
};

d.commercial = {
  note: "本周包含已上线功能、上市公司计划、分发规划和IP衍生试水，阶段不可混写。",
  cases: [
    { title: "Asset Studio把现有素材转为YouTube广告", org: "Google Ads", type: "广告 / 分发", level: "A", stage: "已发布说明", fact: "网址和照片可生成视频，并在发布前供团队预览。", sources: ["googleads"] },
    { title: "Mooncast.ai拟建设AI电影片库", org: "AAIFF", type: "电影节 / 分发", level: "B/C", stage: "规划中", fact: "计划让未进入终选的作品也获得长期传播入口。", sources: ["astanatimes"] },
    { title: "AI短剧、模型与AIGC平台进入募投清单", org: "中文在线", type: "资本开支", level: "A", stage: "定增预案", fact: "拟募资不超过28.33亿元，多项直接指向AI内容生产。", sources: ["col"] },
    { title: "AI漫剧联动AI仿生毛绒玩具", org: "成都IP团队 × Walulu", type: "IP衍生", level: "B/C", stage: "联动发布", fact: "内容角色、智能硬件和线下文创开始跨媒介试水。", sources: ["walulu"] }
  ]
};

d.rights = {
  status: "partial",
  note: "本周新信号来自节展资格规则；10月1—4日未检得新的正式法规、法院判决或工会协议。",
  cases: [
    { title: "HKAIIFF 2027取消固定51% AI门槛", org: "香港AI国际电影节", type: "节展资格", level: "A", stage: "已开放征片", fact: "改以AI对主要视听、表演、叙事组织或观众体验的实质作用判断资格。", sources: ["hkaiiff"] }
  ],
  checks: ["AI对主要视听材料的实质贡献", "模型、版本与生成日期", "真人声音、肖像和表演授权", "参考图、音乐、字体与IP许可", "提示词、筛选、剪辑和人工贡献记录"]
};

d.incidents = {
  note: "本周未出现大规模服务事故；记录一项会影响复现的社区转换纠错。",
  cases: [
    { title: "MiniMax-H3四步ComfyUI转换修复键映射", org: "Iwannapose", type: "社区兼容性", level: "A", stage: "修复版", fact: "作者明确撤下错误转换并发布修复；第三方转换仍需项目复测。", sources: ["pdmd"] }
  ]
};

d.coverage = {
  note: "覆盖国内外官方、影视行业媒体、模型厂商、B站、GitHub/Hugging Face、Reddit、电影节、监管与工会观察线。",
  gaps: ["本期仅覆盖10月1—4日，尚非完整七天自然周。", "AAIFF获奖名单截至截点未在官网公开。", "抖音与小红书未取得可复现的全站AIGC影视榜单。", "GitHub本窗口未核验到重大影视生产Release。", "国内监管、法院与国际工会线没有新的A级事件。", "厂商与项目普遍未公开镜头可用率、返工次数和完整成本。"]
};

d.sources = {
  runway: { title: "Runway Product Changelog", publisher: "Runway", url: "https://runway.com/changelog" },
  googleads: { title: "Turn social assets into YouTube ads", publisher: "Google Ads", url: "https://blog.google/products/ads-commerce/creating-assets-youtube-ads/" },
  vtr: { title: "VTR-Bench", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.01499" },
  atr: { title: "Align Then Reason", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.00825" },
  rowbench: { title: "PROWBench", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2610.02205" },
  arr: { title: "Adaptive Reward Routing", publisher: "Hugging Face Papers / arXiv", url: "https://huggingface.co/papers/2609.37200" },
  astana: { title: "Astana AI Film Festival", publisher: "AAIFF", url: "https://www.aaiff.ai/" },
  astanagov: { title: "Astana AI Film Festival官方市政公告", publisher: "Astana市政府", url: "https://www.gov.kz/memleket/entities/astana/press/news/details/1293128?lang=ru" },
  astanatimes: { title: "Astana AI Film Festival Opens New Chapter", publisher: "The Astana Times", url: "https://astanatimes.com/2026/10/astana-ai-film-festival-opens-new-chapter-for-cinema-industry/" },
  waicf: { title: "WAIFF September 2026 Winners", publisher: "World AI Cinema Festival", url: "https://worldaicinema.com/en/winners-september-2026/" },
  biaoqian: { title: "原创AI短片《标签》", publisher: "Bilibili", url: "https://www.bilibili.com/video/BV1dChQ6XEaS/" },
  col: { title: "中文在线2026年度定增预案", publisher: "巨潮资讯", url: "https://static.cninfo.com.cn/finalpage/2026-10-01/1225590018.PDF" },
  walulu: { title: "AI漫剧与AI玩具联动案例", publisher: "每日经济新闻", url: "https://www.nbd.com.cn/articles/2026-10-01/4596556.html" },
  hkaiiff: { title: "HKAIIFF 2027征集指南", publisher: "香港AI国际电影节", url: "https://www.hkaiiff.org/zh-hans/festival/2027/documents/entry-guide" },
  pdmd: { title: "MiniMax-H3 PDMD 4-NFE ComfyUI", publisher: "Hugging Face", url: "https://huggingface.co/Iwannapose/minimax_h3_pdmd_4nfe_comfyui" },
  redditlocal: { title: "Local MiniMax-H3 workflow self-report", publisher: "Reddit", url: "https://www.reddit.com/r/StableDiffusion/comments/1wwnztw/commercial_video_models_are_over_for_me_at_least/" },
  redditcost: { title: "Seedance 2.5 provider cost discussion", publisher: "Reddit", url: "https://www.reddit.com/r/generativeAI/comments/1ww1n8n/what_a_15second_seedance_25_video_costs_across_13/" },
  baiff: { title: "Burano AI Film Festival", publisher: "BAIFF", url: "https://baiff.eu/" },
  gava: { title: "Global AI Video Awards", publisher: "Ganymede Project", url: "https://www.ganymedeproject.com/" },
  austin: { title: "Austin AI Film Festival 2026 selection", publisher: "Austin AI Film Festival", url: "https://www.prnewswire.com/news-releases/austin-ai-film-festival-announces-2026-official-selection-and-speaker-lineup-302895376.html" },
  sanxingdui: { title: "博纳影业项目公告", publisher: "深交所", url: "https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-09-29/8e080fb5-3990-421a-a477-24928a160659.PDF" },
  nrtafair: { title: "2026国际微短剧大赛", publisher: "国家广播电视总局", url: "https://www.nrta.gov.cn/art/2026/9/30/art_113_74164.html?xxgkhide=1" }
};

d.newsStream = {
  layerNote: "本周是10月首周滚动窗口；完整自然周将在10月8日后冻结。",
  layers: [
    { id: "h24", window: "2026-10-03 00:00 → 23:59（北京时间）", note: "最后一个完整自然日。", items: [
      { id: "w1", time: "10-03", title: "AAIFF进入闭幕日，官网获奖名单仍待更新", level: "A", origin: "电影节官网", fact: "活动日程已到颁奖日，但公开页面尚未列出获奖作品。", refs: ["astana2026"] },
      { id: "w2", time: "10-04 00:00抓取", title: "B站《标签》播放达到321.4万", level: "A", origin: "作品页", fact: "较10月2日约171万基线增加约88%。", refs: ["biaoqian"] }
    ] },
    { id: "h72", window: "2026-10-01 00:00 → 10-03 23:59（北京时间）", note: "本周当前全部技术与分发增量。", items: [
      { id: "w3", time: "10-02", title: "Runway Agent加入Seedance 2.5草稿模式", level: "A", origin: "厂商官方", fact: "支持480p草稿与生成后增强。", refs: ["runwaychangelog"] },
      { id: "w4", time: "10-01—02", title: "三类视频质量基准集中发布", level: "A", origin: "论文", fact: "文字、口型与程序事件分别进入专用评测。", refs: ["vtr", "atr", "rowbench"] },
      { id: "w5", time: "10-01", title: "Google Asset Studio生成YouTube视频资产", level: "A", origin: "厂商官方", fact: "可把网站与照片转换为视频并在发布前预览。", refs: ["googleads"] },
      { id: "w6", time: "10-01", title: "World AI Cinema Festival公布九月获奖名单", level: "A", origin: "电影节官网", fact: "中国团队作品Above the Waterline获最佳AI短片。", refs: ["waicf"] }
    ] },
    { id: "week", window: "2026-10-01 00:00 → 10-04 00:00（北京时间）", note: "滚动周累计。", items: [
      { id: "w7", time: "10-01", title: "中文在线将AI内容列入定增募投方向", level: "A", origin: "上市公司公告", fact: "拟募资上限28.33亿元，覆盖IP衍生、模型研发和AIGC平台。", refs: ["col2026"] },
      { id: "w8", time: "10-01", title: "AI漫剧与AI仿生毛绒玩具联动", level: "B/C", origin: "行业案例", fact: "内容角色与智能硬件、线下文创开始跨媒介试水。", refs: ["walulu"] },
      { id: "w9", time: "10-01—03", title: "AAIFF完成25部终选放映并提出分发计划", level: "A/B", origin: "电影节", fact: "8,067份投稿、125个国家和地区；Mooncast.ai仍为规划。", refs: ["astana2026", "astanatimes"] }
    ] }
  ]
};
