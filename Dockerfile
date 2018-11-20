# Use an official Python runtime as a parent image
FROM node

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN npm install
Run npm i @angular/cli

# Make port 80 available to the world outside this container
EXPOSE 80

RUN ng serve