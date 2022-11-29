# Schritte für email validierung

- register (frontend) --> abschicken zum backend
- user erstellen, 
- verification Code (token - 10 Minuten gültig) für user erstellen
- token in Datenbank speichern
- bauen einen Link aus token und backend-host -->
- Link per email an user schicken
- klickt auf Link --> öffnet sich Browser
...
( route zum Frontend --> dann ein fetch zum backend durchführt (put /post))
...
- route aufgerufen 
    - token verifizieren
    - user suchen 
    - token vergleichen
    - (token löschen)
    - user vermerken: isConfirmed -> true
- danach kann sich user einloggen


## Ablauf
- im User Model activated ergänzen
- im user controller token erzeugen und speicher
- im controller verification Funktion schreiben
- im Route (userRouter) anlegen mit token als Parameter
- nodemailer installieren
- Email Skript schreiben
- Skript vom Controller aus aufrufen

## Was noch fehlt:
- automatische Weiterleitung nach dem registrieren (bzw. der Bestätigung der Email Adresse)
- verhindern das user sich einloggt ohne zuvor die Email zu bestätigen ( isConfirmed )
- den Link an das Frontend leiten und von dort ein fetch an Backend
