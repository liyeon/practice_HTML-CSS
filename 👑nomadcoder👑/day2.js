// data types
// 변수를 선언 할 때는 기본적으로 const를 사용할것
// String
const what = "Nicolas";
//console.log(what);

// Boolean
const wat = true;

// Number
const num = 1;

// Float 숫자인데 floating Number (떠돌이 소숫점)을 가지고 있음 
const num2 = 5.1;

// organizing Data With Arrays 배열로 데이터 정렬하기
// CamelCase 방식의 변수선언 방식
// const daysOfWeek;

// Array
const somthing = "SomeThing";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, somthing];
//console.log(daysOfWeek);
//console.log(daysOfWeek[2]);

// Object
const nicoInfo = {
    name:"nico",
    age:33,
    gender:"Male",
    isHandome:true,
    favMovies: ["Along the gods", "LOTR", "OldBoy"],
    favFood: [
        {
            name:"KimChi", fatty:false
        }, 
        {
        name:"Cheese buger", fatty:true
        }
    ]
};
//nicoInfo.name = "nico2"
//console.log(nicoInfo.name);
console.log(nicoInfo);