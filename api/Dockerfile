# ** parent Image from docker hub

# ** Run time + build time dependencies + os

# ** Initial layer
FROM node:18-alpine

# ** Set the working directory

WORKDIR /app

# ** Copy all the files from the current directory to the Image
# ** Copy all the things from the current directory (first dot) to the Image (second dot)

COPY ./src .

# ** Running the image instructions to container

# ** Install the node 

RUN npm install

# ** Port to expose | container er port

EXPOSE 4000

# ** commad to run the container

CMD ["node", "index.js"]
