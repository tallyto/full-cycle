### Comandos Docker

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

- `docker rm container-id`  
  Remove o container.

- `docker stop container-id`  
  Para o container.

- `docker exec some-container ls`  
  Executa um comando dentro do container.

- `docker exec -it some-container bash`  
  Executa o bash e habilita a escrita no terminal.

- `docker run -d --name nginx -p 8080:80 -v /c/Users/rodri/Desktop/full-cycle/docker/html:/usr/share/nginx/html nginx`  
  Faz bind do volume da máquina para o container.

- `docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx`  
  Faz bind do volume da máquina para o container.   