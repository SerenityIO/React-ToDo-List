var ViewTodos = Backbone.View.extend({
    events: {
        "click .check": "handleCheck",
        "click .complete": "handleComplete",
        "click .delete": "handleDelete",
        "blur .name": "handleEditName"
    },

    initialize: function(){
        this.template = _.template($("#viewList").html());
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);
        this.render();
    },

    render: function(){
        var json = this.model.toJSON();
        var view = this.template(json);
        this.$el.html(view); 
    }
});