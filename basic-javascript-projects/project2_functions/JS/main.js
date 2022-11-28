var1 = 32, var2 = 64; //assigning variables

function twovar() { //creating a function to add two variables and assign the sum an id
    var int = (var1+var2);
    document.getElementById("vartotal").innerHTML=int;
}

function myfunction() { //creating a function to concatenate strings and assign an id
    var sentence = "I am learning";
    sentence += " a lot from this course";
    document.getElementById("concatenate").innerHTML=sentence;
}
