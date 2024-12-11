FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "run", "dev"]
