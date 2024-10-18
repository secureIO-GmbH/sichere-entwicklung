---
layout: default
title: Entwicklung
date: 2024-07-19
---

# Entwicklung
Die [**Designphase**](/pages/design/) schließt mit der Erstellung detaillierter Dokumentationen zur Software-Architektur und zum User Interface ab, die als Grundlage für die Entwicklung dienen. Mithilfe des ebenfalls zuvor erstellten [**Threat Models**](/pages/...) liegt ein *Datenflussdiagramm* vor, das zuvor definierte Sicherheitsanforderungen aufzeigt und definiert.

In der **Entwicklungsphase** kann von den Softwareentwicklern mithilfe dieser Dokumente  mit der Implementierung der einzelnen Klassen, Methoden und Interfaces begonnen werden.
Bezüglich der `sicheren Entwicklung` von Software müssen bei der Implementierung sichere Entwicklungsvorgaben und -praktiken vorgegeben und eingehalten werden. Ein weiterer Ansatz, der dauerhaft im Prozess der Sicherheitsüberprüfung eingebunden werden muss ist das allgemeine Statische Testing. Speziell kann für die Überprüfung von Quellcode das [**Static Application Security Testing (SAST)**](/pages/...) integriert werden. Zur Unterstützung gibt es hierbei ebenfalls eine große Anzahl unterschiedlicher [SAST Tools](/pages/entwicklung/sast_sca.html).

TODO:

- [Secure Coding Guidelines anhand OWASP Top 10](/pages/entwicklung/guidelines/)
- [Container Image Scanning](/pages/entwicklung/image_scanning)


### Folder Structure:
1. Statisches Testing
    1. Static Application Security Testing (SAST)
    2. Static Application Security Testing Tools (SAST Tools)
2.  Sichere Entwicklungspraktiken
    1. Cornucopia