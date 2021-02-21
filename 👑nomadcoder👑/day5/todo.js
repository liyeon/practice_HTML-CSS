const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];
//filter 는 forEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행될 것임 
function filterFn(toDo){
    // true를 return 하는 gkatn
    return toDo.id === 1;
}
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // filter 
    // array 안에 있는 모든 toDos를 통하게 될 것
    // filter 메소드가 하는 역할은 filterFn 함수에서 체크된 아이템들의 array를 주는 것이다. 
    const cleanToDos = toDos.filter(function(toDo){
        // 모든 toDos 가 "li"의 id가 같지 않을 때  
        return toDo.id !== parseInt(li.id);
    });
    //toDos 를 cleanToDos로 바꿔줌 
    toDos = cleanToDos;
    // window.location.reload();
    saveToDos();
    // console.log("cleanToDos", cleanToDos);
}

// toDos 를 가져와서 로컬 스토리지에 저장하는 일을 하게 됨
function saveToDos(){
    // JSON.stringfy = 자바스크립트 object를 string으로 바꿔준다. 
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    // array 의 안에 아무것도 없을 때 length에 1을 하면 length 의 길이에 1을 추가해준다.
    const newId = toDos.length + 1; 
    delBtn.innerHTML= "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    // li 자식 요소에 넣는다. 
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    // 해야할일을 생성 할 때마다 toDos 라는 array에 추가되도록
    // toDoObj에는 text라는 ket에 text가 value로 오고 
    const toDoObj = {
        text: text,
        id: newId
    };
    // .push 는 array를 추가해준다. 
    toDos.push(toDoObj);
    //push 한 이후에 호출해야한다. push 이전에 하게 되면 localstorage는 비어있기 때문에 저장할게 아무것도 없게된다. 
    // local storage에는 자바스크립트의 data를 저장할 수 없다. 오직 String만 저장 할 수 있다. 
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        // console.log(loadedToDos);

        // 스트링을 배열, 오브젝트 형태로 바꿔줌
        const parsedToDos = JSON.parse(loadedToDos);

        // console.log(parsedToDos);

        // array 가 가진 forEach
        // forEach 는 기본적으로 함수를 실행하는데 array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜준다. ( 반복문 )
        parsedToDos.forEach(function(toDo){
            // console.log(toDo.text);
            paintToDo(toDo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();