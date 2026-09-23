window.REPORT_DATA = {
  meta: {
    title: "AIGC影视情报日报",
    issue: "2026.09.23",
    label: "日报 · 核验版",
    date: "2026年9月23日",
    window: "2026年9月22日12:45—9月23日12:45（北京时间）",
    thesis: "AI视频产品正从单镜头生成器转向可编排的多镜头工作台。"
  },
  judgments: [
    { label: "产品形态", text: "Pika把参考资产与多镜头组织进Video Studio；竞争焦点由单次画质转向项目级控制。" },
    { label: "生产逻辑", text: "长内容的关键不是一次生成更长，而是角色、场景、镜头和失败恢复能否持续管理。" },
    { label: "市场口径", text: "近24小时未获得三大国内视频社区可复现的全站榜单；社区热度只作线索。" }
  ],
  lead: {
    title: "Pika Video Studio把短片工具改写为多镜头工作台",
    evidenceLevel: "B",
    evidenceLabel: "官方产品页 + 专业媒体时间戳",
    standfirst: "Pika官网已将Video Studio定位为可由参考素材生成短片或最长3分钟多镜头作品的工作台。",
    chain: [
      { key: "证据", value: "官网展示参考角色、产品、场景与风格可进入同一流程，并标注最长3分钟多镜头输出。" },
      { key: "机制", value: "参考资产被提升为项目级输入，镜头不再是彼此孤立的抽卡结果。" },
      { key: "利益相关者", value: "导演获得更接近分镜表的控制；平台开始争夺资产、版本和协作留存。" },
      { key: "边界", value: "3分钟是厂商表述，不等于任何题材都能稳定保持连续性。" },
      { key: "行动", value: "测试时记录可用镜头率、返工次数、角色漂移和导出成本。" }
    ],
    evidence: ["Pika官网当前列出短片至3分钟多镜头作品。", "AIVIDEO.NEWS于9月22日14:21发布更新报道。"],
    sources: ["pika", "aivideo"]
  },
  briefs: [
    { number: "01", tag: "国内产业", level: "C", title: "成都AI文娱大会披露工具—内容—出海协同方向", fact: "9月22日发布的会后报道回顾成都AI文娱大会，并披露拟建设连接IP创作、生产工具与海外发行的“织梦星球”平台。", read: "这是规划披露，不等于已上线产品；继续观察合作方与交付案例。", sources: ["chengdu"] },
    { number: "02", tag: "电影节", level: "A", title: "AI International Film Festival常规投稿节点到期", fact: "主办方页面列出9月22日常规截止、11月14日放映节点，并维持月度竞赛机制。", read: "创作者应把生成说明、权利链、字幕与工程留档做成标准投稿包。", sources: ["aiff"] },
    { number: "03", tag: "研究雷达", level: "A", title: "Hugging Face日论文聚焦视频世界一致性与Agent", fact: "9月22日日论文中出现WorldCrafter、VideoGen-Agent及视频扩散物理违背机制研究。", read: "跨镜头世界记忆、流程编排和物理可信度仍是长内容瓶颈。", sources: ["hf"] },
    { number: "04", tag: "社区", level: "D", title: "创作者继续争论AI长片的成本与创意门槛", fact: "r/aifilmmaking于9月22日出现AI长片未来讨论，观点集中在降本并不自动带来叙事质量。", read: "社区样本并非行业统计，但提醒团队分开评估生成效率与创作质量。", sources: ["reddit"] }
  ],
  workflow: {
    eyebrow: "今日工作流判断",
    title: "先建资产与镜头结构，再追求时长。",
    summary: "Pika的参考资产、多镜头组织与研究中的世界记忆共同指向同一件事：长内容是状态管理问题。",
    metrics: [
      { value: "3 min", label: "Pika官网标示最长多镜头输出" },
      { value: "4", label: "本期核心核验信号" }
    ],
    caution: "产品上限与实际可用率需按项目独立测试。",
    interpretation: "建议以角色卡、场景卡、镜头ID、首尾帧、音轨和版本号组织素材，并记录失败原因。",
    sources: ["pika", "hf"]
  },
  radar: [
    { channel: "B站 / 抖音 / 小红书", signal: "未取得同口径、可复核的近24小时全站AIGC影视榜单。", limit: "不以搜索摘要或截图拼接“十大热门”。" },
    { channel: "GitHub", signal: "本窗口未核验到足以改变生产栈的全新旗舰发布。", limit: "更新时间、stars与真实采用不能互相替代。" },
    { channel: "Hugging Face", signal: "新上传多为衍生权重与实验工作流，日论文更值得关注。", limit: "上传不等于原厂发布。" },
    { channel: "Reddit", signal: "讨论从画面惊艳转向长片是否真正降低创作门槛。", limit: "D级线索，不外推市场规模。", sources: ["reddit"] }
  ],
  watchlist: [
    { date: "09.24", title: "OpenAI Sora旧API计划停止服务", action: "核对存量调用与替代路径。", sources: ["sora"] },
    { date: "09.24—25", title: "北京动画周亦庄AIGC特色会场", action: "观察24小时挑战工具链与交付数据。", sources: ["beijing"] },
    { date: "09.30", title: "Runway AI Summit", action: "关注企业工作流与政策议题。", sources: ["runway"] }
  ],
  method: [
    "窗口为北京时间最近24小时；跨窗事件只作背景。",
    "A=官方；B=官方现状与可信媒体时间戳互证；C=单一媒体披露；D=社区线索。",
    "厂商能力按原始表述标注，不视为独立评测。",
    "无可复现榜单时留空，不制作伪排名。",
    "无法核验的指标显示“数据不可得”，不以0或估算填充。",
    "AI辅助检索、核验与分析。"
  ],

  intel: {
    note: "12条情报线逐一给出核验状态；无可可靠口径或本窗口无新增时明确标注，不以推断补位。",
    lanes: [
      { id: "works", name: "作品与创作者", en: "Works & Creators", status: "unchanged", target: "#catalog",
        summary: "本窗口未核验到具名AIGC影视新作公开发布或上线；作品目录维持空状态。", sources: [] },
      { id: "audience", name: "受众表现", en: "Audience Performance", status: "unavailable", target: "#platform",
        summary: "未取得同口径、可复核的近24小时全站播放或票房数据，受众表现不做量化。", sources: [] },
      { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "partial", target: "#platform",
        summary: "社区讨论可作D级线索：议题由画面惊艳转向长片创作门槛是否真的降低。", sources: ["reddit"] },
      { id: "models", name: "模型与工具", en: "Models & Tools", status: "verified", target: "#workflow",
        summary: "Pika Video Studio把参考资产与多镜头组织进同一工作台。", sources: ["pika", "aivideo"] },
      { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "partial", target: "#workflow",
        summary: "Hugging Face日论文出现世界一致性、视频Agent与物理违背机制研究；属研究线索，非独立评测。", sources: ["hf"] },
      { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "verified", target: "#workflow",
        summary: "焦点由单次生成质量转向项目级状态管理与失败恢复。", sources: ["pika", "hf"] },
      { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "unavailable", target: "#economics",
        summary: "无项目级生成成本、返工率或单分钟成本的可核验数据。", sources: [] },
      { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "partial", target: "#commercial",
        summary: "成都AI文娱大会会后报道提及拟建连接IP创作、生产工具与海外发行的平台。", sources: ["chengdu"] },
      { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "partial", target: "#commercial",
        summary: "“织梦星球”为规划披露，合作方与交付案例待观察；本窗口未核验到融资或并购事件。", sources: ["chengdu"] },
      { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "unavailable", target: "#rights",
        summary: "本窗口未核验到具名AIGC影视权利、版权或监管新规。", sources: [] },
      { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist",
        summary: "AI International Film Festival常规投稿节点到期，维持月度竞赛机制。", sources: ["aiff"] },
      { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "verified", target: "#watchlist",
        summary: "北京动画周亦庄AIGC特色会场将于9月24—25日举行。", sources: ["beijing"] }
    ]
  },

  moduleNav: [
    { label: "作品目录", href: "#catalog", state: "unavailable" },
    { label: "平台样本", href: "#platform", state: "partial" },
    { label: "生产经济", href: "#economics", state: "unavailable" },
    { label: "发行与商业化", href: "#commercial", state: "partial" },
    { label: "权利与合规", href: "#rights", state: "unavailable" },
    { label: "故障与事故", href: "#incidents", state: "partial" },
    { label: "覆盖状态", href: "#coverage", state: "partial" },
    { label: "工作流信号", href: "#workflow", state: "verified" },
    { label: "观察日历", href: "#watchlist", state: "verified" }
  ],

  workCatalog: {
    status: "unavailable",
    note: "本窗口未核验到具名AIGC影视作品的新增公开发布或上线信息；不使用社区传闻或平台缩略图补位。",
    rows: []
  },

  platformSamples: {
    note: "仅记录有明确口径的样本；不可得字段显示“数据不可得”，不以0或估算填充。",
    rows: [
      { platform: "B站 / 抖音 / 小红书", metric: "近24小时AIGC影视全站榜单", value: null, basis: "需同口径、可复核的全站榜单", status: "unavailable", sources: [] },
      { platform: "GitHub", metric: "可改变生产栈的旗舰发布", value: "未核验到", basis: "更新时间与stars不能等同真实采用", status: "unchanged", sources: [] },
      { platform: "Hugging Face", metric: "日论文相关条目", value: "3 项", basis: "论文不等于产品发布", status: "partial", sources: ["hf"] },
      { platform: "Reddit", metric: "讨论样本量", value: null, basis: "D级社区线索，不外推市场规模", status: "partial", sources: ["reddit"] }
    ]
  },

  productionEconomics: {
    note: "成本与产能数据缺乏项目级可核验口径时留空；厂商能力上限不换算为成本。",
    rows: [
      { item: "生成成本", metric: "单分钟生成成本", value: null, basis: "无项目级可核验数据", status: "unavailable", sources: [] },
      { item: "返工与可用率", metric: "可用镜头率", value: null, basis: "需团队按项目实测后记录", status: "unavailable", sources: [] },
      { item: "产能上限", metric: "单次多镜头时长上限", value: "3 min", basis: "Pika官网标示上限，不是成本口径", status: "partial", sources: ["pika"] }
    ]
  },

  commercial: {
    note: "商业化与发行线索按证据级别标注；规划披露不等同于已交付能力。",
    cases: [
      { title: "“织梦星球”拟连接IP创作、生产工具与海外发行", org: "成都AI文娱大会会后报道（每日经济）", type: "发行 / 商业化规划", level: "C", stage: "规划披露，未上线", fact: "9月22日发布的会后报道披露拟建设该平台。", sources: ["chengdu"] }
    ]
  },

  rights: {
    status: "unavailable",
    note: "本窗口未核验到具名AIGC影视权利、版权或监管新规。以下为交付层面需团队自行核验的检查项，非事实陈述。",
    cases: [],
    checks: [
      "生成说明与所用模型版本留档",
      "训练与参考素材的来源及授权链",
      "音乐、字体、配音等第三方素材许可",
      "肖像、声音与真人形象授权",
      "适用地区的AI内容标识与备案要求"
    ]
  },

  incidents: {
    note: "记录已核验的服务故障、失败恢复与可用性变更事件；未核验到的故障不补写。",
    cases: [
      { title: "OpenAI Sora旧API计划停止服务", org: "OpenAI", type: "服务可用性 · 计划中", level: "A", stage: "计划 09.24 生效", fact: "官方帮助中心列出Sora旧接口停止服务说明。", sources: ["sora"] }
    ]
  },

  coverage: {
    note: "覆盖状态由上方12条情报线的核验结果汇总，不另行估算。",
    gaps: [
      "可复现的平台榜单与播放/票房口径缺失，受众表现无法量化。",
      "项目级成本、返工率与单分钟成本未公开。",
      "具名作品与创作者维度的新增信息缺失。"
    ]
  },

  sources: {
    pika: { title: "Pika Video Studio", publisher: "Pika官方", url: "https://pika.art/" },
    aivideo: { title: "Pika Unveils Video Studio", publisher: "AIVIDEO.NEWS", url: "https://aivideo.news/" },
    chengdu: { title: "2026非凡大赏·成都·AI文娱大会", publisher: "每日经济", url: "https://cn.dailyeconomic.com/tech/2026/09/22/29833.html" },
    aiff: { title: "AI International Film Festival", publisher: "主办方", url: "https://aifilmfest.org/" },
    hf: { title: "Daily Papers · 2026-09-22", publisher: "Hugging Face", url: "https://huggingface.co/papers/date/2026-09-22" },
    reddit: { title: "Are AI feature films actually the future?", publisher: "Reddit", url: "https://www.reddit.com/r/aifilmmaking/comments/1wlu1l1/are_ai_feature_films_actually_the_future/" },
    sora: { title: "Sora discontinuation", publisher: "OpenAI", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
    beijing: { title: "2026北京动画周亦庄会场", publisher: "北京市大兴区", url: "https://chanye.bjdx.gov.cn/chanye/qyfw8/cydt/2420251/index.html" },
    runway: { title: "Runway AI Summit", publisher: "Runway", url: "https://summit.runwayml.com/" }
  }
};
