import * as dotenv from 'dotenv'

// Verzeichnis von server.js in Variable speichern
const workdir = process.cwd()

// Abhängig ob die Variable NODE_ENV==="production" ist, werden unterschiedliche .env Dateien geladen
if (process.env.NODE_ENV==='production'){
    console.log('Production Umgebung - do not mess around!')
    // Standard .env wird geladen
    dotenv.config()
}else{
    console.log('Development Umgebung gestartet') 
    // .env.dev für Entwicklung wird geladen
    dotenv.config({path: `${workdir}/.env.dev`})
}
