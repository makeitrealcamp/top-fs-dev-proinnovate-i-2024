# get the latest node image
FROM node:lts-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source code

COPY . .

# Build the app ->RUN npm run build

# Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]