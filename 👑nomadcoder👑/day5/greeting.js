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

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // lacal stroge 가 없는 경우
    } else {
        // 있는 경우
        paintGreeting(currentUser);
    }
}


function init(){ 
    loadName();
}

init();