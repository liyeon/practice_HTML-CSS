const body = document.querySelector("body");

//상수값으로 이미지 갯수를 지정해줌
const IMG_NUMBER = 3;
function handleImgLoad(){
    console.log("finished loading");
}
function paintImage(imgNumber){
    const image = new Image();
    // Math 는 0 부터 시작해서 +1을 해줌 
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    // table listener 를 이미지화 하기 위해 even listener 를 연결한다.
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad); 
}

// generation 
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();