---
layout: default
title: "Test"
date: 2024-07-19
---

# Entwicklung

Als Ergebnis der [**Designphase**](/pages/) sollten Dokumentationen über die geplante Software-Architektur und dessen Benutzeroberfläche für die Entwicklungsphase zur Verfügung stehen. Mithilfe des ebenfalls zuvor erstellten [**Threat Models**](/pages/...) liegt ein *Datenflussdiagramm* vor, das zuvor definierte Sicherheitsanforderungen aufzeigt und definiert. 

In der [**Entwicklungsphase**] kann von den Softwareentwicklern mithilfe dieser Dokumente  mit der Implementierung der einzelnen Klassen, Methoden und Interfaces begonnen werden. 
Bezüglich der `sicheren Entwicklung` von Software müssen bei der Implementierung sichere Entwicklungsvorgaben und -praktiken vorgegeben und eingehalten werden. Ein weiterer Ansatz, der dauerhaft im Prozess der Sicherheitsüberprüfung eingebunden werden muss ist das allgemeine Statische Testing. Speziell kann für die Überprüfung von Quellcode das [**Static Application Security Testing (SAST)**](/pages/...) integriert werden. Zur Unterstützung gibt es hierbei ebenfalls eine große Anzahl unterschiedlicher [SAST Tools](/pages/entwicklung/sast_sca.html).


`ToDo: [Container Image Scanning](/pages/entwicklung/image_scanning.html)`

### Folder Structure:
1. Statisches Testing
    1. Static Application Security Testing (SAST)
    2. Static Application Security Testing Tools (SAST Tools) 
2.  Sichere Entwicklungspraktiken
    1. Cornucopia