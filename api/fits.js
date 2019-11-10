const express = require('express')
const router = express.Router()
const queries = require('../db/fit-queries')

function isValidId(req, res, next){
    if(!isNaN(req.params.id)) return next();
    next(new Error('invalid ID'))
}

// function validSneaker(sneaker){
//     const hasName = typeof sneaker.name == 'string' && sneaker.name.trim() != '';
//     const hasColor = typeof sneaker.color == 'string' && sneaker.color.trim() != '';
//     const hasPrice = typeof sneaker.price == 'number' && sneaker.price != null;
//     return hasName && hasColor && hasPrice;
// }

router.post('/', (req, res, next) => {
    queries.create(req.body).then(fit => {
        res.json(fit[0])
    })
})

router.get('/:id', isValidId, (req, res, next) => {
    queries.avgFit(req.params.id).then(fit => {
        if(fit){
            res.json(fit)
        } else {
            next()
        }
    })
})


module.exports = router