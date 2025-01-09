# 🛠️ Hexagonal Architecture Application

## 📝 Descrição

Este projeto implementa uma aplicação baseada na Arquitetura Hexagonal (Ports and Adapters), com foco em flexibilidade e testes. A aplicação gerencia produtos, permitindo criar, habilitar, desabilitar e buscar produtos. Utiliza SQLite como banco de dados e inclui testes unitários para validar a lógica de negócios.

## 💻 Tecnologias Utilizadas

- **💬 Linguagem**: Go
- **🗄️ Banco de Dados**: SQLite
- **📚 Bibliotecas**:
  - `govalidator`: Para validação de estruturas.
  - `google/uuid`: Para geração de identificadores únicos.
  - `testify`: Para asserções em testes.
  - `gomock`: Para criação de mocks em testes.
  - `mattn/go-sqlite3`: Driver SQLite para Go.

## 🏗️ Estrutura do Projeto

- **📂 application**: Contém a lógica de negócios e interfaces principais.
- **📂 adapters/db**: Implementação de persistência com SQLite.
- **📂 mocks**: Mocks gerados para testes.
- **📂 application_test**: Testes unitários da lógica de negócios.
- **📂 db_test**: Testes para a camada de persistência.

## ⚙️ Funcionalidades

- ✨ Criar produtos.
- 🔓 Habilitar/desabilitar produtos com base em regras de negócio.
- 🔍 Buscar produtos pelo ID.

## ▶️ Como Executar o Projeto

### 📋 Pré-requisitos

- ⚙️ Go instalado na máquina.
- 🗄️ SQLite disponível.

### 🚀 Passos

1. 🌀 Clone o repositório:

   ```bash
   git clone https://github.com/tallyto/full-cycle
   cd full-cycle/hexagonal
   ```

2. 📦 Instale as dependências:

   ```bash
   go mod tidy
   ```

3. ✅ Execute os testes:

   ```bash
   go test ./...
   ```

4. 🏃 Rode a aplicação (exemplo de uso com SQLite):
   ```bash
   go run main.go
   ```

## 🧪 Testes

Os testes estão organizados por camada:

- **🧩 application_test**: Testes da lógica de negócios (serviços e entidades).
- **🗄️ db_test**: Testes da persistência de dados com SQLite.

Para rodar todos os testes:

```bash
go test ./...
```

## 📖 Exemplo de Uso

### ✍️ Criando um Produto

```go
service := application.ProductService{Persistence: persistence}
product, err := service.Create("Produto 1", 10.0)
if err != nil {
    log.Fatal(err)
}
fmt.Println("Produto criado:", product)
```

### 🔓 Habilitando um Produto

```go
err := product.Enable()
if err != nil {
    log.Fatal(err)
}
fmt.Println("Produto habilitado:", product.GetStatus())
```

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, siga os passos:

1. 🍴 Faça um fork do projeto.
2. 🌿 Crie uma branch para sua feature/bugfix: `git checkout -b minha-feature`.
3. ✏️ Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. 🚀 Faça um push para a branch: `git push origin minha-feature`.
5. 🔄 Abra um Pull Request.

## 📜 Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
