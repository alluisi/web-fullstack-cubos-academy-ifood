--01
SELECT compositor, id FROM musicas;

--02
SELECT composicao, tempo FROM musicas WHERE tempo > 4 * 60;

--03
SELECT compositor, composicao FROM musicas WHERE id BETWEEN 47 AND 123;

--04
SELECT * FROM musicas WHERE compositor IS NOT NULL AND tempo < 5 * 60 AND compositor != 'Bach';

--05
SELECT composicao, tempo FROM musicas WHERE compositor = 'Mozart' OR compositor = 'Bach';

--06
SELECT * FROM musicas ORDER BY id DESC;

--07
SELECT * FROM musicas ORDER BY tempo DESC;

--08
SELECT * FROM musicas ORDER BY tempo ASC LIMIT 5;

--09
SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;

--10
SELECT * FROM musicas ORDER BY tempo ASC LIMIT 10 OFFSET 5;

--11
SELECT * FROM musicas LIMIT 10 OFFSET 30;

--12
SELECT * FROM musicas LIMIT 12 OFFSET 60;

--13
SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;

--14
SELECT DISTINCT compositor, composicao FROM musicas;

--15
SELECT * FROM musicas WHERE compositor LIKE 'Bra%';

--16
SELECT * FROM musicas WHERE ritmo LIKE '%troppo';

--17
SELECT * FROM musicas WHERE composicao ILIKE '%quartet%';

--18
SELECT * FROM musicas WHERE composicao NOT ILIKE '%quintet%';