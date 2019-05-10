var ViewTodo = Backbone.View.extend({
    
    events: {
        "click .delete": "handleDelete",
        "blur .name": "handleEditName"
    },

    initialize: function(){
        this.template = _.template($("#viewList").html());
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);
    },

    render: function(){
        $(this.el).html();
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el; 
    },

    handleDelete: function() {
        this.model.destroy();
    },

    handleEditName: function() {
        var res = this.model.set({
            name: this.$('.name').text()
        },{validate: true});
        if (!res) this.render();
    }
});