--01
CREATE TABLE usuarios (
  id serial,
  nome text NOT NULL,
  idade numeric (2),
  email varchar (80),
  senha varchar (8) NOT NULL,
);

--02
INSERT INTO usuarios
(nome, idade, email, senha)
VALUES
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Shelley E. Frederick', 20, 'raja.feugiat@nonummy.com', 'u2D18F6E');

--03
UPDATE usuarios SET nome = 'Raja W. Coffey Thomas' WHERE email = 'raja.feugiat@nonummy.com';

--04
DELETE FROM usuarios WHERE email = 'raja.feugiat@nonummy.com';
ALTER TABLE usuarios ADD CONSTRAINT usuarios_email UNIQUE (email);

--05
INSERT INTO usuarios
(nome, idade, email, senha)
VALUES
('Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris', 29, 'nec.metus.facilisis@vitaealiquet.edu', 'I4S64Y3A'),
('Joel M. Hartman', 18, 'montes.nascetur@odiotristique.co.uk', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'risus.Duis@eget.ca', 'e3P92I7R');

--06
ALTER TABLE usuarios ADD COLUMN situacao boolean DEFAULT TRUE;

--07
UPDATE usuarios SET situacao = false WHERE email = 'montes.nascetur@odiotristique.co.uk';

--08
UPDATE usuarios SET senha = 'k9P31H1O' WHERE email = 'risus.Duis@eget.ca';

--09
ALTER TABLE usuarios DROP COLUMN idade;
ALTER TABLE usuarios ADD COLUMN data_nascimento date;

--10
UPDATE usuarios SET data_nascimento = '1991-09-29' WHERE email = 'auctor@duiFuscediam.edu';
UPDATE usuarios SET data_nascimento = '1988-11-02' WHERE email = 'nec.metus.facilisis@vitaealiquet.edu';

--11
DELETE FROM usuarios WHERE data_nascimento = NULL;

--12
ALTER TABLE usuarios ADD CONSTRAINT usuarios_data NOT NULL (data_nascimento);

--13
INSERT INTO usuarios
(nome, data_nascimento, email, senha)
VALUES
('Tate I. Dean', '1989-05-01', 'Nunc@etmagnis.edu', 'd3V25D6Y'),
('Arsenio K. Harmon', '1985-10-23', 'adipiscing.elit@turpis.com', 'm3T58S0C');