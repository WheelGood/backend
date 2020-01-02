module.exports = {
  /*=== development ===*/
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/wheelgood.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  },

  /*=== production ===*/
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    }
  }
};
