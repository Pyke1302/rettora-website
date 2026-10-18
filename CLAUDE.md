# Rettora-Website – Hinweise für Claude und GPT

Die Website stellt Rettora als Entwicklungspartner für rettungsdienstliche Aus- und Fortbildung vor. Zielgruppe sind Rettungsdienstschulen, Hilfsorganisationen und Bildungsanbieter, nicht Lernende. Die Lernplattform selbst liegt in `Pyke1302/rettora-app`, die Videos in `Pyke1302/Rettora-Shorts`. Keine Dateien aus diesen Projekten hierher kopieren.

## Arbeitsweise (wie im App-Repo)
- Felix entscheidet, merged und gibt Veröffentlichungen frei. Er prüft alle medizinischen Inhalte.
- Niemand pusht auf `main`. Branches `claude/<thema>` oder `gpt/<thema>`, ein Pull Request pro Thema.
- Vor dem Livegang gilt die Checkliste in `docs/LIVEGANG.md`.

## Das Repo ist öffentlich
Alles hier ist für jeden lesbar, auch Commits und Branches. Deshalb nie ins Repo:
- Preise, Angebote, Kundennamen, Verhandlungsstände, interne Notizen
- private Kontaktdaten, die nicht ohnehin im Impressum stehen
- Zugangsdaten, Tokens, Hosting-Konfiguration mit Geheimnissen

## Technik
- Reine statische Seite: `index.html`, `impressum.html`, `datenschutz.html`, `assets/site.css`. Kein Build-Schritt.
- Einziges JavaScript ist `assets/anfrage.js`: Der Anfragebogen bereitet eine E-Mail im Mailprogramm der Besucher vor und überträgt nichts an die Website. Ohne JavaScript bleibt er ausgeblendet; die Seite funktioniert trotzdem.
- Veröffentlichung über den Workflow „Website veröffentlichen (GitHub Pages)“, nur von Hand und nur nach Freigabe von Felix. Er bricht ab, solange markierte Platzhalter offen sind.
- Schriften (Archivo, Source Serif 4) liegen selbst gehostet in `assets/fonts/` (SIL Open Font License). Keine Google Fonts oder anderen Drittanbieter einbinden, damit keine Daten an Dritte gehen.
- Farben: typisches Rettora-Blau wie in der Lernplattform und den Shorts (Navy `#07172d`, Cyan `#20d4d9` als Akzent, Rot `#ff6b75` als Signal). Als Variablen oben in `assets/site.css` definiert. Die Seite hat nur dieses eine Farbschema, unabhängig von der Systemeinstellung.
- Domain: rettora.de (bei netcup, dort auch das Postfach `kontakt@rettora.de`). Die Seite läuft bei GitHub Pages; die Repo-Variable `PAGES_DOMAIN` setzt die Domain.
- Der Workflow bricht ab, solange `class="fill"`, `class="todo"` oder `class="draft-note"` in den Seiten stehen.

## Inhaltliche Regeln
- Nichts versprechen, was es noch nicht gibt. Beispielpakete sind als Beispiele gekennzeichnet; Projekte werden mit ihrem echten Umfang genannt.
- Medizinische Angaben (z. B. Vitalwerte auf der Beispielkarte) nur nach Prüfung durch Felix ändern.
- Rettora ersetzt keine Lehrqualifikation und keine ärztliche Verantwortung. Dieser Hinweis bleibt auf der Seite.
- Ansprache der Besucher mit „Sie“.
- Namen von Felix und Thomas stehen nur im Impressum und in der Datenschutzerklärung, nicht auf der Startseite.
- Lernvideos verlinken auf YouTube; die Vorschaubilder in `assets/img/` sind Standbilder aus den eigenen Shorts.
