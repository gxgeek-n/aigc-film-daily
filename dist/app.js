(function () {
  "use strict";

  const data = window.REPORT_DATA;
  if (!data) return;
  document.title = `${data.meta.title}｜${data.meta.issue}`;

  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) =>
    String(value).replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

  const sourceLink = (id, compact) => {
    const source = data.sources[id];
    if (!source) return "";
    const label = compact ? source.publisher : source.title;
    return `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}<span class="external" aria-hidden="true">↗</span><span class="sr-only">（在新标签页打开）</span></a>`;
  };

  const sourceGroup = (ids) => `<div class="source-links" aria-label="相关来源">${ids.map((id) => sourceLink(id, true)).join("")}</div>`;

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
