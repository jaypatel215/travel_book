var express = require('express');
var app = express();
var path = require('path');

var staticpath = path.join(__dirname);

console.log(staticpath);

app.get("/",(req,res)=>{
    res.sendFile(`${staticpath}/index2.html`);
});

app.get("/contact",(req,res) =>{
    res.sendFile(`${staticpath}/contact.html`);
});

app.get("/home",(req,res) =>{
    res.sendFile(`${staticpath}/index2.html`);
});

app.get("/hillstation",(req,res) =>{
    res.sendFile(`${staticpath}/hill_station.html`);
});

app.get("/register",(req,res) =>{
    res.sendFile(`${staticpath}/register.html`);
});

app.listen(3000,() => {
    console.log("listening on port 3000...")
});