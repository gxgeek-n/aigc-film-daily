const d = window.REPORT_DATA;

d.meta = {
  title: "AIGC影视情报周报",
  issue: "2026.09.24—09.30",
  label: "周报 · 核验版",
  date: "2026年10月2日",
  window: "2026年9月24日00:00—9月30日23:59（北京时间）",
  thesis: "AI影视竞争正在从生成能力，转向可回款、可复用、可追责的生产系统。"
};

d.judgments = [
  { label: "商业化", text: "爱奇艺AIGC网络电影系列累计分账突破800万元，Runway Ads把生成、发布、测量和再生成接成闭环。" },
  { label: "生产系统", text: "长视频多智能体、成本路由、模板API和开源工作台同时推进，竞争单位已从单模型变为整条管线。" },
  { label: "权利与连续性", text: "声音人格权、AI作品权属与Sora API退役共同说明：授权证据和供应商退出预案必须进入制片标准。" }
];

d.lead = {
  title: "AIGC影视进入“收入验证 + 闭环生产”阶段",
  evidenceLevel: "A/B",
  evidenceLabel: "平台披露、厂商公告与监管一手",
  standfirst: "同一周里，国内长内容出现可核验分账，海外工具开始直接连接投放效果；产业焦点由‘能不能生成’转向‘能不能持续交付并收回成本’。",
  chain: [
    { key: "证据", value: "《灵魂摆渡》AIGC网络电影系列累计分账超800万元；Runway自报广告周产量由77条升至约900条。" },
    { key: "机制", value: "成熟IP、系列化发行、模板化生产与投放反馈共同压缩试错周期。" },
    { key: "利益相关者", value: "平台获得稳定供给，制片方获得回款样本，工具商开始向发行和效果预算延伸。" },
    { key: "边界", value: "分账、ROAS和降本数据均为平台或公司披露，不能外推为全行业平均。" },
    { key: "行动", value: "项目立项同时记录版权链、单镜头可用率、返工成本、发行渠道和回款周期。" }
  ],
  evidence: [
    "爱奇艺披露前两部AIGC网络电影累计分账超过800万元、首周收回制作成本。",
    "Runway Ads官方页披露从生成到投放反馈的闭环，并默认保留人工审批。"
  ],
  sources: ["iqiyi", "runwayads"]
};

