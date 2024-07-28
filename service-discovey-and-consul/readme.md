# README

## Descrição

Esta aplicação configura e executa um cluster Consul utilizando Docker e Docker Compose. O Consul é uma ferramenta para descoberta de serviços e configuração distribuída. O cluster é composto por dois agentes e três servidores, incluindo um servidor bootstrap.

## Arquivo Docker Compose

Abaixo está a configuração do `docker-compose.yml` utilizado para iniciar os contêineres do Consul:

```yaml
version: '3'

services:
  consul-agent-1:
    container_name: consul-agent-1
    image: consul:1.15
    networks:
      - consul-demo
    command: "agent -retry-join consul-server-bootstrap -node=consul-agent-1 -config-dir=/etc/consul.d -client 0.0.0.0"
    volumes: 
      - ./clients/consul-agent-1:/etc/consul.d

  consul-agent-2:
    container_name: consul-agent-2
    image: consul:1.15
    networks:
      - consul-demo
    command: "agent -retry-join consul-server-bootstrap -node=consul-agent-2 -config-dir=/etc/consul.d -client 0.0.0.0"
    volumes: 
      - ./clients/consul-agent-2:/etc/consul.d
      
  consul-server-1:
    container_name: consul-server-1
    image: consul:1.15
    networks:
      - consul-demo
    command: "agent -server -retry-join consul-server-bootstrap -node=consul-server-1 -client 0.0.0.0"

  consul-server-2:
    container_name: consul-server-2
    image: consul:1.15
    networks:
      - consul-demo
    command: "agent -server -retry-join consul-server-bootstrap -node=consul-server-2 -client 0.0.0.0"

  consul-server-bootstrap:
    container_name: consul-server-bootstrap
    image: consul:1.15
    networks:
      - consul-demo
    ports:
      - "8400:8400"
      - "8500:8500"
      - "8600:8600"
      - "8600:8600/udp"
    command: "agent -server -bootstrap-expect 3 -node=consul-server-bootstrap -ui -client 0.0.0.0"

networks:
  consul-demo:
```

## Serviços e Configuração

### Serviços

- **consul-agent-1**: Agente Consul que se conecta ao servidor bootstrap.
- **consul-agent-2**: Outro agente Consul que se conecta ao servidor bootstrap.
- **consul-server-1**: Servidor Consul que se conecta ao servidor bootstrap.
- **consul-server-2**: Outro servidor Consul que se conecta ao servidor bootstrap.
- **consul-server-bootstrap**: Servidor bootstrap Consul que inicializa o cluster.

### Redes

- **consul-demo**: Rede Docker para interconectar todos os serviços.

### Portas Expostas

- **8400**: Interface RPC
- **8500**: Interface HTTP
- **8600**: DNS interface (TCP e UDP)

## Instruções de Uso

### Passo 1: Clone o Repositório

```bash
git clone https://tallyto.com//full-cycle.git
cd full-cycle/service-discovery-and-consul
```

### Passo 2: Iniciar os Serviços

```bash
docker-compose up --build
```

### Passo 3: Acessar a Interface Web do Consul

Abra seu navegador e acesse `http://localhost:8500` para verificar se o cluster Consul está em execução.

### Passo 4: Monitorar o Cluster

O Consul oferece uma interface web para monitorar o status dos nós e serviços. Acesse `http://localhost:8500/ui` para visualizar a interface de usuário.

## Contribuição

Se você deseja contribuir com este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.
