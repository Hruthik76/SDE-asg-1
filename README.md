### SDE - assignment-1

### Part 1: Basics & Variables

1. **[Easy]** Declare a variable named `favoriteFood` using `const` and assign it a string value of your favorite food. Print it to the console.
   ![image](https://github.com/user-attachments/assets/82de751a-da7b-4593-82d7-caa12abd097b)
   ![image](https://github.com/user-attachments/assets/3d22ba35-ee2d-4ea0-b511-61af94c03f15)

2. **[Easy]** Create two variables, `numA` and `numB`, and assign them number values. Write an `if/else` statement to print which number is larger or if they are equal.
   ![image](https://github.com/user-attachments/assets/88f4968a-86bd-43b5-aa15-373a0c38158e)
   ![image](https://github.com/user-attachments/assets/413987e2-b029-4e49-9469-e49b0364c579)
   
3. **[Medium]** Write a `for` loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
   ![image](https://github.com/user-attachments/assets/8b23712b-14e8-4288-93f4-c61ce1621f1f)
   ![image](https://github.com/user-attachments/assets/e74f3cdc-e714-4a59-b122-a6d10d413822)

### Part 2: Arrays

1. **[Easy]** Create an array named `colors` with three of your favorite colors.
    - Add a fourth color to the end of the array.
    - Add a new color to the beginning of the array.
    - Print the final array to the console.
      ![image](https://github.com/user-attachments/assets/8df26973-91da-43fa-9e1a-6fa1472f5b7a)
      ![image](https://github.com/user-attachments/assets/69353264-4b1a-421c-b30e-25f853f9115a)

2. **[Medium]** Given the array `let numbers = [10, 20, 30, 40, 50];`, use the `map` method to create a new array where each number is increased by 5.
      ![image](https://github.com/user-attachments/assets/ca9762c5-36ae-42db-968c-947d57118a22)
      ![image](https://github.com/user-attachments/assets/bc3c2915-bb7a-4c5b-b64c-a90e2569f5a8)
   
3. **[Medium]** Given the array `let scores = [25, 80, 45, 95, 60, 75];`, use the `filter` method to create a new array containing only the scores that are 70 or higher.
      ![image](https://github.com/user-attachments/assets/4989054b-ad52-4dd0-97dc-c69ebf4aae48)
      ![image](https://github.com/user-attachments/assets/670ad591-717f-47da-832c-4d0f35a19080)

4. **[Hard]** Use the `reduce` method on the `scores` array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores).

### Part 3: Objects & Functions

1. **[Easy]** Create an object named `movie` with properties for `title`, `director`, and `releaseYear`. Print the `title` of the movie to the console.
   ![image](https://github.com/user-attachments/assets/5a15d190-aa9d-49a3-ad4a-fc32358fa64f)
   ![image](https://github.com/user-attachments/assets/dc7ba71a-0a13-4ce4-8fac-6e9f91f62bea)

2. **[Medium]** Write a function called `printUserDetails` that takes a user object as an argument. The user object will have `name`, `email`, and `age` properties. The function should use object destructuring in its parameters to print a string like: `"User's name is [NAME], and they are [AGE] years old."`
   ![image](https://github.com/user-attachments/assets/84746efd-1a5e-4bb8-9190-6543a7ec745b)
   ![image](https://github.com/user-attachments/assets/ae28f4e4-8584-4338-89ab-bfa13f590a2c)

3. **[Medium]** Create an array of user objects. Each object should have an `id` and a `username`. Use the `find` method to find the user with a specific `id`.
   ![image](https://github.com/user-attachments/assets/6ee7fa53-643e-4755-a0cf-635f1cd583b7)
   ![image](https://github.com/user-attachments/assets/b57f886d-0286-4eca-a203-7f04a09b8fa5)

### Part 4: Putting It All Together (Advanced)

1. **[Hard]** Write a function called `getHighAchievers`. This function should accept two arguments: an array of student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
    - The function should **filter** the students to get only those with a score greater than or equal to `passingScore`.
    - It should then use **map** to return a new array containing only the names of the high-achieving students, in all uppercase letters.
    - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.
    - ![image](https://github.com/user-attachments/assets/2a3e980a-9ae5-492d-b275-2369cb873ced)
      ![image](https://github.com/user-attachments/assets/e2fbcd14-6a83-4e52-89fa-d103d2967e1d)

2. **[Hard]** Write a function called `createGame`.
    - This function should not take any arguments.
    - Inside `createGame`, create a "private" variable called `secretNumber` and assign it a random number between 1 and 10.
    - `createGame` should **return another function**. Let's call this inner function `guess`.
    - The returned `guess` function should accept one argument, a number.
    - When you call `guess`, it should compare the guessed number to the `secretNumber` it remembers (this is a **closure**!).
    - It should log "You guessed it!", "Too high!", or "Too low!".
    - Test it:
   ![image](https://github.com/user-attachments/assets/0d894940-622a-4398-9077-dbdfcfa491cf)
   ![image](https://github.com/user-attachments/assets/f9d3e28e-e835-4037-b0bf-f9cf41c45a38)
