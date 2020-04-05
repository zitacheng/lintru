const Lobby = require('../Entity/Lobby');

module.exports = (socket, globalData) => {

  // Create Room
  socket.on('createLobby', () => {
    if (socket.player) {
      if (!socket.lobby) {
        socket.player.admin = true;
        console.log("inside create lobby");
        socket.lobby = new Lobby();
        console.log("new lobby");
        socket.lobby.addPlayer(socket.player);
        console.log("addPlayer");
        socket.join(socket.lobby.key);
        console.log("after join ", socket.lobby.key);
        globalData.lobbyList.push(socket.lobby);
        console.log("globalData push  ", globalData.lobbyList);
        socket.emit('createLobbySuccess', {success: true, response: socket.lobby.toResult()});
        console.log("User " + socket.player.userName + " created the lobby " + socket.lobby.key);
      } else {
        socket.emit('createLobbySuccess', {success: false, response: 'You are already in a lobby.'});
      }
    }
  });

  // Join Room if the user has been created and he is not already in a room.
  socket.on('joinLobby', (req) => {
    if (socket.player && !socket.lobby) {
      let lobby = globalData.lobbyList.find((lobbyFind) => {
        return lobbyFind.key === req.key;
      });
      if (lobby && lobby.started === false) {
        try {
          lobby.addUser(socket.player);
          socket.lobby = lobby;
          socket.join(socket.lobby.key);
          socket.emit('joinLobbySuccess', {success: true, response: socket.lobby.toResult()});
          console.log("User " + socket.player.userName + " joined the lobby " + socket.lobby.key + ".");
        }
        catch (e) {
          console.log(e);
          socket.emit('joinLobbySuccess', {success: false, response: e});
        }
      } else {
        console.log("Lobby " + req.key + " does not exists");
        console.log(globalData.roomList);
        socket.emit('joinLobbySuccess', {success: false, response: 'Lobby ' + req.key + ' does not exists.'});
      }
    }
  });
};
