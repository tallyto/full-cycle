# Resiliência

* Resiliência é uma conjunto de estratégias adotadas intencionalmente para a adaptação de um sistema quando uma falha ocorre.

* Ter estratégias de resiliência nos possibilita minimizar os riscos de perda de dados e transações importantes para o negócio

## Quais as estratégias?

### Proteger e ser Protegido

* Um sistema em uma arquitetura distribuída precisa adotar mecanismos de autopreservação para garantir ao máximo sua operação com qualidade.

* Um sistema não pode ser "egoísta" ao ponto de realizar mais requisições em um sistema que está falhando.

* Um sistema lento no ar muitas vezes é pior do que um sistema fora do ar (Efeito dominó)

## Health check

* Sem sinais vitais, não é possível saber a "saúde" de um sistema

* Um sistema que não está saudável possui uma change de se recuperar caso o tráfego para de ser direcionado a ele temporariamente

* Health check de qualidade

## Rate Limiting

* Protege o sistema baseado no que ele foi projetado para suportar

* Preferência programada por tipo de cliente

## Circuite breaker

* Protege o sistema fazendo com que as requisições feitas para ele sejam negadas. Ex: 500

* Circuito fechado = Requisições chegam normalmente

* Circuito aberto = Requisição não chegam ao sistema. Erro instantâneo ao client

* Meio aberto = Permite uma quantidade limitada de requisições para verificação se o sistema tem condições de voltar ao ar integralmente

## API Gateway

* Garante que requisições "inapropriadas" cheguem até o sistema: Ex: usuário autenticado

* Implementa políticas de Rate Limiting, Health check, etc

## Service Mesh

* Controla o tráfego de rede

* Evita implementações de proteção pelo próprio sistema.

* mTLS