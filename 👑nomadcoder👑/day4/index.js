const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const currentClass = title.className;
    // console.log("class name : ",currentClass);
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}
// function handleClick() {
//     const currentColor = title.style.color;
//     console.log(currentColor);
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

//초기화
function init(){
    // 초기 색상 설정
    // title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);

}

init();

// function handleOffLine() {
//     console.log("bye bye");
// }

// function handleOnLine() {
//     console.log("Welcome Back");
// }

// window.addEventListener("offline", handleOffLine);
// window.addEventListener("online", handleOnLine);