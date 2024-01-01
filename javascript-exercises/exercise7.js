//Write a JavaScript function called fibonacci that takes a number n as a parameter and returns the nth number in the Fibonacci sequence.
// write this using dynamic programming

function fibonacci(n) {
    // Write your code here
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(5)); // Output: 5
