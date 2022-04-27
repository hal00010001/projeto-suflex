FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3740

CMD ["npm", "run", "dev"]