exports.up = function(knex) {
  return knex.schema.createTable('ingest', tbl => {
    tbl.increments('id');
    tbl.text('places_id').notNullable();
    tbl.boolean('accessibility').notNullable();
    tbl.float('confidence').notNullable();
    tbl.text('reference').unique();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.index('places_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingest');
};
