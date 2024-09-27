---
layout: default
title: Dynamic Application Security Testing (DAST)
date: 2024-09-27
---

# Dynamic Application Security Testing (DAST)

## Einführung

<!-- TODO: link to "statische Analysen" -->

**Dynamic Application Security Testing (DAST)** ist eine Methode zur Sicherheitsprüfung von Anwendungen im laufenden Betrieb. Im Gegensatz zu statischen Analysen überprüft DAST eine Anwendung während der Ausführung, um Sicherheitslücken und Schwachstellen zu identifizieren, die sich nur zur Laufzeit zeigen. Dies ermöglicht es, Sicherheitsprobleme zu erkennen, die durch Fehlkonfigurationen, Laufzeitumgebungen oder dynamische Inhalte entstehen.

## Phasen des DAST

DAST folgt einem strukturierten Prozess, um effektiv Sicherheitslücken zu identifizieren:

1. **Vorbereitung**
   - **Umfang definieren**: Festlegung, welche Teile der Anwendung getestet werden sollen.
   - **Zugangsdaten bereitstellen**: Falls erforderlich, Bereitstellung von Authentifizierungsinformationen für geschützte Bereiche.

2. **Scannen**
   - **Crawling der Anwendung**: Automatisches Durchsuchen der Anwendung, um alle verfügbaren Seiten und Funktionen zu identifizieren.
   - **Eingabepunkte identifizieren**: Feststellen, wo Nutzereingaben möglich sind.

3. **Analyse**
   - **Angriffssimulation**: Automatisiertes Senden von Anfragen mit bösartigen Payloads an die identifizierten Eingabepunkte.
   - **Reaktion beobachten**: Überwachung der Anwendung auf unerwartete oder unsichere Reaktionen.

4. **Berichterstattung**
   - **Ergebnisse dokumentieren**: Zusammenfassung der gefundenen Schwachstellen.
   - **Risikobewertung**: Einordnung der Sicherheitslücken nach Schweregrad.
   - **Empfehlungen**: Vorschläge zur Behebung der identifizierten Probleme.

## Arten von DAST-Tests

DAST kann auf verschiedene Arten von Anwendungen angewendet werden:

### Webanwendungen

- **Beschreibung**: Testen von webbasierten Anwendungen auf Sicherheitslücken wie SQL-Injection, Cross-Site Scripting (XSS) und mehr.
- **Ziel**: Sicherstellen, dass Webanwendungen gegen gängige Laufzeitangriffe geschützt sind.

### Mobile Anwendungen

- **Beschreibung**: Analyse von Backend-Diensten und APIs, die von mobilen Apps genutzt werden.
- **Ziel**: Identifizierung von Schwachstellen in der Kommunikation zwischen App und Server.

### APIs

- **Beschreibung**: Testen von RESTful und SOAP APIs auf Sicherheitslücken.
- **Ziel**: Sicherstellen, dass APIs sicher sind und keine unautorisierten Zugriffe oder Datenlecks ermöglichen.

### Cloud-Anwendungen

- **Beschreibung**: Überprüfung von Anwendungen, die in Cloud-Umgebungen gehostet werden.
- **Ziel**: Identifizierung von Sicherheitsproblemen, die spezifisch für Cloud-Umgebungen sind.

## Vorteile von DAST

- **Erkenntnisse in Echtzeit**: Erkennung von Sicherheitslücken, die nur während der Laufzeit sichtbar sind.
- **Plattformunabhängig**: Kann auf Anwendungen unabhängig von der verwendeten Programmiersprache angewendet werden.
- **Benutzerperspektive**: Simuliert Angriffe aus der Sicht eines externen Angreifers.

## Einschränkungen von DAST

- **Keine Code-Einblicke**: Da der Quellcode nicht analysiert wird, können bestimmte Arten von Sicherheitslücken übersehen werden.
- **False Positives**: Möglichkeit von Fehlalarmen, die manuell überprüft werden müssen.
- **Zeitaufwändig**: Scans können bei großen oder komplexen Anwendungen viel Zeit in Anspruch nehmen.

## Best Practices

- **Regelmäßige Scans**: DAST sollte regelmäßig durchgeführt werden, insbesondere nach Updates oder Änderungen an der Anwendung.
- **Kombination mit anderen Methoden**: Verwendung in Verbindung mit SAST (Static Application Security Testing) für eine umfassendere Sicherheitsanalyse.
- **Konfiguration anpassen**: Feinabstimmung der Scan-Einstellungen, um die Genauigkeit zu erhöhen und False Positives zu reduzieren.
- **Authentifizierte Scans**: Durchführung von Scans mit gültigen Anmeldeinformationen, um geschützte Bereiche der Anwendung zu testen.

## Fazit

DAST ist ein wichtiges Werkzeug im Arsenal der Anwendungssicherheit. Durch die Analyse von Anwendungen während der Laufzeit können Sicherheitslücken identifiziert werden, die durch statische Analysen nicht erfasst werden. Die Integration von DAST in den Entwicklungszyklus hilft dabei, Anwendungen sicherer zu machen und das Risiko von Sicherheitsvorfällen zu reduzieren.

## Weiterführende Ressourcen

- **OWASP ZAP (Zed Attack Proxy)**
  - Ein Open-Source-Tool für DAST
  - [OWASP ZAP Projektseite](https://www.zaproxy.org/)
- **Burp Suite**
  - Ein kommerzielles Tool für Sicherheitsüberprüfungen von Webanwendungen
  - [Burp Suite Webseite](https://portswigger.net/burp)
- **Literatur**
  - *Web Application Security, A Beginner's Guide* von Bryan Sullivan und Vincent Liu
