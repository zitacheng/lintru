const fs = require('fs');

module.exports = (socket, globalData) => {

  // start Game
  socket.on('startGame', (game, players) => {

    let intru;
    let paysan;
    let line;
    let chosedIntru;
    let rawdata = fs.readFileSync('./words.json');
    let words = JSON.parse(rawdata);

    line = Math.floor(Math.random() * Math.floor(words[game.lang].length));
    intru = Math.floor(Math.random() * Math.floor(words[game.lang][line].length));
    paysan = Math.floor(Math.random() * Math.floor(words[game.lang][line].length));

    while (paysan == intru)
      paysan = Math.floor(Math.random() * Math.floor(words[game.lang][line].length));

    chosedIntru =  Math.floor(Math.random() * Math.floor(players.length));

    players.forEach((element, idx) => {
      if (idx == chosedIntru) {
        element.intru = true;
        element.word = words[game.lang][line][intru];
      }
      else {
        element.intru = false;
        element. word = words[game.lang][line][paysan];
      }
    });

    game.players = players;
    console.log("game ", game);

    socket.broadcast.emit('startGameSuccess/' + game.key , {game: game});
    socket.emit('startGameSuccess/' + game.key , {game: game});

  });

};
