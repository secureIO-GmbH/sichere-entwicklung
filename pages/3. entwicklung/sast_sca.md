---
layout: default
title: "SAST, SCA und Secret Scanning: Ein Überblick mit Codebeispielen"
date: 2024-07-19
categories: [security, devops]
author: Michael Wager
tags: [sast, sca, security-scanning, secret-scanning]
---

# SAST, SCA und Secret Scanning: Ein Überblick mit Codebeispielen

In der heutigen Entwicklungswelt sind Sicherheitslücken ein ernstes Problem. Zwei weit verbreitete Ansätze zur Verbesserung der Code-Sicherheit sind *Static Application Security Testing* (SAST) und *Software Composition Analysis* (SCA). Zusätzlich gewinnt das Secret Scanning immer mehr an Bedeutung. In diesem Beitrag werfen wir einen Blick auf diese drei Ansätze und liefern Codebeispiele, die veranschaulichen, wie Sicherheitslücken und Schwachstellen erkannt werden können.

## SAST (Static Application Security Testing)

SAST untersucht den Quellcode einer Anwendung auf Sicherheitslücken. Diese Analyse erfolgt statisch, d. h. ohne dass die Anwendung tatsächlich ausgeführt wird. Typische Probleme, die SAST erkennen kann, sind SQL-Injection, XSS (Cross-Site Scripting) und unsichere Zugriffskontrollen.

### Beispiel 1: SQL-Injection

```python
def get_user_data(user_id):
    query = "SELECT * FROM users WHERE id = '" + user_id + "'"
    db.execute(query)
```

#### Erklärung
In diesem Code wird der Benutzerinput `user_id` direkt in die SQL-Abfrage eingebettet, was ihn anfällig für SQL-Injection-Angriffe macht. Ein SAST-Tool erkennt dieses Muster, da es auf unsichere SQL-Konstrukte prüft, bei denen der Benutzerinput nicht ordnungsgemäß validiert wird.

### Beispiel 2: Unsicherer Zugriff auf Dateien

```java
public void readFile(String fileName) {
    File file = new File(fileName);
    BufferedReader reader = new BufferedReader(new FileReader(file));
}
```

#### Erklärung
Dieser Code öffnet eine Datei, die vom Benutzer angegeben wurde, ohne eine Sicherheitsprüfung durchzuführen. Ein SAST-Tool wird hier eine potenzielle Schwachstelle erkennen, da ein Angreifer möglicherweise beliebige Dateien lesen kann, einschließlich sensibler Dateien.

### Beispiel 3: Harte Kodierung von Passwörtern

```javascript
const dbPassword = "mySecretPassword123";
```

#### Erklärung
SAST-Tools erkennen harte Kodierung von Geheimnissen wie Passwörter oder API-Schlüssel im Quellcode. Dies stellt ein Sicherheitsrisiko dar, da hart kodierte Geheimnisse leicht extrahiert werden können.

## SCA (Software Composition Analysis)

SCA befasst sich mit den Abhängigkeiten einer Anwendung. Die meisten modernen Anwendungen nutzen externe Bibliotheken und Pakete, die wiederum Sicherheitslücken enthalten können. SCA-Tools analysieren diese Abhängigkeiten und vergleichen sie mit bekannten Schwachstellen-Datenbanken.

### Beispiel 1: Veraltete Bibliotheken

```json
{
  "dependencies": {
    "express": "3.0.0"
  }
}
```

#### Erklärung
Hier wird eine veraltete Version von `express` verwendet, die möglicherweise bekannte Sicherheitslücken aufweist. Ein SCA-Tool wie OWASP Dependency-Check oder GitHub Dependabot würde diese Abhängigkeit identifizieren und eine Warnung ausgeben.

### Beispiel 2: Verwundbare Abhängigkeit

```xml
<dependency>
  <groupId>org.apache.struts</groupId>
  <artifactId>struts2-core</artifactId>
  <version>2.3.1</version>
</dependency>
```

#### Erklärung
Eine bekannte Schwachstelle in Struts2 ([CVE-2017-5638](https://nvd.nist.gov/vuln/detail/CVE-2017-5638)) kann Angreifern die Ausführung beliebigen Codes ermöglichen. SCA-Tools erkennen diese potenziellen Gefahren, indem sie die Versionen der Abhängigkeiten mit bekannten Schwachstellen abgleichen.

### Beispiel 3: Lizenzrisiken

```yaml
dependencies:
  - name: openssl
    version: 1.0.1g
```

#### Erklärung
Ein SCA-Tool erkennt möglicherweise, dass `openssl 1.0.1g` eine Lizenz verwendet, die mit den Richtlinien des Unternehmens nicht kompatibel ist. Lizenzrisiken können in vielen Organisationen eine Bedrohung darstellen, da sie zu rechtlichen Problemen führen können.

## Secret Scanning

Secret Scanning zielt darauf ab, vertrauliche Informationen wie API-Schlüssel, Zugangsdaten oder Tokens im Quellcode zu erkennen und zu verhindern, dass diese ungesichert bleiben.

### Beispiel 1: API-Schlüssel im Code

```python
api_key = "12345-abcdefg-67890-hijklmn"
```

#### Erklärung
Secret Scanning-Tools, wie sie beispielsweise GitHub oder Snyk bieten, erkennen hart kodierte API-Schlüssel und warnen den Entwickler, bevor dieser Code in ein öffentliches Repository gelangt.

### Beispiel 2: AWS-Zugangsschlüssel

```bash
export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
```

#### Erklärung
Auch hart kodierte Zugangsschlüssel für Cloud-Dienste wie AWS können von Secret Scanning-Tools entdeckt werden. Diese Informationen sollten niemals im Quellcode verbleiben, da sie Angreifern direkten Zugriff auf die Infrastruktur geben könnten.

### Beispiel 3: GitHub Token im Code

```javascript
const githubToken = "ghp_ABC1234567890"
```

#### Erklärung
Ein GitHub-Token im Quellcode stellt eine massive Sicherheitslücke dar, da es Zugriff auf private Repositories oder Automatisierungspipelines ermöglichen könnte. Secret Scanning-Tools durchsuchen den Code nach solchen Tokens und verhindern den versehentlichen Missbrauch.

## Fazit

SAST, SCA und Secret Scanning sind unverzichtbare Werkzeuge, um die Sicherheit von Anwendungen zu gewährleisten. Sie greifen verschiedene Aspekte der Code- und Abhängigkeitsanalyse auf und helfen Entwicklern, Schwachstellen frühzeitig zu erkennen und zu beheben.

### Nützliche Tools:

- **GitHub Security Scans**: Bietet integrierte Funktionen für SAST, SCA und Secret Scanning. [Mehr erfahren](https://docs.github.com/en/code-security/secure-coding).
- **Dependabot**: Ein GitHub-Dienst, der SCA durch die Überwachung von Abhängigkeiten übernimmt. [Mehr erfahren](https://github.com/dependabot).
- **OWASP Dependency-Check**: Ein beliebtes Tool zur Analyse von Abhängigkeiten auf bekannte Schwachstellen. [Mehr erfahren](https://owasp.org/www-project-dependency-check/).
- **Checkmarx**: Bietet eine umfassende SAST-Lösung für die Sicherheitsanalyse von Quellcode. [Mehr erfahren](https://checkmarx.com/).
- **Snyk**: Ein führendes Tool für SCA und Secret Scanning. [Mehr erfahren](https://snyk.io/).

Durch den Einsatz dieser Tools können Entwickler sicherstellen, dass ihre Anwendungen sicher und widerstandsfähig gegen Angriffe sind.
