function getReceipt(){
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //This will update the total of the pizza depending on the size
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //This will update the running total with the price of the size
    console.log(selectedSize+" = $"+sizeTotal+".00"); //This will log the selected size and its price
    console.log("size text1: "+text1); //Logs the current receipt text
    console.log("subtotal: $"+runningTotal+".00");//Log the current subtotal
    //These variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1){ //Creating a function that adds toppings to the running total
    var toppingTotal = 0;
    var selectedTopping =[];
    var toppingArray = document.getElementsByClassName("toppings");//This gets all the toppins from the HTML
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {//This will get the topping that is checked
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;//This will calculate the total price of the toppings selected
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);//This will add the running total with the selected toppings
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showtext").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+//Display the total price in the HTML
        runningTotal+".00"+"<strong></h3>";
};