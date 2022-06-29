const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
};


function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveToDos(); //로컬스토리지에 filteted toDos 저장 함수 호출
};

function paintToDo(todo) {
    const li = document.createElement("li");
    li.id = todo.id; //li 요소에 id 값 지정 === string type

    const span = document.createElement("span");
    span.textContent = todo.text; //text 키의 value를 가져온다.

    const btn = document.createElement("button");
    btn.innerText = 'X';
    btn.addEventListener("click", deleteToDo);

    li.append(span, btn);
    toDoList.append(li);
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';

    const newToDoObj = {id: Date.now(), text: newToDo};
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //로컬 스토리지 "todo"의 모든 요소에 paintToDo 함수 실행
};
