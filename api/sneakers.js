const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('invalid ID'))
}

function validSneaker(sneaker){
    const hasName = typeof sneaker.name == 'string' && sneaker.name.trim() != '';
    const hasColor = typeof sneaker.color == 'string' && sneaker.color.trim() != '';
    const hasPrice = typeof sneaker.price == 'number' && sneaker.price != null;
    return hasName && hasColor && hasPrice;
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

router.post('/', (req, res, next) => {
    if(validSneaker(req.body)){
        queries.create(req.body).then(sneaker => {
            res.json(sneaker[0])
        })
    }else{
        next(new Error('Invalid Sneaker'))
    }
})

module.exports = router