---
layout: default
title: "Test"
date: 2024-07-19
---

# Design

Werden die gesammelten Anforderungen aus der [Planungsphase](/pages/planung) extrahiert, so wird anschließend in der **Designphase** eine strukturelle Realisierung der Software erstellt. Im Detail wird eine erste Version der Softwarearchitektur und des Systemdesign erstellt. Hier müssen Entscheidungen über die Integration in bestehende Systeme und die einzusetzenden Technologien getroffen werden.

Für eine entsprechend sichere Umsetzung der Designphase ist die Erstellung eines **Bedrohungsmodells**, auch [**Threat Models**](/pages/2.%20design/threat%20modeling), notwendig. Mithilfe entsprechender *Threat Modeling Tools* kann die Softwarearchitektur visualisiert und gleichzeitig automatisiert Sicherheitsrisiken anhand der Architektur aufgezeigt werden. Bei der Bedrohungsmodellierung können oftmals auch zwischen verschiedenen Ansätze, den [**Threat Modeling Methodologien**](/pages/2.%20design/tm_methodologies/), ausgewählt werden. 


### Folder Structure: 
1.  Threat Modeling
	1. Threat Modeling Tools
	2. Threat Modeling Methodologies
		1. STRIDE
		3. LINDUUN
3. Attack Trees
4. Risikomatrix

<div class="mermaid">
graph TD
design --> tm_methodologies[tm_methodologies]
click tm_methodologies "tm_methodologies"
design --> threat_modeling[threat_modeling]
click threat_modeling "threat_modeling"
design[design]
tm_methodologies[tm_methodologies]
threat_modeling --> methodologies[methodologies]
click methodologies "methodologies"
threat_modeling[threat_modeling]
methodologies --> linduun.md[linduun.md]
methodologies --> stride.md[stride.md]
methodologies[methodologies]
</div>