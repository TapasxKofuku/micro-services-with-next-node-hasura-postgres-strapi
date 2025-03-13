# Use official Node.js image with Alpine for a smaller size
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port (Make sure it matches your Express app port)
EXPOSE 3000

# Build the TypeScript project
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]

