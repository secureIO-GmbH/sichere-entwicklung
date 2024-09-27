---
layout: default
title: Sichere Coding-Richtlinien
date: 2024-09-27
---

# Sichere Coding-Guidelines basierend auf den OWASP Top 10 (2021)

<!-- todo: mehr beispiele, links to other pages (zb bei design) -->

Sicheres Programmieren ist unerlässlich, um Anwendungen vor potenziellen Angriffen und Sicherheitslücken zu schützen. Die **OWASP Top 10** (2021) identifizieren die häufigsten Sicherheitsrisiken für Webanwendungen. Dieser Leitfaden präsentiert bewährte Praktiken und liefert praktische Code-Beispiele, um die Konzepte zu veranschaulichen.

---

## OWASP Top 10 Sicherheitsrisiken mit Code-Beispielen

### 1. Broken Access Control (Zugriffskontrolle verletzt)

**Beschreibung**: Zugriffskontrollen verhindern, dass Benutzer auf Ressourcen oder Funktionen zugreifen, für die sie nicht autorisiert sind. Verstöße gegen diese Kontrollen sind häufig.

**Best Practices**:

- Implementieren Sie serverseitige Zugriffskontrollen.
- Überprüfen Sie Zugriffsrechte für jede geschützte Funktion.
- Verwenden Sie geprüfte Authentifizierungs- und Autorisierungsframeworks.
- Vermeiden Sie die Verwendung von Client-seitigen Sicherheitskontrollen als einzige Maßnahme.

**Node.js Beispiel (Middleware für Zugriffskontrolle)**

```javascript
function isAdmin(req, res, next) {
  if (req.user && req.user.role === 'admin') {
    next(); // Zugriff gewährt
  } else {
    res.status(403).send('Zugriff verweigert');
  }
}

app.get('/admin', isAdmin, function(req, res) {
  res.send('Willkommen im Admin-Bereich');
});
```

---

### 2. Cryptographic Failures (Kryptografische Fehler)

**Beschreibung**: Unsichere Kryptografie oder das Fehlen von Verschlüsselung können zu Datenverletzungen führen.

**Best Practices**:

- Verwenden Sie bewährte Verschlüsselungsalgorithmen (z.B. AES-256, RSA).
- Schützen Sie vertrauliche Daten sowohl bei der Übertragung als auch im Ruhezustand.
- Stellen Sie sicher, dass Passwörter mit starken Hashing-Algorithmen (z.B. bcrypt) gespeichert werden.

**Node.js Beispiel (Passwort-Hashing mit bcrypt)**

```javascript
const bcrypt = require('bcrypt');
const saltRounds = 12;

app.post('/register', function(req, res) {
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, function(err, hash) {
    // Speichern Sie das gehashte Passwort in der Datenbank
    db.saveUser({ username: req.body.username, password: hash });
    res.send('Registrierung erfolgreich');
  });
});
```

---

### 3. Injection (Injection-Schwachstellen)

**Beschreibung**: Injection-Schwachstellen entstehen, wenn ungeprüfte Daten an einen Interpreter gesendet werden, was es Angreifern ermöglicht, Befehle auszuführen.

**Best Practices**:

- Verwenden Sie vorbereitete Anweisungen (Prepared Statements).
- Validieren Sie alle Benutzereingaben.

**Java Beispiel (Prepared Statements für SQL)**

```java
String id = request.getParameter("id");
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = connection.prepareStatement(query);
pstmt.setString(1, id);
ResultSet rs = pstmt.executeQuery();
```

---

### 4. Insecure Design (Unsicheres Design)

**Beschreibung**: Ein unsicheres Design fehlt an Sicherheitskontrollen und Prinzipien, was zu Schwachstellen führt.

**Best Practices**:

- Verwenden Sie Security-by-Design-Prinzipien.
- Integrieren Sie Bedrohungsmodellierung in den Entwicklungsprozess.

