const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('sneaker')
    },
    getOne(id){
        return knex('sneaker').where('id', id).first()
    },
    create(sneaker){
        return knex('sneaker').insert(sneaker, '*')
    }
}