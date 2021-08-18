//To get the server up and running, we need to use the following code
const express  = require("express");
const app = express();
//the code required to get a server running, and that prints a message to the console
const port = 3000;


// show message
app.get("/", function(req,res){
  res.send("Hello World!?"); 
});
app.get("/parks", function(req,res){
  res.send("The Parks You've Seen");
});

app.listen(port, function (){
  console.log("Server running");
});