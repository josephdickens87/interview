const knex = require('./knex');

module.exports = {
    create(fit){
        return knex('fit').insert(fit, '*')
    }
}