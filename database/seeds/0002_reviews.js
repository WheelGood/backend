exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('reviews').insert([
        {
          id: 1,
          user_id: 1,
          place_id: 'ChIJf3uV-rNqkFQRmkmlotz3KN0',
          accessibility: 1,
          review: 'Close curb cut, no steps, wide doors and passage'
        },
        {
          id: 2,
          user_id: 1,
          place_id: 'ChIJjSFKjLtqkFQRyQ_Rd1aUkTw',
          accessibility: 0,
          review: 'Had to go a long way around to get to a curb cut'
        },
        {
          id: 3,
          user_id: 1,
          place_id: 'ChIJhQFWj7xqkFQRvr0G6aXVQPw',
          accessibility: 0,
          review: 'Only way in is up 3 steps'
        }
      ]);
    });
};
