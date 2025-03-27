Microservice Calculator

📚 Overview

This repository contains a Node.js microservice calculator created using the Express.js framework. It handles basic arithmetic operations (addition, subtraction, multiplication, division) through HTTP requests, showcasing a practical application of web-based microservices.

✅ Objectives

Create a Node.js microservice using Express.

Handle HTTP POST requests.

Perform arithmetic operations based on provided input.

Implement robust logging using Winston.

📁 Repository Structure

microservice-calculator/
├── node_modules/
├── package.json
├── package-lock.json
├── calculator.js
├── combined.log
├── error.log
└── README.md

🚀 Technologies Used

Node.js – JavaScript runtime environment.

Express.js – Web application framework for Node.js.

Winston – Versatile logging library for Node.js.

⚙️ Step-by-Step Guide (How This Project Was Created)

Follow these instructions to set up the project locally:

Step 1: Initialize Project Folder

Open your terminal and execute:

mkdir microservice-calculator
cd microservice-calculator

Step 2: Initialize Node.js Project & Install Dependencies

Run the following commands:

npm init -y
npm install express winston

Step 3: Create the Microservice (calculator.js)

Create a file named calculator.js and copy the code in attached calculator.js file:

Step 4: Run the Microservice Locally

Execute:

node calculator.js

You should see:

Calculator microservice running on port 3051

Step 5: Test the API

Use Postman or similar tools to test:

Endpoint: http://localhost:3051/calculate

Method: POST

JSON body:

{
  "num1": 10,
  "num2": 5,
  "operation": "multiply"
}

Expected response:

{
  "statuscode": 200,
  "data": 50
}

📝 Logging

General logs stored in combined.log.

Error-specific logs stored in error.log.

🔧 Troubleshooting

Ensure Node.js and npm are installed.

Confirm port 3051 is not in use.

Validate JSON format and operation names.

📄 License

This project is licensed under the MIT License.

