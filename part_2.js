// 1. **Easy]** Create an array named `colors` with three of your favorite colors.
//     - Add a fourth color to the end of the array.
//     - Add a new color to the beginning of the array.
//     - Print the final array to the console.

const colors = ['Red','Gold','Black'];
colors.push('blue')
colors.unshift('Green')

console.log(colors);

// [Medium] Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where each number is increased by 5.
let numbers = [10, 20, 30, 40, 50];
let num = numbers.map(function(numbers){
    res = numbers + 5
    return res;
});
console.log(num)

// [Medium] Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array containing only the scores that are 70 or higher.
let scores = [25, 80, 45, 95, 60, 75];
let new_scores = scores.filter(function(scores){
    return scores >= 70;
})
console.log(new_scores);


// [Hard] Use the reduce method on the scores array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores)
let score = [25, 80, 45, 95, 60, 75];

let average = score.reduce(function(){
    
})

const fruits = ["apple", "banana", "cherry"];

fruits.forEach(function(fruit, index) {
  console.log(`Fruit at index ${index} is ${fruit}`);
});
