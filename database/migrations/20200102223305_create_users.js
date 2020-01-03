exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id').primary();
    tbl
      .text('username')
      .unique()
      .notNullable();
    tbl.text('name');
    tbl.text('email');
    tbl.text('avatar');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
