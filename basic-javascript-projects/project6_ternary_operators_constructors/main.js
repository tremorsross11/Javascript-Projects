function Ride_function() {  //ternary function
    var Height,  Can_ride;
    Height=document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}
function Votefunction() {
    var age, Canvote;
    age = document.getElementById("Age").value;
    Canvote = (age < 18) ? "You are too young to vote":"You are old enough to vote";
    document.getElementById("Vote").innerHTML = Canvote;
}
function Vehicle(Make, Model, Color, Year) { //constructor function
    this.Vehicle_make = Make;
    this.Vehicle_model = Model;
    this.Vehicle_color = Color;
    this.Vehicle_year = Year;
}
var Ross = new Vehicle("Nissan", "Xterra", "Tan", 2007);
var Emily = new Vehicle('Jeep', "Trail Hawk", "White", 2019);
var Erik = new Vehicle("Ford", "Pinto", "Mustard", 1971);
function Myfunction() {
    document.getElementById("constructors").innerHTML = "Ross drives a " + Ross.Vehicle_make + " tan " + Ross.Vehicle_model + " manufactured in " + Ross.Vehicle_year;
}



function Countfunction() { // nested function
    document.getElementById("count").innerHTML = count();
    function count() {
        var start= 21;
        function Plus_five() {start += 5};
        Plus_five();
        return start;
    }
}