// const User = require('../Entity/Player');

module.exports = (socket) => {

  // Add player
  socket.on('add player', (req) => {
    var Player = require('mongoose').model('Player');

    console.log("res = ", req);

    socket.emit('add player:response', {success: true, response: "success"});


    // new Player({
    //   name: req.body.name,
    //   admin: req.body.admin,
    //   avatar: req.body.avatar,
    //   word: null,
    //   intru: false
    // }).save(function (err, fluffy) {
    //   if (err) return console.error(err);
    //     console.log("success");
    // });;

    // if (!socket.user) {
    //   let userByUsername = globalData.listUsers.find(function (user) {
    //     return user.username === req.username;
    //   });
    //   if (!userByUsername) {
    //     ++globalData.nbUsers;
    //     socket.user = new User(req.username, socket);
    //     socket.emit('add user:response', {success: true, response: socket.user.toResult()});
    //     console.log(`New user ${socket.id}: ${socket.user.userName}.`);
    //     globalData.listUsers.push(socket.user);
    //   } else {
    //     socket.emit('add user:response', {success: false, response: 'Username already exists.'});
    //   }
    // } else {
    //   socket.emit('add user:response', {success: true, response: socket.user.toResult()});
    // }
  });
};
