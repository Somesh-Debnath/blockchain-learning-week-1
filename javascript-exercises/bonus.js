
function hasUniqueChars(str) {
    // Write your code here
    let uniqueChars = new Set(str);
    return uniqueChars.size === str.length;
}

hasUniqueChars("abcd"); // should return true
hasUniqueChars("aabc"); // should return false