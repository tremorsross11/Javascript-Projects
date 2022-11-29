function myfunction() { //combines strings and integers
    document.write(typeof 4);
    document.write("ten" + 5);
    document.getElementById("coercion").innerHTML = document.write;
}
function Myfunction() { //shows if something is not a number 
    document.getElementById("test").innerHTML= 0/0;
    document.getElementById("test2").innerHTML = isNaN("Hello");
    document.getElementById("test3").innerHTML = isNaN(7);
}
function Mysecfunction() { // shows infinity and neg infinity
    document.write(5E310);
    document.getElementById("test5").innerHTML = (5E310);
    document.write(-7E310);
    document.getElementById("test4").innerHTML = (-7E310);
}
function Mythifunction() { //shows false and true
    document.write(7>26);
    document.getElementById("test6").innerHTML;
}
function Myfoufunction() {
    document.write(7<26);
    document.getElementById("test7").innerHTML;
}
console.log(2+7); //more true and false statements but in the console
console.log(37>38);
console.log(42=="The answer to life the universe and everything");
console.log(42==42);
X = 73;
Y = "73";
Z = "Test";
V = 73;
K = "Test";
document.write(X===Y); 
document.write(X===V);
document.write(Y===Z);
document.write(Z===K);

document.write(5>1&&Z>V); //working with boolean operators
document.write(5>1&&7>5);
document.write(5>1||5>10);
document.write(5>10||X>V);
function Notfunction() {
    document.getElementById("not").innerHTML = !(20>7);
    document.getElementById("nah").innerHTML =!(20>30);
}
