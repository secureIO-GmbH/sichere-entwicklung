---
layout: default
title: "Testen"
date: 2024-07-19
---

# Testen

Die Testphase beschreibt im Software Entwicklungslebenszyklus erstmals einen dedizierten Ansatz, der die Sicherheit der zu entwickelnden Software überprüfen soll. Im Detail werden für die zuvor in der [Entwicklungsphase](/pages/entwicklung/) implementierten Funktionen und Methoden spezielle Tests implementiert. Vorrangig werden dabei Tests zur Analyse der Qualität und Genauigkeit definiert, also ob Funktionalitäten korrekt implementiert worden sind. Zusätzlich werden nicht funktionale Tests zur Überprüfung der Belastbarkeit und Sicherheit durchgeführt.

Diese Sicherheitstests umfassen innerhalb des *SDLC* aus Zeit und Kostengründen oftmals nur die Überprüfung der allgemeinen Sicherheitsmechanismen, also der implementierten Authentifizierung, Autorisierung und den verwendeten Verschlüsselungsmechanismen. Vielmehr sollte, wie empfohlen durch den *SSDLC*, in der Testphase ein vollumfängliches, *dynamisches Testing* durchgeführt werden. Im Anwendungsfall Software kann das [Dynamic Application Security Testing](/pages/testen/methoden/dast/) Anwendung finden, was unter anderem in Form eines [Penetration Tests](/pages/testen/methoden/penetration_testing/) durchgeführt werden kann.

## Unterseiten

- [Penetration Testing](/pages/testen/methoden/penetration_testing/)
- [Dynamic Application Security Testing](/pages/testen/methoden/dast/)
- [Interactive Application Security Testing](/pages/testen/methoden/iast/)
- [Runtime Application Self-Protection](/pages/testen/methoden/rasp/)


<div class="mermaid">
graph TD
N1[Testen]
N1 --> N2[Iast]
N1 --> N3[Rasp]
N1 --> N4[Penetration Testing]
N1 --> N5[Dast]
