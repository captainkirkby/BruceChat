var express = require("express");

var app = express();

//middleware
app.use(express.logger());
app.use(express.bodyParser())
app.use(express.static(__dirname + "/public"));

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

app.post("/chat", function(req, res){
    console.log(JSON.stringify(req.body));
    
    res.end(req.body.message);
})

app.get("*", function(req, res){
    res.end("404!");
});

app.listen(8888)
console.log("Server is up on port 8888");
