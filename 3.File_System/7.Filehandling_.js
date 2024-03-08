const fs = require("fs");

/* #Create file asyn way
fs.writeFile("7.asyncFile.txt", "", (err) => {
    if (err) {
        console.error("Error creating file:", err);
    } else {
        console.log("File created successfully!");
    }
});

*/

/*    #Append data inside asyn file     

fs.appendFile("7.asyncFile.txt", "Async file content", (err) => {
               if (err) {
                   console.error("Error appending to file:", err);
               } else {
                   console.log("Content appended to file successfully!");
               }
           });

*/


fs.readFile("7.asyncFile.txt", "utf-8", (err, data) => {
               if (err) {
                   console.error("Error reading file:", err);
               } else {
                   console.log("File content:", data);
               }
           });
           console.log("After print async file")