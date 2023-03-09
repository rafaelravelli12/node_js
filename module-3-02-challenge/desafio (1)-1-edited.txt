DELETE FROM proprietarios;
DELETE FROM animais;
DELETE FROM servicos;

ALTER SEQUENCE proprietarios_proprietario_id_seq RESTART WITH 1;
ALTER SEQUENCE animais_animal_id_seq RESTART WITH 1;
ALTER SEQUENCE servicos_servico_id_seq RESTART WITH 1;

INSERT INTO proprietarios (nome, telefone) VALUES
	('Alda Valentim', '(39) 98566-1222'),
	('Nicolas Avelar', '(28) 97432-0379'),
	('Emilly Baptista', '(31) 99545-2457'),
	('Beatriz Bonilha', '(35) 98054-4724'),
	('Nataniel Faleiro', '(33) 99594-3315'),
	('Richard Santos', '(27) 99597-9170');

INSERT INTO animais (nome, tipo, proprietario_id) VALUES
	('Billy', 'Cachorro', 1),
	('Nala', 'Cachorro', 2),
	('Mimi', 'Gato', 2),
	('Dory', 'Cachorro', 3),
	('Lulu', 'Cachorro', 4),
	('Bob', 'Cachorro', 5),
	('Milu', 'Cachorro', 5),
	('Emmy', 'Gato', 5),
	('Amora', 'Cachorro', 6);

INSERT INTO servicos (descricao, valor, animal_id) VALUES
	('Banho', 30, 1),
	('Banho', 30, 5),
	('Banho', 30, 6),
	('Banho', 30, 9),
	('Banho e Tosa', 60, 2),
	('Banho e Tosa', 60, 7),
	('Consulta', 200, 3),
	('Consulta', 200, 8),
	('Consulta', 200, 2);
