function handleSubmitForm(event) {
    event.preventDefault();
    
    var li = document.createElement('li');
    
    li.innerText = event.target[0].value;
    
    li.setAttribute("onclick", "toggle(this);");

    li.className=" ";

    var div = document.createElement('div');

    div.setAttribute("onclick", "remove(this);");

    div.className="button";

    li.appendChild(div);

    var list = document.getElementById('list');

    list.appendChild(li);

}

function toggle(el) {
    el.className = (el.className == ' ') ? 'active' : ' ';

}
function remove(el){

    var per = el.parentNode;

    var list = document.getElementById('list');

    list.removeChild(per);

}
