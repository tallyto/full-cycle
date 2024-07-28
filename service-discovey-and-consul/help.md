# Service Discovery

- Descobre as máquinas disponível para acesso
- Segmentação de máquinas para garantir segurança
- Resolução via DNS
- Health check
- Como saber se tenho permissão para acessar

## Agente, Client e Server

- Agente: Processo que fica sendo executado em todos nós do cluster. Pode estar sendo executado em Cliente Mode ou Server Mode

- Client: Regista os serviços localmente, Health chek, encaminhas as informações e configuração dos serviços para o Server

- Server: Mantém o estado do cluster, regista os serviços, Membership (quem é o client e quem é o server), retorno de queries (DNS ou API), troca de informações entre datacenters, etc

### Dev Mode

- NUNCA utilize em produção 
- Teste de features, exemplos
- Roda como servidor
- Não escala
- Registra tudo em memória