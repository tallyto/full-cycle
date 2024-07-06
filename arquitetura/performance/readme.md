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