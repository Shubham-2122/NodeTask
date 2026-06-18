const fs = require('fs');

// blocking - Wait
// console.log("1")
// fs.writeFileSync('demo.txt',"hello node js data");
// console.log("2")
// console.log("Successfully printed")

// non-blocking : background



fs.writeFile('test.txt', 'Hello Async', (err) => {

    if (err) {
        console.log(err);
    } else {
        console.log("File Created");
    }

});

console.log("Program End");