FROM node:20.0 as build

WORKDIR /

COPY public /public
COPY src /src
COPY package*.json /package*.json

CMD npm install
CMD npm run build

FROM node:20.0 as deliver

WORKDIR /

ENV NODE_ENV production

EXPOSE 3000
CMD npm run start
