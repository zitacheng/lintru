
/**
 * User object.
 */
class Player {
  constructor(userName, socket, avatar, urlKey) {
    this._userName = userName;
    this._admin = false;
    this._id = socket.id;
    this._avatar = avatar;
    this._word = null;
    this._intru = false;
    this._describe = "AFK";
    this._accusedBy = [];
    this._submited = false;
    this._score = 0;
  }
  //TODO test and add rest of the getter and setter

  /**
   * Get the socket id.
   * @returns {String}
   */
  get id() {
    return this._id;
  }

  /**
   * Set the socket to the user.
   * @param socket the socket id.
   */
  set id(id) {
    this._id = id;
  }

  /**
   * Get true if the user is admin.
   * @returns {boolean}
   */
  get admin() {
    return this._admin;
  }

  /**
   * Set the role.
   * @param pAdmin
   */
  set admin(pAdmin) {
    this._admin = pAdmin;
  }

  /**
   * Get true if the user submitted answer.
   * @returns {boolean}
   */
  get submited() {
    return this._submited;
  }

  /**
   * Set submitted status
   * @param sub
   */
  set submited(sub) {
    this._submited = sub;
  }

  /**
   * Get score
   * @returns {int}
   */
  get score() {
    return this._score;
  }

  /**
   * Set score
   * @param nb
   */
  set score(nb) {
    this._submited += nb;
  }

  /**
   * Get the user name.
   * @returns {string}
   */
  get userName() {
    return this._userName;
  }

  /**
   * Set the user name.
   * @param userName
   */
  set userName(userName) {
    this._userName = userName;
    console.log("User name set to " + userName);
  }

  /**
   * Get the describe.
   * @returns {string}
   */
  get descripe() {
    return this._describe;
  }

  /**
   * Set the describe.
   * @param userName
   */
  set descripe(desc) {
    this._describe = desc;
    console.log("descripe name set to " + desc);
  }

  /**
   * Get the _avatar
   * @returns {string}
   */
  get avatar() {
    return this._avatar;
  }

  /**
   * Set the user name.
   * @param avatar
   */
  set avatar(avatar) {
    this._avatar = avatar;
    console.log("User avatar set to " + avatar);
  }

  /**
   * Get the _avatar
   * @returns {string}
   */
  get word() {
    return this._word;
  }

  /**
   * Set the word
   * @param word
   */
  set word(word) {
    this._word = word;
    console.log("User word set to " + word);
  }

  /**
   * Get true if the user is intru.
   * @returns {boolean}
   */
  get intru() {
    return this._intru;
  }

  /**
   * Set the role.
   * @param intru
   */
  set intru(intru) {
    this._intru = intru;
  }

  /**
   * Get people who accused me being the spy
   * @returns {array}
   */
  get accusedBy() {
    return this._accusedBy;
  }

  set (accusedBy) {
    this._accusedBy = people;
  }

  toResult() {
    return {
      username: this._userName,
      admin: this._admin,
      avatar: this._avatar,
      word: this._word,
      intru: this._intru,
      id: this._id,
      describe: this._describe,
      accusedBy: this._accusedBy,
      submited: this._submited,
      score: this._score,
    };
  }
}

module.exports = Player;
