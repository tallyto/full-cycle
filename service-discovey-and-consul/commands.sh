# Acessa o bash no container do consul
docker exec -it consul01 sh

# Inicia o consul em modo dev
consul agent -dev

# Motra os consul members
consul members

# Mostrar os nodes
curl localhost:8500/v1/catalog/nodes

# Instala o bind-tools
apk -U add bind-tools

# Busca todos os nodes e ips dos nodes registrado
dig @localhost -p 8600

# Busca todos os nodes e ips dos nodes do consul registrado
dig @localhost -p 8600 consul01.node.consul

mkdir /etc/consul.d

mkdir /var/lib/consul

consul catalog nodes -service nginx