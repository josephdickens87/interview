const express = require('express')
const router = express.Router()
const queries = require('../db/fit-queries')

function isValidId(req, res, next){
    if(isNaN(req.params.id)) return next();
    next(new Error('invalid ID'))
}

function isValidFit(fit){
    const fitIsValid = typeof fit.fit == 'number' && fit.fit != null && (fit.fit > 0 && fit.fit < 6)
    return fitIsValid
}

router.post('/', (req, res, next) => {
    if(isValidFit(req.body)){
        queries.create(req.body).then(fit => {
            res.json(fit[0])
        })
    }else {
        next(new Error('Invalid Fit'))
    }
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