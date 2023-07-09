const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIO = require("socket.io");
const addSocketEventListeners = require("./Socket");

const userController = require("./Controllers/UserController");

require("dotenv").config();

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const httpServer = http.createServer(app);
const io = socketIO(httpServer, {
  cors: {
    credentials: true,
    origin: allowedOrigins,
  },
});

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);

app.use(express.json());
app.use("/users", userController);

app.get("/", (req, res) => {
  res.send(`
  <h1>Jailbreak Trading Hub</h1>
  `);
});

app.get("*", (req, res) => {
  res.status(404).send("Not found!");
});

addSocketEventListeners(io);

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
  console.log(`💰Trading hub is running on port ${PORT}💰`);
});
