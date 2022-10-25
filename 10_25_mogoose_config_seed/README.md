# Config für.env Dateien und Seed Skript

## Config Datei

### Idee
Eine Config Datei haben, die in jedes Projekt eingebunden werden kann, zwischen 2 unterschiedlichen Umgebungen unterscheidet ('Production' & 'Development') und entsprechnd unterschiedliche Werte in die Environment Variablen lädt.

### Umsetzung
- das Verzeichnis der .env.development suchen --> mit `process.cwd()` ausgeben und in Variable `workdir` speichern
- beim Start überprüfen ob eine environment Variable `NODE_ENV` exisitert und den Wert `production` hat
- wenn Produktionsumgebeung die "normale" .env Datei lasen
- wenn keine Produktionsumgebung die `.env.dev` laden, mit `dotenv.config({ path: 'Pfad zur .env.dev Datei' })`

<br><br>

## Seed Skript

### Idee
Ein Skript entwickeln, dass ausgehend von unserem model fake Daten in die Datenbank lädt. So kann bei der Entwicklung des Backends mit sauberen Daten und konsistenten Daten gearbeitet werden.

### Umsetzung
- [Faker Paket](https://www.npmjs.com/package/@faker-js/faker) laden, um die Daten zu erzeugen --> `npm i @faker-js/faker`
- die zum Backend gehörende Datenbank verbinden

- einen Array aus erzeugen, hier mit `.map()` 
- beim Durchlauf der `map()` jeweils ein neues Objekt mit faker Daten erstellen
- am Ende jedes Schleifendurchlaufs ein Promise (noch nicht aufgelöst!) zurückgeben -->`return User.create()`, beim späteren Auflösen wird das User Objekt in die Datenbank übertragen 
- den Array aus Promises auflösen mit `await Promise.all()`
- die Verbindung zur Datenbank schließen mit `mongoose.connection.close()`

### Bug 

*Die Config Datei sucht sich `env.dev` ausgehend von der Datei von der aus sie geladen wird. Für die `server.js` funktioniert das. Wird die `config.js` Datei aber durch das seed Skript eingebunden, wird die `.env.dev` nicht mehr gefunden, da der Startpunkt in einem Unterverzeichnis (`./seed`) liegt. Das Problem entsteht durch das `process.cwd()`, welches das Arbeitsverzeichnis ausgibt. Besser wäre es, das Verzeichnis der config.js auszugeben und von dort die .env Datei anzusteuern und zu laden. Wird später korrigiert :-)*