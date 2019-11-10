const fits = require('../fits')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fit').del()
    .then(function () {
      // Inserts seed entries
      return knex('fit').insert(fits);
    });
};