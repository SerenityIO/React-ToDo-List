// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// 3. Отсылаем запрос
xhr.send();

xhr.onreadystatechange = function() { // (3)
    debugger
    if (xhr.readyState != 4) return;
  
    document.write('Готово!');
  
    if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      alert(xhr.responseText);
    }
  
}