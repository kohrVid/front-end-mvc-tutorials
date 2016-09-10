Raffler.Views.EntryIndex = Backbone.View.extend({

  template: JST["templates/entries/entry"],
  tagName: "li",

  render: function () {
    this.$el.html(this.template());
    
    return this;
  },
});
