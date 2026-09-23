/* Shared source pool registry + time-layered news stream renderer.
   Loaded before app.js on both report pages, and standalone on sources.html.
   Static data only: no client-side fetching. */
(function (root) {
  "use strict";

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

  const CATEGORY_LABELS = {
    trade: "行业媒体",
    aggregator: "聚合与线索",
    oss: "模型与开源",
    data: "平台与数据",
    eval: "评测与基准",
    governance: "权利与治理"
  };

  const ROLE_META = {
    primary: { label: "一手来源", short: "可作为最终结论证据", cls: "role-primary" },
    corroboration: { label: "互证来源", short: "需与一手来源互证", cls: "role-corroboration" },
    discovery: { label: "仅线索", short: "不得作为最终结论证据", cls: "role-discovery" }
  };

  // The three canonical time layers always render, even when data is absent.
  const LAYERS = [
    { id: "h24", label: "最近24小时", en: "Latest 24h" },
    { id: "h72", label: "最近72小时", en: "Last 72h" },
    { id: "week", label: "本周持续跟踪", en: "Weekly Tracking" }
  ];

  const SOURCE_REGISTRY = {
    version: "2026-09-23",
    note:
      "来源池用于持续发现与交叉核验，不等同于当期证据。角色为“仅线索”的聚合来源不得单独支撑最终结论；一手来源的原始页面可作A级证据。",
    legend: [
      "一手来源：官方公告、发布日志、原始数据或主办方页面，可作为A级最终证据。",
      "互证来源：行业媒体或第三方评测，需与一手来源互证后作B级；单独出现降为C级。",
      "仅线索：聚合、社区与榜单转述，只用于发现线索，引用前必须回到原始发布方核对。"
    ],
    sources: [
      { id: "variety", name: "Variety", region: "国际", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://variety.com/",
        rule: "交易与作品报道需与官方或主办方页面互证后作B级；单独报道按C级。" },
      { id: "fxguide", name: "fxguide", region: "国际", category: "trade", cadence: "每周",
        role: "corroboration", url: "https://fxguide.com/",
        rule: "视效流程与方法报道可作B级；技术参数一律以厂商文档为准。" },
      { id: "creativebloq", name: "Creative Bloq", region: "国际", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://www.creativebloq.com/",
        rule: "采访与演示报道按B级；直接引语需与厂商或其他媒体互证。" },
      { id: "cartoonbrew", name: "Cartoon Brew", region: "国际", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://www.cartoonbrew.com/",
        rule: "动画产业报道按B级；涉及制作规模与成本需另有原始披露。" },
      { id: "aivideo", name: "AIVIDEO.NEWS", region: "国际", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://aivideo.news/",
        rule: "产品更新报道需带发布时间戳，并与厂商页面互证后作B级。" },
      { id: "slopreel", name: "Slopreel", region: "国际", category: "aggregator", cadence: "每周约3期",
        role: "discovery", url: "https://www.slopreel.com/",
        rule: "仅作线索；不得作为最终结论证据，引用前须回查原始发布方。" },
      { id: "genainews", name: "gen-ai.news", region: "国际", category: "aggregator", cadence: "频繁",
        role: "discovery", url: "https://gen-ai.news/",
        rule: "简报式聚合；仅作线索，条目须回到一手来源核对后方可引用。" },
      { id: "github", name: "GitHub", region: "国际", category: "oss", cadence: "每日",
        role: "primary", url: "https://github.com/trending",
        rule: "发布日志与仓库变更可作A级；star、fork与更新时间不代表真实采用。" },
      { id: "huggingface", name: "Hugging Face", region: "国际", category: "oss", cadence: "每日",
        role: "primary", url: "https://huggingface.co/papers",
        rule: "模型页可作原厂发布的A级证据；社区上传只证明存在，不等于原厂发布。" },
      { id: "artificialanalysis", name: "Artificial Analysis", region: "国际", category: "eval", cadence: "每周",
        role: "corroboration", url: "https://artificialanalysis.ai/",
        rule: "第三方评测按B级；必须标注测试版本、日期与评测口径。" },
      { id: "vidmodelhub", name: "VidModelHub", region: "国际", category: "data", cadence: "每周",
        role: "discovery", url: "https://vidmodelhub.com/",
        rule: "模型对比入口，仅作线索；指标以厂商或评测方原始页面为准。" },
      { id: "llmswaps", name: "LLMSwaps", region: "国际", category: "data", cadence: "变更驱动",
        role: "discovery", url: "https://llmswaps.com/",
        rule: "模型对比与替换记录，仅作线索；不用于能力排名结论。" },
      { id: "vendor", name: "官方模型 / 厂商发布说明", region: "国际", category: "oss", cadence: "事件驱动",
        role: "primary", url: "https://openai.com/news/",
        note: "示例入口；各厂商以自身官方渠道为准。",
        rule: "厂商原文按A级；能力上限不换算为成本、可用率或行业规模。" },
      { id: "governance", name: "监管机构 / 行业协会 / 电影节", region: "国际", category: "governance", cadence: "事件驱动",
        role: "primary", url: "https://aifilmfest.org/",
        note: "示例入口；具体以各机构官方页面为准。",
        rule: "官方公告、章程与征片规则按A级；媒体转述降为C级。" },
      { id: "dataeye", name: "DataEye", region: "国内", category: "data", cadence: "每日 / 报告",
        role: "corroboration", url: "https://www.dataeye.com/report.html",
        rule: "自有榜单与自有口径数据作原始披露可作B级；媒体转述降为C级。" },
      { id: "scenetrace", name: "SceneTrace", region: "国内", category: "data", cadence: "定期",
        role: "discovery", url: "https://shortdramacast.com/zh-cn/rankings/ai-short-dramas",
        rule: "仅作线索池；须回到原平台页面核对后再判断。" },
      { id: "mingxing", name: "铭兴映画真人AI剧榜", region: "国内", category: "data", cadence: "日 / 周 / 月",
        role: "discovery", url: "https://app.mingxingwenhua.cn/zh-HK/real-ai-rank",
        rule: "榜单为本方口径；需与平台原始页面核对，不作为最终证据。" },
      { id: "shortdrama", name: "Short Drama Data（短剧数据）", region: "国内", category: "data", cadence: "每日",
        role: "discovery", url: "https://www.shortdramadata.com/zh/",
        rule: "仅作趋势线索；不用于外推市场规模或票房结论。" },
      { id: "cnsa", name: "中国网络视听协会", region: "国内", category: "governance", cadence: "每周 / 事件驱动",
        role: "primary", url: "https://www.cnsa.cn/",
        rule: "协会发布与行业标准按A级；二次解读稿按C级。" },
      { id: "thepaper", name: "澎湃新闻", region: "国内", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://www.thepaper.cn/",
        rule: "活动与产业报道按B级；分账、市占率等数字需标注是否为转述。" },
      { id: "dailyeconomic", name: "每日经济", region: "国内", category: "trade", cadence: "每日",
        role: "corroboration", url: "https://cn.dailyeconomic.com/",
        rule: "会后报道与规划披露按C级；未上线规划不视为已交付能力。" }
      ,{ id: "reddit", name: "Reddit · r/aifilmmaking", region: "国际", category: "aggregator", cadence: "连续",
        role: "discovery", url: "https://www.reddit.com/r/aifilmmaking/",
        rule: "社区自述仅作D级线索；成本、耗时、质量与采用情况不得外推。" }
      ,{ id: "sinafinance", name: "新浪财经 / 娱乐资本论转载", region: "国内", category: "trade", cadence: "事件驱动",
        role: "corroboration", url: "https://finance.sina.com.cn/",
        rule: "转载采访与招聘观察按C级；岗位、薪资与项目推断需回查公司或招聘原页。" }
    ],
    refs: {
      pika: { label: "Pika Video Studio", url: "https://pika.art/" },
      aivideo: { label: "AIVIDEO.NEWS 报道", url: "https://aivideo.news/" },
      hf: { label: "Daily Papers · 2026-09-22", url: "https://huggingface.co/papers/date/2026-09-22" },
      aiff: { label: "AI International Film Festival", url: "https://aifilmfest.org/" },
      chengdu: { label: "成都AI文娱大会会后报道", url: "https://cn.dailyeconomic.com/tech/2026/09/22/29833.html" },
      reddit: { label: "r/aifilmmaking 讨论原帖", url: "https://www.reddit.com/r/aifilmmaking/comments/1wlu1l1/are_ai_feature_films_actually_the_future/" },
      sora: { label: "OpenAI 帮助中心 · Sora 停服说明", url: "https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation" },
      beijing: { label: "北京动画周亦庄会场", url: "https://chanye.bjdx.gov.cn/chanye/qyfw8/cydt/2420251/index.html" },
      runway: { label: "Runway AI Summit", url: "https://summit.runwayml.com/" },
      dramagic: { label: "BytePlus Dramagic", url: "https://www.byteplus.com/en/contact-us/dramagic-x" },
      las: { label: "BytePlus LAS 1.5.3 发布说明", url: "https://docs.byteplus.com/zh-CN/docs/Byteplus_LAS/las_release_notes" },
      hypit: { label: "Hypit releases", url: "https://github.com/hypit-ai/hypit/releases" },
      shanghai: { label: "上海100小时AI微短剧创作活动", url: "https://www.thepaper.cn/newsDetail_forward_34111615" },
      next: { label: "Next AI Film Festival", url: "https://nextaicontent.kr/en/film-festival" },
      aifilm3: { label: "AI Film 3", url: "https://www.aifilm3.com/" },
      soulferry: { label: "《灵魂摆渡·浮生梦》分账披露", url: "https://m.thepaper.cn/newsDetail_forward_34106150" },
      noonai: { label: "正午阳光招聘报道", url: "https://cj.sina.com.cn/articles/view/5159017394/133805bb200101t1tq" },
      autodesk: { label: "Creative Bloq · Autodesk 连续性错误", url: "https://www.creativebloq.com/3d/autodesks-own-ai-film-has-a-continuity-error-nobody-could-prompt-away" }
      ,varietylikeness: { label: "Variety · Robin Williams AI形象争议", url: "https://au.variety.com/2026/film/news/robin-williams-daughter-ai-videos-40584/" }
      ,mingxingrank: { label: "铭兴映画真人AI剧榜 · 2026-09-22", url: "https://app.mingxingwenhua.cn/zh-HK/real-ai-rank" }
      ,shortdramarank: { label: "Short Drama Data · 2026-09-22", url: "https://www.shortdramadata.com/zh/" }
      ,scenetracerank: { label: "SceneTrace AI短剧Top 100 · 2026-09-18", url: "https://shortdramacast.com/zh-cn/rankings/ai-short-dramas" }
    }
  };

  const roleMeta = (role) => ROLE_META[role] || ROLE_META.discovery;
  const categoryLabel = (category) => CATEGORY_LABELS[category] || category || "未分类";

  const roleBadge = (role) => {
    const meta = roleMeta(role);
    return `<span class="role-badge ${meta.cls}">${escapeHtml(meta.label)}</span>`;
  };

  const linkOut = (label, url, isSearch, extraClass) => {
    const cls = extraClass ? ` class="${extraClass}"` : "";
    const hint = isSearch ? '<span class="link-hint">检索入口</span>' : "";
    return `<a${cls} href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span class="external" aria-hidden="true">↗</span><span class="sr-only">（在新标签页打开）</span></a>${hint}`;
  };

  const emptyState = (text) => `<p class="empty-state">${escapeHtml(text)}</p>`;

  // ---- Source registry -------------------------------------------------------

  const registrySummary = (registry) => {
    const sources = (registry && registry.sources) || [];
    const count = (role) => sources.filter((item) => item.role === role).length;
    return `<p>共收录 <b>${sources.length}</b> 个来源：一手来源 <b>${count("primary")}</b> 个，互证来源 <b>${count(
      "corroboration"
    )}</b> 个，仅线索 <b>${count("discovery")}</b> 个。</p>`;
  };

  const registryLegend = (registry) => {
    const items = (registry && registry.legend) || [];
    if (!items.length) return "";
    return `<div class="registry-legend"><h3>角色说明</h3><ul>${items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("")}</ul></div>`;
  };

  const renderRegistry = (registry) => {
    if (!registry || !registry.sources || !registry.sources.length) return emptyState("未配置来源池。");
    const rows = registry.sources
      .map((source) => {
        const cells = [
          { label: "来源", value: `<span class="reg-name">${escapeHtml(source.name)}</span>`, head: true },
          { label: "地区", value: escapeHtml(source.region) },
          { label: "类别", value: escapeHtml(categoryLabel(source.category)) },
          { label: "更新频率", value: escapeHtml(source.cadence) },
          { label: "角色", value: `${roleBadge(source.role)}<span class="role-short">${escapeHtml(roleMeta(source.role).short)}</span>` },
          { label: "核验规则", value: escapeHtml(source.rule) },
          {
            label: "链接",
            value: linkOut(source.urlIsSearch ? `${source.name} 检索` : source.name, source.url, source.urlIsSearch)
          }
        ];
        const body = cells
          .map((cell) => {
            const tag = cell.head ? "th" : "td";
            const scope = cell.head ? ' scope="row"' : "";
            return `<${tag}${scope} data-label="${escapeHtml(cell.label)}">${cell.value}</${tag}>`;
          })
          .join("");
        return `<tr class="registry-row${source.role === "discovery" ? " is-discovery" : ""}">${body}</tr>`;
      })
      .join("");
    return `<div class="table-wrap"><table class="data-table registry-table"><thead><tr><th scope="col">来源</th><th scope="col">地区</th><th scope="col">类别</th><th scope="col">更新频率</th><th scope="col">角色</th><th scope="col">核验规则</th><th scope="col">链接</th></tr></thead><tbody>${rows}</tbody></table></div>`;
  };

  // ---- Time-layered news stream ---------------------------------------------

  const streamItem = (refs, item) => {
    const level = item.level
      ? `<span class="news-level">证据 ${escapeHtml(item.level)}</span>`
      : `<span class="news-level">证据 未分级</span>`;
    const sourceLinks = (item.sources || [])
      .map((id) => {
        const source = ((refs && refs.sources) || []).find((entry) => entry.id === id);
        if (!source) return "";
        return linkOut(source.name, source.url, source.urlIsSearch);
      })
      .join("");
    const refLinks = (item.refs || [])
      .map((id) => {
        const ref = ((refs && refs.refs) || {})[id];
        return ref ? linkOut(ref.label, ref.url, false) : "";
      })
      .join("");
    const links = sourceLinks || refLinks ? `<div class="source-links">${sourceLinks}${refLinks}</div>` : "";
    return `
      <article class="news-item">
        <header>
          <time>${escapeHtml(item.time)}</time>
          ${level}
          ${item.origin ? `<span class="news-origin">${escapeHtml(item.origin)}</span>` : ""}
        </header>
        <h4>${escapeHtml(item.title)}</h4>
        <p>${escapeHtml(item.fact)}</p>
        ${item.note ? `<p class="news-note">${escapeHtml(item.note)}</p>` : ""}
        ${links}
      </article>`;
  };

  const renderStream = (stream, registry) => {
    const refs = registry || {};
    const configured = (stream && stream.layers) || [];
    return LAYERS.map((layer) => {
      const data = configured.find((entry) => entry.id === layer.id);
      const items = (data && data.items) || [];
      const window_ = (data && data.window) || "窗口未标注";
      const note = (data && data.note) || "";
      const body = items.length
        ? items.map((item) => streamItem(refs, item)).join("")
        : emptyState(
            (data && data.emptyText) ||
              `本时间层（${layer.label}）未取得可核验条目；不以搜索摘要或转述补位。`
          );
      const crossLink = data && data.crossLink
        ? `<p class="news-cross"><a class="text-link" href="${escapeHtml(data.crossLink.href)}">${escapeHtml(
            data.crossLink.label
          )} <span aria-hidden="true">↘</span></a></p>`
        : "";
      return `
        <section class="news-layer" id="news-layer-${escapeHtml(layer.id)}" aria-labelledby="news-layer-${escapeHtml(
        layer.id
      )}-title">
          <div class="news-layer-head">
            <div>
              <p class="news-layer-index">${escapeHtml(layer.en)}</p>
              <h3 id="news-layer-${escapeHtml(layer.id)}-title">${escapeHtml(layer.label)}</h3>
            </div>
            <div class="news-layer-meta">
              <span class="news-window">${escapeHtml(window_)}</span>
              <span class="news-count">${items.length} 条</span>
            </div>
          </div>
          ${note ? `<p class="news-layer-note">${escapeHtml(note)}</p>` : ""}
          <div class="news-items">${body}</div>
          ${crossLink}
        </section>`;
    }).join("");
  };

  const api = {
    LAYERS,
    CATEGORY_LABELS,
    ROLE_META,
    SOURCE_REGISTRY,
    roleMeta,
    categoryLabel,
    renderStream,
    renderRegistry,
    registryLegend,
    registrySummary
  };

  root.NewsStream = api;
  root.SOURCE_REGISTRY = SOURCE_REGISTRY;
})(typeof window !== "undefined" ? window : globalThis);
