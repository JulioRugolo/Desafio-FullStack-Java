# Dockerfile Frontend
FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration=production

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
