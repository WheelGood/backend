exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'davesquared',
          name: 'Dave Davis',
          email: 'davedavis@example.com',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
      ]);
    });
};
