var express = require("express");

var app = express();

//middleware
app.use(express.logger());

//routing
app.all("*", function(req, res, next){
    res.writeHead(200, {"Content-Type" : "text/plain"});
    next();
});

app.get("/", function(req, res){
    res.end("Home");
});

app.get("/about", function(req, res){
    res.end("About");
});

app.get("/hello/:who", function(req, res){
    res.end("Hello " + req.params.who + ".");
})

app.get("*", function(req, res){
    res.end("404!");
});

app.listen(8888)
console.log("Server is up on port 8888");
