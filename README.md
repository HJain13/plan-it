# PlanIt
SWE Project for V Semester

# Installation
1. You must have Node.js and MongoDB installed

    * [Node.js](https://nodejs.org/en/)

    * [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) 

2. Run the following scripts in the root project folder as well as frontend folder

    * `npm full-install`

    * `npm install --save express-session`    //Optional

    * `npm install -g nodemon`    //Optional

3. Take `.env.txt` from `config` folder and paste it into root folder as `.env`

4. Make sure `mongod` service is running in background and listening on port `27017`. If you can't run it on that port make sure to make changes in app.js in root folder
    <strong>
    ```
    if (process.env.environment === 'development') {
    mongoUrl = 'mongodb://localhost:27017/plan-it';
    } else {
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

    - [x] SignUp and Login
    - [x] Approving Businesses by Admin

