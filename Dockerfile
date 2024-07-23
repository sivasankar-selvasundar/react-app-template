# Use a lightweight Node.js image as the base
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (use `npm ci` for production)
RUN npm install

# Copy the entire project code
COPY . .

# Create a new stage for the final image (optional for optimization)
# FROM node:alpine

# Copy only the production build from the builder stage
# COPY --from=builder /app/out /app

# # Set the working directory
#WORKDIR /app

RUN npm run build

# Expose the Next.js default port (3000)
EXPOSE 3000

# Start the application in production mode
CMD [ "npm", "start" ]
