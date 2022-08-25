//old way

// function add(first, second){
//     console.log(first, second);
//     second = second || 0;
//     if( second === undefined){
//         second = 0;
//     }
//     const total =  first + second;
//     return total;
// }

//ES-6
//default parameter
function add(first = 0, second = 0){
    const total =  first + second;
    return total;
}



const result = add(10, 20);
console.log(result);