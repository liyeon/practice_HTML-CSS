//console은 2일차의 nicoinfo보다 더 큰 오브젝트(객체) 이다. 
//console.log(console);
//console.log(nicoInfo, console);

// 외부에 있는 데이터를 읽는 함수를 만드는 방법
// 함수에게 외부에 있는 데이터를 주는 방식이 된다.

// 괄호 안은 함수 안에서 사용하게 될 이름이 됨
// parameter(매개변수) 혹은 argument ( 인자 )
function sayHello(name, age){
    //console.log 함수는 안에 argumet를 무한대로 가질 수 있다.
    console.log("Hello!", name, "you have", age), "years of age.";
}

//함수의 괄호 안은 함수의 인자 ( argumet ) 라고 함
// argumet는 변수와도 같이 우리가 주는 값을 저장하게 된다.
//함수를 준비하는 방법은 함수를 만드는 시점에 함수의 인자에 argumet를 넣는다. parameter(매개변수) 혹은 argument ( 인자 )
sayHello("Nicolas", 15);

//back tick
function sayHello2(name, age){
    console.log(`Hello ${name} you are ${age} years old`)
}
sayHello2("Nicolas", 15);
//return 방식
function sayHello3(name, age){
    return `Hello ${name} you are ${age} years old`;
}
// greetNicolas는 sayHello3 함수의 리턴값과 같다.
const greetNicolas = sayHello3("Nicolas", 14);
console.log(greetNicolas);

//우리만의 객체 만들기
const calculator = {
    //plus 라는 두개의 인자를 가진 함수
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiple: function(a, b){
        return a * b;
    },
    division: function(a, b){
        return a / b;
    },
    //제곱근
    double: function(a, b){
        return a ** b;
    }
}
const plus = calculator.plus(5, 5);
const minus = calculator.minus(6, 3);
console.log(plus, minus);
console.log(calculator.multiple(3, 4), calculator.division(5, 2), calculator.double(2, 4));