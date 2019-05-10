var ViewTodos = Backbone.View.extend({
    
    events: {
        "click #add": "handleAdd"
    },

    initialize: function() {
        this.template = _.template($('#header').html());
        this.$el.html(this.template());
        this.coll = new CollectionTodo();
        this.listenTo(this.coll, "add", this.addLine);
    },

    handleAdd: function(e) {
        e.preventDefault();
        var name = $('input[name="name"]').val();
        if(name != ''){

            var newModel = new ModelTodo();
            var ID = JSON.parse(window.localStorage.getItem('ID'));
            if(!ID){
            var i = 0;
            window.localStorage.setItem('ID', JSON.stringify(i));
            ID = i;
        }
        newModel.attributes.id = ID;
        newModel.id = ID;
        ID++;
        window.localStorage.setItem('ID', JSON.stringify(ID));
        newModel.attributes.name = name;
        this.model = newModel;
        this.coll.add(newModel);
        $('input[name="name"]').val('');
    } else alert("The field can not be empty!");
    },

    addLine: function(modell){
    var view = new ViewTodo({model: modell});
    this.$('#list').append(view.render());
    }
});