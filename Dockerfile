# Use the official Node.js image as the base image
FROM node:22.8.0-bookworm-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 8081

# Command to run the application
CMD ["node", "app.js"]

