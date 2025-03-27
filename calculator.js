// Import required modules
const express = require("express"); // Express framework for building web APIs
const app = express(); // Initialize the Express application
const winston = require("winston"); // Winston for logging

// ---------------------------
// Logger Configuration
// ---------------------------
const logger = winston.createLogger({
    level: "info", // Log all messages from 'info' level and above
    format: winston.format.json(), // Format logs as JSON
    defaultMeta: { service: "calculator-microservice" }, // Meta info for all logs
    transports: [
        // Log error-level messages to 'error.log'
        new winston.transports.File({ filename: "error.log", level: "error" }),
        // Log all messages of level 'info' and above to 'combined.log'
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

// Enable console logging during development
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(), // More readable output for dev
    }));
}

// ---------------------------
// Arithmetic Operation Functions
// ---------------------------
// Each function performs a basic arithmetic operation
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero"); // Prevent division by zero
    return a / b;
};

// ---------------------------
// Route: GET /calculate
// ---------------------------
// Accepts query parameters: n1, n2, and operation
// Performs the specified arithmetic operation
app.get("/calculate", (req, res) => {
    try {
        // Parse input numbers from query parameters
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        const operation = req.query.operation;

        // Validate input numbers
        if (isNaN(n1)) {
            logger.error("n1 is incorrectly defined");
            throw new Error("n1 incorrectly defined");
        }
        if (isNaN(n2)) {
            logger.error("n2 is incorrectly defined");
            throw new Error("n2 incorrectly defined");
        }

        let result;

        // Perform the appropriate operation based on the query
        switch (operation) {
            case "add":
                result = add(n1, n2);
                break;
            case "subtract":
                result = subtract(n1, n2);
                break;
            case "multiply":
                result = multiply(n1, n2);
                break;
            case "divide":
                result = divide(n1, n2);
                break;
            default:
                logger.error(`Invalid operation: ${operation}`);
                throw new Error("Invalid operation. Use add, subtract, multiply, or divide.");
        }

        // Log successful calculation
        logger.info(`Operation ${operation} with n1=${n1}, n2=${n2}, result=${result}`);

        // Respond with result in JSON format
        res.status(200).json({ statuscode: 200, data: result });
    } catch (error) {
        // Log and return error response
        console.error(error.message);
        res.status(500).json({ statuscode: 500, msg: error.toString() });
    }
});

// ---------------------------
// Start the Server
// ---------------------------
const port = 3051;
app.listen(port, () => {
    console.log(`Calculator microservice is listening on port ${port}`);
});
