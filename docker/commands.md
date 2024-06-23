- `docker run --rm -it -v ${PWD}:/usr/src/app -p 3000:3000 node:15 bash`
    Executa o node fazendo bind do diretório para o container

- `docker build -t tallyto/hello-express .`
    Cria uma imagem da aplicação express na pasta node

- `docker build -t tallyto/hello-express . -f .\Dockerfile.prod`
    Faz o build com outro dockerfile

- `docker push tallyto/hello-express`
    Publica a imagem no dockerhub