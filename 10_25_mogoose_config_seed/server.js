import express from 'express'
import './config/config.js'

const app = express()


app.use(express.json())




app.get('/', (req,res) => res.send('läuft'))


app.listen(process.env.PORT, () => console.log('Server is running...', process.env.PORT))