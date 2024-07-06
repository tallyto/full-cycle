# Perspectivas para arquitetar software de qualidade

- Performance
- Escalabilidade
- Resiliência

## Performance

- É o desempenho que um software possui para completar um determinado workload
- As unidades de medidas para avaliarmos a performance de um software são:
  - Latência ou "response time"
  - Throughput
- Ter um software performático é diferente de ter um software escalável

### Métricas para medir a performance

- Diminuindo a latência
  - Normalmente medida em milliseconds
  - É afetada pelo tempo de processamento da aplicação, rede e chamadas externas
- Aumentando throughput
  - Quantidade de requisições
  - Diretamente ligado a latência

### Principais razões para baixa performance

- Processamento ineficiente
- Recursos computacionais limitados
- Trabalhar de forma bloqueante
- Acesso serial a recursos

### Principais formas para aumentar a eficiência

- Escala de capacidade computacional (CPU, Disco, Memória, Rede)
- Lógica por trás do software (Algoritmos, queries, overhead de frameworks)
- Concorrência e paralelismo
- Banco de dados (tipos de bancos, schema)
- Caching

### Capacidade computacional: Escala vertical vs horizontal

#### Diferença entre concorrência e paralelismo

> "Concorrência é sobre lidar com muitas coisas ao mesmo tempo. Paralelismo é fazer muitas coisas ao mesmo tempo". Rob Pike

### Caching

- Cache na borda / Edge computing
- Dados estáticos
- Páginas web
- Funções internas
  - Evita reprocessamento de algoritmos pesados
  - Acesso ao banco de dados
- Objetos

#### Caching: Exclusivo vs Compartilhado

- Exclusivo
  - Baixa latência
  - Duplicado entre nós
  - Problemas relacionados a sessões

- Compartilhado
  - Maior latência
  - Não há duplicação
  - Sessões compartilhadas
  - Banco de dados externo
    - MySQL
    - Redis
    - Memcache
 