MyDispatcher = require("./MyDispatcher")
TodoStore = require("./TodoStore")

MessageStore = merge(EventEmitter.prototype, { items: [] })

MesageStore.dispatchCallback = (payload) ->
  switch payload.actionType
    when "add-item"
      #synchronous event flow!
      MyDispatcher.waitFor [TodoStore.dispatchToken]
      MessageStore.items.push "You added an item! It was: " + payload.item

module.exports = MessageStore
