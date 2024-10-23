---
layout: default
title: "Test"
date: 2024-07-19
---

# Planung
Wird von einem Unternehmen neue Software nach dem **[Software-Entwicklungs-Lebenszyklus](/pages/...) (SDLC)** entwickelt, so werden beginnen mit der **Planungsphase** Ziele und Anforderungen an das zu entwickelnde Projekt definiert. Typische Bestandteile umfassen hierbei Kosten-Nutzen-Analysen, Zeitplanung und Ressourcenschätzung. 
Eine entsprechende Planung potentieller Risiken sowie benötigter Sicherheitsmechanismen müssen in Form eines [**Risikomanagements**](/pages/risikomanagemt/)  durchgeführt werden. Das Risikomanagement umfasst dabei neben der Identifikation der potentiellen Risiken, also was Angreifer wie angreifen könnten, auch eine *Risikobewertung* nach technischen und wirtschaftlichen Auswirkungen. 
Abschließend wird eine Bewertung und Planung hinsichtlich der [**Informationssicherheit**](/pages) durchgeführt, also wie Daten verarbeitet und gespeichert werden. Hierfür sollten gesetzliche Anforderungen verflogt und unternehmensinterne Richtlinien und Vorgaben definiert werden. 
Als koordiniertes Modell, das sowohl das Risikomanagement als auch die Informationssicherheit umfasst, kann der [**Governance**, **Risk** und **Compliance** (GRC)](/pages/...) Ansatz verfolgt und für den Entwicklungsprozess definit werden. 



### Folder Structure: 

<script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
</script>


{% comment %} 
ToDo - Plan ist das alles dynamisch geladen wird! 
Mithilfe von site.pages sollte es möglich sein die Ordnerstruktur auszulesen und anschließend dynamisch hier laden zu lassen. 
Entsprechend muss hierfür jedoch der Code noch implementiert werden
{% endcomment %}

<div class="mermaid">
    graph TD
    GRC[GRC] --> Governance[Governance]
    GRC --> Risikomanagement[Risikomanagement]
    GRC --> Compliance[Compliance]
    Compliance --> ISO27001[ISO27001]
    Compliance --> NIST[NIST]
    Compliance --> ISO9001[ISO9001]

    click GRC "grc"
    click Governance "grc/governance"
    click Risikomanagement "grc/risikomanagement"
    click Compliance "grc/compliance"
</div>