# PlanIt
SWE Project for V Semester

# Installation
1. You must have Node.js and MongoDB installed

    * [Node.js](https://nodejs.org/en/)

            Recommended Version: 
            * Node: 8.9.1
            * npm: 5.5.1

    * [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) 

            Recommended Version: 
            * Mongo Shell Version: 3.4.10

2. Run the following scripts in the root project folder as well as frontend folder

    * `npm run full-install`

    * `npm install --save express-session`    //Optional

    * `npm install -g nodemon`    //Optional

3. Take `.env.txt` from `config` folder and paste it into root folder as `.env`

4. Make sure `mongod` service is running in background and listening on port `27017`. If you can't run it on that port make sure to make change in ``xxxx`` in root folder
    <strong>
    ```
    if (process.env.environment === 'development') {
    mongoUrl = 'mongodb://localhost:27017/plan-it';
    }
    else if (process.env.environment === 'development-riya') {
    mongoUrl = 'mongodb://localhost:xxxx/plan-it';
    }
    else {
    mongoUrl = process.env.mongoUrl;  
    }
    ```
    </strong>
5. Run the project from the root project folder
    <strong>
    ```
    npm run full
    ``` 
    </strong>

# Project Tasks

- Sprint 1

    - [x] SignUp of Admin
    - [x] Login-Register Business
    - [x] Approving Businesses by Admin
    - [x] Add-Delete Packages by Business

- Sprint 2

    - [x] SignUp of Admin
    - [x] Login-Register Business
    - [x] Approving Businesses by Admin
    - [x] Add-Delete Packages by Business

- Sprint 3

    - [x] SignUp of Admin
    - [x] Login-Register Business
    - [x] Approving Businesses by Admin
    - [x] Add-Delete Packages by Business



