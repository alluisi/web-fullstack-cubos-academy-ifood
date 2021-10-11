create table if not exists usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null
);

create table if not exists postagens (
    id serial primary key,
    usuario_id integer not null,
    texto text not null,
    foreign key (usuario_id) references usuarios (id)
);