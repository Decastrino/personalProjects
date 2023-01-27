FROM node:10.16.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD package*.json ./

RUN npm install

# Bundle app source
ADD . .

EXPOSE 5000

CMD node src/index.js