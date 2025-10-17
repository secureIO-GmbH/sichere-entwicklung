---
layout: default
title: Entwicklung
date: 2024-07-19
---

# Entwicklung

Die **Entwicklungsphase** baut auf den Ergebnissen der [**Designphase**](/pages/design/) auf, insbesondere auf den Dokumentationen zur Software-Architektur und Benutzeroberfläche. Mithilfe des erstellten [**Threat Models**](/pages/design/threat_modeling) und des dazugehörigen *Datenflussdiagramms* sind die zuvor definierten Sicherheitsanforderungen klar ersichtlich und können in der Entwicklung berücksichtigt werden.

In dieser Phase beginnen die Softwareentwickler mit der Implementierung der einzelnen Klassen, Methoden und Schnittstellen (Interfaces) auf Basis der vorliegenden Dokumente. Dabei ist es wichtig, dass die sichere Softwareentwicklung in den Mittelpunkt gestellt wird, um potenzielle Sicherheitslücken zu minimieren. Bestandteile dieser sicheren Entwicklungspraktiken sind dabei unter anderem die Nutzung von Static Application Security Testing sowie von Software Composition Analysis Tools. 

<div class="mermaid-wrap is-centered">
  <div class="mermaid">
  {% include_relative graph.mmd %}
  </div>
</div>