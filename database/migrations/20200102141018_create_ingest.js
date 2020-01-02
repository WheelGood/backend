exports.up = function(knex) {
  return knex.schema.createTable('ingest', tbl => {
    tbl
      .text('id', 128)
      .unique()
      .notNullable()
      .primary();
    tbl.boolean('accessibility').notNullable();
    tbl.float('confidence', 128).notNullable();
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
    tbl.index('id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingest');
};
