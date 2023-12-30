
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false