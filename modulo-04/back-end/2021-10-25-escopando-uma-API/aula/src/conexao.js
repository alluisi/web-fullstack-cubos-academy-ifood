const knex = require('knex')({
    client: 'pg',
    conection: {
        host: 'localhost',
        user: 'postgres',
        password: 'postgres',
        database: 'mini_insta'
    }
});

module.exports = knex;