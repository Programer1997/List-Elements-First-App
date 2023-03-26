const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");
const todoError = document.querySelector("#todo-error");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let count = todos.length; //I fix this error
console.log(count); //this help to me to fix the problem HELP 1



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
//aqui se pone todo lo visual que se vera en la pagina (Front-End)
function renderTodos(todo) {
    let li = document.createElement("li");
    let buttonDelete = document.createElement("button");
    let buttonComplete = document.createElement("button");
    buttonDelete.textContent = "Delete";
    buttonComplete.textContent = "Complete";

    li.textContent = todo.content;
    li.innerHTML = `<span>${todo.content}</span>`
    li.classList.add("list-item"); // crea la lista dentro del Ul creado en HMTL

    

    // write your logic here
    // if the todo is done, then add style to the li
    ////////////////////////////////////////////////////////////////////////////////////////////
    //Abraham Logic - Start :
    let doneReal=todo.done; 
    console.log(doneReal);

    if (doneReal==true){
    let miSpan = document.body.appendChild(li);
    miSpan.style.color='green';
    //miSpan.style.textDecoration="line-through"; wrong way
    li.querySelector("span").style.textDecoration = "line-through"; //good way
    
    }

    //Abraham Logic - End 
    ////////////////////////////////////////////////////////////////////////////////////////////
    buttonDelete.addEventListener("click", () => {
        deleteTodo(li, todo.id);
    })

    buttonComplete.addEventListener("click", () => {
        completeTodo(li, todo.id);
        
    })

    li.appendChild(buttonDelete);
    li.appendChild(buttonComplete);


    todoList.appendChild(li);
    todoInput.value = "";
}

let savedTodos = JSON.parse(localStorage.getItem("todos"));
if(savedTodos){
    todos = savedTodos;
    for(let i = 0; i < todos.length; i++){
        renderTodos(todos[i])
        // will render all the todos
        /*/////////////////////////////////////////////////
        Abraham logic start :

        I didn't need to use this area.

        Abraham logic End 
        //////////////////////////////////////////////////
        */


        
    }
}

function deleteTodo(todo, id){
    let result = todos.filter((item) => item.id != id);
    todos = result;
    localStorage.setItem("todos", JSON.stringify(todos));
    todo.remove();
}

function completeTodo(todo, id){
    
    
    // write your logic here
    // 1. find the todo
    // 2. change the done property to true
    // 3. save the todos to local storage

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Abraham logic start :

    todos[id-1].done=true;

    localStorage.setItem("todos", JSON.stringify(todos));
    

    let doneReal=todos[id-1].done; 

    console.log(doneReal); //this help to me to fix the problem HELP 2
    console.log(todos); //this help to me to fix the problem HELP 3
    console.log(todo); //this help to me to fix the problem HELP 4
    console.log(id); //this help to me to fix the problem HELP 5
    console.log(todos[id-1]);//this help to me to fix the problem HELP 6
    console.log(todos[id-1].done);//this help to me to fix the problem HELP 7

    if (doneReal==true){
    todo.style.color='green';
    //todo.style.textDecoration="line-through";
    todo.querySelector("span").style.textDecoration = "line-through";
    
    }
    
    //Abraham logic End 
    ///////////////////////////////////////////////////////////////////////////////////////
    


}