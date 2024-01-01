
function calculateFactorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
