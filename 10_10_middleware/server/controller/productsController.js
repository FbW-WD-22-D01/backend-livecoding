function validateResponse(req, res) {
    res.json({msg: 'This is CORS-enabled for all Domains'})
}

export {validateResponse}