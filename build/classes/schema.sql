DROP SCHEMA IF EXISTS MYTOP10 CASCADE;

CREATE SCHEMA MYTOP10;

SET SCHEMA MYTOP10;

CREATE TABLE musica (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Descricao VARCHAR(255) NOT NULL
);
