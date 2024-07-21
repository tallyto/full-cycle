# GO-GRAPH

## Visão Geral

Esta aplicação é um servidor GraphQL implementado utilizando [gqlgen](https://github.com/99designs/gqlgen). Ela fornece APIs para gerenciar categorias e cursos, incluindo criação, consulta e associação entre eles.

## Tabela de Conteúdos

- [Pré-requisitos](#pré-requisitos)
- [Primeiros Passos](#primeiros-passos)
- [Uso](#uso)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Banco de Dados](#banco-de-dados)
- [Resolvers](#resolvers)
- [Configuração com Docker](#configuração-com-docker)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Pré-requisitos

- Go 1.16 ou superior
- PostgreSQL
- Docker (para configuração com contêineres)

## Primeiros Passos

### Clonar o Repositório

```bash
git clone https://github.com/tallyto/full-cycle.git
cd graphql
```

### Configurar Variáveis de Ambiente

Crie um arquivo `.env` no diretório raiz com o seguinte conteúdo:

```
DATABASE_URL=postgres://gograph:gograph@localhost:5432/gograph?sslmode=disable
PORT=8080
```

### Executar a Aplicação

#### Sem Docker

1. **Instalar Dependências**

    ```bash
    go mod tidy
    ```

2. **Executar o Servidor**

    ```bash
    go run cmd/server/main.go
    ```

#### Com Docker

1. **Construir e Executar os Contêineres**

    ```bash
    docker-compose up --build
    ```

O servidor estará acessível em `http://localhost:8080`.

## Uso

### Playground GraphQL

Acesse o playground GraphQL em `http://localhost:8080/`.

### Exemplos de Consultas

#### Obter Todas as Categorias

```graphql
query {
  categories {
    id
    name
    description
  }
}
```

#### Criar uma Nova Categoria

```graphql
mutation {
  createCategory(input: { name: "Nova Categoria", description: "Descrição da nova categoria" }) {
    id
    name
    description
  }
}
```

## Variáveis de Ambiente

- `DATABASE_URL`: String de conexão para o banco de dados PostgreSQL.
- `PORT`: Porta na qual o servidor irá rodar (padrão: `8080`).

## Estrutura do Projeto

- `cmd/server/main.go`: Ponto de entrada para a aplicação.
- `graph`: Contém o esquema GraphQL e implementações dos resolvers.
- `internal/database`: Contém a lógica de interação com o banco de dados.
- `docker-compose.yml`: Configuração do Docker para a aplicação e banco de dados PostgreSQL.

## Banco de Dados

A aplicação utiliza PostgreSQL para armazenamento de dados. Certifique-se de que o banco de dados está em execução e acessível utilizando o `DATABASE_URL` fornecido nas variáveis de ambiente.

### Configuração Inicial

Um script `init.sql` de exemplo é fornecido para inicializar o esquema do banco de dados.

## Resolvers

Os resolvers são implementados para lidar com consultas e mutações GraphQL. Resolvers principais incluem:

- `CreateCategory`: Lida com a criação de novas categorias.
- `CreateCourse`: Lida com a criação de novos cursos.
- `Categories`: Recupera todas as categorias.
- `Courses`: Recupera todos os cursos.
- `Category`: Resolve a categoria para um dado curso.
- `Courses`: Resolve os cursos para uma dada categoria.

## Configuração com Docker

### Serviços

- `app`: O servidor principal da aplicação.
- `db`: Servidor do banco de dados PostgreSQL.

### Comandos Docker Compose

- **Construir e Iniciar**: `docker-compose up --build`
- **Parar**: `docker-compose down`

## Contribuindo

Contribuições são bem-vindas! Por favor, faça um fork do repositório e abra um pull request com suas alterações.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

