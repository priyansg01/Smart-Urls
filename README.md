
Short URL Service


A URL shortener service built with Node.js, providing user authentication and authorization features. This project allows users to shorten long URLs, manage their shortened links, and access them securely.

Features
URL Shortening: Convert long URLs into short, manageable links.

User Authentication: Secure user registration and login using JWT (JSON Web Tokens).

Authorization: Protect access to shortened URLs based on user credentials.

NPM Modules: Utilizes various npm packages for functionality and security.

Technologies Used
Node.js: JavaScript runtime for server-side programming.
Express.js: Web application framework for Node.js.
MongoDB: NoSQL database for storing user and URL data.
JWT (JSON Web Tokens): For secure user authentication and authorization.
NPM Packages: Includes express, mongoose, jsonwebtoken, bcrypt, and other dependencies.

Installation
Clone the Repository:

git clone https://github.com/yourusername/short-url-service.git
cd short-url-service
Install Dependencies:

npm install
Set Up Environment Variables:

Create a .env file in the root directory and add the following variables:

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start the Server:

npm start
The application will run on http://localhost:3000.

API Endpoints
POST /register: Register a new user.
POST /login: Log in an existing user and receive a JWT.
POST /shorten: Shorten a given URL. Requires authentication.
GET /:shortUrl: Redirect to the original long URL using the shortened URL.
GET /urls: List all shortened URLs for the authenticated user.
Usage
Register a User:

Send a POST request to /register with user details.

Log In:

Send a POST request to /login with credentials to receive a JWT.

Shorten a URL:

Send a POST request to /shorten with the long URL in the body and include the JWT in the authorization header.

Access Shortened URL:

Use the shortened URL in a GET request to be redirected to the original long URL.

List Shortened URLs:

Send a GET request to /urls with the JWT in the authorization header to list all URLs shortened by the authenticated user.

Contributing
Feel free to submit issues or pull requests. Contributions are welcome!

License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please contact guptapriyansh646@gmail.com.

Feel free to adjust any sections according to your project specifics!
