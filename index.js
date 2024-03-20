const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");

const expressServer = http.createServer(app);

const io = new Server(expressServer);

io.on("connection", (socket) => {
    console.log("New User Connected.");

    socket.join("kitchen-room") // Creating room.
    let sizeOfKitchen = io.sockets.adapter.rooms.get("kitchen-room").size;
    io.in("kitchen-room").emit("cooking", `Fried Rice Cooking = ${sizeOfKitchen}`); // This events only availabe under "kitchen-room"
    io.in("kitchen-room").emit("washing", `Washing Dishes = ${sizeOfKitchen}`); // This events only availabe under "kitchen-room"

    socket.join("bed-room")  // Creating room.
    io.in("bed-room").emit("sleeping", "Sleeping with loving wife"); // This events only availabe under "bed-room"
    io.in("bed-room").emit("sex", "Morning sex with loving wife"); // This events only availabe under "bed-room"f

    socket.on('disconnect', () => {
        console.log("User Disconnected.")
    })
})


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

expressServer.listen("3000", () => {
    console.log("App is listening on port 3000")
})
