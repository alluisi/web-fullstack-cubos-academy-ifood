// conexao.query('select * from agenda where id = $1', [5])
// const agenda = await knex('agenda').debug();
// const agenda = await knex.raw('select * from agenda');
// const agenda = await knex('agenda').where('id', 5).debug();
// const agenda = await knex('agenda').where('id', '!=', 5).debug();
// const agenda = await knex('agenda').select('id', 'nome').debug();
// const agenda = await knex('agenda').where({ id: 5 }).first().debug();
// const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();

// select * from agenda where email is null
// const agenda = await knex('agenda').whereNull('email').debug();
// select * from agenda where email is not null
// const agenda = await knex('agenda').whereNotNull('email').debug();
// select * from agenda where id between 5 and 10
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
// const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
// const agenda = await knex('agenda').distinct('email', 'nome').debug();

// select email, count(*) from agenda group by email
// const agenda = await knex('agenda').select('email').groupBy('email').count().debug();
// const agenda = await knex('agenda').limit(5).offset(2).debug();

// const agenda = await knex('agenda').whereNull('email').count().debug();
// const agenda = await knex('agenda').whereNull('email').debug();
// const agenda = await knex('agenda').whereNull('email').sum('id').debug();
// const agenda = await knex('agenda').whereNull('email').avg('id').debug();
// const agenda = await knex('agenda').whereNull('email').min('id').debug();
// const agenda = await knex('agenda').whereNull('email').max('id').debug();