const express = require('express');
const EventEmitter = require('events');

const event = new EventEmitter();

const app = express();
let count=0;
event.on("event count",()=>{
    count++;
    console.log("event called"+count);
});

app.get("/",(req,res)=>{
    event.emit("event count");
    res.send("Home API called");

});


app.get("/search",(req,res)=>{
    event.emit("event count");
    res.send("search API called");
});

app.get("/update",(req,res)=>{
    event.emit("event count");
    res.send("update API called");
});
app.listen(4500);