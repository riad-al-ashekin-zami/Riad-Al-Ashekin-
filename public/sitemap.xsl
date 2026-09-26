<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>XML Sitemap | Riad Al Ashekin</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          :root {
            --brand-primary: #0f172a;
            --brand-accent: #0284c7;
            --brand-accent-hover: #0369a1;
            --bg-page: #f8fafc;
            --bg-card: #ffffff;
            --border-color: #e2e8f0;
            --text-main: #1e293b;
            --text-muted: #64748b;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            background-color: var(--bg-page);
            color: var(--text-main);
            line-height: 1.5;
            padding: 24px 16px;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .header-box {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 24px 28px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            margin-bottom: 24px;
          }
          .header-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
          }
          h1 {
            font-size: 22px;
            font-weight: 700;
            color: var(--brand-primary);
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .pill-badge {
            background: #e0f2fe;
            color: #0369a1;
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          p.desc {
            color: var(--text-muted);
            font-size: 14px;
            margin-top: 8px;
            max-width: 800px;
          }
          .stats-row {
            display: flex;
            gap: 20px;
            margin-top: 18px;
            padding-top: 18px;
            border-top: 1px solid var(--border-color);
            flex-wrap: wrap;
          }
          .stat-item {
            font-size: 13px;
          }
          .stat-item strong {
            color: var(--brand-primary);
            font-size: 16px;
            margin-right: 4px;
          }
          .filter-bar {
            margin-bottom: 16px;
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
          .search-input {
            padding: 10px 16px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            font-size: 14px;
            width: 100%;
            max-width: 400px;
            outline: none;
            background: #fff;
          }
          .search-input:focus {
            border-color: var(--brand-accent);
            box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
          }
          .back-link {
            font-size: 13px;
            color: var(--brand-accent);
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 4px;
          }
          .back-link:hover {
            text-decoration: underline;
          }
          .table-container {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
            text-align: left;
          }
          thead {
            background-color: #f1f5f9;
            border-bottom: 1px solid var(--border-color);
          }
          th {
            padding: 12px 16px;
            font-weight: 600;
            color: var(--brand-primary);
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          tbody tr {
            border-bottom: 1px solid var(--border-color);
            transition: background 0.15s ease;
          }
          tbody tr:hover {
            background-color: #f8fafc;
          }
          tbody tr:last-child {
            border-bottom: none;
          }
          td {
            padding: 12px 16px;
            vertical-align: middle;
          }
          td.url-cell {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12.5px;
            max-width: 500px;
            word-break: break-all;
          }
          td.url-cell a {
            color: #0f172a;
            text-decoration: none;
            font-weight: 500;
          }
          td.url-cell a:hover {
            color: var(--brand-accent);
            text-decoration: underline;
          }
          .badge-prio {
            display: inline-block;
            padding: 2px 7px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            font-family: monospace;
          }
          .prio-high { background: #dcfce7; color: #166534; }
          .prio-mid { background: #e0f2fe; color: #0369a1; }
          .prio-low { background: #f1f5f9; color: #475569; }
          .image-tag {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: #fef3c7;
            color: #92400e;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            text-decoration: none;
          }
          .footer-note {
            margin-top: 24px;
            text-align: center;
            font-size: 12px;
            color: var(--text-muted);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header-box">
            <div class="header-top">
              <div>
                <h1>
                  <span>XML Sitemap</span>
                  <span class="pill-badge">Indexed URLs</span>
                </h1>
                <p class="desc">
                  This XML sitemap is generated dynamically for <strong>https://riadalashekin.com</strong> to facilitate efficient discovery, crawling, and full-fidelity indexation by Google Search, Bing, and web crawlers.
                </p>
              </div>
              <div>
                <a href="/" class="back-link">← Return to Website</a>
              </div>
            </div>
            
            <div class="stats-row">
              <div class="stat-item">
                <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> Total URLs
              </div>
              <div class="stat-item">
                <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url[image:image])"/></strong> Images Attached
              </div>
              <div class="stat-item">
                <strong>Protocol:</strong> Sitemaps.org 0.9 + Google Image Extension
              </div>
            </div>
          </div>

          <div class="filter-bar">
            <input type="text" id="urlFilter" class="search-input" placeholder="Filter URLs by keyword or path..." onkeyup="filterUrls()" />
            <span style="font-size: 12px; color: #64748b;" id="visibleCount">
              Showing <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs
            </span>
          </div>

          <div class="table-container">
            <table id="sitemapTable">
              <thead>
                <tr>
                  <th style="width: 45px;">#</th>
                  <th>Page URL (Location)</th>
                  <th style="width: 90px; text-align: center;">Priority</th>
                  <th style="width: 110px; text-align: center;">Change Freq</th>
                  <th style="width: 80px; text-align: center;">Images</th>
                  <th style="width: 120px; text-align: right;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td style="color: #94a3b8; font-size: 11px; text-align: center;"><xsl:value-of select="position()"/></td>
                    <td class="url-cell">
                      <xsl:variable name="itemUrl">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemUrl}" target="_blank" rel="noopener">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="text-align: center;">
                      <xsl:variable name="prio">
                        <xsl:value-of select="sitemap:priority"/>
                      </xsl:variable>
                      <xsl:choose>
                        <xsl:when test="$prio &gt;= 0.9">
                          <span class="badge-prio prio-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="$prio &gt;= 0.7">
                          <span class="badge-prio prio-mid"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge-prio prio-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td style="text-align: center; color: #475569; font-size: 12px;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td style="text-align: center;">
                      <xsl:choose>
                        <xsl:when test="image:image">
                          <xsl:variable name="imgLoc">
                            <xsl:value-of select="image:image/image:loc"/>
                          </xsl:variable>
                          <a href="{$imgLoc}" target="_blank" class="image-tag" title="{image:image/image:title}">
                            🖼️ 1
                          </a>
                        </xsl:when>
                        <xsl:otherwise>
                          <span style="color: #cbd5e1;">-</span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td style="text-align: right; color: #64748b; font-size: 12px; font-family: monospace;">
                      <xsl:value-of select="sitemap:lastmod"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer-note">
            <p>Riad Al Ashekin • Advisory &amp; Technical Systems • Validated for Google Search Console</p>
          </div>
        </div>

        <script type="text/javascript">
          function filterUrls() {
            var input = document.getElementById("urlFilter");
            var filter = input.value.toLowerCase();
            var table = document.getElementById("sitemapTable");
            var trs = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            var visible = 0;

            for (var i = 0; i &lt; trs.length; i++) {
              var urlCell = trs[i].getElementsByClassName("url-cell")[0];
              if (urlCell) {
                var txtValue = urlCell.textContent || urlCell.innerText;
                if (txtValue.toLowerCase().indexOf(filter) &gt; -1) {
                  trs[i].style.display = "";
                  visible++;
                } else {
                  trs[i].style.display = "none";
                }
              }
            }
            document.getElementById("visibleCount").innerText = "Showing " + visible + " of " + trs.length + " URLs";
          }
        </script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
