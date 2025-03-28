---
layout: default
title: "SAST, SCA und Secret Scanning: Ein Überblick mit Codebeispielen"
date: 2024-07-19
categories: [security, devops]
author: Michael Wager
tags: [sast, sca, security-scanning, secret-scanning]
---


# Secret Scanning

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
