module.exports = {
  /*=== development ===*/
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/wheelgood.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./database/migrations"
    },
    useNullAsDefault: true
  },

  /*=== production ===*/
  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
