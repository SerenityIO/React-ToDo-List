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
    
        li.innerText = array[i].name;
        li.addEventListener('click', toggle); 
    
        var div = document.createElement('div');
    
        div.addEventListener('click', remove);
        div.className = "button";

        li.appendChild(div);
        list.appendChild(li);   
    }
}

function handleSubmitForm(event) {

    event.preventDefault();
    
    var li = document.createElement('li');
    
    li.innerText = event.target[0].value;
    li.addEventListener('click', toggle); 

    var div = document.createElement('div');

    div.addEventListener('click', remove);
    div.className = "button";
    li.appendChild(div);
    list.appendChild(li);
    array.push({
        name: event.target[0].value,
        done: false
    });
    event.target.reset();
}

function toggle(event) {
    event.target.classList.toggle('active');
}
function remove(event){
    var per = event.target.parentNode;

    list.removeChild(per);
}
