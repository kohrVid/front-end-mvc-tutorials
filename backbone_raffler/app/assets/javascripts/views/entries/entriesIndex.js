Raffler.Views.EntriesIndex = Backbone.View.extend({

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  //  this.listenTo(this.model, "change", this.render);
  },

  events: {
    "submit #new_entry": "createEntry"
  },

  template: JST["templates/entries/index"],

  render: function () {
    this.$el.html(this.template());
    if (this.collections) {
      _.each(this.collections.models, function (entry) {
        this.appendEntry();
      });
    } 
    return this;
  },

  appendEntry: function (entry) {
    view = new Raffler.Views.Entry();
    $("#entries").append(view.render().el);
  },

  createEntry: function (event) {
    event.preventDefault();
    this.collection.create({ name: $("#new_entry_name").val() });
  }
});
