const d = window.REPORT_DATA;
d.meta = {
  title: "AIGC影视情报周报",
  issue: "2026.09.17—09.23",
  label: "周报 · 核验版",
  date: "2026年9月23日",
  window: "2026年9月17日—9月23日12:45（北京时间）",
  thesis: "本周主线不是参数竞赛，而是长内容生产系统开始成形。"
};
d.judgments = [
  { label: "工作台", text: "Pika与BytePlus把脚本、资产、分镜和多镜头组织推向一体化。" },
  { label: "可靠性", text: "Hypit连续版本把重试、限流、异步任务和传输故障处理提到核心位置。" },
  { label: "产业设施", text: "国内赛事、政策调研与全球AI电影节同步推进，创作—评审—展示链正在形成。" }
];
d.lead = {
  title: "长内容工作台与失败恢复同时补齐",
  evidenceLevel: "A/B",
  evidenceLabel: "官方产品、发布日志与活动页",
  standfirst: "从Dramagic的脚本到预览流程，到Pika的多镜头工作台，再到Hypit连续版本修补重试与传输，产业重心明显移向可控交付。",
  chain: [
    { key: "证据", value: "BytePlus展示脚本分析—资产设置—分镜—视频预览；Hypit 0.2.8至0.2.12连续更新。" },
    { key: "机制", value: "生产系统开始同时管理创意状态和计算失败。" },
    { key: "利益相关者", value: "制片团队获得可追踪流程；供应商竞争转向资产、协作、恢复与成本。" },
    { key: "边界", value: "厂商功能页不能替代真实项目压力测试。" },
    { key: "行动", value: "统一验收可用镜头率、连续性、重试成本、版本留档与权利信息。" }
  ],
  evidence: ["BytePlus官方展示Dramagic端到端短剧工作流。", "Hypit在9月19—21日发布v0.2.8至v0.2.12。"],
  sources: ["dramagic", "hypit"]
};
d.briefs = [
  { number: "01", tag: "生产平台", level: "A", title: "BytePlus Dramagic连接脚本、资产、分镜与预览", fact: "官方将其定位为短剧与影视生产的一体化AIGC平台。", read: "平台壁垒正从模型入口转向项目数据和协作流程。", sources: ["dramagic"] },
  { number: "02", tag: "工作流", level: "A", title: "BytePlus LAS 1.5.3新增分镜脚本与视频重混", fact: "9月18日说明新增分镜脚本生成、智能视频重混和长视频反向提取角色与场景。", read: "结构化中间资产正在成为长内容自动化接口层。", sources: ["las"] },
  { number: "03", tag: "开源", level: "A", title: "Hypit五次发布集中修复失败恢复", fact: "v0.2.8—v0.2.12覆盖参考校验、异步等待、429/5xx重试与Retry-After。", read: "失败不再轻易毁掉整次构建。", sources: ["hypit"] },
  { number: "04", tag: "国内创作", level: "C", title: "上海启动100小时AI微短剧创作活动", fact: "澎湃新闻报道，活动于9月20日启动。", read: "应观察完成率、返工、版权清单和团队分工。", sources: ["shanghai"] },
  { number: "05", tag: "电影节", level: "A", title: "多地AI影像活动形成同周基础设施", fact: "首尔、罗马、拉各斯、Tempe等活动推进展映、竞赛与交流。", read: "生成说明、字幕、剧照与权利链成为标准交付。", sources: ["next", "aifilm3"] }
];
d.workflow = {
  eyebrow: "Hypit v0.2.8—v0.2.12",
  title: "可靠性成为AIGC制片的隐藏主战场。",
  summary: "连续版本针对429、5xx、传输错误、异步任务和Retry-After修复。",
  metrics: [
    { value: "5", label: "本周连续版本" },
    { value: "3 days", label: "9月19—21日更新窗口" }
  ],
  caution: "发布日志证明代码变更，不证明所有环境稳定。",
  interpretation: "应设置幂等任务、退避重试、失败分类和可恢复检查点。",
  sources: ["hypit"]
};

