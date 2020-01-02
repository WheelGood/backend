const util = require('util');
const db = require('../database/dbConfig');

module.exports = {
  find,
  insertOrUpdate
};

function find() {
  return db('ingest');
}

async function insertOrUpdate({ id, accessibility, confidence }) {
  const insert = db('ingest')
    .insert({ id, accessibility, confidence })
    .toString();

  const update = db('ingest')
    .update({ accessibility, confidence })
    .whereRaw('ingest.id = ?', [id]);

  const query = util.format(
    '%s ON CONFLICT (id) DO UPDATE SET %s',
    insert.toString(),
    update.toString().replace(/^update\s.*\sset\s/i, '')
  );

  return await db.raw(query);
}
