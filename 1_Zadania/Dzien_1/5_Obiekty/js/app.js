//Task 1.
String.prototype.upperLower = function () {
    var result = '';
    for(var i = 0; i < this.length; i++){
        if(this.charAt(i) === ' '){
            result += this.charAt(i);
        }
        if(i%2===0){
            result += this.charAt(i).toLowerCase();
        }else{
            result += this.charAt(i).toUpperCase();
        }
    }
    return result;
};
console.log("Smiesznie".upperLower()); //sMiEsZnIe
console.log("Javascript jest super".upperLower()); // jAvAsCrIpT jEsT sUpEr

//Task 2.
var Car = function(carType, carColor) {
    this.type = carType;
    this.color = carColor;
    this.km = 0;
};

Car.prototype.printCarInfo = function () {
    console.log(this.color + " " + this.type + " drives for " + this.km  + "km");
};

Car.prototype.drive = function(km) {
    this.km += km;
}
//Task 3.
Car.prototype.checks = [];

Car.prototype.addCheck = function(check) {
    this.checks.push(check);
}

Car.prototype.showChecks = function() {
    this.checks.forEach(function(entry) {console.log(entry);});
}

//Taks5.
var Rectangle = function(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function() {
        return this.length * this.width;
}

Rectangle.prototype.getPerimiter = function() {
        return (2*this.length) + (2*this.width);
}

// var rec01 = new Rectangle(4,5);
// console.log(rec01.getArea());
// console.log(rec01.getPerimiter());

//Task6.
var Calculator = function() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    var result = num1 + num2;
    this.history.push("added "+ num1 +" to "+ num2 +" got "+ result);
}

Calculator.prototype.multiply = function(num1, num2) {
    var result = num1 * num2;
    this.history.push("multiplied "+ num1 +" with "+ num2 +" got "+ result);
}

Calculator.prototype.substract = function(num1, num2) {
    var result = num1 - num2;
    this.history.push("substracted "+ num2 +" from "+ num1 +" got "+ result);
}

Calculator.prototype.divide = function(num1, num2) {
    var result = num1 / num2;
    this.history.push("divided "+ num1 +" by "+ num2 +" got "+ result);
}

Calculator.prototype.printOperations = function() {
    this.history.forEach(function(entry) {console.log(entry);});
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}

var calc = new Calculator();
calc.add(4,9);
calc.multiply(3,4);
calc.substract(15,2);
calc.divide(21,5);
calc.printOperations();
calc.clearOperations();
calc.printOperations();