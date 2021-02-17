/*
Make a number guessing game using Javascript!
자바스크립트로 숫자 맞추기 게임을 만들어보세요!

- Find a random number on a range between 0 and a number defined by the user.
- Use range input.
- Update the range value in real time.
- Only play after the user chooses a number.
- Notify the user if the game is lost or won.
- Don't give up.
- 사용자가 정의한 0과 숫자 사이의 범위에서 임의의 숫자를 찾습니다.
- 범위 입력 사용
- 실시간으로 범위 값을 업데이트합니다.
- 사용자가 숫자를 선택한 후에만 재생합니다.
- 게임 분실 또는 당첨 여부를 사용자에게 알립니다.
- 포기하지 마세요.
*/

const rangeForm = document.querySelector(".js-rangeForm"),
      rangeInput = rangeForm.querySelector(".js-range"),
      youNumber = document.querySelector(".js-num");

const resultList = document.querySelector(".js-list"),
      youChose = resultList.querySelector(".js-youChose"),
      machineChose = resultList.querySelector(".js-machineChose");

const result = document.querySelector(".js-result");

function handleSubmit(event){
  const rangeNum = parseInt(rangeInput.value);
  const machineNum = Math.floor(Math.random()*rangeNum);

  console.log(rangeNum)
  const humanNum = parseInt(youNumber.value);

  event.preventDefault();
  console.log("machineNum :", machineNum, "humanNum", humanNum);
  youChose.innerHTML = `You Chose : ${humanNum}`;
  machineChose.innerHTML = `Machine Chose : ${machineNum}`;

  if(humanNum > machineNum){
    result.innerHTML = `YOU WIN!`;
  } else if(humanNum < machineNum){
    result.innerHTML = `YOU LOST!`;
  }else {
    result.innerHTML = `TIE!!`;
  }
  
}

function init(){
  rangeForm.addEventListener("submit", handleSubmit);
}

init();