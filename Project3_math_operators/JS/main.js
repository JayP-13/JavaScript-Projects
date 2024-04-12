function addition_Function() { //Creating a function for addition
    var result = 10 + 10;
    document.getElementById("Math").innerHTML = "10 + 10 = " + result;
}

function subtraction_Function() { //Creating a function for subtraction
    var Subtraction = 100 - 25;
    document.getElementById("Sub").innerHTML = "100 - 25 = " + Subtraction;
}

function multiplication_Function() { //Creating a function for Multiplication
    var simple_Math = 21 * 13;
    document.getElementById('Times').innerHTML = "21 * 13 = " + simple_Math;
}

function division() { //Creating a function for division
    var simple_Math = 100/25;
    document.getElementById('Divide').innerHTML = "100/25 = " + simple_Math;
}

function increment() { //Creating a function for increment number
var X = 75;
X++;
document.getElementById("Increment").innerHTML = X;
}


function decrement(){ //Creating a function for decrement number
var Y = 50;
Y--;
document.getElementById("Decrement").innerHTML = Y;
}


function randomNumber(){ //Creatring a function for a random number
document.getElementById("Random").innerHTML = Math.random() * 100;
}