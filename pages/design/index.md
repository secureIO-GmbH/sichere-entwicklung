---
layout: default
title: "Design"
date: 2024-07-19
---

# Design
Werden die gesammelten Anforderungen aus der [Planungsphase](/pages/planung) extrahiert, so wird anschließend in der **Designphase** eine strukturelle Realisierung der Software erstellt. Im Detail wird eine erste Version der Softwarearchitektur und des Systemdesign erstellt. Hier müssen Entscheidungen über die Integration in bestehende Systeme und die einzusetzenden Technologien getroffen werden.

Für eine entsprechend sichere Umsetzung der Designphase ist die Erstellung eines **Bedrohungsmodells**, auch [**Threat Models**](/pages/2.%20design/threat%20modeling), notwendig. Mithilfe entsprechender *Threat Modeling Tools* kann die Softwarearchitektur visualisiert und gleichzeitig automatisiert Sicherheitsrisiken anhand der Architektur aufgezeigt werden. Bei der Bedrohungsmodellierung können oftmals auch zwischen verschiedenen Ansätze, den [**Threat Modeling Methodologien**](/pages/2.%20design/tm_methodologies/), ausgewählt werden.

<div class="mermaid-wrap is-centered">
  <div class="mermaid">
  {% include_relative graph.mmd %}
  </div>
</div>