const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('invalid ID'))
}

router.get('/', (req, res) => {
    queries.getAll().then(sneakers => {
        res.json(sneakers)
    })
})

router.get('/:id', isValidId, (req, res) => {
    queries.getOne(req.params.id).then(sneakers => {
        res.json(sneakers);
    })
})

module.exports = router