function Dictionary() { //Created a dictionary
    var car = {
        make: "Nissan",
        model: "Xterra",
        year: 2007,
        model: "Kia",
        color: "Tan",
    };
    delete(car.model);
    document.getElementById("mydictionary").innerHTML = car.model;
}