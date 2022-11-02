import Record from '../models/Record.js'
import httpErrors from 'http-errors'

/** @type {import("express").RequestHandler} */
export async function getAllRecords (req, res, next) {
  const records = await Record.find()
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