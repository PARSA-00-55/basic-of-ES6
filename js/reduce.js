//map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
//.reduce (accumulatorFunction, initial value)
//accumulatorFunction use two parameters
const total1= numbers.reduce((previous, current) => previous + current , 0);
//samething another way
const total2 = numbers.reduce( (previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0)
console.log(total2);
 