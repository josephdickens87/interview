exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('sneakers', function(sneakers) {
    sneakers.increments('id').primary();
    sneakers.text('name').notNull().unique();
    sneakers.text('color').notNull();
    sneakers.decimal('price', 10, 2).notNull();
  })
  .createTable('fit', function(fit) {
    fit.integer('sneakers_id').references('id').inTable('sneakers').notNull().onDelete('cascade');
    fit.text('sneakers_name').references('name').inTable('sneakers').notNull().onDelete('cascade');
    fit.integer('fit').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTable('fit')
  .dropTable('sneakers');
}
