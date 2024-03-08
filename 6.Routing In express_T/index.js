


const express = require("express");
const app = express();

app.get("/about", (req, res) => {
  res.send("Hello from about express");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to the contact page</h1>");
});

app.get("/Home", (req, res) => {
  res.json([
    {
      id: 1,
      Name: "Priyanshu Singh",
      Branch: "CSE",
      Semester: "V",
      Rolleno: "Node js Developer"
    }
  ]);
});

app.get("/login", (req, res) => {
  res.send({
    id: 1,
    name: "Priyanshu",
    rollno: 12
  });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
