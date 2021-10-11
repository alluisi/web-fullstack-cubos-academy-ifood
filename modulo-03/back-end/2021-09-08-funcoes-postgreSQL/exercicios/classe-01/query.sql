--01
SELECT count(medicamento) FROM farmacia;

--02
SELECT idade FROM usuarios ORDER BY idade ASC LIMIT 1;
--ou
SELECT min(idade) FROM usuarios;

--03
SELECT idade FROM usuarios ORDER BY idade DESC LIMIT 1;
--ou
SELECT max(idade) FROM usuarios;

--04
SELECT sum(idade) / count(idade > 17) FROM usuarios WHERE idade > 17;
--ou
SELECT round(avg(idade), 2) FROM usuarios WHERE idade > 17;

--05
SELECT sum(estoque) FROM farmacia WHERE categoria = 'blue' OR categoria = 'black';

--06 e 14
SELECT categoria, sum(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

--07
SELECT sum(estoque) FROM farmacia WHERE categoria IS NULL OR categoria = '';

--08
SELECT count(medicamento) FROM farmacia WHERE categoria IS NULL OR categoria = '';

--09
SELECT concat(medicamento, ' (', categoria, ')') FROM farmacia WHERE categoria IS NOT NULL;

--10
SELECT id || ' - ' || medicamento || ' (' || COALESCE(categoria, 'sem categoria') || ')' FROM farmacia;

--11
SELECT nome, idade, CAST(cadastro AS date) FROM usuarios WHERE CAST(cadastro AS timestamp) > '2019-12-31 23:59:59';

--12
SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) FROM usuarios WHERE idade < 18;

--13
SELECT nome, idade, email, AGE(CAST(cadastro AS date)) FROM usuarios WHERE idade > 59;

--14 e 06
SELECT categoria, sum(estoque) FROM farmacia WHERE categoria IS NOT NULL GROUP BY categoria;

--15
SELECT idade, count(*) FROM usuarios WHERE idade > 17 GROUP BY idade;

--16
SELECT categoria, sum(estoque) FROM farmacia WHERE categoria = 'red' OR categoria = 'blue' OR categoria = 'green' GROUP BY categoria;