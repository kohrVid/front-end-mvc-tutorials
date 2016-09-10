React = require("react")

TodoListComponent = React.createClass
  componentDidMount: ->
    @props.TodoStore.addEventListener "change", =>
      @forceUpdate()
    , @

  componentWillUnmount: ->
    console.log(remove callback)

  render: ->
    # show the items in a list
    React.DOM.ul {}, @props.TodoStore.items.map (item) ->
      React.DOM.li {}, item
