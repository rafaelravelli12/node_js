CREATE TABLE proprietarios (
proprietario_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
telefone VARCHAR NOT NULL
);

CREATE TABLE animais (
animal_id SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL,
tipo VARCHAR NOT NULL,
proprietario_id INT NOT NULL,
CONSTRAINT fk_proprietarios FOREIGN KEY (proprietario_id) REFERENCES proprietarios (proprietario_id)
);

CREATE TABLE servicos (
servico_id SERIAL PRIMARY KEY,
descricao VARCHAR NOT NULL,
valor DECIMAL NOT NULL,
animal_id INT NOT NULL,
CONSTRAINT fk_animais FOREIGN KEY (animal_id) REFERENCES animais (animal_id)
);
