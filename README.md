# Rettora Website

Website-Projekt für **Rettora – medizinische Lernmedien und Schulungskonzepte**.

Dieses Repository dient der gemeinsamen Entwicklung der B2B-Website für Rettungsdienstschulen, Hilfsorganisationen und medizinische Bildungsanbieter.

## Arbeitsregeln

- Nach dem Bootstrap keine Änderungen direkt auf `main`.
- Für Änderungen Branch + Pull Request verwenden.
- Keine Veröffentlichung ohne ausdrückliche Freigabe.
- Medizinische Aussagen vor Veröffentlichung fachlich prüfen.
- Keine erfundenen Kunden, Referenzen, Kooperationen oder Qualifikationen darstellen.

## Aufbau

Statische Seite ohne Build-Schritt:

- `index.html` – Onepager (Angebot, Ablauf, Über Rettora, Anfrage)
- `impressum.html`, `datenschutz.html` – **Entwürfe mit Platzhaltern**, vor Veröffentlichung ausfüllen
- `assets/style.css`, `assets/app.js` – Gestaltung und Anfrageformular (bereitet nur eine E-Mail vor, überträgt keine Daten)
- `assets/fonts/` – Schrift Archivo, selbst gehostet (SIL Open Font License, siehe `OFL-Archivo.txt`)
- `assets/img/` – Standbilder aus den Rettora-Shorts

Lokal ansehen: `python3 -m http.server` im Repo starten und `http://localhost:8000` öffnen.

## Veröffentlichen

1. In `assets/app.js` die Kontaktadresse (`KONTAKT_EMAIL`) eintragen.
2. Impressum und Datenschutz vollständig ausfüllen.
3. In den Repo-Einstellungen unter **Settings → Pages** als Quelle **GitHub Actions** wählen.
4. Unter **Actions → „Website veröffentlichen (GitHub Pages)“** den Workflow von Hand starten. Er bricht ab, solange Platzhalter oder die Kontaktadresse fehlen.

## Eigene Domain (später)

1. Domain kaufen, z. B. bei IONOS, Strato oder All-Inkl.
2. Beim Domain-Anbieter einen DNS-Eintrag anlegen:
   - für `www.deine-domain.de`: **CNAME** auf `pyke1302.github.io`
   - für die Domain ohne `www`: vier **A-Einträge** auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Im Repo unter **Settings → Secrets and variables → Actions → Variables** die Variable `PAGES_DOMAIN` anlegen, z. B. `www.rettora.de`.
4. Workflow erneut starten. Unter **Settings → Pages** danach „Enforce HTTPS“ aktivieren.

Bis dahin läuft die Seite unter `https://pyke1302.github.io/rettora-website/`. Alle Links auf der Seite sind relativ und funktionieren unter beiden Adressen.
