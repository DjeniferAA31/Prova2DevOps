# Projeto CRUD

Prova DevOps II

Projeto da prova utilizando NestJS, React, PostgreSQL e Docker.

Pastas
api/
front/
deploy/

Requisitos

Docker

Docker Compose

Rodando o projeto

Entre na pasta raiz do projeto e execute:

docker compose -f deploy/docker-compose.yml up --build


Para verificar se os containers estão rodando:

docker compose -f deploy/docker-compose.yml ps

Acessos

Front:

http://localhost:8080


API:

http://localhost:3000


Swagger:

http://localhost:3000/api


PostgreSQL:

localhost:5432

Banco de dados

Banco:

customers_db


Usuário:

postgres


Senha:

postgres


O PostgreSQL utiliza um volume chamado postgres_data para manter os dados.

Para acessar o banco:

docker exec -it customers-db psql -U postgres -d customers_db


Exemplo de insert:

INSERT INTO customers (full_name, email, phone, birth_date)
VALUES ('João da Silva', 'joao@email.com', '48999998888', '1995-05-20');

API Customers

GET todos:

GET http://localhost:3000/customers


GET por ID:

GET http://localhost:3000/customers/1


Criar:

POST http://localhost:3000/customers


Exemplo:

{
  "full_name": "João da Silva",
  "email": "joao@email.com",
  "phone": "48999998888",
  "birth_date": "1995-05-20"
}


Atualizar:

PATCH http://localhost:3000/customers/1


Deletar:

DELETE http://localhost:3000/customers/1


Exemplo de resposta:

{
  "id": 1,
  "full_name": "João da Silva",
  "email": "joao@email.com",
  "phone": "48999998888",
  "birth_date": "1995-05-20"
}

Swagger

Para testar a API pelo Swagger:

http://localhost:3000/api

Parar o projeto

Para parar e remover os containers:

docker compose -f deploy/docker-compose.yml down


Para remover também o volume do PostgreSQL:

docker compose -f deploy/docker-compose.yml down -v


O comando down -v apaga os dados armazenados no volume do banco.

