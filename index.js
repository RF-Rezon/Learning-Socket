const express = require("express");
const app = express();

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+"/index.html")
// });

// app.listen("3000", ()=>{
//    console.log("App is listening on port 3000")
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        Another Approtch


const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);

const io = new Server(expressServer);

const goLeft = io.of("/go_left");
goLeft.on("connection", (socket) => {
    console.log("New User Connected.");
    
    goLeft.emit("namespace", "Go to left.")
    
    socket.on('disconnect', ()=>{
        console.log("User Disconnected.")
    })
})

const goRight = io.of("/go_right");
goRight.on("connection", (socket) => {
    console.log("New User Connected.");

    goRight.emit("namespace", "Go to right.")

    socket.on('disconnect', ()=>{
        console.log("User Disconnected.")
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

expressServer.listen("3000", () => {
    console.log("App is listening on port 3000")
})