d.intel = {
  note: "12条情报线逐一给出核验状态；无可可靠口径或本周无新增时明确标注，不以推断补位。",
  lanes: [
    { id: "works", name: "作品与创作者", en: "Works & Creators", status: "partial", target: "#catalog",
      summary: "《灵魂摆渡·浮生梦》两部AIGC网络故事片出现制作与分账披露，但数据来自单一行业作者，按C级处理。", sources: ["soul-ferry"] },
    { id: "audience", name: "受众表现", en: "Audience Performance", status: "partial", target: "#platform",
      summary: "媒体转述云合数据称两部作品在电影品类有效播放市占率分列第一、第五；未取得云合原始榜单。", sources: ["soul-ferry"] },
    { id: "feedback", name: "受众反馈", en: "Audience Feedback", status: "partial", target: "#platform",
      summary: "社区讨论集中在AI长片是否真正降低创作门槛，属D级线索。", sources: ["reddit"] },
    { id: "models", name: "模型与工具", en: "Models & Tools", status: "verified", target: "#workflow",
      summary: "BytePlus Dramagic一体化平台与LAS 1.5.3新增分镜脚本、智能视频重混。", sources: ["dramagic", "las"] },
    { id: "benchmarks", name: "测试与基准", en: "Tests & Benchmarks", status: "unchanged", target: "#workflow",
      summary: "本周未核验到独立第三方AIGC影视评测或基准更新。", sources: [] },
    { id: "workflow", name: "生产工作流", en: "Production Workflow", status: "verified", target: "#workflow",
      summary: "Hypit连续五个版本修复重试、限流、异步等待与传输故障，可靠性进入主线。", sources: ["hypit"] },
    { id: "economics", name: "成本与经济", en: "Costs & Economics", status: "partial", target: "#economics",
      summary: "《灵魂摆渡·浮生梦》披露三四十人、不到四个月及10天分账超600万元；均为单一媒体转述口径。", sources: ["soul-ferry"] },
    { id: "distribution", name: "发行与商业化", en: "Distribution & Commercialization", status: "partial", target: "#commercial",
      summary: "上海100小时创作活动与多地AI影像活动推进内容供给与展映分发。", sources: ["shanghai", "next", "aifilm3"] },
    { id: "capital", name: "资本与机构", en: "Capital & Organizations", status: "unchanged", target: "#commercial",
      summary: "本周未核验到融资、并购或机构层面的新增资本动作。", sources: [] },
    { id: "rights", name: "权利与监管", en: "Rights & Regulation", status: "unavailable", target: "#rights",
      summary: "本周未核验到具名AIGC影视权利、版权或监管新规。", sources: [] },
    { id: "festivals", name: "电影节与专业体系", en: "Festivals & Professional System", status: "verified", target: "#watchlist",
      summary: "首尔、罗马、拉各斯、Tempe等活动在同周推进展映、竞赛与交流。", sources: ["next", "aifilm3"] },
    { id: "talent", name: "人才与基础设施", en: "Talent & Infrastructure", status: "partial", target: "#watchlist",
      summary: "正午阳光相关招聘报道显示岗位已细分到AI影视制片、视效、剪辑、三维资产和智能体开发。", sources: ["noon-ai"] }
  ]
};

d.moduleNav = [
  { label: "作品目录", href: "#catalog", state: "partial" },
  { label: "平台样本", href: "#platform", state: "partial" },
  { label: "生产经济", href: "#economics", state: "partial" },
  { label: "发行与商业化", href: "#commercial", state: "partial" },
  { label: "权利与合规", href: "#rights", state: "unavailable" },
  { label: "故障与事故", href: "#incidents", state: "verified" },
  { label: "覆盖状态", href: "#coverage", state: "partial" },
  { label: "工作流信号", href: "#workflow", state: "verified" },
  { label: "观察日历", href: "#watchlist", state: "verified" }
];

