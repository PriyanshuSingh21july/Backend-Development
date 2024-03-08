

const fs = require("fs");
const data = fs.readFileSync("CreateFile_Priyanshu.txt","utf-8");
console.log(data);
console.log("Synchronous")


/* if give compiler integer then change to string ex= const=old.toString()  */
/* utf-8 encoding data change buffer data to actual data */