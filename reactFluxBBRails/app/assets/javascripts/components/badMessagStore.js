/*
 * THIS IS BAD CODE, USE BACKBONE INSTEAD!

var MessageStore = merge(EventEmitter.prototype, {
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  // @param {function} callback
  
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function (id) {
    return _messages[id];
  },

  getAll: function () {
    return _messages;
  }
})
 */
