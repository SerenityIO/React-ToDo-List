function handleSubmitForm(event) {
    event.preventDefault();
    
    var li = document.createElement('li');

    li.innerText = event.target[0].value;

    var list = document.getElementById('list');

    list.innerHTML = li;
}