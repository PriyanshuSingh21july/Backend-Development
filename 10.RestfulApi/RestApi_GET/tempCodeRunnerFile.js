
  res.send("How can i help you");
});

// // // 1.Get all data in JSON file Fake Data API: https://www.mockaroo.com/
// // app.get("/users", (req, res) => {
// //                res.json(users);
// //              });


// // 2.Get particular data in jason file like first_name
// // app.get("/user", (req, res) => {
// //                const html = `
// //                  <ul>
// //                    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
// //                  </ul>
// //                `;
             
// //                res.send(html);
// //              });


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




app.listen(8080, () => {
  console.log("Server 8000 Start");
});






