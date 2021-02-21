/*
Have a reset (C) button. / 재설정 버튼 있음
Support all basic operations (+ , - , * , / ) / 모든 기본 작업 지원 
Support for 'equals' ( = ) button. / 같음 버튼 지원 
Allow value carrying. i.e 2 2 2 2 2 without pressing equals. 
Don't give up!
*/

const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

let result = "";
let operCheck = false;
let numberCheck = true;
let equlasCheck = true;

function init(){
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.dataset.type) {
        case "operator":
          const oper = button.innerText;
          operator(oper);
          break;
        case "ac":
          clear();
          break;
        case "equals":
          calc();
          break;
        default:
          const number = button.innerText;
          displayNumber(number);
          break;
      }
    });
  });
}
function displayNumber(number) {
  operCheck = true;
  const current = input.value;

  //계산 끝난 후 초기화
  if (equlasCheck) {
    //연산자 눌렸을 시 계산기 값만 초기화
    if (numberCheck) {
      input.value = current === "0" ? number : input.value + number;
    } else {
      input.value = number;
      numberCheck = true;
    }
    result += number;
  } else {
    equlasCheck = true;
    input.value = number;
    result = number;
    console.log(result);
  }
}

function calc() {
  if (input.value === "0") {
    clear();
  } else {
    if (!operCheck) {
      alert("Calculation is unavailable because of operation.");
    } else {
      if (equlasCheck) {
        const final = eval(result);
        input.value = `결과 : ${final}`;
        result = "";
        equlasCheck = false;
        operCheck = false;
      } else {
        clear();
      }
    }
  }
}

function operator(oper) {
  if (!operCheck) {
    alert("Operation Error.");
  } else {
    operCheck = false;
    result += oper;
    numberCheck = false;
  }
}

function clear() {
  input.value = 0;
  result = "";
  operCheck = false;
  equlasCheck = true;
}
init();