d.briefs = [
  { number: "01", tag: "商业化", level: "A/B", title: "《灵魂摆渡》AIGC系列分账破800万元", fact: "前两部自8月22日上线，累计分账超过800万元；平台称首周已收回制作成本，第三部正在制作。", read: "成熟IP与系列化发行出现正向回款样本，但数据仍属平台披露。", sources: ["iqiyi"] },
  { number: "02", tag: "工具", level: "A", title: "Runway Ads连接生成、投放与反馈", fact: "产品可生成视频与图片、人工审批后投放至Meta/Google/TikTok，并读取表现继续迭代。", read: "视频工具开始吃掉发行与效果优化环节，审批和预算护栏成为产品能力。", sources: ["runwayads"] },
  { number: "03", tag: "供应商", level: "A", title: "Sora API于9月24日停止服务", fact: "OpenAI确认Sora Web/App已于4月停止，API于9月24日停止，并提供内容导出安排。", read: "模型退役不是抽象风险，素材迁移与可替代管线应写进项目预案。", sources: ["sora"] },
  { number: "04", tag: "国内合作", level: "B", title: "Seedance发布影视创作合作计划", fact: "计划为电影、剧集、动画和短片提供Token、技术与宣发支持，单项目资源最高100万元；视频生成须100%使用Seedance。", read: "资源支持与单一模型锁定同步出现，制片方应评估迁移和交付风险。", sources: ["seedanceplan"] },
  { number: "05", tag: "权利", level: "B", title: "AI短剧判赔开始考虑Token与工具成本", fact: "武汉江岸法院在湖北首例相关纠纷中认定全流程个性化选择可形成视听作品，判赔2万元，并将Token与工具授权费纳入考量。", read: "提示词、筛选记录、工程文件和费用凭证正成为权属与损失证明。", sources: ["wuhancourt"] },
  { number: "06", tag: "司法", level: "B", title: "上海终审确认AI合成声音侵权", fact: "未经同意将自然人声音用于训练并生成可识别合成人声构成侵权，二审维持赔偿5万元。", read: "配音与数字演员项目必须把声音训练、转换和传播授权拆分留证。", sources: ["shvoice"] },
  { number: "07", tag: "平台样本", level: "A", title: "B站AI短片《标签》播放约171万", fact: "作品于9月26日发布并明确标注含AI生成内容；截至10月2日约171万播放、7.3万点赞、1.2万收藏。", read: "强概念叙事形成突出传播样本，但单片数据不能外推全站趋势。", sources: ["biaoqian"] },
  { number: "08", tag: "模型", level: "A", title: "Kling 4.0进入早期访问", fact: "官方披露单次原生最长30秒，最多15个参考资产、10个关键帧和8,000 token提示；4K/HDR与延长至2分钟仍为coming soon。", read: "多参考与关键帧减少拼接，但未上线能力必须与现有能力分开。", sources: ["kling4"] },
  { number: "09", tag: "开源", level: "A", title: "ComfyUI 0.38.0补齐H3与色彩工作流", fact: "新增MiniMax-H3 VAE tile混合、Seedance 2.5 Draft节点、ID-V2V与LogC3/ACEScct，并移除弃用Sora节点。", read: "开源节点已开始同步承接供应商退役与专业色彩交付。", sources: ["comfy"] },
  { number: "10", tag: "节展", level: "B", title: "平遥36小时AI短片黑客松完成展映", fact: "2,158人报名，40队132人入围，产出约230分钟内容，8部作品获奖。", read: "AI短片进入国际电影展官方展期和大银幕评价语境。", sources: ["pingyao"] }
];

d.workflow = {
  eyebrow: "本周工作流判断",
  title: "把“生成镜头”升级为“可恢复的交付系统”。",
  summary: "多智能体长视频、模型路由、模板API、投放闭环与开源节点共同指向编排层：资产、成本、审批、版本和供应商迁移需要统一管理。",
  metrics: [
    { value: "800万+", label: "爱奇艺AIGC系列累计分账披露" },
    { value: "77→约900", label: "Runway自报每周广告产量" },
    { value: "8,067", label: "Astana AI Film Festival投稿数" }
  ],
  caution: "厂商基准、分账和经营效果均需标注自报口径，不视为独立审计。",
  interpretation: "建议新增四张制片表：来源授权表、模型与版本表、镜头失败恢复表、发行与回款表。",
  sources: ["iqiyi", "runwayads", "googlecodirector", "sora"]
};

d.radar = [
  { channel: "B站", signal: "《标签》形成约171万播放的周内突出样本。", limit: "平台页面快照；不代表全站榜单。", sources: ["biaoqian"] },
  { channel: "抖音 / 小红书", signal: "未取得可复现的公开全站榜单；相关帖子只进入候选池。", limit: "不以搜索摘要拼接播放排名。" },
  { channel: "GitHub", signal: "Toonflow 2.0.x、Dramaclaw 2.0.6、ComfyUI 0.38.0持续发版。", limit: "stars为累计快照，不等于本周增长。", sources: ["toonflow", "dramaclaw", "comfy"] },
  { channel: "Hugging Face", signal: "MiniMax-H3稀疏注意力与INT4量化权重降低部署门槛。", limit: "性能为作者测试；开放权重不等于OSI开源。", sources: ["veda", "quantfunc"] },
  { channel: "Reddit", signal: "社区讨论主要围绕声音克隆、长片成本与连续性。", limit: "仅作D级线索，不用于市场规模结论。" }
];

