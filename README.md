# healthcare_test

## Instalação e Start da aplicação utilizando docker

Instalar docker seguindo a documentação

https://docs.docker.com/desktop/

Em seguida rodar o comando

docker-compose up -d

## Instalação manual

### banco de dados

Neste repositório é utilizado o sqlite como banco de dados, portanto para a instalação é necessário seguir a documentação do SQLite

https://www.sqlite.org/index.html

### App

Instalar o nodejs de acordo com a documentação

https://nodejs.org/en/download/

Em seguida

npm i typescript -g

npm i pm2 -g

Então instalar as dependencias

npm i

## Rodar aplicação

npm run build

pm2 start ./dist/src/index.js

## Rotas e script de importação

/GET /healthCheck verifica se aplicação está UP

/POST /import/fromCSV irá realizar a importação dos dados

/GET /import listará todos os dados importados

Para importar os dados realize o comando:

node ImportToAPI.js

Nota: será necessário rodar o script será necessário ter o node e rodar "npm i"
