// Challenge 4: Multi-level conditions II
// Write a function called checkEligibility that accepts an age and returns whether the person is eligible to vote, 
// drive, and/or drink. If the person is 16 or older, they can drive. If they are 18 or older, they can vote. 
// If they are 21 or older, they can drink.
function checkEligibility (age) {
    if (age >= 16 && age <= 17) {
        return "Can drive!"
    }else if ( age >= 18 && age <= 20){
return "Can vote and drive"
    } else if (age >= 21){ 
        return "Can vote, drive, and drink"
    }else {
        return "Can't vote,drive and drink!"
    }
    }

// Usage examples:
console.log(checkEligibility(15)); // "Can't vote, drive, or drink"
console.log(checkEligibility(16)); // "Can drive"
console.log(checkEligibility(18)); // "Can vote and drive"
console.log(checkEligibility(22)); // "Can vote, drive, and drink"