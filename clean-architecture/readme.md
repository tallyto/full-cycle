# Clean Architecture

- Termo Criado por Robert C. Martin (Uncle Bob) em 2012
- Tornou-se um livro
- Buzz word
- Proteção do domínio da aplicação
- Baixo acoplamento entre as camadas
- Orientada a casos de uso

## Curiosidades

- Ele fala especificamente sobre "Clean Architecture somente em 7 páginas do livro

- Tudo que ele fala especificamente sobre Clean Architecture está literalmente em um artigo em seu blog

### Por que devo ler o livro

- Reforçar conhecimento e remover gaps básicos que muitas vezes nem percebemos que temos

- Componentes

- Arquitetura

- Limites arquiteturais

- Percepção sobre regas de negócios

## Pontos importantes

- Formato que o software terá
- Divisão de componentes
- Comunicação entre componentes
- Uma boa arquitetura vai facilitar o processo de desenvolvimento, deploy, operação e manutenção

## Objetivos

- O objetivo principal da arquitetura é dar suporte ao ciclo de vida do sistema. Uma boa arquitetura torna o sistema fácil de entender, fácil de desenvolver, fácil de manter e fácil de implantar. O objetivo final é minimizar o custo de vida útil do sistema e maximizar a produtividade do programador.

> "C., Martin Robert. Clean Architecture (Robert C. Martin Series)(p.137). Pearson Education. Kindle Edition"

## Regras vs Detalhes

- Regas de negócio trazem o real valor para o software
- Detalhes ajudam a suportar as regras
- Detalhes não devem impactar nas regras de negócio
- Frameworks, banco de dados, apis, não devem impactar as regras

## Use Cases

- Intenção
- Clareza de cada comportamento do software
- Detalhes não devem impactar nas regras de negócio

### Use Cases - Single Responsibility Principle

- Temos a tendência de "reaproveitar" uses cases por serem muito parecidos.
  > Ex: Alterar vs Inserir. Ambos consultam se o registro existe, persistem dados. MAS, não Use Cases diferentes. Por que?

SRP (Single Responsibility Principle) => Mudam por razões diferentes

## Limites arquiteturais

- Tudo que não impacta diretamente nas regras de negócio deve estar em um lime arquitetural diferente. Ex: Não será o frontend, banco de dados que mudarão as regras de negócio da aplicação.

## Input vs Output

- No final do dia, tudo se resume a um Input que retorna um Output
  > Ex: Criar um pedido (dados do pedido = input)
  > Pedido criado (dados de retorno do pedido)
- Simplifique seu raciocínio ao criar um software sempre pensando em Input e Output

## DTO (Data Transfer Object)

- Trafegar dados entre os limites arquiteturais
- Objeto anêmico, sem comportamento
- Contém dados (Input ou Output)
- Não possui regras de negócio
- Não possui comportamento
- Não faz nada!

## Presenters

- Objetos de transformação
- Adéqua o DTO de output no formato correto para entregar o resultado
- Lembrando: Um sistema por ter diversos formatos de entrega: ex: XML, JSON, Protobuf, GraphQL, CLI, etc.

## Entities

- Entities da Clean Architecture <> Entities do DDD
- Clean Architecture define entity como camada das regas de negócio
- Elas se aplicam em qualquer situação
- Não há definição explicita de como criar as entities
- Normalmente utilizamos táticas do DDD
- Entities = Agregados + Domain Services
