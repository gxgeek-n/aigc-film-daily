const d = window.REPORT_DATA;

d.meta = {
  title: "AIGC影视情报日报",
  issue: "2026.10.02",
  label: "日报 · 新周期观察",
  date: "2026年10月2日",
  window: "2026年10月1日00:00—10月2日12:00（北京时间）",
  thesis: "AI影视的规模化不只发生在模型端，也发生在电影节、资本开支与IP衍生。"
};

d.judgments = [
  { label: "节展", text: "Astana AI Film Festival以8,067部投稿、125个国家和200万美元总基金进入集中放映阶段。" },
  { label: "资本开支", text: "中文在线拟募资中明确列出AI短剧、模型研发和AIGC多模态平台，内容管线成为正式投资项目。" },
  { label: "IP变现", text: "AI漫剧开始联动玩具与线下文创；播放分账之外，角色授权和衍生品成为第二条收入线。" }
];

d.lead = {
  title: "8,067部投稿把AI电影节推入规模化筛选",
  evidenceLevel: "A/B",
  evidenceLabel: "主办方数据 + 开幕报道",
  standfirst: "Astana AI Film Festival于10月1日开幕。官方披露投稿来自125个国家和地区，总基金200万美元；截至本期截点，最终奖项仍未公布。",
  chain: [
    { key: "证据", value: "8,067部投稿、8,000余名创作者、125个国家和地区；官方口径为100万美元奖金加100万美元制作基金。" },
    { key: "机制", value: "电影节不仅放映成片，也用制作基金把获选作品连接到下一轮生产。" },
    { key: "利益相关者", value: "创作者获得融资与行业曝光；评委和主办方则承担权利、披露与筛选可信度压力。" },
    { key: "边界", value: "8,067为投稿量，不等于合格或优质作品数；获奖名单计划10月3日公布。" },
    { key: "行动", value: "投稿团队应准备模型清单、生成说明、素材授权、人工贡献与可复现的制作档案。" }
  ],
  evidence: ["官网统计8,067部投稿、125个国家和地区。", "总基金口径为100万美元奖金加100万美元制作基金。"],
  sources: ["astana", "astanaopen"]
};

d.briefs = [
  { number: "01", tag: "资本", level: "A", title: "中文在线拟募资28.33亿元，AI短剧与多模态平台入列", fact: "定增预案中，IP衍生内容开发拟投入5.75亿元、AI模型研发升级4.79亿元、AIGC多模态内容平台升级3.39亿元。", read: "这是融资计划而非资金到账；但AI内容已进入上市公司正式资本开支清单。", sources: ["col"] },
  { number: "02", tag: "节展", level: "C", title: "Austin AI Film Festival公布40部入选作品", fact: "主办方称从700余份投稿中选出40部作品，覆盖长片、短片、纪录片、系列、广告与混合实拍等11类。", read: "当前是入选与嘉宾公告，活动计划10月16—17日举办，尚无获奖结果。", sources: ["austin"] },
  { number: "03", tag: "IP衍生", level: "B/C", title: "成都出现“AI漫剧 + AI玩具”联动案例", fact: "《归途七侠奇遇记》与Walulu AI仿生毛绒玩具联合发布，活动集中展示40余个IP、近千件文创。", read: "变现开始从播放分账外溢到角色授权与硬件；‘国内首个’为主办方口径。", sources: ["walulu"] },
  { number: "04", tag: "资格规则", level: "A", title: "香港AI国际电影节2027征片改看“实质创作作用”", fact: "新指南取消固定51% AI门槛，要求AI对主要视听材料、表演、叙事组织、生成规则或观众体验具有实质作用。", read: "资格判断由工具占比转向创作实质与可核验证据链。", sources: ["hkaiiff"] },
  { number: "05", tag: "开源", level: "A", title: "MiniMax-H3四步ComfyUI转换修复键映射", fact: "Iwannapose发布PDMD 4-NFE ComfyUI v6转换，并明确此前版本因键映射错误已撤下。", read: "第三方转换仍需复测；公开纠错比保留错误版本更利于生产追溯。", sources: ["pdmd"] }
];

d.workflow = {
  eyebrow: "今日工作流判断",
  title: "把投稿包、融资表与衍生授权做成同一份项目档案。",
  summary: "AI电影节、上市公司资本开支和IP衍生案例都要求团队把创作证据、资产权利与商业计划同时组织起来。",
  metrics: [
    { value: "8,067", label: "Astana AI Film Festival投稿" },
    { value: "125", label: "投稿国家与地区" },
    { value: "28.33亿", label: "中文在线拟募资上限" }
  ],
  caution: "节展、融资与榜单数字均按披露主体标注，不等于已实现收益。",
  interpretation: "建议每个项目建立一页式权利与经营台账：模型/素材/人员授权、现金与算力投入、发行节点、可量化反馈和衍生许可。",
  sources: ["astana", "col", "walulu"]
};

