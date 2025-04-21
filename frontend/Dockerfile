# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full app
COPY . .

# Build the React app
RUN npm run build

# Expose port and start
EXPOSE 3000
CMD ["npm", "start"]
