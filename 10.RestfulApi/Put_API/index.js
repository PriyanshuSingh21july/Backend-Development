
const express = require('express');
const app = express();

app.post("/", async (req, resp) => {
  resp.send('Priyanshu');
});

app.put("/",(res,req)=>{
 res.send("Updated")
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
