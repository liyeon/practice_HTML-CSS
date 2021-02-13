const select = document.querySelector("select");
const option = select.querySelector("option");
// 상수값 지정
const COUNTRY_LS = "country";


function saveCountry(value){
    localStorage.setItem(COUNTRY_LS, value);
}

function handleCountry(event){
    event.preventDefault();
    const currentValue = select.value;
    console.log(currentValue);
    saveCountry(currentValue);
}

function loadOption(){
    const currentCountry = localStorage.getItem(COUNTRY_LS);
    if(currentCountry === null){
        select.option = select.options[0];
    } else {
        select.value = currentCountry;
    }
}

function init(){
    loadOption();
    select.addEventListener("change", handleCountry);
}

init();