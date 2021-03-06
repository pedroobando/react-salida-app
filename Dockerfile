#FROM node:13.12.0-alpine
FROM node:12-alpine

ENV TZ=America/Caracas

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

RUN yarn install 
# RUN npm install --silent
# RUN yarn global add react-scripts@3.4.1

RUN yarn global add http-server

# add app
COPY . .

RUN yarn build

EXPOSE 3000
# start app
# CMD ["yarn","start"]

CMD ["http-server","-p 3000 build"]
# RUN npx http-server -p 3000 build
