const sneaker = require('../sneakers')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sneaker').del()
    .then(function () {
      // Inserts seed entries
      return knex('sneaker').insert(sneaker);
    });
};
