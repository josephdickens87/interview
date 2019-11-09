const sneakers = require('../sneakers')


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sneakers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sneakers').insert(sneakers);
    });
};
