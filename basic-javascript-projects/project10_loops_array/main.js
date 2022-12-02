function tenfunction() { //counts to  ten
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("ten").innerHTML = digit;
}
function string1() { // counts the amount of characters in a string
    let x = "This is a string";
    let str = (x.length());
    document.write(str).innerHTML;
    document.getElementById("string").innerHTML;
}
var instruments = ["Guitars", "Drums", "Piano", "Bass"];
var content = "";
var Y;
function forloop() { // goes through an array
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list").innerHTML = content;
}
function catpics() { //returns one index from an array
    var catpics = [];
    catpics[0] = "sleeping";
    catpics[1] = "purring";
    catpics[2] = "eating";
    catpics[3] = "playing";
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + catpics[2] + ".";
}
function confunction() { //declares a constant
    const gary = {height:"5'9", weight:"200 lb", haircolor:"brown"};
    gary.height = "6'1";
    gary.lastname = "Smith";
    document.getElementById("gary").innerHTML = "Gary is " + gary.height + " tall and weighs " + gary.weight + "." + " His last name is " + gary.lastname + ".";
}
document.getElementById("namet").innerHTML = namefunction("Ross");
function namefunction(name) {
    return "Hello " + name;
}
let car = {
    make:"Nissan ",
    model:"xterra ",
    year: "2007 ",
    color: "red ",
    description: function() {
        return "This car is a " + car.color + car.make + car.model + " made in the year " + car.year + "."
    }
};
document.getElementById("car").innerHTML = car.description();
let taxt = "";
for (let Y=0; Y < 10; Y++) { //continues a function once the variable is equal to 3
    if (Y == 3) {continue; }
    text += "The number is " + Y;
    document.getElementById("testi").innerHTML = text;
}






