
var shortid = require('shortid');

/**
 * Room object.
 */
class Lobby {
  constructor() {
    this._key = shortid.generate();
    this._players = [];
    this._round = 4;
    this._timeThink = 30;
    this._timeVote = 30;
    this._lang = 'fr';
    this._start = false;
  }

  //TODO test and add rest of the getter and setter

  get started() {
    return this._started;
  }

  start() {
    this._started = true;
  }

  /**
   * Get the key
   * @returns {String}
   */
  get key() {
    return this._key;
  }

  /**
   * set key
   */
  set key(key) {
    this._key = key;
  }

  /**
   * set round number.
   */
  set Round(nb) {
    this._round = nb;
  }

  /**
   * Get the round number.
   * @returns {number}
   */
  get round() {
    return this._round;
  }

  /**
   * set lang.
   */
  set Lang(lg) {
    this._lang = lg;
  }

  /**
   * Get the lang.
   * @returns {String}
   */
  get lang() {
    return this._lang;
  }

  /**
   * Set _timeThink
   */
  set TimeThink(time) {
    this._timeThink = time;
  }

  /**
   * Get the _timeThink
   * @returns {number}
   */
  get timeThink() {
    return this._timeThink;
  }

  /**
   * Set _timeVote
   */
  set TimeVote(time) {
    this._timeVote = time;
  }

  /**
   * Get the _timeVote
   * @returns {number}
   */
  get timeVote() {
    return this._timeVote;
  }

  /**
   * Get all users.
   * @returns {Array}
   */
  get players() {
    return this._players;
  }

  /**
   * Add an user already initialized.
   * Throw if there is too many user inside the room.
   * @param player the player.
   */
  addPlayer(player) {
    this._players.push(player);
  }

  removePlayer(player) {
    // TODO: Remove user by username.
    // If the user is admin, we need to pass the role to someone else.
    // If no user, throw an error.
    if (!this._players.includes(player)) {
      throw "User does not exist";
    }
    else {
      this._players.splice(this._players.indexOf(player), 1);
    }
  }

  /**
   * Get the user admin.
   * @returns {User}
   */
  getAdminUser() {
    return this._users.find(function (user) {
      return user.admin === true;
    });
  }

  toResult() {
    let players = [];
    this._players.forEach(function (player) {
      players.push(player.toResult())
    });

    return {
      key: this._key,
      players: this._players,
      round: this._round,
      timeThink: this._timeThink,
      timeVote: this._timeVote,
      lang: this._lang,
      start: this._start,
    };
  }
}


module.exports = Lobby;
