TodoDispatcher = require("./TodoDispatcher")

TodoStore = { intems: [] }

TodoStore.dispatchCallback = (payload) ->
  switch payload.actionType
    when "add-item"
      TodoStore.items.push payload.item
    when "delete-last-item"
      TodoStore.items.pop()

TodoStore.dispatchToken = TodoDispatcher.registerCallback(TodoStore.dispatchCallback)

module.exports = TodoStore
