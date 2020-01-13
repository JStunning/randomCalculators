var add = function(num1, num2) {
    return num1 + num2;
}

var multiply = function(num1, num2) {
    return num1 * num2;
}

var divide = function(num1, num2) {
    return num1 / num2;
}

var subtract = function(num1, num2)
return num1 - num2;

var num1 = parseInt(prompt("Enter a number."));
var num2 = parseInt(prompt("Enter another number."));
var result = add(num1, num2);
alert(result);

//BMI calc

var bodyCalc = function() {
    var height = parseInt(prompt("What is your height?"));
    var weight = parseInt(prompt("What is your weight?"));
    return bmiCalc(height, weight);
}    
    
function bmiCalc(height, weight) {
    return weight / Math.sqrt(height)
}
    
bodyCalc();

//Celsius and Fahrenheit converter

var tempCalc = function() {
    var tempC = parseInt(prompt("enter the temperature in Celsius?"));
    var tempF = tempC * 1.8 + 32;
    return "Farenheit: " + tempF + ", Celsius: " + tempC;
}

tempCalc();

// Unit Conversion

var unitConverter = function() {
var gal = parseInt(prompt("Enter the amount of gallons you want to convert."))
var lit = gal * (3.7854 / 1)
return lit
};

unitConverter();