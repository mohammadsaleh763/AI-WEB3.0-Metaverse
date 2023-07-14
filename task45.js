function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        car[key] = value;
    });
    return car;
}
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["optionalFeature", "sunroof"]);
console.log(myCar);
