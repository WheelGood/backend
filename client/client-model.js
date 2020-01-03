const db = require('../database/dbConfig');

module.exports = {
  find
};

async function find(placeIds) {
  return await db('reviews').whereIn('place_id', placeIds);
}