---

### 5. Security Misconfiguration (Fehlkonfiguration der Sicherheit)

**Beschreibung**: Unsichere Standardeinstellungen oder falsch konfigurierte Server, Frameworks und Anwendungen können zu Angriffen führen.

**Best Practices**:

- Überprüfen und härten Sie die Konfigurationen von Servern und Frameworks.
- Entfernen Sie nicht benötigte Dienste und Funktionen.
- Verwenden Sie Sicherheitsheader wie Content Security Policy (CSP).

---

### 6. Vulnerable and Outdated Components (Verwundbare und veraltete Komponenten)

**Beschreibung**: Die Verwendung von veralteten oder unsicheren Komponenten gefährdet die Anwendung.

**Best Practices**:

- Halten Sie Bibliotheken und Frameworks auf dem neuesten Stand.
- Entfernen Sie nicht benötigte Abhängigkeiten.
- Verwenden Sie Tools wie `npm audit` oder OWASP Dependency-Check, um Schwachstellen zu identifizieren.

---

### 7. Identification and Authentication Failures (Identifikations- und Authentifizierungsfehler)

**Beschreibung**: Unsichere Implementierungen der Authentifizierung ermöglichen es Angreifern, Identitäten zu übernehmen.

**Best Practices**:

- Implementieren Sie starke Passwortrichtlinien.
- Verwenden Sie Multi-Faktor-Authentifizierung (MFA).
- Schützen Sie Sitzungstoken.

**Java Beispiel (Sitzungs-Timeout)**

```java
HttpSession session = request.getSession();
session.setMaxInactiveInterval(15 * 60); // Sitzung läuft nach 15 Minuten ab
```

---

### 8. Software and Data Integrity Failures (Fehler bei der Integrität von Software und Daten)

**Beschreibung**: Fehler bei der Software- und Datenintegrität treten auf, wenn Software-Updates und Datenübertragungen nicht sicher durchgeführt werden.

**Best Practices**:

- Verwenden Sie digitale Signaturen für Software-Updates.
- Überprüfen Sie die Integrität von Daten während der Übertragung.

---

### 9. Security Logging and Monitoring Failures (Fehlende Sicherheitsprotokollierung und Überwachung)

**Beschreibung**: Unzureichende Protokollierung und Überwachung machen es schwer, Angriffe zu erkennen und darauf zu reagieren.

**Best Practices**:

- Implementieren Sie umfassende Protokollierung von sicherheitsrelevanten Ereignissen.
- Verwenden Sie Überwachungstools zur Erkennung von Angriffen.
- Schützen Sie Logs vor Manipulation.

**Node.js Beispiel (Winston-Logging)**

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'app.log' })
  ]
});

app.use(function(req, res, next) {
  logger.info(`${req.method} ${req.url} von ${req.ip}`);
  next();
});
```

---

### 10. Server-Side Request Forgery (SSRF)

**Beschreibung**: SSRF-Schwachstellen treten auf, wenn ein Server externe Ressourcen anfordert, ohne die Eingaben zu validieren, was zu unbefugtem Zugriff führen kann.

**Best Practices**:

- Validieren und beschränken Sie ausgehende Verbindungen.
- Verwenden Sie Firewall-Regeln, um unerwünschte externe Anfragen zu blockieren.

---

## Fazit

Die Umsetzung sicherer Coding-Richtlinien basierend auf den OWASP Top 10 (2021) ist entscheidend, um Anwendungen vor einer Vielzahl von Bedrohungen zu schützen. Durch die Anwendung bewährter Praktiken können Entwickler die Sicherheit ihrer Anwendungen erheblich verbessern.

---

## Weiterführende Ressourcen

- **OWASP Top 10 (2021)**: [Offizielle Webseite](https://owasp.org/www-project-top-ten/)
- **OWASP Secure Coding Practices**: [Leitfaden](https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/)
