var ViewTodo = Backbone.View.extend({
    
    events: {
        "click .delete": "handleDelete",
        "click .clone ": "handleCopy",
        "click .completed, .uncompleted": "handleCompleted",
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

    handleCopy: function(){
        var mod = new ModelTodo();
        var ID = JSON.parse(window.localStorage.getItem('ID'));
        mod.id = ID;
        mod.attributes.id = ID;
        ID++;
        mod.attributes.name = this.model.attributes.name ;
        mod.attributes.checked = this.model.attributes.checked;
        mod.attributes.completed = this.model.attributes.completed;
        var view = new ViewTodo({model: mod});
        this.$('#list').append(view.render());
    },

    handleCompleted: function() {
        this.model.attributes.completed = !this.model.attributes.completed;
        this.render();

    },

    handleEditName: function() {
        var res = this.model.set({
            name: this.$('.name').text()
        },{validate: true});
        if (!res) this.render();
    }
});