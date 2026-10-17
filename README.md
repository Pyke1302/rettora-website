# Rettora Website

Website-Projekt für **Rettora – medizinische Lernmedien und Schulungskonzepte**.

Dieses Repository dient der gemeinsamen Entwicklung der B2B-Website für Rettungsdienstschulen, Hilfsorganisationen und medizinische Bildungsanbieter.

## Arbeitsregeln

- Nach dem Bootstrap keine Änderungen direkt auf `main`.
- Für Änderungen Branch + Pull Request verwenden.
- Keine Veröffentlichung ohne ausdrückliche Freigabe.
- Medizinische Aussagen vor Veröffentlichung fachlich prüfen.
- Keine erfundenen Kunden, Referenzen, Kooperationen oder Qualifikationen darstellen.

Weitere Hinweise in [CLAUDE.md](CLAUDE.md). Das Repo ist öffentlich.

## Ansehen
`index.html` im Browser öffnen, oder lokal einen Server starten:

```
python3 -m http.server 8000
```

und `http://localhost:8000` aufrufen.

## Struktur
- `index.html` – Startseite
- `impressum.html`, `datenschutz.html` – Rechtstexte (Entwurf mit Platzhaltern)
- `assets/site.css` – Gestaltung, Farben und Schriften
- `assets/anfrage.js` – Anfragebogen (öffnet eine vorbereitete E-Mail, sendet nichts)
- `assets/img/` – Vorschaubilder der Lernvideos
- `.github/workflows/pages.yml` – Veröffentlichung auf GitHub Pages, nur von Hand
- `assets/fonts/` – selbst gehostete Schriften mit Lizenzen
- `docs/LIVEGANG.md` – was vor der Veröffentlichung erledigt sein muss
