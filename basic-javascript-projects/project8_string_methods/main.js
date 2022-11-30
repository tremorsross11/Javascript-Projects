function confunction() { //function that concatenates
    var senone = "This is";
    var sentwo = " a whole";
    var senthr = " sentence.";
    var sentotal =  senone.concat(sentwo, senthr);
    document.getElementById("sent").innerHTML = sentotal;
}
function slicefunction() { //function that slices a string
    var sentence = "Now available in red";
    var section = sentence.slice(17, 20);
    document.getElementById("slice").innerHTML = section;
}
function upfunction() { //function that makes a string value uppercase
    var senten = "Now available in blue";
    var sect = senten.toUpperCase();
    document.getElementById("slicee").innerHTML = sect;
}
function searchfunction() { //function that searches for the element index of a string
    var sentent = "Now available in yellow";
    var secti = sentent.search("in");
    document.getElementById("search").innerHTML = secti;
}
function stringfunction() { // turns data type into string
    var Z =178;
    document.getElementById("string").innerHTML = Z.toString();
}
function precfunction() { //formats X to only have 5 place values
    var X =673.82649274659;
    document.getElementById("prec").innerHTML = X.toPrecision(5);
}
function fixfunction() { //string and precision function in one
    var X =673.82649274659;
    document.getElementById("fix").innerHTML = X.toFixed(7);
}
function valfunction() { //returns the primitive value of X
    var X =673.8;
    document.getElementById("val").innerHTML = X.valueOf();
}








