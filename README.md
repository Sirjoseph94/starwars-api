
#  STARWARS API
This is a simple REST API built with Express.js that consumes the Star Wars API (SWAPI) to retrieve information about the Star Wars universe. The API endpoints allow you to retrieve information about characters, films, and make your comments.

  
##  Prerequisites

To run this project, you'll need to have Node.js and npm installed on your machine. You'll also need to rename `example.env` to `.env` file in the root directory of the project with the following environment variables:

    PORT = 3000
    NODE_ENV = development
    API_URL =  "https://swapi.dev/api/"
    DATABASE_URL= your postgres database url string
    
## Getting Started

To get started, clone this repository to your local machine and run the following command to install the dependencies:

    npm install
 Once the dependencies are installed, run the following command to start the server:
 

    npm run prepare
    npm run start

## API Endpoints

The API documentation of the availible endpoints can be found here
[API DOC](http://localhost:3000/api-doc)

## Live DEMO
The live demo is hosted here
[Live demo link](https://link%20to%20live%20demo)