d.radar = [
  { channel: "B站 / 抖音 / 小红书", signal: "本观察窗未取得可复现的跨平台全站榜单。", limit: "上一周B站《标签》样本保留在周报，不倒灌到今日日报。" },
  { channel: "GitHub", signal: "Toonflow于10月2日发布v2.0.3。", limit: "Release未披露功能变化，不写成能力升级。", sources: ["toonflow"] },
  { channel: "Hugging Face", signal: "MiniMax-H3四步ComfyUI转换发布修复版。", limit: "作者验证，不代表官方适配或独立基准。", sources: ["pdmd"] },
  { channel: "电影节", signal: "Astana开幕、Austin公布入选、HKAIIFF开放新一届征片。", limit: "入选、开幕与获奖必须分开表述。", sources: ["astana", "austin", "hkaiiff"] }
];

d.watchlist = [
  { date: "10.03", title: "Astana AI Film Festival颁奖", action: "核验25部终选与获奖名单。", sources: ["astana"] },
  { date: "10.16—17", title: "Austin AI Film Festival", action: "跟踪入选作品的制作方法披露。", sources: ["austin"] },
  { date: "10.23", title: "《三星堆：未来往事》计划院线上映", action: "核验排片、票房和观众反馈。", sources: ["sanxingdui"] },
  { date: "11.30", title: "2026国际微短剧大赛征集截止", action: "准备备案号、权利承诺与播出证明。", sources: ["nrtafair"] }
];

d.method = [
  "本期为10月1日至2日的新周期观察；未满完整24小时的来源按实际时间标注。",
  "A=官方/一手；B=一手与可信媒体互证；C=单一媒体或主体自报；D=社区线索。",
  "上一完整周的事件保留在周报，不以报道日重复计算为今日新增。",
  "融资计划、基金、奖金、股权投资和已实现收入分别表述。",
  "平台无可复现全站榜单时留空。"
];

