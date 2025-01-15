# Acessa o container 'appproduct' com um terminal interativo

docker exec -it appproduct bash

# Gera mocks para os testes do arquivo 'product.go' e os salva em 'mocks/application.go'

mockgen -destination=application/mocks/application.go -source=application/product.go application

# Busca um item na base de dados via cli

go run ./main.go cli -a=get --id=69ab65fc-369a-4014-9bf9-8fa0cbf6294d

# Cria um novo item na base de dados via cli

go run ./main.go cli -a=create -n="Product Cli" -p=25.0
