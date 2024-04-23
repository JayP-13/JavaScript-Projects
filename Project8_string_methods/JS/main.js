function full_Sentence(){ //Creating a fucntion that shows the concat() method
    var part_1 ="This is";
    var part_2 =" an example";
    var part_3 =" of the concat()";
    var part_4 =" method!!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method(){ //Creating a function that displays the slice() method.
    var Sentence = "Creating a function that shows the slice() Method.";
    var Section = Sentence.slice(35,42);
    document.getElementById("Slice").innerHTML = Section;
}

function toString_method(){//Creating a function that shows the toString method.
    let num = 789;
    let result = num.toString();
    document.getElementById("String").innerHTML = result;
}

function precision_method(){//Creating a function that shows the precision method.
    var X = 9756.76585443367;
    document.getElementById("Precise").innerHTML = X.toPrecision(13);
}