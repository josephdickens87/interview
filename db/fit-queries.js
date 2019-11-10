const knex = require('./knex');

module.exports = {
    create(fit){
        return knex('fit').insert(fit, '*')
    },
    avgFit(id){
        return knex('fit').avg('fit').where('sneaker_id', id)
    }
}