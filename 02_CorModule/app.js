const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req)
    // console.log(res)
    console.log(req.url,req.method)
    res.write("Welcome To Node Server")
    res.end();
})

server.listen(3000);
console.log("server runing successfuly")