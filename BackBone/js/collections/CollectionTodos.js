var app = app || {};

var todoList = Backbone.Collection.extend({
    model: app.Todo,
    
    localStorage: new Backbone.LocalStorage('todos-backbone'),
    
    completed: function(){
        return this.filter(function(todo){
            return todo.get('completed');
        });
    },

    remaining function() {
        
    }

})