// // Update with your config settings.

// module.exports = {
//     client: 'pg',
//     // connection: {
//     //   host: 'localhost',
//     //   user: 'user1',
//     //   password: 'mypass'
//     // },
//     connection:'postgres://localhost/test_db',
//     user: 'user1',
//     password: 'mypass',
//     migrations: {
//       directory: './db/migrations'
//     }
// };





module.exports = {
  development: {
    client: 'postgresql',
    connection: 'postgres://postgres:postgres@localhost:5432/my_db1',
    migrations: {
      talbeName: "migration_table1",
      directory: './db/migrations'
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/<examples_test>',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}