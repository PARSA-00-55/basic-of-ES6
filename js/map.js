const numbers = [2, 8, 4, 6, 3];
const output = [];

function getDoubles(numbers) {
  for (const number of numbers) {
    const doubled = doubleIt(number);
    output.push(doubled);
  }
  return output;
}

// function doubleIt(number){
//     return number * 2;
// }
//we can do that by arrow function
const doubleIt = num => num * 2; 

////we can do the calculation more simple way by useing (map)
const makeDouble = numbers.map(doubleIt);
//or -- we can do it in one line
const makeDoubleDirect = numbers.map(num => num*2)

const result = getDoubles(numbers);
console.log(makeDouble);
