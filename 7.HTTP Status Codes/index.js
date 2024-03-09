const express = require("express");
const app = express();

// 1.Route for informational responses (HTTP 1xx)
app.get("/continue", (req, res) => {
  res.status(100).send("Continue");
});

// 2.Route for successful responses (HTTP 2xx)
app.get("/success", (req, res) => {
  res.status(200).send("Success! Resource accessed successfully.");
});

// 3. Route for redirection (HTTP 3xx)
app.get("/redirect", (req, res) => {
  res.redirect(302, "/success");
});

//  4. Route for client errors (HTTP 4xx)
app.get("/badrequest", (req, res) => {
  res.status(400).send("Bad Request: The server cannot process the request.");
});

//  5.Route for unauthorized access (HTTP 401 Unauthorized)
app.get("/unauthorized", (req, res) => {
  res.status(401).send("Unauthorized: Authentication is required.");
});

// 6.Route for forbidden access (HTTP 403 Forbidden)
app.get("/forbidden", (req, res) => {
  res.status(403).send("Forbidden: You don't have permission to access this resource.");
});

// 7.Route for resource not found (HTTP 404 Not Found)
app.get("/notfound", (req, res) => {
  res.status(404).send("Not Found: The requested resource could not be found.");
});

// Route for server errors (HTTP 5xx)
app.get("/error", (req, res) => {
  // Simulating an internal server error for demonstration purposes
  const err = new Error("Simulated internal server error");
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
