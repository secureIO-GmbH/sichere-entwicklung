---
layout: default
title: "Bereitstellung"
date: 2024-07-19
---

# Bereitstellung/Veröffentlichung

Nachdem vom Kunden und Management Anforderungen definiert, diese von Architekten und Designer geplant, anschließend von den Softwareentwicklern umgesetzt und abschließend gemeinsam getestet und überprüft worden sind kann die Software erstmals als Teil der **Bereitstellungsphase** in die Produktionsumgebung überführt werden. Hierbei müssen entsprechende Vorkehrungen und Anpassungen der Infrastruktur vorgenommen werden, um einen dauerhaften Betrieb der Produktionsumgebung gewährleisten zu können. Es ist dabei zu empfehlen, neben der Produktionsumgebung auch eine Entwicklungsumgebung zum testen zu definieren. 

Nachdem alle Sicherheitsvorkehrungen innerhalb der vorherigen Schritte implementiert worden sind sollten mit dem Release die in der [Planungsphase](SSDLC/1.Planung/planung) definierten Anforderungen sowie weitere implementierte Sicherheitsmechanismen nochmals überprüft werden. Mithilfe dieser **Sicherheitsbewertung** können auch zuvor definierte Prozesse und Richtlinien wie das Incident Response Management, Wiederherstellungsprozesse und Zugriffsrichtlinien finalisiert werden. 

<!-- Todo: Noch erklären, welche genauen Sicherheitsprinzipien verfolgt werden -->

<div class="mermaid">
graph TD
bereitstellung --> schwachstellenmanagement[schwachstellenmanagement]
click schwachstellenmanagement "schwachstellenmanagement"
bereitstellung --> deployment[deployment]
click deployment "deployment"
bereitstellung --> infrastruktur[infrastruktur]
click infrastruktur "infrastruktur"
bereitstellung[bereitstellung]
schwachstellenmanagement[schwachstellenmanagement]
deployment --> deployment-haertung.md[deployment-haertung.md]
deployment --> ci-cd-sicherheit.md[ci-cd-sicherheit.md]
deployment --> rasp.md[rasp.md]
deployment[deployment]
infrastruktur --> container-und-orchestrierung.md[container-und-orchestrierung.md]
infrastruktur --> zero-trust-netzwerke.md[zero-trust-netzwerke.md]
infrastruktur --> infrastruktur-als-code.md[infrastruktur-als-code.md]
infrastruktur[infrastruktur]
</div>