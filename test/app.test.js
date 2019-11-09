const knex = require('../db/knex')

describe('CRUD Sneakers', () => {
    before(() => {
        knex.migrate.latest()
            .then(()=> {
                return knex.seed.run()
            })
    })
})