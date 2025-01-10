---
layout: default
title: "Test"
date: 2024-07-19
---

# GRC

<div class="mermaid">
graph TD
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