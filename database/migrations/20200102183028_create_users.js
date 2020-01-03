exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id');
    tbl
      .text('username')
      .unique()
      .notNullable();
    tbl.text('first_name');
    tbl.text('last_name');
    tbl.text('avatar');
    tbl.text('description');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
