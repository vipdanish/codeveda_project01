# Level 1: Full-Stack Development Environment Setup

## Project Overview
This project covers the foundational setup and development of a basic full-stack application, including environment configuration, API development, and frontend integration.

## Tech Stack
- **Backend:** Node.js, Express.js, npm/yarn
- **Version Control:** Git, GitHub
- **Database:** MongoDB  (We can also Choose onefrom MySQL/PostgreSQL)
- **Frontend:** HTML, CSS, JavaScript (Fetch API/Axios)
- **Tools:** VS Code, Terminal, Postman/Thunder Client

## Tasks

### Task 1: Setup Development Environment
- Install Node.js and npm/yarn
- Set up Git and GitHub repository
- Configure a database (MongoDB/MySQL/PostgreSQL)
- Learn basic terminal and Git commands

### Task 2: Build a Simple REST API
- Set up an Express.js server
- Create API routes for CRUD operations (Create, Read, Update, Delete)
- Test API endpoints using Postman or Thunder Client
- Handle errors and return proper HTTP responses

### Task 3: Frontend with HTML, CSS, and JavaScript
- Build a static website layout
- Fetch API data using JavaScript (Fetch API/Axios)
- Display fetched data dynamically on the webpage
- Use CSS for basic styling and responsiveness

## Setup Instructions

### 1. Install Node.js and npm/yarn
- [Download Node.js](https://nodejs.org/) and install the LTS version.
- Verify installation:
    ```bash
    node -v
    npm -v
    ```
- (Optional) Install Yarn:
    ```bash
    npm install -g yarn
    yarn -v
    ```

### 2. Set up Git and GitHub Repository
- Initialize a local Git repository:
    ```bash
    git init
    ```
- Add a remote GitHub repository:
    ```bash
    git remote add origin <your-repo-url>
    ```

### 3. Configure a Database
Choose and install one of the following databases:
- [MongoDB](https://www.mongodb.com/try/download/community)
- [MySQL](https://dev.mysql.com/downloads/)
- [PostgreSQL](https://www.postgresql.org/download/)

### 4. Learn Basic Terminal and Git Commands
- Terminal Commands:
    ```bash
    mkdir project-folder
    cd project-folder
    touch index.js
    ls -la
    ```
- Git Commands:
    ```bash
    git add .
    git commit -m "Initial commit"
    git push origin main
    ```

### 5. Set up Express.js and Build REST API
- Install Express:
    ```bash
    npm init -y
    npm install express
    ```
- Create an Express server:
    ```javascript
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 5000;

    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('API is running');
    });

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    ```

### 6. Create Frontend with HTML, CSS, and JavaScript
- Basic HTML structure:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>API Frontend</title>
    </head>
    <body>
        <div id="data"></div>
        <script src="script.js"></script>
    </body>
    </html>
    ```
- Fetch API data with JavaScript:
    ```javascript
    fetch('http://localhost:5000/')
        .then(response => response.text())
        .then(data => document.getElementById('data').innerText = data)
        .catch(error => console.error('Error:', error));
    ```

## Project Status
✅ Level 1: Environment setup, REST API, and frontend complete

## Author
Syed Danish Ishaque

