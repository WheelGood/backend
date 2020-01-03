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
          rating: 5,
          review: 'Close curb cut, no steps, wide doors and passage'
        },
        {
          id: 2,
          user_id: 1,
          place_id: 'ChIJjSFKjLtqkFQRyQ_Rd1aUkTw',
          rating: 3,
          review: 'Had to go a long way around to get to a curb cut'
        },
        {
          id: 3,
          user_id: 1,
          place_id: 'ChIJhQFWj7xqkFQRvr0G6aXVQPw',
          rating: 1,
          review: 'Only way in is up 3 steps'
        },
        {
          id: 4,
          user_id: 2,
          place_id: 'ChIJhQFWj7xqkFQRvr0G6aXVQPw',
          rating: 3,
          review: 'Stairs'
        }
      ]);
    });
};
