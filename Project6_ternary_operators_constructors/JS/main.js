function Vote_Function() { //Created function that uses ternary operation to see if a person is old enough to vote.
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function House(Builder, Model, Age) {  //Created a constructor function to creat House objects
    this.House_Builder = Builder; //Storing the name of the builder
    this.House_Model = Model; //Storing the name of the Model of the house
    this.House_Age = Age; //Storing the year the house was built
}
var Pam = new House ("Lennar Corp","Cape Cod", "1997"); //Creating the house objects using the constructor function
var Jake = new House("KB Homes", "Cottage", "2003");
var David = new House("Meritage Homes", "Ranch", "2020");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = //Creating a function to dislay information regarding Jake's house
    "Jake lives in a " +Jake.House_Age + Jake.House_Model + " built by " + Jake.House_Builder;
}

function count_Function(){ //Created a nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var Starting_point = 25;
        function Plus_five() {Starting_point += 5;}
        Plus_five();
        return Starting_point;
    }
}
