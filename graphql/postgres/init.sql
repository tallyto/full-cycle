-- Criação das tabelas no PostgreSQL

CREATE TABLE IF NOT EXISTS category (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS course (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category_id UUID,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
);
