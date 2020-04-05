const Lobby = require('../Entity/Lobby');

module.exports = (socket, globalData, io) => {

  // Create Room
  socket.on('createLobby', () => {
    if (socket.player) {
      if (!socket.lobby) {
        socket.player.admin = true;
        socket.lobby = new Lobby();
        socket.lobby.addPlayer(socket.player);
        console.log("lobby key = ", socket.lobby.key);
        socket.join(socket.lobby.key, function () {
          console.log(socket.id + " now in rooms ", socket.rooms);
        });
        // console.log("After join key = ", socket.lobby.key);
        // console.log("NAMESPACE = ", socket);
        // console.log("cretae socket only", socket);
        globalData.lobbyList.push(socket.lobby);
        socket.emit('createLobbySuccess', {success: true, response: socket.lobby.toResult()});
        console.log("User " + socket.player.userName + " created the lobby " + socket.lobby.key);
      } else {
        socket.emit('createLobbySuccess', {success: false, response: 'You are already in a lobby.'});
      }
    }
  });

  // Join Room if the user has been created and he is not already in a room.
  socket.on('joinLobby', (key) => {

    if (socket.player && !socket.lobby) {
      let lobby = globalData.lobbyList.find((lobbyFind) => {
        return lobbyFind._key === key;
      });
      if (lobby && lobby._start === false) {
        try {
          lobby.addPlayer(socket.player);
          socket.lobby = lobby;
          socket.join(socket.lobby._key);
          socket.emit('joinLobbySuccess', {success: true, response: lobby.toResult()});
          // console.log(" globalData.listplayer = ",  globalData.listPlayer);
          // console.log(" lobby d= ",  lobby._key);
          socket.to(lobby._key).emit('newJoin', {response: lobby.toResult()});

          console.log("READY 1=> ", io.sockets.sockets);
          console.log("READY 2=> ", io.sockets.sockets.rooms);
          // globalData.listPlayer.forEach(function(player) {
          //   console.log("player ", player);
          //   console.log("socket.player._id ", socket.player._id);
          //   if (player.id !== socket.player._id) {
          //     // user.socket.emit('msgGlobal', {userFrom: socket.user.userName, msg: req.msg});
          //   }
          // });
          console.log("User " + socket.player.userName + " joined the lobby " + socket.lobby.key + ".");
        }
        catch (e) {
          console.log(e);
          socket.emit('joinLobbySuccess', {success: false, response: e});
        }
      } else {
        console.log("Lobby " + key + " does not exists");
        console.log(globalData.roomList);
        socket.emit('joinLobbySuccess', {success: false, response: 'Lobby ' + key + ' does not exists.'});
      }
    }
  });
};
