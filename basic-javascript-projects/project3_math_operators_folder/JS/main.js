function MyFunction() { //Created functions to add, subtract, divide, multiply, and get the remainder of integers
    var int = 40 + 2;
    document.getElementById("math").innerHTML= "40 + 2 = " +  int;
}
function Mysubtfunction() {
    var int= 40 - 2;
    document.getElementById("mathtwo").innerHTML= "40 - 2 = " + int;
}
function Mymultfunction() {
    var int = 40 * 2;
    document.getElementById("maththree").innerHTML= "40 * 2 = " +  int;
}
function Mydivfunction() {
    var int= 40 / 2;
    document.getElementById("mathfour").innerHTML= "40 / 2 = " + int;
}
function Moremath() {
    var int= (3*7) / (25-9);
    document.getElementById("mathfive").innerHTML="(3*7)/(25-9) = " +int;
}
function Myremfunction() {
    var int= 40 % 3;
    document.getElementById("mathsix").innerHTML= "The remainder of 40 divided by 3 is " + int;
}
function Mynegfunction() { //Created functions that display negative numbers, increment numbers, and generate random numbers as well as pi
    var int= 40;
    document.getElementById("mathseven").innerHTML= "Negative 40 is displayed as " + -int;
}
function Myincfunction() {
    var int= 12;
    int++;
    document.getElementById("matheight").innerHTML= "12 incremented up is " + int;
}
function Myrandfunction() {
    var int = (Math.random() * 100);
    document.getElementById("mathnine").innerHTML= " A random number between 0 and 100 is " + int;
}
function Mypifunction() {
    var int = Math.PI;
    document.getElementById("mathten").innerHTML= "Pi is " + int;
}