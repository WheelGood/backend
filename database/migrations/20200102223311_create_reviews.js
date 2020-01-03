exports.up = function(knex) {
  return knex.schema.createTable('reviews', tbl => {
    tbl.increments('id').primary();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.text('place_id');
    tbl.integer('rating').notNullable();
    tbl.text('review');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reviews');
};
