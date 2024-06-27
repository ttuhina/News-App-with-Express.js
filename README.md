![Pictures of the news page](https://github.com/ttuhina/News-App-with-Express.js/blob/main/pictures/Screenshot%202024-06-27%20125322.png)
![Pictures of the news page](https://github.com/ttuhina/News-App-with-Express.js/blob/main/pictures/Screenshot%202024-06-27%20125332.png)


#                                                                     **News App with Express.js**


This project is a simple web application built using Express.js to fetch and display news articles from an external API. It achieves the following objectives:

1.**Set up a simple web server using Express.js**: The application initializes an Express server to handle HTTP requests and serve static files.

2.**Handle basic routing and middleware** : Express middleware is used to parse incoming requests and serve static files. Routing is implemented to respond to different endpoints for fetching news data.

3.**Implement routes to respond to at least two different endpoints**:

i. /: Serves the main HTML page to display the news dashboard.

ii. /news/top: Fetches and displays top headlines from a news API.

iii. /news/search: Accepts a query parameter to search for news articles based on keywords.

# **Project Hierarchy and Files**

The project directory structure is organized as follows:

project-root/

│

├── public/

│   ├── index.html  

│

├── server.js     

├── package.json    

└── README.md           
  

# **File Descriptions**:
i. index.html: Main HTML file that displays the news dashboard.

ii. server.js: Express server setup file. Initializes the Express application and defines middleware for parsing JSON and URL-encoded data, and serving static files.
Implemented routes:

  /: Serves index.html.
        
  /news/top: Fetches top headlines from a news API.
        
  /news/search: Searches for news articles based on user-provided query.


# **To run the project locally:**

i. Clone the repository to your local machine.

ii. Install dependencies using npm install.

iii. Start the server with node server.js.

iv. Open a web browser and navigate to http://localhost:3000 to view the news dashboard.


# **Important Note:**
In case the API key in the file index.js has expired, ensure you have obtained an API key from newsapi.org and replace NEWS_API_KEY in server.js with your obtained API key.


