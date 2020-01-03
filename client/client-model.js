const db = require('../database/dbConfig');

module.exports = {
  find
};

async function find(placeId) {
  return await db('reviews').where('place_id', placeId);
}
