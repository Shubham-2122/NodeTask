const fs = require("fs")

// buffer
// const data = fs.readFileSync("demo.txt")

const data = fs.readFileSync("demo.txt","utf-8")

console.log(data)