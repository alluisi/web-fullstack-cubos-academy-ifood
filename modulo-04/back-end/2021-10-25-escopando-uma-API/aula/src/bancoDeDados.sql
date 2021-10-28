create database mini_insta;

drop table if exists postagens_curtidas;
drop table if exists postagens_comentarios;
drop table if exists postagens_fotos;
drop table if exists postagens;
drop table if exists usuarios;

create table usuarios (
    id serial primary key,
    nome text,
    imagem text,
    username text not null unique,
    email text unique,
    site text,
    bio text,
    telefone text,
    genero text,
    senha text not null,
    verificado boolean default false
);

create table postagens (
    id serial primary key,
    usuario_id int not null,
    data timestamptz default now(),
    descricao text,
    foreign key (usuario_id) references usuarios (id)
);

create table postagens_fotos (
    id serial primary key,
    postagem_id int not null,
    imagem text not null,
    foreign key (postagem_id) references postagens (id)
);

create table postagens_comentarios (
    id serial primary key,
    texto text not null,
    data timestamptz default now(),
    usuario_id int not null,
    postagem_id int not null,
    foreign key (usuario_id) references usuarios (id),
    foreign key (postagem_id) references postagens (id)
);

create table postagens_curtidas (
    usuario_id int not null,
    postagem_id int not null,
    data timestamptz default now(),
    foreign key (usuario_id) references usuarios (id),
    foreign key (postagem_id) references postagens (id)
);