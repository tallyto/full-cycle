docker network create laranet

docker run -d --network laranet --name laravel tallyto/laravel:prod

docker run -d --network laranet --name nginx -p 8080:80 tallyto/nginx:prod