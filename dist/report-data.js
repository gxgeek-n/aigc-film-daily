/*
 * 本文件仅存放报告数据，页面结构与样式分别位于 index.html 和 styles.css。
 * 后续更新日报时，优先替换此对象中的日期、正文与来源，不必改动布局。
 */
window.REPORT_DATA = {
  meta: {
    title: "AIGC影视情报日报",
    issue: "2026.09.19",
    label: "样本 · 核验版",
    date: "2026年9月19日",
    window: "2026年9月18日 12:05—9月19日 12:05（北京时间，最近完整24小时）",
    thesis: "AI电影节正在从零散展映，变成全球同步发生的常设基础设施。"
  },
  judgments: [
    {
      label: "全球活动",
      text: "AI电影节正在从零散展映变成全球同步发生的常设基础设施；重点已从“AI能否拍片”转向策展、评奖、创作者问答和产业连接。"
    },
    {
      label: "国内信号",
      text: "今天最明确的新增不是新模型，而是生产平台与区域产业政策：北京亦庄将设置AIGC动画特色会场，北京经信局则把合规、融资、算力券和场景开放放进同一张议程。"
    },
    {
      label: "交付能力",
      text: "开源影视工作流继续补“交付可靠性”，而不只补生成能力；恢复、拉取、逐帧检查与安全写入正在成为制片系统的基本项。"
    }
  ],
  lead: {
    title: "全球四地AI影像活动同日推进",
    evidenceLevel: "A",
    evidenceLabel: "主办方 / 官方活动页",
    standfirst: "首尔、罗马、拉各斯与美国Tempe在同一时间窗口推进AI影像活动，显示“发现—展映—评审—交流”的机制正在跨区域复制。",
    chain: [
      {
        key: "证据",
        value: "9月19日，韩国Next AI Film Festival、Rome AI Festival III、Naija AI Film Festival同日举行；美国AI Film 3进入第三日。官方页面分别列出展映、竞赛、创作者问答、颁奖或跨媒介会议议程。"
      },
      {
        key: "机制",
        value: "活动不再只展示工具，而是把影片发现、策展筛选、公开评审、创作者交流和产业连接组合成稳定流程。"
      },
      {
        key: "利益相关者",
        value: "创作者需要补齐交付包；电影节与平台在建立选择标准；制作机构和品牌方则获得项目发现与合作入口。"
      },
      {
        key: "边界",
        value: "同日多地活动并不等于票房或大众市场爆发，也不能据此推断AI长片已经形成稳定商业规模。"
      },
      {
        key: "行动",
        value: "按电影节逻辑准备项目：权利链、生成说明、英文字幕、海报、剧照与工程留档，不要只保留社媒成片。"
      }
    ],
    evidence: [
      "Next AI Film Festival官方列出56部海内外AI影片，并安排竞赛、非竞赛、创作者问答与颁奖。",
      "AI Film 3主办方披露收到754部影片、覆盖117个国家，设置电影、音乐、时尚、游戏与艺术五个板块。"
    ],
    sources: ["next-ai-film", "rome-ai", "naija-ai", "ai-film-3"]
  },
  briefs: [
    {
      number: "01",
      tag: "区域产业",
      level: "A",
      title: "北京动画周将设置AIGC特色会场",
      fact: "北京市大兴区9月18日15:52发布：2026北京动画周亦庄会场将于9月24—25日举行，包含24小时AIGC影视动画即兴创作挑战、企业展台、内容发布、国际交流和产业对接。",
      read: "模型演示正与限时交付、评审和市场对接绑定。可重点观察赛事是否公开工具链、失败率、生成成本与版权清单。",
      sources: ["beijing-animation"]
    },
    {
      number: "02",
      tag: "生产平台",
      level: "A",
      title: "北京经信局调研LibTV等AIGC生产工具",
      fact: "北京市经信局9月18日18:08披露对演语科技的调研；官方提到LiblibAI、星流与LibTV产品矩阵，座谈涉及内容安全合规、融资上市服务、算力券、数据券和模型应用政策。",
      read: "平台竞争正在扩展到资产社区、专业工作台、合规治理和政策资源整合。制作公司应把项目可迁移性、权属记录、任务恢复和长期存档纳入供应商评估。",
      sources: ["beijing-economy"]
    },
    {
      number: "03",
      tag: "混合制作",
      level: "B",
      title: "“真人+AI”仍是长视频与短剧的中间解",
      fact: "界面新闻9月18日梳理腾讯、爱奇艺等平台的混合制作项目，并转述《灵魂摆渡·浮生梦》首批两部AIGC网络故事片上线10天分账票房超过600万元。",
      read: "真人表演提供情绪锚点，AI承担高成本场景与视觉奇观，传统后期维持镜头连续性与交付标准。商业数据未取得平台后台或审计口径，仅作媒体披露。",
      sources: ["jiemian"]
    },
    {
      number: "04",
      tag: "模型雷达",
      level: "核验结论",
      title: "今天没有旗舰模型发布信号",
      fact: "本窗口未核验到足以定义为“新一代旗舰模型发布”的官方事件。Hugging Face最新文本转视频条目以LTX 2.5衍生量化或LoRA为主，样本下载量尚低。",
      read: "社区上传不等于原厂发布，不应把最新排序页上的衍生模型误写成厂商新品。",
      sources: ["hf-text-video"]
    }
  ],
  workflow: {
    eyebrow: "Hypit v0.2.7",
    title: "真正影响交付的，往往不是多接一个模型。",
    summary: "Hypit于北京时间9月19日07:28发布v0.2.7，新增PixVerse V6模型包，并修复本地变更安全、视频获取阻塞、UTF-8密钥输入、工作进程可恢复启动等问题，同时改进逐帧检查与制作指引。",
    metrics: [
      { value: "10,234", label: "GitHub stars · 截点快照" },
      { value: "NOASSERTION", label: "GitHub许可证元数据" }
    ],
    caution: "stars不代表本周增长；许可证元数据不能代替实际条款，商用前仍需人工核对。",
    interpretation: "版本重点落在任务能否恢复、视频能否稳定拉取、素材检查能否进入流水线。这正是AIGC从试玩工具走向制片系统时最容易被低估的成本。",
    sources: ["hypit-release", "hypit-repo"]
  },
  radar: [
    { channel: "B站", signal: "未取得可复核、同口径的近24小时AIGC影视热视频列表。", limit: "不引用搜索摘要中的零散播放数，不制作伪“排行榜”。" },
    { channel: "抖音", signal: "本窗口未取得新的官方日榜；本周大学生AI艺术季数据见周报。", limit: "活动方披露可用，平台全站热度不可外推。" },
    { channel: "小红书", signal: "未检索到可独立核验的近24小时行业级突破。", limit: "不以笔记点赞截图代替平台趋势。" },
    { channel: "Hugging Face", signal: "最新文本转视频上传以LTX 2.5衍生量化或LoRA为主，样本尚无明显采用量。", limit: "社区上传不等于原厂发布；下载量为动态快照。" },
    { channel: "Reddit", signal: "讨论继续从“哪个模型最好”转向身份、环境、动作、时间、首尾帧与镜头衔接的可控性。", limit: "创作者自述，属于D级社区线索，不视为行业统计。", sources: ["reddit-control"] }
  ],
  watchlist: [
    { date: "09.20", title: "第二届 Asia AI Film Festival 投稿截止", action: "准备并核对投稿包。", sources: ["asia-ai"] },
    { date: "09.24", title: "OpenAI Sora 旧API计划停止服务", action: "存量工作流需完成迁移。", sources: ["sora-api"] },
    { date: "09.24—25", title: "北京动画周亦庄AIGC特色会场", action: "观察24小时创作挑战公开的工具链与交付信息。", sources: ["beijing-animation"] },
    { date: "09.30", title: "Runway AI Summit · 旧金山", action: "关注企业级创作工作流、实时视频与政策议题。", sources: ["runway-summit"] }
  ],
  method: [
    "本日报只收录统计窗口内发布、发生或获得明确更新的事项；跨窗口背景仅用于解释。",
    "A=官方或一手来源；B=可信行业媒体或多源佐证；C=单一机构或作者陈述；D=社区线索。",
    "GitHub stars、Hugging Face downloads、平台播放量均为截点数，不推算增速。",
    "没有足够证据支持B站、抖音、小红书“全网十大热门”的可比排名，因此明确留空。",
    "报告由AI辅助检索、交叉核验与分析；动态页面数据均为截点快照。"
  ],
  sources: {
    "next-ai-film": { title: "Next AI Film Festival", publisher: "主办方", url: "https://nextaicontent.kr/en/film-festival" },
    "rome-ai": { title: "Rome AI Festival III", publisher: "主办方", url: "https://viagroup.ai/events/rome-ai-festival" },
    "naija-ai": { title: "Naija AI Film Festival · AI_FRICA", publisher: "主办方", url: "https://www.naijaaifilmfest.com/ai_frica" },
    "ai-film-3": { title: "AI Film 3 / AI Entertainment Conference", publisher: "主办方", url: "https://www.aifilm3.com/" },
    "beijing-animation": { title: "2026北京动画周亦庄会场信息", publisher: "北京市大兴区产业服务平台", url: "https://chanye.bjdx.gov.cn/chanye/qyfw8/cydt/2420251/index.html" },
    "beijing-economy": { title: "通用人工智能产业创新伙伴计划工作组调研演语科技", publisher: "北京市经济和信息化局", url: "https://jxj.beijing.gov.cn/ztzl/ywzt/hbjh/hbdt/hbdt/202609/t20260918_4870389.html" },
    "hypit-release": { title: "Hypit v0.2.7", publisher: "GitHub Release", url: "https://github.com/hypit-ai/hypit/releases/tag/v0.2.7" },
    "hypit-repo": { title: "hypit-ai/hypit", publisher: "GitHub 仓库", url: "https://github.com/hypit-ai/hypit" },
    "jiemian": { title: "长视频、短剧集体加码，“真人+AI”为何成了行业新解法？", publisher: "界面新闻", url: "https://www.jiemian.com/article/15112620.html" },
    "hf-text-video": { title: "Text-to-video 最新模型", publisher: "Hugging Face", url: "https://huggingface.co/models?pipeline_tag=text-to-video&sort=created" },
    "reddit-control": { title: "先定义需要控制什么", publisher: "Reddit / r/aifilmmaking", url: "https://www.reddit.com/r/aifilmmaking/comments/1wh7x2l/i_stopped_asking_which_ai_video_model_is_best_i/" },
    "asia-ai": { title: "Asia AI Film Festival", publisher: "主办方", url: "https://aaff.iacst.org/" },
    "sora-api": { title: "What to know about the Sora discontinuation", publisher: "OpenAI", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
    "runway-summit": { title: "Runway AI Summit", publisher: "Runway", url: "https://summit.runwayml.com/" }
  }
};
