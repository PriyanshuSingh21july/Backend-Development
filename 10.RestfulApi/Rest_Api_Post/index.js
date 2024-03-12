

// const express = require("express");
// const users = require("./MOCK_DATA.json");
// const app = express();
// app.use(express.urlencoded({extended:false})) // middleware
// const fs=require("fs");

// app.get("/about", (req, res) => {
//   res.send("Hello from about express");
// });

// app.route("/users/:id")
//   .get((req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: "User not found" });
//     }
//   })
  
//   .put((req, res) => {
//     return res.json({ status: "Pending" });
//   })
//   .delete((req, res) => {
//     return res.json({ status: "Pending" });
//   });


// //post Append data json file  
// app.post("/users",(req,res)=>{
//   const body=res.body;
//   users.push({...body,id:length+1});
//   fs.write(".//MOCK_DATA.json",JSON.stringify(users))

//   return res.json({status:"Pending"});
// })

// app.listen(8080, () => {
//   console.log("Server 8080 Start");
// });


const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: false })); // middleware

app.get("/about", (req, res) => {
  res.send("Hello from about express");
});

app.route("/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  })
  
  .put((req, res) => {
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "Pending" });
  });

// POST: Append data to JSON file by using post man
app.post("/users", (req, res) => {
  const body = req.body;
  users.push({...body,id: users.length+1});
fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data) => {
   
      return res.json({status:"Pending"});
      
  });
});



app.listen(8080, () => {
  console.log("Server 8080 Start");
});
