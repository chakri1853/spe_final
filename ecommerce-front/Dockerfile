FROM node:latest

WORKDIR /usr/scr/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8001
CMD [ "npm", "start" ]