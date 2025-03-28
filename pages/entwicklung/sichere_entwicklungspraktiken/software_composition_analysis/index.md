---
layout: default
title: "Test"
date: 2024-07-19
---

# Software Composition Analysis (SCA)

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
