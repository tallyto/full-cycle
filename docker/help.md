### Comandos Docker

#### Gerenciamento de Containers

- `docker ps`  
  Visualiza os containers que estão em execução.

- `docker ps -a`  
  Visualiza todos os containers.

- `docker run some-image`  
  Faz o download da versão mais recente da imagem e cria um container.

- `docker run -d some-image`  
  Executa o container de forma detached (não prende o terminal).

- `docker run -p 8080:80 some-image`  
  Executa o container redirecionando a porta interna (80) para uma porta do computador (8080).

- `docker stop container-id`  
  Para o container.

- `docker rm container-id`  
  Remove o container.

- `docker exec some-container ls`  
  Executa um comando dentro do container.

- `docker exec -it some-container bash`  
  Executa o bash e habilita a escrita no terminal.

#### Gerenciamento de Volumes

- `docker volume`  
  Mostra os comandos de volume.

- `docker volume ls`  
  Lista os volumes.

- `docker volume create some-name`  
  Cria um volume.

- `docker volume inspect some-name`  
  Mostra as configurações do volume.

- `docker volume prune`  
  Remove todos os volumes não utilizados.

- `docker run --name nginx -d --mount type=volume,source=some-volume,target=/app nginx`  
  Inicia um container com o volume criado.

- `docker run --name nginx -d -v some-volume:/app nginx`  
  Inicia um container com o volume criado.

#### Gerenciamento de Imagens

- `docker images`  
  Lista todas as imagens.

- `docker rmi some-image:version`  
  Remove uma imagem específica.

- `docker pull some-image`  
  Faz o download de uma imagem do Docker Hub.

- `docker build -t some-image .`  
  Constrói uma nova imagem a partir de um Dockerfile no diretório atual.

#### Redes

- `docker network ls`  
  Lista todas as redes.

- `docker network create some-network`  
  Cria uma nova rede.

- `docker network inspect some-network`  
  Mostra os detalhes de uma rede específica.

- `docker network rm some-network`  
  Remove uma rede.

#### Exemplos Práticos

- `docker run -d --name nginx -p 8080:80 -v /c/Users/rodri/Desktop/full-cycle/docker/html:/usr/share/nginx/html nginx`  
  Faz bind do volume da máquina para o container.

- `docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx`  
  Faz bind do volume da máquina para o container.

#### Informações do Sistema

- `docker info`  
  Mostra informações detalhadas sobre a instalação do Docker.

- `docker stats`  
  Exibe um fluxo contínuo de estatísticas de desempenho dos containers.

#### Limpeza do Sistema

- `docker system prune`  
  Remove todos os containers, redes, imagens e volumes não utilizados.

- `docker image prune`  
  Remove imagens não utilizadas.

### Dicas e Truques

- Utilize `docker logs container-id` para visualizar os logs de um container.
- Combine múltiplos comandos com `&&` para eficiência, por exemplo: `docker build -t some-image . && docker run -d some-image`.
- Utilize variáveis de ambiente com a opção `-e` em `docker run` para configurar containers de maneira flexível.

### Recursos Adicionais

- [Documentação Oficial do Docker](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Cheatsheet](https://github.com/eon01/DockerCheatSheet)