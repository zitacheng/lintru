module.exports = (socket) => {
  socket.player = null;
  socket.lobby = null;

  // User events:
  require('./Events/playerEvents')(socket);
  // Room events:
  require('./Events/lobbyEvents')(socket);
}
