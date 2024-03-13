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

io.on("connection", (socket) => {
    console.log("New User Connected.");

    setInterval(() => {
        let t = new Date;
        let s =  t.getTime();
        socket.send("Hi rozy, I love you. 💖" + s + " times")
    }, 20)


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
