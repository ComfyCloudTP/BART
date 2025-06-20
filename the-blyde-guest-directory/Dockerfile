# Use a Node.js base image for building the application
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json (if exists) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server (Nginx) to serve the static files
FROM nginx:stable-alpine

# Copy the built application from the builder stage to Nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]