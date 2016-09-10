Raffler.Routers.Entries = Backbone.Router.extend({
  routes: {
    "": "index",
    "entries/new": "newEntry",
    "entries/:id": "show"
  },

  initialize: function () {
    this.collection = new Raffler.Collections.Entries();
    this.collection.fetch();
  },

  newEntry: function () {
  },

  index: function () {
    //alert("homepage");
    var view = new Raffler.Views.EntriesIndex({ collection: this.collection });
    $("#container").html(view.render().el);
  },

  show: function (id) {
    alert(`Entry ${id}`);
  }
});
