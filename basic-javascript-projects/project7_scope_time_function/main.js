X =  10;
function Myfunction() { //Global and local variables
    Y = 25;
    console.log(X+Y);
}
function myfunction() {
    console.log(X-Y);
}
Myfunction();
myfunction();

function Datefunction() { //If function
    if ( new Date().getHours() > 19) {
        document.getElementById("date").innerHTML = "Goodnight!";
    }
}
function newfunction() {
    if (5 > 3.6) {
        document.getElementById("new").innerHTML = "5 is larger than 3.6";
    }
}
function Agefunction() { // Else function
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote";
    }
    document.getElementById("Howold").innerHTML = Vote;
}
function Timefunction() { //Else If function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "Afternoon";
    }
    else {
        Reply = "Evening";
    }
    document.getElementById("time").innerHTML = Reply;
}