d.workCatalog = {
  status: "partial",
  note: "具名作品数据来自单一行业作者披露，未取得平台后台或审计口径；活动项目仍未公布完整产出。",
  rows: [
    { title: "《蝴蝶梦》《天女之梦》", creator: "爱奇艺 × 长信传媒", type: "AIGC网络故事片", stage: "已上线", level: "C",
      note: "两部片长均超60分钟；报道披露三四十人、不到四个月完成。", sources: ["soul-ferry"] },
    { title: "上海100小时AI微短剧创作活动", creator: "活动主办方（报道未具名团队）", type: "微短剧创作活动", stage: "9月20日启动", level: "C",
      note: "产出作品、完成率、版权清单与团队分工未公开。", sources: ["shanghai"] }
  ]
};

d.platformSamples = {
  note: "仅记录有明确口径的样本；不可得字段显示“数据不可得”，不以0或估算填充。",
  rows: [
    { platform: "B站 / 抖音 / 小红书", metric: "全周AIGC影视榜单", value: null, basis: "需同口径、可复核的全站榜单", status: "unavailable", sources: [] },
    { platform: "GitHub", metric: "Hypit 发布次数", value: "5 次", basis: "9月19—21日 v0.2.8—v0.2.12，发布日志口径", status: "verified", sources: ["hypit"] },
    { platform: "BytePlus", metric: "产品发布", value: "2 项", basis: "Dramagic 与 LAS 1.5.3，官方口径", status: "verified", sources: ["dramagic", "las"] },
    { platform: "节展主办方", metric: "同周AI影像活动", value: "多地", basis: "首尔 / 罗马 / 拉各斯 / Tempe，主办方页面口径", status: "verified", sources: ["next", "aifilm3"] }
    ,{ platform: "云合数据（媒体转述）", metric: "电影品类有效播放市占率", value: "第1 / 第5", basis: "未取得云合原始榜单，按C级个案", status: "partial", sources: ["soul-ferry"] }
  ]
};

d.productionEconomics = {
  note: "成本与产能数据缺乏项目级可核验口径时留空；厂商能力上限与修复项不换算为成本。",
  rows: [
    { item: "制作规模", metric: "团队 / 周期", value: "三四十人 / 不到四个月", basis: "《灵魂摆渡·浮生梦》媒体披露，非审计口径", status: "partial", sources: ["soul-ferry"] },
    { item: "商业回收", metric: "上线10天累计分账", value: "超过600万元", basis: "单一行业作者披露，未取得平台后台", status: "partial", sources: ["soul-ferry"] },
    { item: "生成成本", metric: "单分钟生成成本", value: null, basis: "仍无项目级可核验数据", status: "unavailable", sources: [] },
    { item: "返工与可用率", metric: "可用镜头率", value: null, basis: "需团队按项目实测后记录", status: "unavailable", sources: [] },
    { item: "失败恢复", metric: "已修复故障类型", value: "429 / 5xx / 传输 / 异步等待", basis: "发布日志，不是成本口径", status: "partial", sources: ["hypit"] },
    { item: "交付链路", metric: "端到端环节", value: "脚本—资产—分镜—预览", basis: "官方产品展示，不是成本口径", status: "partial", sources: ["dramagic"] }
  ]
};

d.commercial = {
  note: "商业化与发行线索按证据级别标注；活动启动不等同于已完成交付。",
  cases: [
    { title: "《灵魂摆渡·浮生梦》两部网络故事片", org: "爱奇艺 × 长信传媒", type: "分账发行", level: "C", stage: "已上线", fact: "媒体披露上线10天累计分账超过600万元；未取得平台后台。", sources: ["soul-ferry"] },
    { title: "上海100小时AI微短剧创作活动", org: "活动主办方（报道未具名）", type: "内容供给 / 创作活动", level: "C", stage: "9月20日启动", fact: "澎湃新闻报道活动于9月20日启动。", sources: ["shanghai"] },
    { title: "BytePlus Dramagic 一体化AIGC生产平台", org: "BytePlus", type: "生产平台商业化", level: "A", stage: "官方产品页", fact: "官方将其定位为短剧与影视生产的一体化AIGC平台。", sources: ["dramagic"] }
  ]
};