d.intel = {
  note: "本观察窗聚焦电影节、资本开支、IP衍生、资格规则与开源适配；短窗口没有新信号的线明确留空。",
  lanes: [
    { id: "works", name: "作品与创作者", en: "Works & Creators", status: "partial", target: "#catalog", summary: "Astana终选与Austin入选形成新目录，但获奖结果尚未公布。", sources: ["astana", "austin"] },
    { id: "audience", name: "受众表现", en: "Audience Performance", status: "unavailable", target: "#platform", summary: "观察窗内没有同口径播放或票房数据。", sources: [] },
    { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "unavailable", target: "#platform", summary: "节展尚在开幕/入选阶段，未形成可复核观众反馈。", sources: [] },
    { id: "models", name: "模型与工具", en: "Models & Tools", status: "partial", target: "#workflow", summary: "MiniMax-H3四步ComfyUI转换修复版进入社区。", sources: ["pdmd"] },
    { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "unavailable", target: "#workflow", summary: "观察窗内未核验到新的独立视频基准。", sources: [] },
    { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "partial", target: "#workflow", summary: "项目档案需要同时承载投稿证据、权利链与经营计划。", sources: ["astana", "hkaiiff"] },
    { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "partial", target: "#economics", summary: "取得融资计划与电影节基金规模，但不是项目实际成本。", sources: ["col", "astana"] },
    { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "verified", target: "#commercial", summary: "AI漫剧与智能玩具联动，衍生品成为分账之外的新样本。", sources: ["walulu"] },
    { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "verified", target: "#commercial", summary: "中文在线定增预案将AI短剧、模型和多模态平台列为募投方向。", sources: ["col"] },
    { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "verified", target: "#rights", summary: "HKAIIFF资格规则由固定AI占比转向实质创作作用与可核验材料。", sources: ["hkaiiff"] },
    { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist", summary: "Astana开幕、Austin公布入选、HKAIIFF开放2027征片。", sources: ["astana", "austin", "hkaiiff"] },
    { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "partial", target: "#coverage", summary: "中国青年报讨论AI制片、AI制作与全流程协调岗位，暂属行业观察。", sources: ["jobs"] }
  ]
};

d.moduleNav = [
  { label: "作品目录", href: "#catalog", state: "partial" },
  { label: "平台样本", href: "#platform", state: "unavailable" },
  { label: "生产经济", href: "#economics", state: "partial" },
  { label: "发行与商业化", href: "#commercial", state: "verified" },
  { label: "权利与合规", href: "#rights", state: "verified" },
  { label: "故障与事故", href: "#incidents", state: "partial" },
  { label: "覆盖状态", href: "#coverage", state: "partial" },
  { label: "工作流信号", href: "#workflow", state: "partial" },
  { label: "观察日历", href: "#watchlist", state: "verified" }
];

d.workCatalog = {
  status: "partial",
  note: "当日以节展入选与衍生项目为主；不把未公开名单补写成获奖作品。",
  rows: [
    { title: "Astana AI Film Festival终选", creator: "25部作品", type: "AI电影节", stage: "放映 / 待颁奖", level: "B", note: "8,067部投稿中选出25部；名单与奖项待10月3日核验。", sources: ["astana", "astanaopen"] },
    { title: "Austin AI Film Festival Official Selection", creator: "40部作品", type: "AI / 混合制作", stage: "公布入选", level: "C", note: "活动计划10月16—17日举行。", sources: ["austin"] },
    { title: "《归途七侠奇遇记》", creator: "成都本地IP团队", type: "AI漫剧 / IP衍生", stage: "与AI玩具联动发布", level: "B/C", note: "平台榜单与‘国内首个’均为主办方口径。", sources: ["walulu"] }
  ]
};

d.platformSamples = {
  note: "短观察窗内没有可比播放榜；只记录活动规模和明确披露。",
  rows: [
    { platform: "Astana AI Film Festival", metric: "投稿 / 国家地区 / 终选", value: "8,067 / 125 / 25", basis: "主办方与开幕报道", status: "verified", sources: ["astana", "astanaopen"] },
    { platform: "Austin AI Film Festival", metric: "投稿 / 入选 / 类别", value: "700+ / 40 / 11", basis: "主办方新闻稿", status: "partial", sources: ["austin"] },
    { platform: "B站 / 抖音 / 小红书", metric: "本观察窗全站榜单", value: null, basis: "无同口径可复现数据", status: "unavailable", sources: [] }
  ]
};

d.productionEconomics = {
  note: "基金和募投额不等于单片成本或已实现收益。",
  rows: [
    { item: "Astana AI Film Festival", metric: "奖金 + 制作基金", value: "$1M + $1M", basis: "官方总基金口径", status: "verified", sources: ["astana"] },
    { item: "中文在线定增", metric: "拟募资上限", value: "28.33亿元", basis: "仍需股东大会、交易所和证监会程序", status: "verified", sources: ["col"] },
    { item: "单片成本", metric: "实际制作成本", value: null, basis: "当日项目未公开", status: "unavailable", sources: [] }
  ]
};

d.commercial = {
  note: "今日商业化信号集中在资本开支与IP衍生，尚无新增播放分账。",
  cases: [
    { title: "AI短剧、模型与多模态平台进入定增募投清单", org: "中文在线", type: "资本开支", level: "A", stage: "预案", fact: "拟募资不超过28.33亿元，其中多项直接指向AI内容生产。", sources: ["col"] },
    { title: "AI漫剧联动AI仿生毛绒玩具", org: "成都IP团队 × Walulu", type: "IP衍生", level: "B/C", stage: "联动发布", fact: "角色内容与智能硬件、线下文创形成跨媒介试水。", sources: ["walulu"] }
  ]
};

d.rights = {
  status: "verified",
  note: "电影节资格规则正从AI使用比例转向实质贡献与证据链。",
  cases: [
    { title: "HKAIIFF 2027取消固定51% AI门槛", org: "香港AI国际电影节", type: "节展资格", level: "A", stage: "已开放征片", fact: "字幕、降噪、升频等辅助使用不足以单独取得AI电影资格。", sources: ["hkaiiff"] }
  ],
  checks: ["AI在主要视听、表演或叙事组织中的实质作用", "模型与版本清单", "真人声音和肖像授权", "参考素材、音乐、字体与IP许可", "可供评审核对的工程与生成材料"]
};

d.incidents = {
  note: "当日未见大规模服务故障；记录一项社区模型转换纠错。",
  cases: [
    { title: "MiniMax-H3 PDMD转换修复键映射", org: "Iwannapose", type: "社区兼容性", level: "A", stage: "v6转换", fact: "作者明确此前多个转换有键映射错误并已撤下。", sources: ["pdmd"] }
  ]
};

d.coverage = {
  note: "覆盖官方电影节、上市公司公告、行业媒体、GitHub/Hugging Face与国内IP商业化样本。",
  gaps: ["10月2日当日尚未检得新的A/B级国内重磅事件。", "Astana获奖名单计划10月3日公布。", "三大国内视频社区没有同口径公开榜单。", "资本计划与衍生案例尚无已实现收益数据。"]
};

d.sources = {
  astana: { title: "Astana AI Film Festival", publisher: "AAIFF", url: "https://www.aaiff.ai/" },
  astanaopen: { title: "Astana AI Film Festival开幕报道", publisher: "Kazinform", url: "https://www.inform.kz/amp/kino-spomoshyu-ii-vastane-startoval-final-mezhdunarodnogo-festivalya-171713e4" },
  col: { title: "中文在线2026年度定增预案", publisher: "巨潮资讯", url: "https://static.cninfo.com.cn/finalpage/2026-10-01/1225590018.PDF" },
  austin: { title: "Austin AI Film Festival 2026 Official Selection", publisher: "Austin AI Film Festival", url: "https://www.prnewswire.com/news-releases/austin-ai-film-festival-announces-2026-official-selection-and-speaker-lineup-302895376.html" },
  walulu: { title: "AI漫剧与AI玩具联动案例", publisher: "每日经济新闻", url: "https://www.nbd.com.cn/articles/2026-10-01/4596556.html" },
  hkaiiff: { title: "HKAIIFF 2027征集指南", publisher: "香港AI国际电影节", url: "https://www.hkaiiff.org/zh-hans/festival/2027/documents/entry-guide" },
  pdmd: { title: "MiniMax-H3 PDMD 4-NFE ComfyUI", publisher: "Hugging Face", url: "https://huggingface.co/Iwannapose/minimax_h3_pdmd_4nfe_comfyui" },
  toonflow: { title: "Toonflow v2.0.3", publisher: "GitHub", url: "https://github.com/HBAI-Ltd/Toonflow-app/releases/tag/v2.0.3" },
  jobs: { title: "AI影视新工种观察", publisher: "中国青年报", url: "https://zqbcyol.com/articles/2026/10/40098/40098.html" },
  sanxingdui: { title: "博纳影业项目公告", publisher: "深交所", url: "https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-09-29/8e080fb5-3990-421a-a477-24928a160659.PDF" },
  nrtafair: { title: "2026国际微短剧大赛", publisher: "国家广播电视总局", url: "https://www.nrta.gov.cn/art/2026/9/30/art_113_74164.html?xxgkhide=1" }
};

d.newsStream = {
  layerNote: "24小时层为本期新周期观察；72小时层包含9月30日的跨周背景；完整周请进入周报。",
  layers: [
    { id: "h24", window: "2026-10-01 12:00 → 10-02 12:00（北京时间）", note: "当日可核验新增。", items: [
      { id: "d1", time: "10-01", title: "Astana AI Film Festival进入三天终选活动", level: "A/B", origin: "电影节", fact: "8,067部投稿来自125个国家和地区，最终25部进入现场阶段。", sources: ["governance"] },
      { id: "d2", time: "10-01", title: "中文在线将AI内容列入定增募投方向", level: "A", origin: "上市公司公告", fact: "拟募资上限28.33亿元，覆盖IP衍生、模型研发和AIGC多模态平台。", sources: ["governance"] },
      { id: "d3", time: "10-01", title: "Austin AI Film Festival公布40部入选作品", level: "C", origin: "主办方新闻稿", fact: "入选覆盖11类，活动尚未举办。", sources: ["governance"] }
    ] },
    { id: "h72", window: "2026-09-30 12:00 → 10-02 12:00（北京时间）", note: "跨周背景，不计入上一周以外的新事件。", items: [
      { id: "d4", time: "09-30", title: "东京法院确认声音可受人格商业价值保护", level: "B", origin: "司法", fact: "案件为AI仿声的商业使用划出新的权利边界。", sources: ["governance"] },
      { id: "d5", time: "09-30", title: "Runway Ads把视频生成接入投放反馈", level: "A", origin: "厂商官方", fact: "人工审批默认开启，支持生成、发布、测量与再生成。", sources: ["vendor"] }
    ] },
    { id: "week", window: "2026-09-24 00:00 → 09-30 23:59（北京时间）", note: "上一完整周已冻结在周报。", items: [
      { id: "d6", time: "完整周", title: "查看2026.09.24—09.30周报", level: "A/B", origin: "本站归档", fact: "周报覆盖国内外商业化、模型工具、开源、权利与电影节。", sources: [] }
    ] }
  ]
};
