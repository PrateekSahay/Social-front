#Stage-1

FROM node:latest as node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -alh /app/dist

EXPOSE 80

#Stage-2

FROM nginx:alpine

COPY --from=node /app/dist/quirartSocial /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
