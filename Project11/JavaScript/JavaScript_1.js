<canvas id="ID_Name" width = "500" height="250" style="border:5px solid black;"></canvas>

function Dog_Function(){
    var Dog;
    var Breeds = document.getElementById("Dog").value;
    var Dog_String = " is a great breed!!";
    switch(Breeds) {
        case "Lab":
            Dog = "Lab" + Dog_String;
        break;
        case "Newfie":
            Dog = "Newfie"  + Dog_String;
        break;
        case "Great Dane":
            Dog = "Great Dane" + Dog_String;
        break;
        case "Bulldog":
            Dog = "Bulldog" + Dog_String;
        break;
        case "Pug":
            Dog = "Pug" + Dog_String;
        break;
        default:
        Dog = "Please enter a bread exactly as written on the above list.";
    }
document.getElementById("Output").innerHTML = Dog;
}

function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}






