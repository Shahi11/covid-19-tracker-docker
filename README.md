INTRODUCTION
In this project we built a Docker container based application using client server architecture that provides country oriented COVID-19 Statistics like number of confirmed cases, critical cases, deaths and recovered patients.
TECHNOLOGIES
Front-end: Written in JavaScript, CSS and HTML, using ReactJS which is a front-end JavaScript library and Bootstrap which is an open-source CSS framework.
Backend: Written in JavaScript, we used Express, which is a backend web application framework for Node.js
Database: We used MongoDB as our DB
The application is deployed on Docker. We build three containers for Client, Server and Mongo DB. To run all these containers together we used Docker compose.

BACKGROUND
GitHub Repository link: https://github.com/Shahi11/covid-19-tracker-docker
We have created an E2E application that shows country wise COVID-19, to build this application we implemented CRUD operations of persistent storage namely create, read, update and delete. The client initiates a request to server by calling the API’s exposed by server. The server in turn processes these request based on call type and store/fetch/update the data we receive from the client in MongoDB. The following APIs were exposed on server side:
 GET (get specific): To retrieve the COVID data of a specific country from the server by passing the country name as a field parameter.
Ex: GET http://localhost/lsds/covidTally/USA
 POST: To send COVID data of a specific country to the server and that data entry is then stored in Mongo DB. Request body contains the input data from client.
Ex: POST http://localhost/lsds/covidTally/
 GET (get all): To retrieve the COVID data of all the countries in DB from the server.
Ex: GET http://localhost/lsds/covidTally
 DELETE: This API is used to delete the COVID data of a specific country from Mongo DB by passing the country name as a field parameter.
Ex: DELETE http://localhost/lsds/covidTally/USA
 PUT: This API is used to update the COVID data of a country in Mongo DB by passing country name as a field parameter. Request body contains the updated input data from client.
Ex: PUT http://localhost/lsds/covidTally/USA
The ports used are:
Frontend (Client): 3000 Backend (Server): 5000 DATABASE (MongoDB): 27017

ARCHITECTURE
We created a table named CovidTally containing the following columns in MongoDB:
 Unique ID
 Country
 Country Code
 Confirmed Cases
 Recovered Cases
 Deaths
 Last Update time
Our repository (covid-19-tracker-docker) contains:
 Server Files
 Client Files
 Docker File
 Docker compose.yml file to compose all the application services
Compose is a tool for defining and running multi-container Docker applications. In our case we had a client container, a server container and a Database container to run them all together we used Compose. To compose we used dockercompose.yml file to configure our application services.

The following commands were used to build the E2E application on Docker:
docker build -t client . docker build -t server . docker-compose up
: To build the Client Image on Docker. : To build the Server image on Docker. : To run all the containers together.
STEP BY STEP SCREENSHOTS
1) CLIENT UI Homepage: User can input country name and get COVID-19 statistics of that country. User can also click on “All Countries” to fetch stats of all the countries stored in Database.

2) CLIENT UI ADD/UPDATE data form: User can add new country COVID-19 statistics in the form and store the data in the Database.
3) We Input the COVID-19 stats of country : Russia and click on ADD/UPDATE

4) Toverifyifthedataisstoredsuccessfullywesearchforcountry“Russia”from client and get response from server containing the same data we stored in last step.
5) Also, now when we fetch data of all the countries we can see “Russia” is present in the response from server.

6) Upon restarting the DOCKER and fetching data of Russia, we can see the data is still persisted in the DB.
 

Author
Rahul Shahi 50415068  rshahi@buffalo.edu
Abhinav Shukla 50415021 ashukla8@buffalo.edu