d.rights = {
  status: "unavailable",
  note: "本周未核验到具名AIGC影视权利、版权或监管新规。以下为交付层面需团队自行核验的检查项，非事实陈述。",
  cases: [],
  checks: [
    "生成说明与所用模型版本留档",
    "训练与参考素材的来源及授权链",
    "音乐、字体、配音等第三方素材许可",
    "肖像、声音与真人形象授权",
    "适用地区的AI内容标识与备案要求"
  ]
};

d.incidents = {
  note: "记录已核验的服务故障、失败恢复与可用性变更事件；未核验到的故障不补写。",
  cases: [
    { title: "Autodesk AI演示片出现无法通过提示修复的连续性错误", org: "Autodesk / Creative Bloq采访", type: "跨镜头连续性 · 已公开", level: "B", stage: "9月21日报道", fact: "Autodesk高管确认角色在相邻镜头中的座位位置变化，团队未能通过提示词消除。", sources: ["autodesk-continuity"] },
    { title: "Hypit v0.2.8—v0.2.12 集中修复运行时故障", org: "Hypit（GitHub）", type: "工具可靠性 · 已修复", level: "A", stage: "9月19—21日", fact: "版本覆盖参考校验、异步等待、429/5xx重试与Retry-After。", sources: ["hypit"] },
    { title: "OpenAI Sora旧API计划停止服务", org: "OpenAI", type: "服务可用性 · 计划中", level: "A", stage: "计划 09.24 生效", fact: "官方帮助中心列出Sora旧接口停止服务说明。", sources: ["sora"] }
  ]
};

d.coverage = {
  note: "覆盖状态由上方12条情报线的核验结果汇总，不另行估算。",
  gaps: [
    "国内平台全站榜单仍不可复现；现有播放与分账数据是媒体转述的单项目样本。",
    "项目级单分钟成本、可用镜头率与返工次数仍未公开。",
    "多数具名作品没有公开AI参与比例、工具版本或权利清单。"
  ]
};

d.sources = {
  ...d.sources,
  dramagic: { title: "BytePlus Dramagic", publisher: "BytePlus官方", url: "https://www.byteplus.com/en/contact-us/dramagic-x" },
  las: { title: "LAS AI 1.5.3 release notes", publisher: "BytePlus官方", url: "https://docs.byteplus.com/zh-CN/docs/Byteplus_LAS/las_release_notes" },
  hypit: { title: "Hypit releases", publisher: "GitHub", url: "https://github.com/hypit-ai/hypit/releases" },
  shanghai: { title: "上海100小时AI微短剧创作活动", publisher: "澎湃新闻", url: "https://www.thepaper.cn/newsDetail_forward_34111615" },
  next: { title: "Next AI Film Festival", publisher: "主办方", url: "https://nextaicontent.kr/en/film-festival" },
  aifilm3: { title: "AI Film 3", publisher: "主办方", url: "https://www.aifilm3.com/" }
  ,"soul-ferry": { title: "10天分账600万，AI长片开始赚钱？", publisher: "网视互联 / 澎湃号", url: "https://m.thepaper.cn/newsDetail_forward_34106150" }
  ,"noon-ai": { title: "正午阳光招聘AI影视全流程岗位", publisher: "娱乐资本论 / 新浪财经", url: "https://cj.sina.com.cn/articles/view/5159017394/133805bb200101t1tq" }
  ,"autodesk-continuity": { title: "Autodesk AI demo film continuity error", publisher: "Creative Bloq", url: "https://www.creativebloq.com/3d/autodesks-own-ai-film-has-a-continuity-error-nobody-could-prompt-away" }
};

