const util = require('util');
const db = require('../database/dbConfig');

module.exports = {
  find,
  insertOrUpdate
};

function find() {
  return db('ingest');
}

async function insertOrUpdate(rows) {
  const result = rows.map(
    async ({ places_id, accessibility, confidence, reference = null }) => {
      const insert = db('ingest')
        .insert({
          places_id,
          accessibility,
          confidence,
          reference
        })
        .toString();

      const update = db('ingest')
        .update({ places_id, accessibility, confidence, reference })
        .whereRaw('ingest.reference = ?', [reference]);

      const query = util.format(
        '%s ON CONFLICT (reference ) DO UPDATE SET %s',
        insert.toString(),
        update.toString().replace(/^update\s.*\sset\s/i, '')
      );

      if (reference) {
        return await db.raw(query);
      } else {
        return await db.raw(insert.toString());
      }
    }
  );
  return result.length;
}
