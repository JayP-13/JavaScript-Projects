var X = 20; //Creating a global variable
function Add_numbers_1(){
    document.write(30 + X + "<br>");
}
function Add_numbers_2(){
    document.write(X + 200);
}

Add_numbers_1();
Add_numbers_2();

document.write("<br>"); //Adding a line break

function Add_numbers_3(){ //Creating a local variable
    var Y = 50;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4(){
    document.write(Y + 200);
}
Add_numbers_3();
Add_numbers_4();

document.write("<br>"); //Adding a line break

function Add_numbers_5(){  //Creating a fucntion with an error in it
    var Z = 25;
    console.log(10 + Z);
}
function Add_numbers_6(){
    console.log(Z + 300);
}
Add_numbers_5();
Add_numbers_6();

document.write("<br>"); //Adding a line break

if (new Date().getHours() < 18) { //Creating an If statement function
    document.getElementById("Greeting").innerHTML = "Good day!!";
}

document.write("<br>");//Adding a line break

function Time_function(){   //Creating the Time_function.
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time>= 12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else {
        Reply ="It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}