const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");
const todoError = document.querySelector("#todo-error");
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let count = 0;

todoButton.addEventListener("click", function (event){
    event.preventDefault(); // stop to refresh the page
    let text = todoInput.value;

    if(text.length !== 0){
        count++;
        let todo = {
            id: count,
            content: text,
            done: false
        };
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos))
        renderTodos(todo);
        todoError.textContent = ""
    }else{
        todoError.textContent = "Please add input before you add"
    }
    
});

function renderTodos(todo) {
    let li = document.createElement("li");
    const buttonDelete = document.createElement("button");
    // const buttonComplete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    // buttonComplete.textContent = "Complete";

    // li.textContent = todo.content;
    li.innerHTML = `<span>${todo.content}</span>`
    li.classList.add("list-item");

    buttonDelete.addEventListener("click", () => {
        deleteTodo(li, todo.id);
    })

    // buttonComplete.addEventListener("click", () => {
    //     completeTodo(li, todo.id);
    // })

    li.appendChild(buttonDelete);
    // li.appendChild(buttonComplete);
    
    // li.textContent = todo.content;
    todoList.appendChild(li);
    todoInput.value = "";
}

let savedTodos = JSON.parse(localStorage.getItem("todos"));
if(savedTodos){
    todos = savedTodos;
    for(let i = 0; i < todos.length; i++){
        renderTodos(todos[i])
    }
}

function deleteTodo(todo, id){
    let result = todos.filter((item) => item.id != id);
    todos = result;
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.remove();
}

function completeTodo(todo, id){
    for(let i = 0; i < todos.length; i++){
        if(todos[i].id === id){
            todos[i].done = true;
        }
    }
    console.log(todos);
}