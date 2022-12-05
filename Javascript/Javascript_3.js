function displayType(tortoise) {
    var tortoiseType = tortoise.getAttribute("data-tort-type");
    alert(tortoiseType + "is a " + tortoise.innerHTML);
}