var list = document.getElementById('list');
var array = [
    {
        name: 'Test',
        done: false
    },
    {
        name: 'Test 2',
        done: false
    },
    {
        name: 'Test 3',
        done: false
    }
];

window.onload = function() {
    var arrayFromlocalStorage = JSON.parse(window.localStorage.getItem('array'));
    
    if (arrayFromlocalStorage && arrayFromlocalStorage.length) {
        array = arrayFromlocalStorage;
    }
    render();
};

window.onunload = () => {
    window.localStorage.setItem('array', JSON.stringify(array));
};

function render() {
    list.innerHTML = '';
    for (let i = 0; i < array.length; i++) {     
        var li = document.createElement('li');
        var check = document.createElement('input');
        var div = document.createElement('div');
        var but = document.createElement('div');
        var done = document.createElement('button');
        var edit = document.createElement('button');
        var copy = document.createElement('button');
        
        done.type = 'submit';
        done.addEventListener('click', function() {
            audit(i);
        });
        if(array[i].done) {
            done.innerText = 'Undone';
            done.className = 'Undone';
            li.style.backgroundColor = "rgb(193, 255, 193)";
            li.style.borderTop = "1px solid rgb(0, 255, 13)";
            li.style.borderBottom = "1px solid rgb(0, 255, 13)";
            li.style.height = "30px";
        } else {
            done.innerText = 'Done';
            done.className = 'Done';
            li.style.backgroundColor = "";
            li.style.border = "";
            li.style.height = "";
        }
        
        edit.type = 'submit';
        edit.innerText = 'Edit';
        edit.className = 'Edit';
        edit.addEventListener('click', function(){
            editText(i);
        });

        copy.type = 'submit';
        copy.innerText = 'Copy';
        copy.className = 'Copy';

        but.className = "DoneEditCopy";
        but.appendChild(done);
        but.appendChild(edit);
        but.appendChild(copy);

        check.type = "checkbox";
        check.className = "check"; 
        check.addEventListener('click', function(){

        });

        li.innerText = array[i].name;
        li.id = i;
        
        div.addEventListener('click', function(){
            remove(i);
        });
        
        div.className = "button";
        li.appendChild(check);
        li.appendChild(div);
        li.appendChild(but);
        list.appendChild(li);   
    }
}

function handleSubmitForm(event) {
    event.preventDefault();
    
    var li = document.createElement('li');
    
    li.innerText = event.target[0].value;
    array.push({
        name: event.target[0].value,
        done: false
    });
    event.target.reset();
    render();
}

function checkAll(){
    var check = document.getElementsByClassName('check');
    var all = document.getElementById('all');
    if(all.checked){
        for (var i = 0; i < check.length; i++){
            var per = check[i].parentNode;
            
            check[i].checked = true;
            per.className = 'red';
        }
    } else {
        for (var i = 0; i < check.length; i++){
            var per = check[i].parentNode;
            
            check[i].checked = false;
            per.className = '';
        }
    }
}

function removeCheck(event){
    var redLi = document.getElementsByClassName('red');
    var all = document.getElementById('all');

    all.checked = false;
    for (var i = redLi.length - 1; i >= 0; i--) {
        list.removeChild(redLi[i]);
    }
}

function remove(id){
    array = array.filter(function(value, index){
        return id != index;
    });
    render();
}

function audit(id){
    array[id].done = !array[id].done;
    render();
}

function editText(id) {
    var newName = prompt('Write new name this row', );
    if(newName != 0){
        array[id].name = newName; 
    }
    render();
}