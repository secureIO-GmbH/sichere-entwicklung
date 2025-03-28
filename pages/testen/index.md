---
layout: default
title: "Testen"
date: 2024-07-19
---

# Testen

Die Testphase beschreibt im Software Entwicklungslebenszyklus erstmals einen dedizierten Ansatz, der die Sicherheit der zu entwickelnden Software überprüfen soll. Im Detail werden für die zuvor in der [Entwicklungsphase](/pages/entwicklung/) implementierten Funktionen und Methoden spezielle Tests implementiert. Vorrangig werden dabei Tests zur Analyse der Qualität und Genauigkeit definiert, also ob Funktionalitäten korrekt implementiert worden sind. Zusätzlich werden nicht funktionale Tests zur Überprüfung der Belastbarkeit und Sicherheit durchgeführt.

Diese Sicherheitstests umfassen innerhalb des *SDLC* aus Zeit und Kostengründen oftmals nur die Überprüfung der allgemeinen Sicherheitsmechanismen, also der implementierten Authentifizierung, Autorisierung und den verwendeten Verschlüsselungsmechanismen. Vielmehr sollte, wie empfohlen durch den *SSDLC*, in der Testphase ein vollumfängliches, *dynamisches Testing* durchgeführt werden. Im Anwendungsfall Software kann das [Dynamic Application Security Testing](/pages/testen/methoden/dast/) Anwendung finden, was unter anderem in Form eines [Penetration Tests](/pages/testen/methoden/penetration_testing/) durchgeführt werden kann.

Als Alternativer Ansatz kann ebenfalls das [Interactive Application Security Tsting]{/pages/testen/interactive_testing/} betrachtet werden, welche das dynamische testing mit dem zuvor aus der Entwicklungsphase besprochenen statischem Testing kombiniert.


<div class="mermaid">
graph TD
testen --> dynamisches_testing[dynamisches_testing]
click dynamisches_testing "dynamisches_testing"
testen --> interactive_testing[interactive_testing]
click interactive_testing "interactive_testing"
testen[testen]
dynamisches_testing --> penetration_testing[penetration_testing]
click penetration_testing "penetration_testing"
dynamisches_testing --> dynamische_testing_tools[dynamische_testing_tools]
click dynamische_testing_tools "dynamische_testing_tools"
dynamisches_testing[dynamisches_testing]
penetration_testing[penetration_testing]
dynamische_testing_tools[dynamische_testing_tools]
interactive_testing[interactive_testing]
</div>