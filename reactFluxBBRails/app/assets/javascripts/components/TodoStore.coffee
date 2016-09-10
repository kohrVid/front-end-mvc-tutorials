Backbone = require("backbone")
TodoDispatcher = require("../dispatcher")

TodoItem = Backbone.Model.extend({})

TodoCollection = Backbone.Collection.extend
  model: TodoItem
  url: "/todo"

  initialize: ->
    @dispatchToken = TodoDispatcher.register(@dispatchCallback)

  dispatchCallback: (payload) =>
    switch payload.actionType
      when "todo-delete"
        @remove payload.todo
      when "todo-add"
        @add payload.todo
      when "todo-update"
        @add payload.todo, merge: true

TodoStore = new TodoCollection()
module.exports = TodoStore
