const usersSocket = require("./Sockets/UserSockets");

const addSocketEventListeners = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    const count = io.engine.clientsCount;
    console.log("Client Count: ", count);

    // disconnect all clients \\
    // io.sockets.sockets.forEach((socket) => {
    //   socket.disconnect(true);
    // });

    usersSocket(io, socket, socket.id);
  });
};

module.exports = addSocketEventListeners;
