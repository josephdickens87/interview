
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('sneaker', function(sneaker) {
      sneaker.increments('id').primary();
      sneaker.text('name').notNull().unique();
      sneaker.text('color').notNull();
      sneaker.decimal('price', 10, 2).notNull();
    })
    .createTable('fit', function(fit) {
      fit.integer('sneaker_id').references('id').inTable('sneaker').notNull().onDelete('cascade');
      fit.integer('fit').notNull();
    });
  };

  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable('fit')
    .dropTable('sneaker');
  }