const knex = require('knex')({
    client: 'pg',
    conection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'exercicio_query_builder'
    }
});

module.exports = knex;