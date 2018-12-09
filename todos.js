var TODOS = [];
var ID = 0;

/**
 * listTodos
 */
function listTodos() {
    var ulEle = document.querySelector(".todo-list ul");
    // clear existing list items
    ulEle.innerHTML = '';

    for(var i=0; i<TODOS.length; i++) {
        
        var liEle = document.createElement('li');
        var liContent = '<li>' 
                    + '<h3>' + TODOS[i].title + '</h3>'
                    + '<p>' + TODOS[i].description + '</p>'
                    + '<button type="button" onclick="clearTodo(' + TODOS[i].id  + ')">Clear</button> '
                    + '<button type="button">Done</button> '
                    + '<hr />'
                    + '</li>';
        liEle.innerHTML = liContent;

        ulEle.appendChild(liEle);
    
    }
}

/**
 * addTodo
 */
function addTodo() {
    var titleEle = document.querySelector(".todo-add input[name='title']");
    var descriptionEle = document.querySelector(".todo-add textarea[name='description']");

    var todo = {
        "title": titleEle.value,
        "description": descriptionEle.value,
        "id": ++ID
    }

    console.log(todo);
    TODOS.push(todo);
    listTodos();
    titleEle.value = '';
    descriptionEle.value = '';
}

/**
 * addTodo
 */
function clearTodo(id) {
    console.log(id);

    var selectedIndex = -1;
    for(var i=0; i<TODOS.length; i++) {
        if(TODOS[i].id === id) {
            selectedIndex = i;
        }
    }

    TODOS.splice(selectedIndex, 1);
    listTodos();
}

listTodos();
