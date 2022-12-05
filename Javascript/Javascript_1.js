function seasonfunction() {
    var seasonout;
    var season = document.getElementById("seasoninput").value;
    var seas = " is your favorite season!";
    switch(season) {
        case "Spring":
            seasonout = "Spring" + seas;
        break;
        case "Summer":
            seasonout = "Summer" + seas;
        break;
        case "Fall":
            seasonout = "Fall" + seas;
        break;
        case "Winter":
            seasonout = "Winter" + seas;
        break;
        default:
            seasonout = "Please enter your season as shown on the list.";
    }
    document.getElementById("seasontest").innerHTML = seasonout;
    
}
function classfunction() {
    var D = 23;
    var T = 21;
    var sum = document.write(D - T);
    document.getElementsByClassName("classname").innerHTML = sum;
}

    var x = document.getElementById("canvas");
    var ctx = x.getContext("2d");
    ctx.font = "50px Arial";
    ctx.fillText("Welcome", 130, 140);
function mycanvas() {
    var Z = document.getElementById("canvas1")
    var ctz = Z.getContext("2d");
    var img = document.getElementById("tort");
    ctz.drawImage(img,10,10);
}
var c = document.getElementById("canvas2");
var ttx = c.getContext("2d");
var my_gradient = ttx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ttx.fillStyle = my_gradient;
ttx.fillRect(20, 20, 150, 100);
