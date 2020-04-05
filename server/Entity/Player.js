
/**
 * User object.
 */
class Player {
  constructor(userName, socket, avatar, urlKey) {
    this._userName = userName;
    this._admin = false; //todo test
    this._id = socket.id;
    this._avatar = avatar;
    this._word = null;
    this._intru = false;
    this._lobbyKey = null;
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
   * Get the lobbyKey
   * @returns {string}
   */
  get lobbyKey() {
    return this._lobbyKey;
  }

  /**
   * Set the word
   * @param lobbyKey
   */
  set lobbyKey(lobbyKey) {
    this._lobbyKey = lobbyKey;
    console.log("User lobbyKey set to " + lobbyKey);
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

  toResult() {
    return {
      username: this._userName,
      admin: this._admin,
      avatar: this._avatar,
      word: this._word,
      intru: this._intru,
      lobbyKey: this._lobbyKey,
    };
  }
}

module.exports = Player;
