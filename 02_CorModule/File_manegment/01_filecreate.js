const fs = require("fs");

fs.writeFile("demo.txt", "Hello Node", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("file printedt successfully")
    }

    console.log("File Created");
});