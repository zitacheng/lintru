var express = require('express');
var router = express.Router();
var shortid = require('shortid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Login. */
// router.post('/login', function(req, res, next) {
//   console.log("req ", req.body);
//   if (req.body.name.length > 0){
//     var id = shortid.generate();
//     console.log(id)
//
//     var Player = require('mongoose').model('Player');
//
//     console.log("Player", Player.find().then(data => {
//       console.log("data = ", data)
//     }));
//
//     new Player({
//       name: req.body.name,
//       admin: req.body.admin,
//       avatar: req.body.avatar,
//       word: null,
//       intru: false
//     }).save(function (err, fluffy) {
//       if (err) return console.error(err);
//         console.log("success");
//     });;
//
//     res.status(200).json({msg: id});
//   }
//   else
//     res.status(400).json("KO");
// });



module.exports = router;
