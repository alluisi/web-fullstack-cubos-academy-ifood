// const quantidadeMedicamentos = await knex('farmacia').count();

// const usuarioMaisNovo = await knex('usuarios').min('idade').debug();

// const somaCategoria = await knex('farmacia')
//     .select('categoria')
//     .sum('estoque')
//     .whereNotNull('categoria')
//     .groupBy('categoria')
//     .debug();

// const categoriaNull = await knex('farmacia').whereNull('categoria').count().debug();

// const quantidadeCategoria = await knex('farmacia')
//     .select('categoria')
//     .count()
//     .whereNotNull('categoria')
//     .groupBy('categoria')
//     .debug();

// const quantidadeUsuario = await knex('usuarios')
//     .select('idade')
//     .count()
//     .where('idade', '>=', 18)
//     .groupBy('idade')
//     .debug();
