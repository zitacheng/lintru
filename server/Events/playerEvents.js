const Player = require('../Entity/Player');

module.exports = (socket, globalData) => {

  // Add user to the list with an user name.
  socket.on('addPlayer', (name, avatar, urlKey) => {

    if (!socket.player) {
      socket.player = new Player(name, socket, avatar, urlKey);
      socket.emit('addPlayerSuccess', {success: true, response: socket.player.toResult()});
      console.log("new player created ", socket.player);
      globalData.listPlayer.push(socket.player);
    } else {
      socket.emit('addPlayerSuccess', {success: true, response: socket.player.toResult()});
    }
  });

  // If admin, can kick other player.
  // socket.on('kick user', (req) => {
  //   if (socket.user && socket.room && socket.user.admin) {
  //     let userTarget = socket.room.users.find(function (user) {
  //       return user.username === req.username;
  //     });
  //     if (userTarget) {
  //       userTarget.socket.emit('kicked');
  //       userTarget.socket.room = null;
  //       socket.room.removeUser(req.username);
  //       socket.emit('kick user:response', {success: true, response: socket.room.toResult()});
  //     } else {
  //       socket.emit('kick user:response', {success: false, response: 'No user found.'});
  //     }
  //   } else {
  //     socket.emit('kick user:response', {success: false, response: 'You do not have enough right.'});
  //   }
  // });

  // Client disconnect
  socket.on('disconnect', () => {
    if (socket.player) {
      if (socket.lobby) {
        // If the lobby has only one user, we are removing the lobby.
        if (socket.lobby.players.length === 1) {
          let lobbyIdx = globalData.lobbyList.indexOf(socket.lobby);
          if (lobbyIdx !== -1) {
            globalData.lobbyList.splice(lobbyIdx, 1);
          }
        } else{
          // TODO: Set the next player to admin.
          let userTarget = socket.lobby.players.find(function (player) {
              return player.socket === socket;
          });
          socket.lobby.removePlayer(userTarget.username);
        }
      }
      console.log("logout ", globalData);
    }
  });
};
