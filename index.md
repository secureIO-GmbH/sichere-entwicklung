---
layout: default
title: Sichere Entwicklung - by secureIO
---

<!-- CSS -->
<link rel="stylesheet" href="{{ '/css/main.css'  | relative_url }}">
<link rel="stylesheet" href="{{ '/css/ssdlc.css' | relative_url }}">

<div class="content-grid home">
  <main class="main">
    <!-- Headline -->
    <h1 class="page-title">Willkommen bei Sichere-Entwicklung.de!</h1>

    <!-- SSDLC-KREIS (interaktive Navigation) -->
    <div class="circle-wrap">
      <div class="circle">
        <a href="{{ '/pages/planung/'        | relative_url }}" class="segment planung"><span>1. Planung</span></a>
        <a href="{{ '/pages/design/'         | relative_url }}" class="segment design"><span>2. Design</span></a>
        <a href="{{ '/pages/entwicklung/'    | relative_url }}" class="segment entwicklung"><span>3. Entwicklung</span></a>
        <a href="{{ '/pages/testen/'         | relative_url }}" class="segment testen"><span>4. Testen</span></a>
        <a href="{{ '/pages/bereitstellung/' | relative_url }}" class="segment bereitstellung"><span>5. Bereit-<br>stellung</span></a>
        <a href="{{ '/pages/wartung/'        | relative_url }}" class="segment wartung"><span>6. Wartung</span></a>
        <a href="{{ '/pages/ssdlc/'          | relative_url }}" class="center-link" aria-label="SSDLC – Überblick"><span>SSDLC</span></a>
      </div>
    </div>
  </main>

  <!-- Rechte Spalte: News-Blöcke -->
  <aside class="news" aria-label="Neuigkeiten">
    <h2 class="news-title">News &amp; Blogposts</h2>

    {% assign latest_news = site.news | sort: "date" | reverse | slice: 0, 3 %}
    {% for item in latest_news %}
      {% include news-card.html item=item %}
    {% endfor %}
  </aside>
</div>