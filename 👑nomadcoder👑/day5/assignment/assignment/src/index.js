/*
    상용구를 사용하여 크리스마스 이브까지의 시간을 일, 시간, 분, 초 단위로 표시하는 앱을 만듭니다.

주의 사항 : new Date ()는 KST (한국 시간)에 없을 수 있습니다. 수정해야하는 경우.
*/

const clockTitle = document.querySelector("h4");
// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900").getTime();
  const today = new Date().getTime();
  
  const minus = xmasDay - today;
  
  const days = Math.floor(minus / (1000 * 60 * 60 * 24));
  const hours = Math.floor((minus / (1000*60*60)) % 24);
  const minutes = Math.floor((minus / (1000*60)) % 60);;
  const seconds = Math.floor((minus / 1000) % 60);;
  clockTitle.innerText = `
    ${days}d ${
    hours < 10 ? `0${hours}` : hours
    }h ${
    minutes < 10 ? `0${minutes}` : minutes
    }m ${
    seconds < 10 ? `0${seconds}` : seconds
    }s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();