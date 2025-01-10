---
layout: default
title: Entwicklung
date: 2024-07-19
---

# Entwicklung

Die **Entwicklungsphase** baut auf den Ergebnissen der [**Designphase**](/pages/design/) auf, insbesondere auf den Dokumentationen zur Software-Architektur und Benutzeroberfläche. Mithilfe des erstellten [**Threat Models**](/pages/design/threat_modeling) und des dazugehörigen *Datenflussdiagramms* sind die zuvor definierten Sicherheitsanforderungen klar ersichtlich und können in der Entwicklung berücksichtigt werden.

In dieser Phase beginnen die Softwareentwickler mit der Implementierung der einzelnen Klassen, Methoden und Schnittstellen (Interfaces) auf Basis der vorliegenden Dokumente. Dabei ist es wichtig, dass die sichere Softwareentwicklung in den Mittelpunkt gestellt wird, um potenzielle Sicherheitslücken zu minimieren.

## Wesentliche Sicherheitspraktiken in der Entwicklungsphase

Für eine sichere Implementierung sollten die folgenden Aspekte dauerhaft im Entwicklungsprozess verankert werden:

1. **Sichere Entwicklungsvorgaben und -praktiken**:
   - Es ist von entscheidender Bedeutung, sichere Entwicklungsmethoden zu verwenden. Dies umfasst die Einhaltung von [**Secure Coding Guidelines**](/pages/entwicklung/guidelines/), die auf den OWASP Top 10 basieren.

2. **Statische Sicherheitsüberprüfung (SAST)**:
   - Die Überprüfung des Quellcodes mithilfe von [**Static Application Security Testing (SAST)**](/pages/entwicklung/statisches_testing/sast_sca) ist ein zentraler Bestandteil, um Sicherheitslücken bereits während der Entwicklung zu identifizieren.

### Folder Structure:
1. Statisches Testing
    1. Static Application Security Testing (SAST)
    2. Static Application Security Testing Tools (SAST Tools)
2.  Sichere Entwicklungspraktiken
    1. Cornucopia

<div class="mermaid">
graph TD
N1 --> N2[Guidelines]
N1 --> N3[Statisches Testing]
click N3 "statisches_testing"
N1[Entwicklung]
N3 --> N5[Sast Sca]
N3 --> N6[Image Scanning]
=======
3. **Software Composition Analysis (SCA)**:
   - Zusätzlich zur statischen Analyse ist die [**Software Composition Analysis (SCA)**](/pages/entwicklung/statisches_testing/sast_sca) wichtig, um Schwachstellen in Open-Source-Komponenten und Bibliotheken zu erkennen.

4. **Container Security**:
   - In modernen Softwareentwicklungsprozessen werden häufig Container verwendet. Das [**Container Image Scanning**](/pages/entwicklung/image_scanning) hilft dabei, Schwachstellen in Container-Images frühzeitig zu identifizieren und abzusichern.

5. **CI/CD-Integration**:
   - Sicherheitsüberprüfungen sollten in den [**kontinuierlichen Entwicklungs- und Bereitstellungsprozess**](/pages/bereitstellung/ci-cd-sicherheit) (CI/CD) integriert werden, um sicherzustellen, dass Sicherheitslücken bereits im Entwicklungsstadium erkannt werden.

## Fazit

Die **Entwicklungsphase** erfordert mehr als nur das Schreiben von Code. Der Fokus auf Sicherheit, die Einhaltung bewährter Entwicklungsmethoden und die Einbettung automatisierter Sicherheitsprüfungen in den Entwicklungsprozess sind entscheidend, um sichere und robuste Anwendungen zu entwickeln.

Weitere Informationen zu den spezifischen Sicherheitsaspekten in dieser Phase findet Ihr in den [**Secure Coding Guidelines anhand OWASP Top 10**](/pages/entwicklung/guidelines/).
