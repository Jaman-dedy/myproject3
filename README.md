# Andela-restfulApi (v1)

[![Coverage Status](https://coveralls.io/repos/github/Jaman-dedy/restfulApi/badge.svg?branch=develop)](https://coveralls.io/github/Jaman-dedy/restfulApi?branch=develop)  [![Build Status](https://travis-ci.org/Jaman-dedy/restfulApi.svg?branch=develop)](https://travis-ci.org/Jaman-dedy/restfulApi)  <a href="https://codeclimate.com/github/Jaman-dedy/restfulApi/maintainability"><img src="https://api.codeclimate.com/v1/badges/fa9a68ad97ec6318c878/maintainability" /></a>


Restfulapi project stand for the first backend side of Questioner with no persistance CRUD implmentation. The aim of the project is to create a Resful API using nodejs and express.

* UI Template : [https://jaman-dedy.github.io/Questioner/index.html](https://jaman-dedy.github.io/Questioner/index.html)


## Tools, Modules, framework used

* Nodejs/Express
* Vscode
* Mocha chai and supertest for unitest
* Nodemon
* Eslint Airbnb
* Body-parser
* TravaisCI
* Coveralls.io
* Code climate
* Heroku

## Features

1. Client can create a meetup record
2. Client can create a question record
3. Client can Get a specific meetup record
4. Client can get all meetup records
5. Client can upvote or downote a question
6. Client que respond to a meetup Rsvp


## Installatioin


`$ git clone` [https://github.com/Jaman-dedy/restfulApi.git](https://github.com/Jaman-dedy/restfulApi.git)

`$ npm start`   


* Make sure you get `Nodejs `on your work space
* Run `npm install` to install node packages
* Make sure the `server` is runing on a specific port

## Running tests

For getting start with the demo, use postman to access API endpoints. 
[https://btcprep2.herokuapp.com/](https://btcprep2.herokuapp.com/), add a specific endpoint to this url and run the test in postman

### API Endpoints

|         Endpoints                |   Methods       |               Description                           |
| ---------------------------------|:---------------:| ---------------------------------------------------:|
|         `v1/users/`              |     GET         |  Fetch all users record                             |
|      `v1/users/<userId>`         |     GET         |  Fetch a specific user record                       |
|         `v1/users`               |     POST        |  Create a user record                               |
|     `v1/users/<userId>`          |     PUT         |  Update a specific user                             |
|     `v1/users/<userId>`          |     DELETE      |  Delete a user record                               |
|         `v1/rsvps/`              |     GET         |  Fetch all rsvps record                             |
|      `v1/rsvps/<rsvpId>`         |     GET         |  Fetch a specific rsvp record                       |
|        `v1/questions/ `          |     GET         |  Fetch all questions record                         |
|  `v1/questions/<questionId>`     |     GET         |  Fetch a specific question record                   |
|        `v1/questions`            |     POST        |  Create a question for a specific meetup            |
|`v1/questions/<questionId>/upvote`|     PATCH       |  Upvote a specific question (increase votes by 1)   |
|`v1/questions/<questionId>/upvote`|     PATCH       |  Downvote a specific question (decrease votes by 1) |
|  `v1/questions/<questionId>`     |     DELETE      |  Delete a specific question record                  |
|         `v1/meetups/`            |     GET         |  Fetch all meetups records                          |
|   `v1/meetups/upcoming`          |     GET         |  Fetch all upcoming meetups records                 |
|   `v1/meetups/<meetupId>`        |     GET         |  Fetch a specific meetup record                     |
|        `v1/meetups`              |     POST        |  Create a meetup record                             |
| `v1/meetups/<meetupId>/rsvps`    |     POST        |  Respond to a meetup RSVP                           |
|     `v1/meetups/<userId> `       |     PUT         |  Update a specific meetup                           |
|      `v1/meetups/<userId> `      |     DELETE      |  Delete a meetup meetup                             |

## Credits

For completing this project, we use a large base of ressources, we provide below some of them

* [Custome a readme file](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
* [Guide to write a readme file](https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* [Read me file template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [Bulding a resful APi with nodejs and express](https://www.youtube.com/watch?v=pKd0Rpw7O48)
* [Create a resful APi with nodejs 14 tutos](https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
* [Git & github learnings](https://www.youtube.com/watch?v=SWYqp7iY_Tc&t=173s)
* [Github Tutorial](https://www.youtube.com/watch?v=xuB1Id2Wxak&t=198s)
* [Using mocha and chai](https://www.youtube.com/watch?v=MLTRHc5dk6s)
* [Eslint quickstart](https://www.youtube.com/watch?v=qhuFviJn-es&t=435s)
* [Diving into Eslint](https://www.youtube.com/watch?v=nxxl2H_TOTc&list=PLMWjeRChIK6bnp6qaS3rxLGCpc9aQYzEE)
* [Intro do travisCI](https://www.youtube.com/watch?v=EZ3jbORVFHQ&t=10s)
* [API testing](https://hackernoon.com/api-testing-using-supertest-1f830ce838f1)
* ...
***
### License
` MIT © `[Jeand de Dieu AMANI MPANGIRWA](https://github.com/Jaman-dedy)









