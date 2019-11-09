const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('sneakers')
    },
    getOne(id){
        return knex('sneakers').where('id', id).first()
    }
}