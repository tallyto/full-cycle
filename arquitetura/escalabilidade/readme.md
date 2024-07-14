# Escalabilidade

> Escalabilidade é a capacidade de sistemas suportarem o aumento (ou redução) dos workloads incrementando (ou reduzindo) o custo em menor ou igual proporção.

## Escalabilidade vs Performance

> Enquanto performance tem o foco em reduzir a latência é aumentar o throughput, a escalabilidade vista termos a possibilidade de aumentar ou diminuir o throughput adicionando ou removendo a capacidade computacional.

### Escalando software - Descentralização

* Disco efêmero
* Servidor de aplicação vs Servidor de assets
* Cache centralizado
* Sessões centralizadas
* Upload / Gravação de Arquivos

### Escala de banco de dados

* Aumentando recursos computacionais 
* Distribuindo responsabilidades (escrita vs leitura)
* Shards de forma horizontal
* Serverless

### Otimização de queries e índices

* Trabalhe com índices de forma consciente
* APM (Application performance monitoring) nas queries
* Explain nas queries
* CQRS (Command Query Responsibility Segregation)