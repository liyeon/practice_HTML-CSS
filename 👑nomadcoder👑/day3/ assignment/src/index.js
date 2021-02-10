// <⚠️ DONT DELETE THIS ⚠️>

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
마우스가 위에 있을 때 제목 텍스트가 변경되어야함
✅ The text of the title should change when the mouse is leaves it.
마우스가 나갈 때 제목 텍스트가 변경되어야함
✅ When the window is resized the title should change.
창의 크기가 조정되면 제목 변경
✅ On right click the title should also change.
우클릭하면 제목 변경
✅ The colors of the title should come from a color from the colors array.
제목의 색은 배열의 색상에서 와야함
✅ DO NOT CHANGE .css, or .html files.
css 와 html은 변경 x 
✅ ALL function handlers should be INSIDE of "superEventHandler"
모든 기능은 superEventHandler 내부에 있어야함
*/
const title = document.querySelector("h2");
const superEventHandler = {
    mouseOver: function(){
        title.innerHTML = "마우스 올라가면";
        title.style.color = colors[0];
    },
    mouseOut: function(){
        title.innerHTML = "마우스 나가면";
        title.style.color = colors[1];
    },
    windowResize: function(){
        title.innerHTML = "사이즈 조정중";
        title.style.color = colors[2];
    },
    rightClick: function(){
        title.innerHTML = "우클릭";
        title.style.color = colors[3];
    }
};
title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.rightClick);