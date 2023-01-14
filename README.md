# Excel formula Perser Application

## Md Kamrul Hasan

# Links of all repositories
- link - https://drive.google.com/file/d/1pPQkGnWx8nExRGeF7AG55O_AOIuxX8kz/view?usp=sharing

# Running Instructions using docker-compose.yaml file

- Clone this repo - https://github.com/HasanMdKamrul/excel-formula-perser
- Go to the root of the project, you will find a docker-compose.yaml file
- Running Command - docker-compose up (in the terminal)
- Ports are specified like this - Frontend - http://localhost:3000/ | Backend - http://localhost:4000/

# Running Instructions using dockerhub images created by me (Individual Image)

- docker pull hasanmdkamrul/excel-perser-api
- docker run --name containername -p 4000:4000 hasanmdkamrul/excel-perser-api:latest

- docker pull hasanmdkamrul/excel-parser-fe
- docker run --name containername -p 3000:3000 hasanmdkamrul/excel-parser-fe:latest

## Features

- go to the frontend site , give the 2-D array in the input field it will automatically show you the result.
- Both the images should be running in order to see the results
