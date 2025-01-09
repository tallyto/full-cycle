# Acessa o container 'appproduct' com um terminal interativo

docker exec -it appproduct bash

# Gera mocks para os testes do arquivo 'product.go' e os salva em 'mocks/application.go'

mockgen -destination=application/mocks/application.go -source=application/product.go application
