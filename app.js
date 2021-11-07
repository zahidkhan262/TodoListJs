let todoList = document.getElementsByClassName('list');




// var addTodo = document.getElementsByClassName('addBtn');


function addTodo() {
    var newList = document.createElement('li');

    var newNode = document.createTextNode('khan' + (todoList.childElementCount + 1))
    newList.appendChild(newNode);
    todoList.appendChild(newList)


    console.log(newList)
}
