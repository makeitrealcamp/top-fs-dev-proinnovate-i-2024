#stage 1 - build react app first
FROM node:lts-slim as build

WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

RUN npm run build

#stage 2 - Serve the app with nginx

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# internal port of the container
EXPOSE 80 

CMD ["nginx", "-g", "daemon off;"]