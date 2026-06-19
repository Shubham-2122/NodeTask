const fs =require("fs")

fs.appendFile("demo.txt", "\nNew Data Append success", (err) => {
    console.log("Updated");
});