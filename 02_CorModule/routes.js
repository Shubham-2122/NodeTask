const http = require("http");

const server = http.createServer((req, res) => {

    if(req.url == "/"){
        console.log("Home page",req.url,req.method)
        res.end("Home Page");
    }

    else if(req.url == "/about"){
        console.log("About page",req.url,req.method)
        res.end("About Page");
    }

    else{
        console.log("Not page",req.url,req.method)

        res.end("404 Page");
    }

});

server.listen(3000);