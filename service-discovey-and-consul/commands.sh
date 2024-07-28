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

consul agent -server -bootstrap-expect=3 -node=consulserver01 -bind=127.20.0.4 -data-dir=/var/lib/consul -config-dir=/etc/consul.d

consul agent -server -bootstrap-expect=3 -node=consulserver02 -bind=127.20.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d


consul agent -server -bootstrap-expect=3 -node=consulserver01 -data-dir=/consul/data -bind=0.0.0.0 -client=0.0.0.0 

consul agent -server -bootstrap-expect=3 -node=consulserver02 -data-dir=/consul/data -bind=0.0.0.0 -client=0.0.0.0 

consul agent -server -bootstrap-expect=3 -node=consulserver03 -data-dir=/consul/data -bind=0.0.0.0 -client=0.0.0.0 


consul agent -data-dir=/var/lib/consul -config-dir=/etc/consul.d -bind=0.0.0.0 -client=0.0.0.0 



consul join 127.20.0.3