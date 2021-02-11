if(10 === "10"){
    console.log("hi");
} else if("10" === "10") {
    console.log("allalal");
} else {
    console.log("ho");
}

if(20 > 5 && "nicolas" === "nicolas") {
    console.log("yes");
} else {
    console.log("no");
}

const age = prompt("How old are you?");
console.log(age);

if(age >= 18 && age <= 21) {
    console.log("you can drink but you should not");
} else if(age > 21){
    console.log("go ahead");
} else {
    console.log("too young ")
}