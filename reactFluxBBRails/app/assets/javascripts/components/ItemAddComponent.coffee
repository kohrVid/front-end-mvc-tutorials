TodoDispatcher = require("./TodoDispatcher")

ItemAddComponent = React.createClass
  handleAddItem: ->
    #note: you're NOT just pushing directly to the store
    #Moving throught the dispatcher makes everything
    #much more modular and maintainable
    TodoDispatcher.dispatch
      actionType: "add-item"
      item: "hello world"

  render: ->
    React.DOM.button {
      onClick: @handleAddItem
    },
      "Add an Item!"
