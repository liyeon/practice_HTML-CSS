const clockContainer = document.querySelector(".js-clock"),
//clockContainer 의 자식 요소 중 h1
// , 를 이용해서 const 를 한번 더 선언하는 것 보다 더 깔끔하게 사용 할 수 있다. 
      clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 만약 초가 10 보다 작으면 앞이 실행되고 그렇지 않으면 : 뒤에거가 실행됨
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

//항상 처음해줌
function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();