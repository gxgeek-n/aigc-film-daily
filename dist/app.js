(function () {
  "use strict";

  const data = window.REPORT_DATA;
  if (!data) return;
  document.title = `${data.meta.title}｜${data.meta.issue}`;

  const byId = (id) => document.getElementById(id);
  const set = (id, html) => {
    const el = byId(id);
    if (el) el.innerHTML = html;
  };
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

  const STATUS = {
    verified: { cls: "status-verified", label: "有核验信号" },
    partial: { cls: "status-partial", label: "部分可得" },
    unchanged: { cls: "status-unchanged", label: "本窗口无新增" },
    unavailable: { cls: "status-unavailable", label: "数据不可得" }
  };
  const statusMeta = (status) => STATUS[status] || STATUS.unavailable;
  const statusPill = (status) => {
    const meta = statusMeta(status);
    return `<span class="status-pill-sm ${meta.cls}">${meta.label}</span>`;
  };
  const UNAVAILABLE = '<span class="unavailable">数据不可得</span>';
  const hasValue = (value) => value !== null && value !== undefined && value !== "";

  const sourceLink = (id, compact) => {
    const source = data.sources[id];
    if (!source) return "";
    const label = compact ? source.publisher : source.title;
    return `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span class="external" aria-hidden="true">↗</span><span class="sr-only">（在新标签页打开）</span></a>`;
  };

  const sourceGroup = (ids) => {
    if (!ids || !ids.length) return "";
    const links = ids.map((id) => sourceLink(id, true)).join("");
    if (!links) return "";
    return `<div class="source-links" aria-label="相关来源">${links}</div>`;
  };

  const emptyState = (text) => `<p class="empty-state">${escapeHtml(text)}</p>`;

  const cellContent = (col, row) => {
    const raw = row[col.key];
    if (col.type === "sources") {
      const links = (raw || []).map((id) => sourceLink(id, true)).join("");
      return links ? `<div class="source-links">${links}</div>` : '<span class="unavailable">未标注来源</span>';
    }
    if (col.type === "level") {
      return hasValue(raw) ? `证据 ${escapeHtml(raw)}` : '<span class="unavailable">未分级</span>';
    }
    if (col.type === "status") return statusPill(raw);
    if (!hasValue(raw)) return UNAVAILABLE;
    const cls = col.type === "metric" ? ' class="num"' : "";
    return `<span${cls}>${escapeHtml(raw)}</span>`;
  };

  const dataTable = (cols, rows, emptyText) => {
    if (!rows || !rows.length) return emptyState(emptyText);
    const head = cols.map((col) => `<th scope="col">${escapeHtml(col.label)}</th>`).join("");
    const body = rows
      .map((row) => {
        const cells = cols
          .map((col, index) => {
            const tag = index === 0 ? "th" : "td";
            const scope = index === 0 ? ' scope="row"' : "";
            return `<${tag}${scope} data-label="${escapeHtml(col.label)}">${cellContent(col, row)}</${tag}>`;
          })
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");
    return `<div class="table-wrap"><table class="data-table"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  };

  const caseList = (cases, emptyText) => {
    if (!cases || !cases.length) return emptyState(emptyText);
    return `<div class="case-list">${cases
      .map(
        (item) => `
        <article class="case-card">
          <header>
            <span class="case-type">${escapeHtml(item.type)}</span>
            <span class="case-level">证据 ${escapeHtml(item.level)}</span>
            ${item.stage ? `<span class="case-stage">${escapeHtml(item.stage)}</span>` : ""}
          </header>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.fact)}</p>
          <p class="case-meta">${escapeHtml(item.org)}</p>
          ${item.note ? `<p class="case-note">${escapeHtml(item.note)}</p>` : ""}
          ${sourceGroup(item.sources)}
        </article>`
      )
      .join("")}</div>`;
  };

  byId("cover-meta").innerHTML = `
    <span class="issue-date">${escapeHtml(data.meta.issue)}</span>
    <span class="status-pill">${escapeHtml(data.meta.label)}</span>
  `;
  byId("cover-thesis").textContent = data.meta.thesis;
  byId("cover-window").innerHTML = `<strong>统计窗口</strong><br>${escapeHtml(data.meta.window)}`;

  byId("judgment-list").innerHTML = data.judgments
    .map(
      (item, index) => `
        <li>
          <span class="judgment-number" aria-hidden="true">0${index + 1}</span>
          <div><span class="judgment-label">${escapeHtml(item.label)}</span><p>${escapeHtml(item.text)}</p></div>
        </li>`
    )
    .join("");

  byId("lead-story").innerHTML = `
    <header class="lead-header">
      <div>
        <p class="evidence-badge"><b>${escapeHtml(data.lead.evidenceLevel)}</b> ${escapeHtml(data.lead.evidenceLabel)}</p>
        <h3>${escapeHtml(data.lead.title)}</h3>
        <p class="standfirst">${escapeHtml(data.lead.standfirst)}</p>
      </div>
      <aside class="evidence-notes" aria-label="关键事实">
        <span>Evidence notes</span>
        ${data.lead.evidence.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
      </aside>
    </header>
    <div class="logic-chain" aria-label="证据到行动分析链">
      ${data.lead.chain
        .map(
          (item, index) => `
            <section class="logic-step">
              <span class="logic-index">${String(index + 1).padStart(2, "0")}</span>
              <h4>${escapeHtml(item.key)}</h4>
              <p>${escapeHtml(item.value)}</p>
            </section>`
        )
        .join("")}
    </div>
    ${sourceGroup(data.lead.sources)}
  `;

  byId("brief-grid").innerHTML = data.briefs
    .map(
      (brief) => `
        <article class="brief-card">
          <header>
            <span class="brief-number">${escapeHtml(brief.number)}</span>
            <span class="brief-tag">${escapeHtml(brief.tag)}</span>
            <span class="brief-level">证据 ${escapeHtml(brief.level)}</span>
          </header>
          <h3>${escapeHtml(brief.title)}</h3>
          <p>${escapeHtml(brief.fact)}</p>
          <div class="editor-read"><strong>编辑判断</strong><p>${escapeHtml(brief.read)}</p></div>
          ${sourceGroup(brief.sources)}
        </article>`
    )
    .join("");

  // ---- 04 Intelligence lanes -------------------------------------------------
  const intel = data.intel || {};
  const lanes = intel.lanes || [];

  set(
    "module-chips",
    (data.moduleNav || [])
      .map((item) => {
        const meta = statusMeta(item.state);
        return `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}<span class="chip-state ${meta.cls}">${meta.label}</span></a>`;
      })
      .join("")
  );

  set("intel-note", escapeHtml(intel.note || ""));
  set(
    "lane-grid",
    lanes.length
      ? lanes
          .map(
            (lane, index) => `
        <article class="lane-card" id="lane-${escapeHtml(lane.id)}">
          <div class="lane-card-head">
            <span class="lane-id">${String(index + 1).padStart(2, "0")}</span>
            ${statusPill(lane.status)}
          </div>
          <h3>${escapeHtml(lane.name)}</h3>
          <span class="lane-en">${escapeHtml(lane.en)}</span>
          <p>${escapeHtml(lane.summary)}</p>
          <a class="text-link lane-link" href="${escapeHtml(lane.target)}">进入模块 <span aria-hidden="true">↘</span></a>
          ${sourceGroup(lane.sources)}
        </article>`
          )
          .join("")
      : emptyState("未配置情报线。")
  );

  // ---- 05 Work catalog -------------------------------------------------------
  const catalog = data.workCatalog || {};
  set("catalog-note", escapeHtml(catalog.note || ""));
  set("catalog-status", statusPill(catalog.status));
  set(
    "catalog-table",
    dataTable(
      [
        { label: "作品 / 项目", key: "title" },
        { label: "创作者 / 机构", key: "creator" },
        { label: "类型", key: "type" },
        { label: "阶段", key: "stage" },
        { label: "证据", key: "level", type: "level" },
        { label: "备注", key: "note" },
        { label: "来源", key: "sources", type: "sources" }
      ],
      catalog.rows,
      "本窗口未核验到具名AIGC影视作品的新增信息；不使用传闻补位。"
    )
  );

  // ---- 06 Platform samples ---------------------------------------------------
  const samples = data.platformSamples || {};
  set("platform-note", escapeHtml(samples.note || ""));
  set(
    "platform-table",
    dataTable(
      [
        { label: "平台 / 渠道", key: "platform" },
        { label: "指标", key: "metric" },
        { label: "数值", key: "value", type: "metric" },
        { label: "口径", key: "basis" },
        { label: "状态", key: "status", type: "status" },
        { label: "来源", key: "sources", type: "sources" }
      ],
      samples.rows,
      "本窗口未取得任何可复核的平台样本。"
    )
  );

  // ---- 07 Production economics ----------------------------------------------
  const economics = data.productionEconomics || {};
  set("economics-note", escapeHtml(economics.note || ""));
  set(
    "economics-table",
    dataTable(
      [
        { label: "项目", key: "item" },
        { label: "指标", key: "metric" },
        { label: "数值", key: "value", type: "metric" },
        { label: "口径", key: "basis" },
        { label: "状态", key: "status", type: "status" },
        { label: "来源", key: "sources", type: "sources" }
      ],
      economics.rows,
      "本窗口未取得任何可核验的成本或产能口径。"
    )
  );

  // ---- 08 Commercialization / distribution ----------------------------------
  const commercial = data.commercial || {};
  set("commercial-note", escapeHtml(commercial.note || ""));
  set("commercial-list", caseList(commercial.cases, "本窗口未核验到商业化或发行层面的新增案例。"));

  // ---- 09 Rights / compliance ------------------------------------------------
  const rights = data.rights || {};
  set("rights-note", escapeHtml(rights.note || ""));
  set("rights-status", statusPill(rights.status));
  set("rights-list", caseList(rights.cases, "本窗口未核验到具名权利或监管事件。"));
  set(
    "rights-checks",
    rights.checks && rights.checks.length
      ? `<h3>交付层面检查项（非事实陈述）</h3><ul class="checks-list">${rights.checks
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("")}</ul>`
      : ""
  );

  // ---- 10 Incidents / failures ----------------------------------------------
  const incidents = data.incidents || {};
  set("incidents-note", escapeHtml(incidents.note || ""));
  set("incidents-list", caseList(incidents.cases, "本窗口未核验到工具故障、失败或可用性事件。"));

  // ---- 11 Production signal (existing) --------------------------------------
  byId("workflow-card").innerHTML = `
    <div class="workflow-copy">
      <p class="workflow-eyebrow">${escapeHtml(data.workflow.eyebrow)}</p>
      <h3>${escapeHtml(data.workflow.title)}</h3>
      <p>${escapeHtml(data.workflow.summary)}</p>
      <p class="workflow-interpretation">${escapeHtml(data.workflow.interpretation)}</p>
      ${sourceGroup(data.workflow.sources)}
    </div>
    <aside class="workflow-facts" aria-label="工具快照">
      ${data.workflow.metrics
        .map((metric) => `<div><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></div>`)
        .join("")}
      <p>${escapeHtml(data.workflow.caution)}</p>
    </aside>
  `;

  byId("radar-list").innerHTML = data.radar
    .map(
      (item) => `
        <article class="radar-row">
          <h3>${escapeHtml(item.channel)}</h3>
          <p>${escapeHtml(item.signal)}</p>
          <p class="radar-limit"><span>口径</span>${escapeHtml(item.limit)}</p>
          ${item.sources ? sourceGroup(item.sources) : ""}
        </article>`
    )
    .join("");

  byId("timeline").innerHTML = data.watchlist
    .map(
      (item) => `
        <li>
          <time>${escapeHtml(item.date)}</time>
          <div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.action)}</p>${sourceGroup(item.sources)}</div>
        </li>`
    )
    .join("");

  // ---- 13 Coverage status ----------------------------------------------------
  const coverage = data.coverage || {};
  const countOf = (status) => lanes.filter((lane) => lane.status === status).length;
  set("coverage-note", escapeHtml(coverage.note || ""));
  set(
    "coverage-summary",
    lanes.length
      ? `<p>共 ${lanes.length} 条情报线：<b>${countOf("verified")}</b> 条有核验信号，<b>${countOf("partial")}</b> 条部分可得，<b>${countOf("unchanged")}</b> 条本窗口无新增，<b>${countOf("unavailable")}</b> 条数据不可得。</p>`
      : ""
  );
  set(
    "coverage-table",
    dataTable(
      [
        { label: "情报线", key: "name" },
        { label: "状态", key: "status", type: "status" },
        { label: "本窗口结论", key: "summary" },
        { label: "来源", key: "sources", type: "sources" }
      ],
      lanes,
      "未配置情报线。"
    )
  );
  set(
    "coverage-gaps",
    coverage.gaps && coverage.gaps.length
      ? `<h3>已知覆盖缺口</h3><ul class="checks-list">${coverage.gaps
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("")}</ul>`
      : ""
  );

  // ---- 14 Sources & method ---------------------------------------------------
  byId("method-note").innerHTML = `
    <h3>核验口径</h3>
    <ul>${data.method.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  `;

  byId("source-index").innerHTML = Object.entries(data.sources)
    .map(
      ([id, source], index) => `
        <li id="source-${escapeHtml(id)}">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div>${sourceLink(id, false)}<small>${escapeHtml(source.publisher)}</small></div>
        </li>`
    )
    .join("");

  const menuButton = document.querySelector(".menu-toggle");
  const nav = byId("issue-nav");
  if (!menuButton || !nav) return;
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
})();
