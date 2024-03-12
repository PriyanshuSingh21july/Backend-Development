const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();


app.get("/about", (req, res) => {
               res.send("Hello from about express");
});



// 3. Get user by id  run : http://localhost:8080/users/5
app.get("/users/:id", (req, res) => {
               const id = Number(req.params.id);
               const user = users.find((user) => user.id === id);

               if (user) {
                              res.json(user);
               } else {
                              res.status(404).json({ error: "User not found" });
               }
});


// Delete api
app.delete("/users/:id", (req, res) => {
               const id = Number(req.params.id);
               const index = users.findIndex((user) => user.id === id);

               if (index !== -1) {
                              users.splice(index, 1);
                              res.json({ message: "User deleted successfully" });
               } else {
                              res.status(404).json({ error: "User not found" });
               }
});



app.listen(8080, () => {
               console.log("Server 8000 Start");
});






