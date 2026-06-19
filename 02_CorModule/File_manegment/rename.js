const fs = require("fs")

fs.rename("newdemo.txt", "demo.txt", (err) => {
    console.log("Renamed");
});