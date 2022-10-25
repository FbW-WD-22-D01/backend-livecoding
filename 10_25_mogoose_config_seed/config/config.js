import * as dotenv from 'dotenv'

const workdir = process.cwd()

if (process.env.NODE_ENV==='production'){
    console.log('Production Umgebung - do not mess around!')
    dotenv.config()
}else{
    console.log('Development Umgebung gestartet') 
    dotenv.config({path: `${workdir}/.env.dev`})
}
