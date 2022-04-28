# How to run the project

Clone the repository from the address https://github.com/hal00010001/projeto-suflex

Run one of these commands: 
"npm install" or "yarn"

Run the following command inside the root directory:
docker-compose up -d

Run the following command to create the table in the database:
yarn typeorm migration:run

If you want to revert the last migration, run this command:
yarn typeorm migration:revert

To import the CSV data to the table, just go to the endpoint http://localhost:3740/products/import
in Insomnia or Postman, select POST, Multipart form, type "file" in the name input and select the
file on the right side

To access the documentation, access the address http://localhost:3740/api-docs

The collection used in Insomnia is saved inside the directory /src/assets under the name Insomnia_2022-04-27.json

# Used technologies in this project

Express / 
Typescript / 
Eslint using Airbnb pattern / 
Prettier / 
ts-node-dev / 
docker-compose / 
PostgreSQL / 
TypeORM / 
Multer / 
Tsyringe / 

