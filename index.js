const express = require("express");
const app = express();

// const http=require("http");
// const x =  http.createServer(app);

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+"/index.html")
// });

// x.listen("3000", ()=>{
//    console.log("App is listening on port 3000")
// })


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        Another Approtch


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.listen("3000", ()=>{
   console.log("App is listening on port 3000")
})
