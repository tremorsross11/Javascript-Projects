alert(document.getElementById("p1").innerHTML);
function Myfunction(){
    if (new Date().getHours()>10) {
        document.getElementById("time").innerHTML = "Goodnight";
    }
}