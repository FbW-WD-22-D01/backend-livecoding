# Cookies benutzen, worauf achten?

# Worauf achten?

## 1. Schritt (Funktionalität im ThunderClient)

### usersController
- `res.cookie('token', token, cookieOptions)`

### auth
- `req.cookies` auslesen + in `token` speichern

### server.js
- `cookie-parser` installieren


## 2. Schritt Browser Entwicklungsumgebung
- dafür das Cookies benuutzt werden können, muss:
    - im Backend: `server.js` `cors()` --> `credentials: true` hinzufügen
    - im Frontend: 
        - `Login.jsx` --> `credentials: 'include'`
        - `UserDetails` --> `credentials: 'include'`

- allerdings Cookies können so noch mit JS ausgelesen werden (siehe [XSS-Angriff](https://owasp.org/www-community/attacks/xss/)):
    - `httpOnly: true`
- von welcher Site asugehend können Cookies ausgelesen werden, `sameSite` Attribut (siehe [CSRF-Angriff](https://owasp.org/www-community/attacks/csrf)):
    - `lax` (default) --> keine 3rd Parties, aber von abweichenden Unterrouten
    - `strict` keine andren Routen
    - `none` --> auch third Parties (benötigt `secure true`)
- `secure: true` Cookies werden nur per https verschickt (kann bei localhost Probleme machen)

--> das sind nur einfache Schutzmöglichkeiten, diese bieten keinen vollen Schutz vor diesen Angriffen, lest die Dokumentation und vertraut weder euren Nutzern noch euch ;-) 

## 3. Schritt Frontend anpassen, Logout schreiben