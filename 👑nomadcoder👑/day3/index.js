const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
document.title = "I own you now";
console.dir(title);

function handleResize(event){
    console.log("I have been resized");
    console.log(event);
}

window.addEventListener("resize", handleResize);

function handleClick() {
    title.style.color = "aqua";
}

title.addEventListener("click", handleClick);