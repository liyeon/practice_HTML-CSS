const body = document.querySelector("body");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

function windowMove(){
    const windowWidth = window.innerWidth;
    console.log("크기 확인 : ",windowWidth);
    
    if(windowWidth <= 1000){
        body.style.backgroundColor = colors[0];
    }else if(windowWidth <= 1400){
        body.style.backgroundColor = colors[1];
    }else {
        body.style.backgroundColor = colors[2];
    }
}


function init() {
    body.style.backgroundColor = colors[3];
    window.addEventListener("resize", windowMove);
}

init();