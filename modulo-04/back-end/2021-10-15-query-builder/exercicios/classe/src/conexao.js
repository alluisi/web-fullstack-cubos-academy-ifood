const knex = require('knex')({
    client: 'pg',
    conection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'market_cubos'
    }
});

module.exports = knex;