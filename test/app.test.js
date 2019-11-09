const knex = require('../db/knex');

describe('derp', () => {
    before(() => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            })
    })
})