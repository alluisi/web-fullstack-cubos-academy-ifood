drop table if exists usuarios;

create table usuarios (
	id serial primary key,
  	nome text not null,
  	email text not null,
  	senha text not null
);
