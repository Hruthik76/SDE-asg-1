// [Easy] Declare a variable named favoriteFood using const and assign it a string value of your favorite food. Print it to the console.
const favoriteFood = "Biryani";
console.log(favoriteFood)

// [Easy] Create two variables, numA and numB, and assign them number values. Write an if/else statement to print which number is larger or if they are equal.
const numA = 1;
const numB = 3;

if (numA > numB){
    console.log(`${numA} is greater than ${numB}`);
}
else if (numA === numB) {
    console.log(`${numA} and ${numB} are equal`);
}
else{
    console.log(`${numB} is greater than ${numA}`);
}

// [Medium] Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz"

for (let i = 1; i<=20;i++){
    if (i%3==0){
        console.log(`Fizz - ${i}`);
    }
    else if (i%5==0){
        console.log(`Buzz - ${i}`);
    }
    else if (i%3==0 && i%5==0){
        console.log(`FizzBuzz- ${i}`);
    }
    else{
        console.log(i);
    }
}