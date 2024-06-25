# Etapa 1: Construção
FROM golang:1.22.1-alpine AS builder

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o arquivo go.mod e se existirem
COPY go.mod ./

# Copiar o código-fonte
COPY . .

# Compilar a aplicação
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o desafio-go .

# Etapa 2: Imagem final
FROM scratch

# Copiar o binário do estágio de construção
COPY --from=builder /usr/src/app/desafio-go /desafio-go

# Definir o comando de entrada para executar a aplicação
ENTRYPOINT ["/desafio-go"]
