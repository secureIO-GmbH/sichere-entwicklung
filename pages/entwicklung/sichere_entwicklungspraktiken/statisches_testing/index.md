---
layout: default
title: "Test"
date: 2024-07-19
---

# Statisches Testing (SAST)
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