d.newsStream = {
  layerNote: "周报窗口为9月17—23日；24小时层不由本报独立维护，如实留空并指向日报。",
  layers: [
    {
      id: "h24",
      window: "2026-09-22 12:45 → 09-23 12:45（北京时间）",
      emptyText: "周报以下方72小时与本周为口径，未独立维护24小时层；该窗口的核验条目见AIGC影视情报日报。",
      crossLink: { label: "查看日报的24小时层", href: "index.html#news" },
      items: []
    },
    {
      id: "h72",
      window: "2026-09-20 12:45 → 09-23 12:45（北京时间）",
      note: "本层仅收录本周窗口内可定位到日期、且落在72小时内的条目。",
      items: [
        { id: "w1", time: "09-21", title: "Autodesk公开演示片出现无法通过提示修复的连续性错误",
          level: "B", origin: "本周周报 · 故障与事故",
          fact: "Autodesk高管确认角色在相邻镜头中的座位位置变化，团队未能通过提示词消除。",
          note: "厂商自述个例，不能外推为全部工具的能力上限。",
          sources: ["creativebloq"], refs: ["autodesk"] }
      ]
    },
    {
      id: "week",
      window: "2026-09-17 → 09-23 12:45（北京时间）",
      note: "本周持续跟踪层汇总跨窗仍在推进的条目，均为已披露事实或已排定节点。",
      items: [
        { id: "w2", time: "09-18", title: "BytePlus Dramagic 连接脚本、资产、分镜与预览",
          level: "A", origin: "本周周报 · 简报01",
          fact: "官方将其定位为短剧与影视生产的一体化AIGC平台。",
          sources: ["vendor"], refs: ["dramagic"] },
        { id: "w3", time: "09-18", title: "BytePlus LAS 1.5.3 新增分镜脚本与视频重混",
          level: "A", origin: "本周周报 · 简报02",
          fact: "9月18日说明新增分镜脚本生成、智能视频重混和长视频反向提取角色与场景。",
          note: "发布说明证明功能上线，不证明在真实项目中稳定可用。",
          sources: ["vendor"], refs: ["las"] },
        { id: "w4", time: "09-19—21", title: "Hypit 连续五个版本集中修复失败恢复",
          level: "A", origin: "本周周报 · 简报03",
          fact: "v0.2.8—v0.2.12覆盖参考校验、异步等待、429/5xx重试与Retry-After。",
          note: "发布日志证明代码变更，不证明所有环境稳定。",
          sources: ["github"], refs: ["hypit"] },
        { id: "w5", time: "本周", title: "《蝴蝶梦》《天女之梦》上线分账披露",
          level: "C", origin: "本周周报 · 作品目录",
          fact: "媒体披露两部AIGC网络故事片片长均超60分钟，上线10天累计分账超过600万元，制作规模三四十人、不到四个月。",
          note: "单一行业作者披露，未取得平台后台或审计口径。",
          sources: ["thepaper"], refs: ["soulferry"] },
        { id: "w6", time: "本周", title: "正午阳光招聘AI影视全流程岗位",
          level: "C", origin: "本周周报 · 人才与基础设施",
          fact: "招聘报道显示岗位已细分到AI影视制片、视效、剪辑、三维资产和智能体开发。",
          sources: ["sinafinance"], refs: ["noonai"] },
        { id: "w7", time: "09-17—23", title: "多地AI影像活动同周推进展映与竞赛",
          level: "A", origin: "本周周报 · 简报05",
          fact: "首尔、罗马、拉各斯、Tempe等活动推进展映、竞赛与交流。",
          note: "生成说明、字幕、剧照与权利链成为标准交付。",
          sources: ["governance"], refs: ["next", "aifilm3"] },
        { id: "w8", time: "09-24", title: "OpenAI Sora 旧API计划停止服务",
          level: "A", origin: "本周周报 · 故障与事故",
          fact: "官方帮助中心列出Sora旧接口停止服务说明，计划9月24日生效。",
          sources: ["vendor"], refs: ["sora"] },
        { id: "w9", time: "09-18更新", title: "SceneTrace AI短剧Top 100补充具名作品候选池",
          level: "D", origin: "来源池观察 · SceneTrace",
          fact: "榜单列出100部AI标记短剧，并把公开榜单、目录信号与部分公开互动数据并列展示。",
          note: "其热度仅用于排序发现，不等于播放量；具名作品需回到平台页复核。",
          sources: ["scenetrace"], refs: ["scenetracerank"] }
      ]
    }
  ]
};
