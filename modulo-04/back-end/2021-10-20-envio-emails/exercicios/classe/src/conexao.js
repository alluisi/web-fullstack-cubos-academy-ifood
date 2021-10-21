const knex = require('knex')({
    client: 'pg',
    conection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'newsletter'
    }
});

module.exports = knex;