/*
    querySelector 는 클래스명의 가장 첫번째 것만 가져오고
    querySelectorAll 는 전체를 가져온다. 클래스 명에 따른 엘리먼트들을 가져오는데 배열(array)을 준다
    - 단, 하나만 가져오더라도 배열에 넣는다. 
*/
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
      SHOWING_CN = "showing";

function saveName(text){

    localStorage.setItem(USER_LS, text)
}

function handleSubmit(event){
    // event의 preventDefault
    //  기본으로 실행되는 이벤트를 막아준다.
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    // paintGreeting으로 입력한 input 값을 보내준다.
    paintGreeting(currentValue);
    // 입력한 namedmf wjwkdgownsek.
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hi, ${text}`;
    document.querySelector(".todo").style.display = "inline-block";
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // lacal stroge 가 없는 경우
        askForName();
        document.querySelector(".todo").style.display = "none";
    } else {
        // 있는 경우
        paintGreeting(currentUser);
    }
}


function init(){ 
    loadName();
}

init();