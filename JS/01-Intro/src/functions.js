// Declare a function with no parameters that outputs something to the console.
function greet() {
    console.log('Hello World');
}
greet();

// Declare a function with one parameter that returns something.
function square(num) {
    return num * num;
}
let result = square(5);
console.log(result);

// Declare a function with one parameter that performs a control flow with a switch statement and returns accordingly.
const getDayName = (day) => {
    switch (day) {
        case 1:
        return 'Monday';
        case 2:
        return 'Tuesday';
        case 3:
        return 'Wednesday';
        case 4:
        return 'Thursday';
        case 5:
        return 'Friday';
        case 6:
        return 'Saturday';
        case 7:
        return 'Sunday';
        default:
        return 'Invalid day';
    }
}
const dayName = getDayName(3);
console.log(dayName);


// Rewrite the greet function as a function expression assigned to a variable named greetExpression.
const greetExpression = function() {
    console.log('Hello World');
}
greetExpression();

// Rewrite the square function as a function expression assigned to a variable named squareExpression.
const squareExpression = function(num) {
    return num * num;
}
console.log(squareExpression(5));

// Rewrite the getDayName function as a function expression assigned to a variable named getDayNameExpression.
const getDayNameExpression = function(day) {
    switch (day) {
        case 1:
        return 'Monday';
        case 2:
        return 'Tuesday';
        case 3:
        return 'Wednesday';
        case 4:
        return 'Thursday';
        case 5:
        return 'Friday';
        case 6:
        return 'Saturday';
        case 7:
        return 'Sunday';
        default:
        return 'Invalid day';
    }
}
const dayNameExpression = getDayNameExpression(3);
console.log(dayNameExpression);

// Rewrite the greet function as an arrow function assigned to a variable named greetArrow.
const greetArrow = () => {
    console.log('Hello World');
}
greetArrow();

// Rewrite the square function as an arrow function assigned to a variable named squareArrow.
const squareArrow = (num) => {
    return num * num;
}
console.log(squareArrow(5));

// Rewrite the getDayName function as an arrow function assigned to a variable named getDayNameArrow.
const getDayNameArrow = (day) => {
    switch (day) {
        case 1:
        return 'Monday';
        case 2:
        return 'Tuesday';
        case 3:
        return 'Wednesday';
        case 4:
        return 'Thursday';
        case 5:
        return 'Friday';
        case 6:
        return 'Saturday';
        case 7:
        return 'Sunday';
        default:
        return 'Invalid day';
    }
}
const dayNameArrow = getDayNameArrow(3);
console.log(dayNameArrow);

// Rewrite the greet function as an arrow function assigned to a variable named greetArrowShort.
const greetArrowShort = () => console.log('Hello World');