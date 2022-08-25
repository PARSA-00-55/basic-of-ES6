//function declaration
function add(first, second){
    const total = first + second;
    return total;
}

const number = 55;

//function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

//function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

//arrow function
const add6 = (first, second) => first + second;

//more about arrow function
//you  don't need to return in arrow function it automaticaly take the value

const getPie = () => num*2;//no parameter arrow function
const dobleIt = (num) => num*2;//one parameter
const fiveTimes = num => num*5;//one parameter simple version
//multi line arrow function
// if you need to calculate a complex math than you need to take in the curly braces (note : you have to return in this case)
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
const add = (first,second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const result = add(10, 20);
console.log(result);