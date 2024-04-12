function my_Dictionary() { //Creating dictionary of a Car 
    var Car = {
        Make: "Ford",
        Body_Style: "SUV",
        Name: "Bronco",
        Price: 40000,    
};
delete Car.Name; //Deleting the "Name" in the dictionary
document.getElementById("Dictionary").innerHTML = Car.Name; 
document.getElementById("Push").innerHTML = Car.Make; //Showing the Make result
}