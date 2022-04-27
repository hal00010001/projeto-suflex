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

# Used technologies in the project

Express
Typescript
Eslint using Airbnb pattern
Prettier
ts-node-dev
docker-compose
PostgreSQL
Multer

