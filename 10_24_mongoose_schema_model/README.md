# Simple Mongoose - Express Application

## Aufgabe
- 2 Routen
    - GET Route `/`  --> Zeigt alle User
    - POST Route `/add` --> legt neuen User an

## Ablauf
- `express` initialisieren
- `express.json()` für alle Routen verfügbar machen
- 2 Routen anlegen (`POST`, `GET`)
- dazu passende Controller erstellen (mit mock response)
- Routen testen
- Datenbank initialisieren
- `UserSchema` anlegen
- User model erzeugen und exportieren
- `User` im `controller` importieren
- mongoose Methoden in Cotroller einbauen:
    - alle user anzeigen lassen --> `User.find()`
    - neuen User erstellen --> `new User()` `.save()`
- testen