const fs = require("fs");

fs.unlink("demo.txt", (err) => {
    console.log("Deleted");
});