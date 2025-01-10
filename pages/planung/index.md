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


{% comment %} 
ToDo - Plan ist das alles dynamisch geladen wird! 
Mithilfe von site.pages sollte es möglich sein die Ordnerstruktur auszulesen und anschließend dynamisch hier laden zu lassen. 
Entsprechend muss hierfür jedoch der Code noch implementiert werden
{% endcomment %}


<div class="mermaid">
graph TD
planung --> grc[grc]
click grc "grc"
planung[planung]
grc --> compliance[compliance]
click compliance "compliance"
grc --> risikomanagement[risikomanagement]
click risikomanagement "risikomanagement"
grc --> governance[governance]
click governance "governance"
grc[grc]
compliance --> ai_act[ai_act]
click ai_act "ai_act"
compliance --> dsgvo[dsgvo]
click dsgvo "dsgvo"
compliance --> nis2[nis2]
click nis2 "nis2"
compliance[compliance]
ai_act[ai_act]
dsgvo[dsgvo]
nis2[nis2]
risikomanagement --> coso_erm[coso_erm]
click coso_erm "coso_erm"
risikomanagement --> iso31000[iso31000]
click iso31000 "iso31000"
risikomanagement --> iso27005[iso27005]
click iso27005 "iso27005"
risikomanagement[risikomanagement]
coso_erm[coso_erm]
iso31000[iso31000]
iso27005[iso27005]
governance --> iso27001[iso27001]
click iso27001 "iso27001"
governance --> soc2[soc2]
click soc2 "soc2"
governance --> iso9001[iso9001]
click iso9001 "iso9001"
governance[governance]
iso27001[iso27001]
soc2[soc2]
iso9001[iso9001]
</div>