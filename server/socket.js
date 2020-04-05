module.exports = (socket, globalData) => {
  socket.player = null;
  socket.lobby = null;

  // User events:
  require('./Events/playerEvents')(socket, globalData);
  // Room events:
  require('./Events/lobbyEvents')(socket, globalData);
}
