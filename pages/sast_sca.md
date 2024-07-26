---
layout: default
title: "Einführung in SAST und SCA: Sicherheitsanalyse von Code und Abhängigkeiten"
date: 2024-07-19
categories: security
author: Michael Wager
---

## Einführung

Zwei wichtige Methoden zur Sicherstellung der Sicherheit sind **SAST** (Static Application Security Testing) und **SCA** (Software Composition Analysis).

- **SAST** ist eine Methode zur Analyse von Quellcode auf Sicherheitslücken, ohne dass der Code ausgeführt wird. Dies ermöglicht es Entwicklern, Schwachstellen frühzeitig im Entwicklungsprozess zu erkennen und zu beheben. Ein SAST Tool durchsucht Quellcode nach Mustern, die auf potenzielle Sicherheitslücken hinweisen.
- **SCA** hingegen konzentriert sich auf die Analyse von Drittanbieter-Bibliotheken und Abhängigkeiten, die in einer Anwendung verwendet werden. Dabei wird überprüft, ob bekannte Sicherheitslücken in den verwendeten Abhängigkeiten existieren.

## Beispiel für SAST

SAST-Tools analysieren den Quellcode und identifizieren potenzielle Schwachstellen. Hier ein einfaches Beispiel in Python:

```python
def get_user_input():
    return input("Enter something: ")

def print_user_input():
    user_input = get_user_input()
    print("User input: " + user_input)

print_user_input()
```

In diesem Beispiel könnte ein SAST-Tool wie Semgrep eine Warnung ausgeben, dass die Eingabe des Benutzers ohne Validierung oder Sanitisierung direkt ausgegeben wird, was zu Sicherheitsproblemen wie Command Injection führen kann.

## Beispiel für SCA

SCA-Tools analysieren die verwendeten Abhängigkeiten und deren bekannte Sicherheitslücken. Hier ein Beispiel einer package.json-Datei für ein Node.js-Projekt:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.20"
  }
}
```

SCA-Tools wie `npm audit` können genutzt werden, um bekannte Schwachstellen in den Abhängigkeiten zu finden. Der Befehl prüft die Abhängigkeiten und gibt eine Liste von bekannten Sicherheitslücken aus, die in den verwendeten Versionen der Bibliotheken gefunden wurden.

Nützliche Tools

Es gibt viele Tools, die sowohl SAST als auch SCA unterstützen. Hier sind einige der bekanntesten:

- [Semgrep](https://semgrep.dev/): Ein einfach zu konfigurierendes SAST-Tool, das verschiedene Programmiersprachen unterstützt.
- [Snyk](https://snyk.io/): Ein umfassendes Sicherheits-Tool, das sowohl SAST als auch SCA bietet und eine einfache Integration in CI/CD-Pipelines ermöglicht.
- [npm audit](https://docs.npmjs.com/cli/v7/commands/npm-audit): Ein SCA-Tool für Node.js, das Abhängigkeiten auf bekannte Sicherheitslücken überprüft.
- [OWASP Dependency-Check](https://owasp.org/www-project-dependency-check/): Ein leistungsstarkes SCA-Tool zur Analyse von Abhängigkeiten in verschiedenen Programmiersprachen.
- [GitHub Security Features](https://github.com/features/security): GitHub bietet eingebaute Sicherheitsfeatures, einschließlich Abhängigkeits-Scans und SAST.
- [GitLab Security Features](https://about.gitlab.com/stages-devops-lifecycle/security/): GitLab bietet ebenfalls eine Vielzahl von Sicherheits-Tools, einschließlich SAST und SCA, die in CI/CD-Pipelines integriert werden können.

## Fazit

SAST und SCA sind wesentliche Komponenten des SSDLC. Während SAST den Quellcode direkt analysiert, konzentriert sich SCA auf die Sicherheit der Abhängigkeiten. Die Nutzung beider Methoden kann dazu beitragen, die Sicherheit der Anwendungen erheblich zu verbessern.

Mit den oben genannten Tools können Entwickler frühzeitig Sicherheitslücken erkennen und beheben, bevor sie in die Produktion gelangen. Durch die Integration dieser Tools in den Entwicklungsprozess wird ein höheres Maß an Sicherheit und Qualität in der Softwareentwicklung gewährleistet. Es wird daher empfohlen, genau wie statische Codeanalyse (i.e. Linting) oder UNIT-Tests, diese Tools automatisiert innerhalb einer CI/CD Pipeline zu integrieren.