d.watchlist = [
  { date: "10.01—03", title: "Astana AI Film Festival", action: "等待10月3日获奖名单与权利披露。", sources: ["astana"] },
  { date: "10.16—17", title: "Austin AI Film Festival", action: "跟踪40部入选作品的方法披露。", sources: ["austin"] },
  { date: "10.23", title: "《三星堆：未来往事》计划院线上映", action: "核验排片、票房和观众反馈。", sources: ["sanxingdui"] },
  { date: "11.30", title: "2026国际微短剧大赛征集截止", action: "准备备案、权利承诺和真实传播凭证。", sources: ["nrtafair"] }
];

d.method = [
  "主窗口为北京时间2026年9月24日至30日；10月1—2日只放入下一周期观察。",
  "A=官方/一手；B=一手与可信媒体互证；C=单一媒体或公司自报效果；D=社区线索。",
  "厂商基准、分账、营收与降本数字均保留披露主体，不外推行业平均。",
  "GitHub stars与Hugging Face downloads为10月2日累计快照，不写成本周增长。",
  "AI题材作品与AIGC制作作品分开登记；没有制作证据不归入AIGC作品。",
  "B站/抖音/小红书无可复现全站榜单时留空，不制造伪排名。"
];

d.intel = {
  note: "12条情报线覆盖作品、受众、模型、开源、商业化、权利与节展；证据不足处明确保留边界。",
  lanes: [
    { id: "works", name: "作品与创作者", en: "Works & Creators", status: "verified", target: "#catalog", summary: "《标签》《灵魂摆渡》AIGC系列与《三星堆：未来往事》进入不同发行阶段。", sources: ["biaoqian", "iqiyi", "sanxingdui"] },
    { id: "audience", name: "受众表现", en: "Audience Performance", status: "partial", target: "#platform", summary: "取得B站单片与爱奇艺分账样本，但没有三大社区同口径榜单。", sources: ["biaoqian", "iqiyi"] },
    { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "partial", target: "#platform", summary: "《标签》的点赞与收藏可复核；跨平台评论语义尚未形成可比样本。", sources: ["biaoqian"] },
    { id: "models", name: "模型与工具", en: "Models & Tools", status: "verified", target: "#workflow", summary: "Kling 4.0早期访问、Runway Eleven v4与多种开源视频组件在本周更新。", sources: ["kling4", "runwayapi", "comfy"] },
    { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "partial", target: "#workflow", summary: "Google长视频研究与Runway Router提供新基准，但均为发布方自测。", sources: ["googlecodirector", "router"] },
    { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "verified", target: "#workflow", summary: "模板API、模型路由和自动投放把生成环节接入完整业务流。", sources: ["elevenapi", "router", "runwayads"] },
    { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "partial", target: "#economics", summary: "取得分账、路由成本和项目成本个案，均不具备全行业代表性。", sources: ["iqiyi", "router", "hellgrind"] },
    { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "verified", target: "#commercial", summary: "平台分账、广告投放闭环、院线计划和国际赛事共同构成发行信号。", sources: ["iqiyi", "runwayads", "sanxingdui"] },
    { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "partial", target: "#commercial", summary: "Future Vision XPRIZE以股权投资连接AI长片开发；金额不等于奖金。", sources: ["xprize"] },
    { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "verified", target: "#rights", summary: "AI短剧权属、声音权益与广电备案/标识要求均出现新信号。", sources: ["wuhancourt", "shvoice", "nrta"] },
    { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist", summary: "平遥、北京动画周、上海AIGC大赛和国际微短剧大赛同时推进。", sources: ["pingyao", "beijingweek", "shcontest", "nrtafair"] },
    { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "partial", target: "#coverage", summary: "岗位样本由提示词转向策划、分镜、生成、后期与数据迭代，但样本不足以推断薪资。", sources: ["jobs"] }
  ]
};

d.moduleNav = [
  { label: "作品目录", href: "#catalog", state: "verified" },
  { label: "平台样本", href: "#platform", state: "partial" },
  { label: "生产经济", href: "#economics", state: "partial" },
  { label: "发行与商业化", href: "#commercial", state: "verified" },
  { label: "权利与合规", href: "#rights", state: "verified" },
  { label: "故障与事故", href: "#incidents", state: "verified" },
  { label: "覆盖状态", href: "#coverage", state: "partial" },
  { label: "工作流信号", href: "#workflow", state: "verified" },
  { label: "观察日历", href: "#watchlist", state: "verified" }
];

d.workCatalog = {
  status: "verified",
  note: "仅登记有原始作品页、平台披露或正式发行信息的具名项目。",
  rows: [
    { title: "《标签》", creator: "B站创作者样本", type: "AI短片", stage: "已发布", level: "A", note: "10月2日抓取约171万播放。", sources: ["biaoqian"] },
    { title: "《灵魂摆渡》AIGC网络电影系列", creator: "爱奇艺 × 长信传媒", type: "AIGC网络电影", stage: "前两部上线 / 第三部制作", level: "A/B", note: "累计分账超800万元。", sources: ["iqiyi"] },
    { title: "《三星堆：未来往事》", creator: "博纳影业", type: "AI原生电影（公司口径）", stage: "计划10月23日院线上映", level: "A", note: "已取得公映许可证；票房待验证。", sources: ["sanxingdui"] },
    { title: "《The Gifted》", creator: "Future Vision XPRIZE获选项目", type: "AI长片开发", stage: "获股权投资", level: "B", note: "最高250万美元为股权投资，非无条件奖金。", sources: ["xprize"] }
  ]
};

d.platformSamples = {
  note: "平台指标只保留可复核页面与明确披露口径；抓取时间不同，不做横向排名。",
  rows: [
    { platform: "B站", metric: "《标签》播放 / 点赞 / 收藏", value: "约171万 / 7.3万 / 1.2万", basis: "10月2日作品页快照", status: "verified", sources: ["biaoqian"] },
    { platform: "爱奇艺", metric: "AIGC系列累计分账", value: "800万元+", basis: "平台/公司披露，非审计", status: "verified", sources: ["iqiyi"] },
    { platform: "抖音 / 小红书", metric: "近一周全站AIGC影视榜单", value: null, basis: "公开页面无法获得同口径全站榜", status: "unavailable", sources: [] },
    { platform: "GitHub", metric: "ComfyUI累计stars", value: "135,761", basis: "10月2日累计快照，不代表周增长", status: "partial", sources: ["comfy"] },
    { platform: "Hugging Face", metric: "MiniMax-H3 INT4近30日下载", value: "22,438", basis: "模型页10月2日快照", status: "partial", sources: ["quantfunc"] }
  ]
};

d.productionEconomics = {
  note: "成本样本均保留主体和条件；不换算成统一单分钟行业价。",
  rows: [
    { item: "网络电影回款", metric: "累计分账", value: "800万元+", basis: "爱奇艺AIGC系列披露", status: "verified", sources: ["iqiyi"] },
    { item: "模型路由", metric: "质量+$1上限可用率 / 单条成本", value: "74% / $0.61", basis: "Runway 250提示词厂商自测", status: "partial", sources: ["router"] },
    { item: "AI长片个案", metric: "95分钟 / 15人 / 不到3周", value: "约$500K", basis: "媒体转述公司口径，约80%为算力", status: "partial", sources: ["hellgrind"] },
    { item: "AI漫剧调查样本", metric: "单集2.5分钟成本", value: "400—500元", basis: "单一创作者自报，不外推", status: "partial", sources: ["zhejiang"] }
  ]
};

d.commercial = {
  note: "区分已回款、已发布、开发融资与计划上映。",
  cases: [
    { title: "AIGC网络电影系列累计分账超800万元", org: "爱奇艺 × 长信传媒", type: "发行 / 分账", level: "A/B", stage: "两部上线", fact: "平台称首周收回制作成本，第三部已在制作。", sources: ["iqiyi"] },
    { title: "Runway Ads把创意接到媒体投放", org: "Runway", type: "广告 / 效果闭环", level: "A", stage: "早期企业试点", fact: "支持生成、审批、发布、读取表现和下一轮再生成。", sources: ["runwayads"] },
    { title: "Future Vision XPRIZE连接AI长片融资", org: "XPRIZE", type: "融资 / 电影开发", level: "B", stage: "项目开发", fact: "《The Gifted》获最高250万美元股权投资及10万美元剧本开发金。", sources: ["xprize"] },
    { title: "《三星堆：未来往事》计划院线上映", org: "博纳影业", type: "院线发行", level: "A", stage: "计划10月23日上映", fact: "已取得公映许可证；公司公告提示票房不确定性。", sources: ["sanxingdui"] }
  ]
};

d.rights = {
  status: "verified",
  note: "本周权利事件横跨作品权属、声音人格权、平台备案和AI内容标识。",
  cases: [
    { title: "湖北首例AI短剧著作权纠纷判赔2万元", org: "武汉市江岸区人民法院", type: "著作权", level: "B", stage: "已判决", fact: "法院将全流程个性化选择作为作品性判断，并把Token与工具授权费纳入赔偿考量。", sources: ["wuhancourt"] },
    { title: "上海AI合成声音权益案二审维持赔偿5万元", org: "上海市第一中级人民法院", type: "声音权益", level: "B", stage: "终审", fact: "未经同意用自然人声音训练并生成可识别合成人声构成侵权。", sources: ["shvoice"] },
    { title: "国际微短剧大赛要求备案、传播与权利材料", org: "国家广播电视总局", type: "监管 / 征集", level: "A", stage: "征集中", fact: "国内作品须提交许可证或备案号，以及播出证明、传播数据和权利承诺。", sources: ["nrtafair"] }
  ],
  checks: ["提示词、废片筛选与剪辑工程文件", "Token、模型订阅与软件授权凭证", "肖像、声音、音乐、字体和参考素材授权", "模型版本、生成日期与AI内容标识", "供应商停服时的素材导出和替代路径"]
};

d.incidents = {
  note: "记录会改变生产可用性的退役、兼容性或权利风险事件。",
  cases: [
    { title: "Sora API停止服务", org: "OpenAI", type: "服务退役", level: "A", stage: "09.24生效", fact: "依赖该接口的项目需要迁移并完成内容导出。", sources: ["sora"] },
    { title: "ComfyUI移除弃用Sora节点", org: "Comfy-Org", type: "工作流兼容性", level: "A", stage: "v0.38.0", fact: "开源工作流同步清理已退役供应商节点。", sources: ["comfy"] }
  ]
};

d.coverage = {
  note: "本期覆盖国内外官方、影视媒体、模型厂商、平台样本、GitHub、Hugging Face、电影节、工会与监管机构。",
  gaps: [
    "抖音与小红书未获得可复现的公开全站AIGC影视榜单。",
    "多数项目未公开镜头可用率、返工次数和完整成本结构。",
    "Runway AI Summit未发布完整官方复盘、出席人数或黑客松结果。",
    "阅文AI漫剧大赛截至10月2日未检得官方获奖名单。"
  ]
};

d.sources = {
  iqiyi: { title: "《灵魂摆渡》AIGC系列分账披露", publisher: "爱奇艺 / 新京报", url: "https://www.bjnews.com.cn/detail/1790248518129743.html" },
  runwayads: { title: "Introducing Runway Ads", publisher: "Runway", url: "https://runway.com/news/company-news/introducing-runway-ads" },
  sora: { title: "What to know about the Sora discontinuation", publisher: "OpenAI", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
  seedanceplan: { title: "Seedance影视创作合作计划", publisher: "平遥国际电影展 / IT之家", url: "https://www.ithome.com/1/007/867.htm" },
  wuhancourt: { title: "武汉法院AI短剧著作权纠纷", publisher: "IP经济", url: "https://www.ipeconomy.cn/mobile/dongtai/11344.html" },
  shvoice: { title: "上海首例AI合成语音声音权益案", publisher: "上海高院", url: "https://m.weibo.cn/detail/5348869816978922" },
  biaoqian: { title: "原创AI短片《标签》", publisher: "Bilibili", url: "https://www.bilibili.com/video/BV1dChQ6XEaS/" },
  kling4: { title: "Introducing Kling 4.0", publisher: "Kling AI", url: "https://kling.ai/blog/kling40-kling-visual-realism-creative-control-introducing-storytelling?tab=all" },
  comfy: { title: "ComfyUI v0.38.0", publisher: "GitHub · Comfy-Org", url: "https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.38.0" },
  pingyao: { title: "平遥36小时AI短片黑客松", publisher: "平遥国际电影展 / 闭幕报道", url: "https://weibo.com/2/detail/5348160165381592" },
  googlecodirector: { title: "Coherent long-form video generation", publisher: "Google Research", url: "https://research.google/blog/coherent-long-form-video-generation/" },
  router: { title: "Evaluating Runway Model Router", publisher: "Runway", url: "https://runway.com/news/developers/evaluating-runway-model-router" },
  elevenapi: { title: "Image, Video, and Templates APIs", publisher: "ElevenLabs", url: "https://elevenlabs.io/blog/introducing-the-image-video-and-templates-apis" },
  runwayapi: { title: "Runway API changelog", publisher: "Runway", url: "https://docs.dev.runwayml.com/api-details/api_changelog/" },
  toonflow: { title: "Toonflow releases", publisher: "GitHub", url: "https://github.com/HBAI-Ltd/Toonflow-app/releases" },
  dramaclaw: { title: "Dramaclaw v2.0.6", publisher: "GitHub", url: "https://github.com/dramaclaw/dramaclaw/releases/tag/v2.0.6" },
  veda: { title: "MiniMax-H3 T2VA Veda Preview", publisher: "Hugging Face", url: "https://huggingface.co/Veda-Sparse/Minimax-H3-T2VA-Veda-8NFE-600Step-Preview" },
  quantfunc: { title: "MiniMax-H3 QuantFunc 4bit", publisher: "Hugging Face", url: "https://huggingface.co/QuantFunc/Minimax-H3-Quantfunc-4bit" },
  sanxingdui: { title: "博纳影业股票交易异常波动公告", publisher: "深交所", url: "https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-09-29/8e080fb5-3990-421a-a477-24928a160659.PDF" },
  xprize: { title: "The Gifted wins Future Vision XPRIZE", publisher: "XPRIZE", url: "https://www.xprize.org/news/the-gifted-wins-the-future-vision-xprize" },
  hellgrind: { title: "AI feature film cost case", publisher: "Fortune", url: "https://fortune.com/2026/09/30/cio-intelligence-sept-30/" },
  zhejiang: { title: "AI漫剧供给调查", publisher: "浙江在线", url: "https://zjnews.zjol.com.cn/zjnews/202609/t20260924_31929789.shtml" },
  nrta: { title: "微短剧创作计划第三次调度会", publisher: "国家广播电视总局", url: "https://www.nrta.gov.cn/art/2026/9/30/art_114_74152.html" },
  nrtafair: { title: "2026国际微短剧大赛", publisher: "国家广播电视总局", url: "https://www.nrta.gov.cn/art/2026/9/30/art_113_74164.html?xxgkhide=1" },
  beijingweek: { title: "北京动画周AIGC挑战赛", publisher: "新华社 / 央广", url: "https://www.xinhuanet.com/zgjx/2019v/20260925/a938fe0f0f314c83a1e8e11a69755fa8/c.html" },
  shcontest: { title: "上海国际AIGC创新大赛", publisher: "上观新闻", url: "https://www.jfdaily.com.cn/sgh/detail?id=4067315" },
  jobs: { title: "AI漫剧招聘样本", publisher: "鱼泡网", url: "https://m.yupao.com/zhaogong/378513523.html" },
  astana: { title: "Astana AI Film Festival", publisher: "AAIFF", url: "https://www.aaiff.ai/" },
  austin: { title: "Austin AI Film Festival 2026 selection", publisher: "Austin AI Film Festival", url: "https://www.prnewswire.com/news-releases/austin-ai-film-festival-announces-2026-official-selection-and-speaker-lineup-302895376.html" }
};

d.newsStream = {
  layerNote: "主周严格按9月24—30日统计；10月1—2日的新周期事件不倒灌，只在观察日历展示。",
  layers: [
    { id: "h24", window: "2026-09-30 00:00 → 23:59（北京时间）", note: "周末日的集中事件。", items: [
      { id: "w1", time: "09-30", title: "Runway Ads发布，视频生成进入投放反馈闭环", level: "A", origin: "厂商官方", fact: "生成、审批、投放、读取效果与再生成进入同一系统。", note: "效果数字为Runway自报。", sources: ["vendor"] },
      { id: "w2", time: "09-30", title: "东京法院确认声音可受人格商业价值保护", level: "B", origin: "司法报道", fact: "案件为AI仿声在社交平台商业使用提供新的权利判断。", sources: ["governance"] },
      { id: "w3", time: "09-30", title: "Kling 4.0进入早期访问", level: "A", origin: "厂商官方", fact: "单次最长30秒并支持多参考与关键帧；4K/HDR和2分钟延展仍未上线。", sources: ["vendor"] },
      { id: "w4", time: "09-30", title: "ComfyUI 0.38.0发布", level: "A", origin: "GitHub release", fact: "补充H3、Seedance节点、身份视频与专业色彩支持，并移除Sora节点。", sources: ["github"] }
    ] },
    { id: "h72", window: "2026-09-28 00:00 → 09-30 23:59（北京时间）", note: "含近72小时新增。", items: [
      { id: "w5", time: "09-28—30", title: "平遥36小时AI短片黑客松完成展映", level: "B", origin: "电影节", fact: "2,158人报名、40队入围、约230分钟内容、8部作品获奖。", sources: ["governance"] },
      { id: "w6", time: "09-29", title: "Higgsfield披露年化收入运行率突破10亿美元", level: "B/C", origin: "公司披露", fact: "口径为最近4周收入乘13，非过去12个月收入；经营数据未审计。", sources: ["vendor"] },
      { id: "w7", time: "09-28", title: "MiniMax-H3 INT4量化权重发布", level: "A", origin: "Hugging Face", fact: "模型卡称单文件12.37GB并给出4090测试；性能为作者自测。", sources: ["huggingface"] }
    ] },
    { id: "week", window: "2026-09-24 00:00 → 09-30 23:59（北京时间）", note: "本周持续跟踪。", items: [
      { id: "w8", time: "09-24", title: "Sora API停止服务", level: "A", origin: "OpenAI", fact: "官方停服节点生效，生产团队需要导出内容并迁移管线。", sources: ["vendor"] },
      { id: "w9", time: "09-24", title: "《灵魂摆渡》AIGC系列累计分账突破800万元", level: "A/B", origin: "国内商业化", fact: "平台称前两部首周收回成本，第三部已制作。", sources: ["thepaper"] },
      { id: "w10", time: "09-24", title: "Google发布长视频多智能体联合导演研究", level: "A", origin: "研究", fact: "展示连续10分钟样例与新的长时序一致性基准。", sources: ["vendor"] },
      { id: "w11", time: "09-26", title: "ElevenLabs开放图片、视频与模板API", level: "A", origin: "厂商官方", fact: "可把画布内模板作为API或MCP调用，批量生成商品与广告资产。", sources: ["vendor"] },
      { id: "w12", time: "09-27", title: "Seedance影视创作合作计划发布", level: "B", origin: "平遥影展", fact: "单项目最高100万元资源支持，并要求生成环节100%使用Seedance。", sources: ["governance"] }
    ] }
  ]
};
