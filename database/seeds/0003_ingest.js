const ingest = JSON.parse(
  require('fs').readFileSync(__dirname + '/ingest.json', 'utf8')
);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingest')
    .del()
    .then(async function() {
      // Inserts seed entries
      // ingest.forEach(async row => {
      //   await knex('ingest').insert(row);
      // });
      for (let i = 0; i < ingest.length; i += 10) {
        await knex('ingest').insert(ingest.slice(i, i + 10));
      }
    });
};
