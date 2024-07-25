# Aplicação gRPC em Go

Este repositório contém uma aplicação de exemplo que utiliza gRPC com Go. A aplicação define um serviço `CategoryService` em um arquivo `.proto` e expõe um método `CreateCategory`. O README abaixo orienta você sobre como configurar e executar o projeto.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes requisitos instalados:

- [Go](https://golang.org/doc/install) (você pode verificar a versão instalada com `go version`)
- [Protocol Buffers Compiler (protoc)](https://grpc.io/docs/protoc-installation/) (você pode verificar a versão instalada com `protoc --version`)
- [Evans CLI](https://github.com/ktr0731/evans) (opcional, para interagir com o serviço gRPC a partir da linha de comando)

## Configuração do Projeto

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/tallyto/full-cycle.git
   cd full-cycle/gRPC
   ```

2. **Instale as dependências do Go:**

   ```sh
   go mod tidy
   ```

3. **Compile o arquivo `.proto`:**

   O arquivo `.proto` define a API do serviço gRPC. Compile-o para gerar os arquivos Go necessários com o seguinte comando:

   ```sh
   protoc --go_out=. --go-grpc_out=. proto/course_category.proto
   ```

   Certifique-se de que o arquivo `course_category.proto` esteja localizado na pasta `proto` do projeto.

4. **Instale o Evans CLI (opcional):**

   Evans é uma ferramenta para interagir com serviços gRPC a partir da linha de comando. Instale-a com:

   ```sh
   go install github.com/ktr0731/evans@latest
   ```

5. **Execute o Evans REPL (opcional):**

   Você pode usar o Evans REPL para testar as chamadas gRPC. Inicie o REPL com:

   ```sh
   evans -r repl
   ```

   No REPL, você pode chamar o método `CreateCategory` do `CategoryService` com:

   ```sh
   package pb

   service CategoryService

   call CreateCategory
   ```

## Executando o Servidor

Para iniciar o servidor gRPC, você precisará executar o binário gerado pelo Go. Certifique-se de que o servidor está configurado corretamente para escutar em uma porta específica e esteja pronto para aceitar conexões.

```sh
go run cmd/grpcServer/main.go
```

Certifique-se de que a aplicação está ouvindo na porta esperada e que o serviço `CategoryService` está funcionando corretamente.

## Testando o Serviço

Para testar o serviço, você pode usar o Evans CLI ou uma ferramenta de cliente gRPC como [BloomRPC](https://github.com/uw-labs/bloomrpc) ou [Postman](https://www.postman.com/).

## Documentação

Para mais informações sobre gRPC e Protocol Buffers, consulte a documentação oficial:

- [gRPC Quick Start](https://grpc.io/docs/languages/go/quickstart/)
- [Protocol Buffers Documentation](https://developers.google.com/protocol-buffers/docs/overview)

## Contribuindo

Se você quiser contribuir para este projeto, por favor, abra uma issue ou envie um pull request. Agradecemos suas contribuições!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
