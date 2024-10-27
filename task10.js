// Challenge 10: Meal Suggestion
// Write a function suggestMeal(time, diet) that takes a time of the day ("morning", "afternoon", "evening") 
// and a type of diet ("vegan", "vegetarian", "omnivore") as input. The function should return meal suggestions 
// based on the input parameters.
function suggestMeal(time, diet ) {
    const suggest = `${time},${diet}`;
switch (suggest) {
    case 'morning,vegan':
     return "Fruit smoothie with oats";
    case 'morning,vegetarian': 
    return "Vegetarian scrambled eggs with toast";
    case 'morning,omnivore':
        return "Bacon and eggs with toast";
        case "afternoon,vegan":
            return "Vegan burrito";
            case "afternoon,vegetarian":
                return "Vegetarian pizza";
                case "afternoon,omnivore":
                    return "Chicken sandwich";
                    case "evening,vegan":
                        return "Vegan lentil stew"
                        default:
                        return "No suggestion available (("
 }
}

// Usage examples:
console.log(suggestMeal("morning", "vegan")); // "Fruit smoothie with oats"
console.log(suggestMeal("morning", "vegetarian")); // "Vegetarian scrambled eggs with toast"
console.log(suggestMeal("morning", "omnivore")); // "Bacon and eggs with toast"
console.log(suggestMeal("afternoon", "vegan")); // "Vegan burrito"
console.log(suggestMeal("afternoon", "vegetarian")); // "Vegetarian pizza"
console.log(suggestMeal("afternoon", "omnivore")); // "Chicken sandwich"
console.log(suggestMeal("evening", "vegan")); // "Vegan lentil stew"