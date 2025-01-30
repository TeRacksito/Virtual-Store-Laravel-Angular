FROM node:20

WORKDIR /usr/src/app

COPY package*.json .
COPY . .
RUN npm install
RUN npm install -g @angular/cli

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "5012"]
