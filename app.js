let todoList = document.getElementById('list');
let todoInp = document.getElementById('todo-input');
let del = document.getElementById('del');

var inpValue = '';
todoInp.addEventListener('input', function (e) {
    console.log(e.target.value);
    inpValue = e.target.value;
})





function addTodo() {

    if (inpValue !== undefined && inpValue !== null && inpValue !== '') {

        var newList = document.createElement('li');
        var newNode = document.createTextNode(inpValue);
        newList.appendChild(newNode);


        var pan = document.createElement('span');
        pan.className = 'addDel';

        var fontAwsm = document.createElement('i');

        fontAwsm.className = 'fa fa-trash';

        pan.appendChild(fontAwsm);

        newList.className = 'd-flex-1';
        newList.appendChild(pan);

        todoList.appendChild(newList);


        console.log(newList);
        // re initialize
        todoInp.value = '';
        inpValue = '';
    } else {
        alert('enter valid name')
    }

}

// delete
del.addEventListener('click', function () {
    alert('del')
})

