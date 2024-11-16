# wiki_search
LegalEASE Take-Home Technical Interview: WikiSearch and History
Objective:
Create a web application that fetches and displays search data from the Wikipedia Open API. Users should be able to search for Wikipedia pages in the application. Search history should be stored in the database. The application should be structured using React for the frontend, Node.js for the backend, and MySQL for data storage. All components should be containerized using Docker.

Requirements:
1.Frontend (React):
    → Create a React application that displays data fetched from the backend API.
    → Implement the following view:
        A Search View showing a search box where a user can type in a search criterion such as “pizza” and get a list of results of possible pages that include “pizza” from Wikipedia.
    → Implement basic styling in CSS (CSS framework like Bootstrap for extra points).
2.Backend (Node.js):
    → Build a Node.js backend application using Express.js or any other web application framework of your choice, but it must use Node.js.
    → Set up endpoints to fetch data from the Wikipedia Open API
        Example search url:
            1.https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Pizza&format=json
        Reference Documentation
            1.https://www.mediawiki.org/wiki/API:Tutorial#A_simple_query
    → Create an endpoint to add data in a MySQL database for storing the search history.
3.Database (MySQL):
    → Set up a MySQL database with at least one table to store search history data.
    → Implement basic CRUD operation needed for history (Create) for the data.
4.Docker:
    → Containerize the frontend, backend, and database using Docker.
    → Create a docker-compose.yml file to orchestrate the services.
    → Ensure that the containers can communicate with each other and that the application functions correctly when deployed.

Detailed Steps:
1.API Integration:
    → Use the Wikipedia Open API to fetch data from.
    → Create a backend endpoint that makes a request to this API and processes the data.
2.Frontend Development:
    → Set up a new React project.
    → Create a component for the Search View.
    → Display the search data in a user-friendly format.
3.Backend Development:
    → Set up a new Node.js project.
    → Implement endpoints to serve data to the React frontend.
    → Implement an endpoint for CRUD operations that interacts with your MySQL database.
4.Database Setup:
    → (Required)
        1.Define the schema for your MySQL database.
    → (Optional)
        1.Add a database viewing administrative application for easy data viewing
        2.Write SQL scripts to set up tables and seed initial data if desired.
        3.Connect your Node.js backend to the MySQL database using an ORM
5.Dockerization:
    → Write Dockerfiles for the frontend, backend, and database.
    → Create a docker-compose.yml file to set up and configure the multi-container application.
    → Ensure that your Docker setup allows for easy development and deployment.

Deliverables:
    1.A GitHub repository containing:
        oThe React frontend code.
        oThe Node.js backend code.
        oDockerfiles for each service and a docker-compose.yml file.

Evaluation Criteria:
    Code Quality: Clean, readable, and well-structured code.
    Functionality: The application meets all requirements and works as expected.
    Docker Knowledge: Proper use of Docker and Docker Compose.
    API Integration: Efficient and effective use of the open API.
    Database Management: Correct implementation of CRUD operations and database schema.
    Frontend Design: Usability and design of the React application.