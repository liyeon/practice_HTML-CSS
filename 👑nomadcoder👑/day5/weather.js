const weather = document.querySelector(".js-weather");

const API_KEY = "bd1429fc5064e7630ff2bf499b0cfc2c";
const COORDS = "coords";

function getWeather(lat, lng){
    // 데이터를 가져올 때는 fetch()를 사용함
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(//데이터가 우리한테 넘어 왔을 때
            function(response){
                // console.log(response.json());
                return response.json();
        }).then(
            //데이터가 다 준비가 된다면
            function(json){
                console.log(json);
                const temperature = json.main.temp;
                const place = json.name;
                weather.innerText = `${temperature} @ ${place}`;
            }            
        );
}

function saveCoords(coordsObj){
    //localStorage에서는 저장값이 string 이어야함
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표를 가져오는데 성공 했을 때 처리하는 함수
function handleGeoSuccess(position) {
    //위도
    const latitude = position.coords.latitude;
    //경도
    const longitude = position.coords.longitude
    // 객체의 변수 이름과 key 의 이름을 갖게 저장 할 때는 아래와 같이만 해도 된다.
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);

    getWeather(latitude, longitude);
    console.log(position);
}

// 실패 했을 때 가져옴
function handleGeoError(){
    console.log("Cant access geo location")
}

function askForCoords(){
    // navigator api 사용하면 위치 정보를 얻어 올 수 있음
    // object( 객체인데 getCurrentPosition, watchPosition 등등의 함수를 가지고 있다. )
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    //좌표를 요청 
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();