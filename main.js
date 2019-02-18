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
    
    if (arrayFromlocalStorage) {
        array = arrayFromlocalStorage;
    }
    render();
};

window.onunload = () => {
    window.localStorage.setItem('array', JSON.stringify(array));
};

function render() {
    for (let i = 0; i < array.length; i++) {

        var li = document.createElement('li');
        var check = document.createElement('input');
        var div = document.createElement('div');
        var but = document.createElement('div');
        var done = document.createElement('button');
        var edit = document.createElement('button');
        var copy = document.createElement('button');
    
        done.type = 'submit';
        done.innerText = 'Done';
        done.className = 'Done';
        done.addEventListener('click', audit);
        edit.type = 'submit';
        edit.innerText = 'Edit';
        edit.className = 'Edit';
        edit.addEventListener('click', editText);
        copy.type = 'submit';
        copy.innerText = 'Copy';
        copy.className = 'Copy';
        but.className = "DoneEditCopy";
        but.appendChild(done);
        but.appendChild(edit);
        but.appendChild(copy);
        

        check.type = "checkbox";
        check.className = "check"; 
        check.addEventListener('click', paint);

        li.innerText = array[i].name;
        
        div.addEventListener('click', remove);
        
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
    var check = document.createElement('input');
    var div = document.createElement('div');
    var but = document.createElement('div');
    var done = document.createElement('button');
    var edit = document.createElement('button');
    var copy = document.createElement('button');

    done.type = 'submit';
    done.innerText = 'Done';
    done.className = 'Done';
    done.addEventListener('click', audit);
    edit.type = 'submit';
    edit.innerText = 'Edit';
    edit.className = 'Edit';
    edit.addEventListener('click', editText);
    copy.type = 'submit';
    copy.innerText = 'Copy';
    copy.className = 'Copy';
    but.className = "DoneEditCopy";
    but.appendChild(done);
    but.appendChild(edit);
    but.appendChild(copy);
    
    check.type = "checkbox";
    check.className = "check";
    check.addEventListener('click', paint);

    div.addEventListener('click', remove);
    div.className = "button";
    
    li.innerText = event.target[0].value;
    li.appendChild(check);
    li.appendChild(div);
    li.appendChild(but);
    list.appendChild(li);
    array.push({
        name: event.target[0].value,
        done: false
    });
    event.target.reset();
}

function remove(event){
    var per = event.target.parentNode;

    list.removeChild(per);
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

function paint(){
    var per = event.target.parentNode;

    per.className = (this.checked) ? 'red' : '';
}

function audit(event){
    var per = event.target.parentNode;
    var pers = per.parentNode;

    this.className = (this.className == "Done") ? 'Undone' : 'Done';
    this.innerText = (this.innerText == "Done") ? 'Undone' : 'Done';
    if (this.className == "Undone"){
        pers.style.backgroundColor = "rgb(193, 255, 193)";
        pers.style.borderTop = "1px solid rgb(0, 255, 13)";
        pers.style.borderBottom = "1px solid rgb(0, 255, 13)";
        pers.style.height = "30px";
    } else {
        pers.style.backgroundColor = "";
        pers.style.border = "0";
        pers.style.height = "32px";
    }
}

function editText(event) {
    var newName = prompt('Write new name this row', );
    if(newName != 0){
        var per = event.target.parentNode;
        var pers = per.parentNode;
        var text = pers.childNodes[0];

        text.nodeValue = newName;
    }

}