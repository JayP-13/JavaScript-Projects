document.write(typeof "Number" + '<br>');  //Using document.write method and typeof to display the data

var stringNumberExpression = "My favorite number is " + 13; //Creating an expression that is combining a string and number.
document.write(stringNumberExpression + "<br>");

document.write(75==70);  //Operator using ==
document.write("<br>");  //Creating a line break

var x=13;
var y=13;
document.write(x===y);  //Operator using ====
document.write("<br>"); //Creating a link break

document.write(25<20); //Operator using <
document.write("<br>"); //Creating a line break

document.write(25<20); //Operator using <
document.write("<br>"); //Creating a link break

document.write(10>5 && 7>3); //Operator using &&
document.write("<br>"); //Creating a line break

document.write(20<100 || 75<65); //Operator using ||
document.write('<br>'); //Creating a line break

function not_Function(){   //Operator using !
    document.getElementById("Not").innerHTML = !(75>100);
}
