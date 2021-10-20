const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    // const maria = {
    //     nome: 'Maria',
    //     email: 'maria@email.com',
    //     telefone: '(99) 9999-9999'
    // }

    // const joao = {
    //     nome: 'João',
    //     email: 'joao@email.com',
    //     telefone: '(99) 9999-9999'
    // }

    // const agenda = await knex('agenda').insert(guido).returning(['id', 'nome']);
    // const agenda = await knex('agenda').insert([maria, joao]).returning('*');
    const agenda = await knex('agenda');
    return res.json(agenda);
});

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where('id', id).returning('*');
    return res.json(agendaAtualizada);
});

app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda').del().where({ id }).returning('id');
    return res.json(agendaExcluida);
});

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;

    const anotacao = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*');
    return res.json(anotacao);
});

app.get('/anotacoes', async (req, res) => {
    // const anotacoes = await knex('anotacoes')
    //     .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    const anotacoes = await knex('anotacoes')
        .leftJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome');
    // const anotacoes = await knex('anotacoes')
    //     .rightJoin('agenda', 'anotacoes.agenda_id', 'agenda.id')
    //     .select('anotacoes.*', 'agenda.nome');
    return res.json(anotacoes);
});

app.listen(3000);