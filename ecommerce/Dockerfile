FROM node:10

WORKDIR /usr/scr/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
COPY . .

EXPOSE 3001
CMD ["npm","start"]