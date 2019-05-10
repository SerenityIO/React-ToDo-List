var CollectionTodo = Backbone.Collection.extend({
    model: ModelTodo,

    url: function() {
        return 'api/Contact';
    },
    
    remove: function(model) {
        this.sync("delete", model);
    }
})