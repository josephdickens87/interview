const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('invalid ID'))
}

router.get('/', (req, res) => {
    queries.getAll().then(sneaker => {
        res.json(sneaker)
    })
})

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(sneaker => {
        if(sneaker){
            res.json(sneaker)
        } else {
            next()
        }
    })
})

module.exports = router