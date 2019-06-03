FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 1000
#use express server port here

CMD ["npm", "run", "start"]