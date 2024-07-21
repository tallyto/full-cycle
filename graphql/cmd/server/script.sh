#!/bin/bash

echo "Criando database"
sqlite3 data.db <<EOF
CREATE TABLE IF NOT EXISTS category (
    id TEXT PRIMARY KEY,
    name TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS course (
    id TEXT PRIMARY KEY,
    name TEXT,
    description TEXT,
    category_id TEXT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);
EOF

echo "Tabelas criadas com sucesso"
echo "Script concluído"
