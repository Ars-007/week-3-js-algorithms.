function checkEquality(number, string, boolean) {
    if (number === boolean) {
        return true;
    } else if (number === string) {
        return true; 
    } else {
        return false;
    }
}

// Test cases
console.log(checkEquality(1, true)); // ➞ false
console.log(checkEquality(0, '0')); // ➞ false
console.log(checkEquality(1, 1)); // ➞ true
