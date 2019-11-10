const knex = require('../db/knex');
const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
const fixtures = require('./fixtures')
const faker = require('faker')

describe('creates, reads and updates sneakers', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            }).then(() => done());
    })

    it('lists all sneakers', (done) => {
        request(app)
            .get('/api/sneakers')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).to.deep.equal(fixtures.sneakers);
                done();
            })
    })
    it('lists a sneaker by id', (done) => {
        request(app)
            .get('/api/sneakers/2')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.sneakers[1]);
                done();
            })
    })
    it('creates a sneaker', (done) => {
        const sneakerStub  = {
            "id": faker.random.number(),
            "name": faker.commerce.productName(),
            "color": faker.commerce.color(),
            "price": 99.99
        }

        request(app)
            .post('/api/sneakers')
            .send(sneakerStub)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body.id).to.equal(sneakerStub.id);
                expect(response.body.color).to.equal(sneakerStub.color);
                expect(response.body.price).to.equal(sneakerStub.price.toString());
                done();
            })
    })
    it('updates a sneaker', (done) => {
        fixtures.sneakers.price = 800
        request(app)
            .put('/api/sneakers/1')
            .send(fixtures.sneaker)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body.id).to.equal(fixtures.sneaker.id);
                expect(response.body.color).to.equal(fixtures.sneaker.color);
                expect(response.body.price).to.equal(fixtures.sneaker.price.toString());
                done();
            })
    })

    it('deletes a sneaker by id', (done) => {
        request(app)
            .delete('/api/sneakers/2')
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
            })
    })
})

describe('derps', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            }).then(() => done());
    })

    it('adds a fit', (done) => {
        const fitStub  = {
            "sneaker_id": fixtures.sneakers[0].id,
            "sneaker_name": fixtures.sneakers[0].name,
            "fit": 3
        }

        request(app)
            .post('/api/fit')
            .send(fitStub)
            .set('Accept', 'application/json')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body.sneaker_id).to.equal(fitStub.sneaker_id);
                expect(response.body.sneaker_name).to.equal(fitStub.sneaker_name);
                expect(response.body.fit).to.equal(fitStub.fit);
                done();
            })
    })
})