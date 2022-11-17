import createHttpError from "http-errors"
import Record from "../models/Record.js"

export async function getRecords(req, res){

    const {min, max, band} = req.query

// Query definieren
    let search = Record.find()
    
// Query Block
    if (min)  search =  search.where('price').gt(min) 
    if (max)  search =  search.where('price').lt(max) 
    if (band) search =  search.where('band').equals(band)

// Query auflösen
    const records = await search
    
    if (records.length < 1) throw createHttpError.NotFound('Keine Records')
    
    res.status(200).send(records)
   

}