# Step 1: Use an official Node.js runtime as a parent image
FROM node:16 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use an official Nginx image to serve the application
FROM nginx:alpine

# Step 8: Copy the build output to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]