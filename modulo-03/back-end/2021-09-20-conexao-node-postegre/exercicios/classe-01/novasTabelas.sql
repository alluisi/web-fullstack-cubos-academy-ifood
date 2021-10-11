drop table if exists usuarios;

create table usuarios (
    id serial primary key,
    nome text not null,
    idade smallint,
    email varchar(50) not null,
    telefone varchar(11),
    cpf char(11)
);

drop table if exists emprestimos;

create table usuarios (
    id serial primary key,
    usuario_id integer not null references usuarios(id),
    livro_id integer not null references livros(id),
    status boolean default false
);

update emprestimos set status = 'pendente';