React = require("react")

TodoListComponent = React.createClass
  handleTodoDelete: ->
    #instead of removing the todo from the TodoStore directly, use the Dispatcher
    TodoDispatcher.dispatch
      actionType: "todo-delete"
      todo: @props.todoItem
  componentDidMount: ->
    @props.TodoStore.on "add remove reset", =>
      @forceUpdate()
    , @
  componentWillUnmount: ->
    @props.TodoStore.off null, null, this
  render: ->
    React.DOM.ul {},
      @props.TodoStore.items.map (todoItem) ->
	#TodoItemComponent will bind to `this.props.todoItem.on("change")` 
	TodoItemComponent {
	  todoItem: todoItem
	}

module.exports = TodoListComponent
