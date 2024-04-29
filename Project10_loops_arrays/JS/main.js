
function Call_Loop() {  //The while loop
let text = "";
let i = 0;
while (i < 10){
    text += "<br>The Number is " + i;
    i++;
}
document.getElementById("Loop").innerHTML = text;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];  //The for Loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function(){ //The Array Function
    var Dog_Pic = [];
    Dog_Pic[0] = "sleeping";
    Dog_Pic[1]= "barking";
    Dog_Pic[2] = "drooling";
    Dog_Pic[3] = "sitting";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " + Dog_Pic[1] + ".";
}

var X = 101; //Using the LET keyword
document.write(X);
{
    let X = 13;
    document.write("<br>" + X);
}
document.write("<br>" + X);