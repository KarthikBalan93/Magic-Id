require('dotenv').config();

const express = require('express');
const config = require('./config')
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware for parsing JSON in request bodies
app.use(bodyParser.json());
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (config.allowedOrigins.includes(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
    }
  
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use("/api/applicants", require("./controllers/user"));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});