import Record from '../models/Record.js'
import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export async function getAllRecords (req, res, next) {
  const limit = Number(req.query.limit)
  const skip = Number(req.query.skip)
  const minPrice = Number(req.query.minPrice)
  const maxPrice = Number(req.query.maxPrice)
  const genre = req.query.genre
  let query = Record.find()

  if(limit) query = query.limit(limit)
  if(skip) query = query.skip(skip)
  if(minPrice) query = query.gte('price', minPrice)
  if(maxPrice) query = query.lte('price', maxPrice)
  if(genre) query = query.where('genre').equals(genre)

  const records = await query

  res.status(200).send(records)
}

/** @type {import("express").RequestHandler} */
export async function getRecordById (req, res, next) {
  const record = await Record.findById(req.params.id)

  if(!record) {
    // return next({status:404, message:'id nicht bekannt'})
    throw httpErrors.NotFound('id nicht bekannt')
  }

  res.status(200).send(record)
}

/** @type {import("express").RequestHandler} */
export async function createRecord (req, res, next) {
  // const record = new Record(req.body)
  // record.title = req.body.title
  // record.price = req.body.price + 2
  // await record.save()
  const record = await Record.create(req.body)

  res.status(200).send(record)
}