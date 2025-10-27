---
layout: news
title: "Alles nur geklaut? – DeepSeek und Model Theft"
date: 2025-02-18
author: "Benjamin Altmiks"
tags: ["Cyber-Sicherheit", "Machine Learning and AI", "News"]
categories: ["News"]
image: "/assets/news/model_theft_titel.png"   # Teaser/OG-Bild
thumbnail: "/assets/news/model_theft_titel.png"
excerpt: "OpenAI wirft DeepSeek vor, mittels Model Theft ein eigenes KI-Modell auf Basis von ChatGPT aufgebaut zu haben. Was steckt dahinter – und was bedeutet das für Unternehmen?"
keywords:
  - DeepSeek
  - OpenAI
  - Model Theft
  - OWASP
  - LLM
  - KI-Sicherheit
  - Machine Learning
---

ChatGPT hat sich längst in den Arbeitsalltag eines Großteils der Computernutzenden integriert – weit über die Tech-Branche hinaus. Trotz des Erfolgs bleiben zentrale Kritikpunkte bestehen, allen voran der enorme Ressourcenverbrauch. Die *Neue Zürcher Zeitung* berichtet, dass eine einzelne ChatGPT-Anfrage bis zu **30-mal mehr Strom** verbraucht als eine Google-Suche[^nzz].

Ein neues Sprachmodell, das dank effizienterer Berechnungen weniger Chips benötigt und dadurch den Energieverbrauch senkt, wäre ein echter Fortschritt. Genau hier setzt **DeepSeek** an – mit der Argumentation einer ressourcenschonenderen Algorithmenbasis als rein technischer Verbesserung.

Doch was, wenn dieser vermeintliche Durchbruch gar nicht so innovativ ist – sondern **größtenteils nur abgeschaut oder gar kopiert** wurde?

![Meme/Illustration]({{ '/assets/news/model_theft_meme.png' | relative_url }})

Genau dieser Verdacht steht im Raum – **erhoben von OpenAI**. Wie die *Financial Times* berichtet, behauptet OpenAI, Beweise dafür zu haben, dass **Chinas DeepSeek** sein Modell **genutzt hat, um einen eigenen KI-Wettbewerber zu trainieren**[^ft]. 

## Was ist „Model Theft“?

Der Vorwurf dreht sich um **Model Theft** – den Diebstahl bzw. das Re-Engineering eines bereits trainierten Machine-Learning-Modells. Diese Bedrohung ist nicht neu: Bereits 2023 stufte **OWASP** sie sowohl unter die *Top 10 Risiken für Large Language Models (LLMs)* als auch unter die *Top 10 allgemeinen Machine-Learning-Risiken* ein.

Die Methode ist simpel und effektiv: Eine enorme Anzahl **gezielter Anfragen** wird an ein bestehendes Modell (hier: ChatGPT) gesendet. **Die Antworten dienen anschließend als Trainingsdaten** für ein neues Modell, das dieses Wissen nachbildet (*distillation/by-proxy training*).

![Trainingsidee / Architektur]({{ '/assets/news/model_theft_architecture.png' | relative_url }})

> Die obige Abbildung basiert auf *Tramèr et al. (2016)* und wurde für diesen Beitrag angepasst und erweitert[^tramer].

In der Grafik wird OpenAI als **Data Owner** bezeichnet, obwohl ChatGPT überwiegend auf **öffentlich verfügbaren Daten** trainiert wurde. Das wirft eine **ethische Frage** auf:  
Sollten Ergebnisse, die aus öffentlichen Daten generiert wurden, **ebenfalls frei verfügbar** sein? Gleichzeitig hat OpenAI erhebliche Ressourcen in **Datenaufbereitung, Klassifizierung und Infrastruktur** investiert – ein Schutz der erarbeiteten Leistung ist nachvollziehbar.

Welche Daten DeepSeek tatsächlich nutzte, **weiß nur das Unternehmen selbst**. Unabhängig davon bleibt der technische Ansatz **beeindruckend und zugleich beunruhigend**. Selbst wenn es „nur“ eine gelungene Nachbildung wäre, handelte es sich um einen **beachtlichen technologischen Fortschritt** – schließlich ist es bislang keinem anderen Anbieter gelungen, auf dieser Basis ein **konkurrenzfähiges Modell** in vergleichbarer Qualität zu veröffentlichen.

## Was bedeutet das für Unternehmen?

Unternehmen, die **eigene Sprachmodelle auf internen Daten** trainieren, müssen künftig sensibler agieren. Auch solche Modelle könnten **kopiert** und anschließend **zweckentfremdet** werden – von der Vorhersage unternehmensstrategischer Entscheidungen bis zur Rekonstruktion interner Prozesse.

Sprachmodelle sind **wertvolle Assets** – und sollten auch so **geschützt** werden: mit technischen, organisatorischen und vertraglichen Kontrollen über den gesamten **ML-Lifecycle** hinweg (u. a. **Rate-Limiting, Anomalie-Erkennung, Watermarking/Canaries, Output-Monitoring, Logging & Legal**).

---

### Quellen & weiterführende Informationen

- *Financial Times*: **OpenAI says it has evidence China’s DeepSeek used its model to train competitor**[^ft]  
- *Neue Zürcher Zeitung*: **ChatGPT vs. Google – Der massive Stromverbrauch der KI ist ein Problem**[^nzz]  
- **Stealing Machine Learning Models via Prediction APIs (2016)** – Tramèr et al.[^tramer]  
- **Lex Fridman Podcast** (YouTube) – Diskussionen zur KI-Sicherheitslage[^lex]

[^ft]: https://www.ft.com/ (Artikel: *OpenAI says it has evidence China’s DeepSeek used its model to train competitor*).  
[^nzz]: https://www.nzz.ch/ (Artikel zum Energieverbrauch von ChatGPT vs. Google).  
[^tramer]: https://arxiv.org/abs/1609.02943  
[^lex]: https://www.youtube.com/
