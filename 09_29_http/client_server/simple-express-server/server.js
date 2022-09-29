import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: '*', // Nur für development den * verwenden ansonsten bitte die exakte domain angeben z.B www.meineseite.de
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/DCI', (req, res) => {
  res.json({msg:'Hello DCI'})
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})