var express = require("express");
var fs = require("fs");

var app = express();
var portNumber = 8888;

//create a logger (export this to another file)
function logger(req, res, next){
    console.log(req.method + " request from " + req.ip + " for " + req.url);
    next();
}

//middleware
app.use(logger);
app.use(express.bodyParser())
app.use("/", express.static(__dirname + "/public/html"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));

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
    fs.appendFile("chatText.chat", req.body.message + "\n", function(writeErr){
        if(writeErr) throw writeErr;
        fs.readFile("chatText.chat", function(readErr, data) {
            if(readErr) throw readErr;
            res.end(data);
        })
    })
})

app.get("*", function(req, res){
    res.end("404!");
});

app.listen(portNumber)
console.log("Server is up on port " + portNumber);
