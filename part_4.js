// [Hard] Write a function called getHighAchievers. This function should accept two arguments: an array of student objects and a passingScore number. Each student object will look like this: { id: 1, name: 'Alice', score: 85 }.

//1
// const students = [
//   { id: 1, name: 'Alice', score: 85 },
//   { id: 2, name: 'Bob', score: 82 },
//   { id: 3, name: 'Charlie', score:  70 },
//   { id: 4, name: 'David', score: 95 }
// ];

// function getHighAchievers(students,passingScore){
//     return students
//     .filter(student => student.score >= passingScore)
//     .map(student => student.name.toUpperCase());
// }
// console.log(getHighAchievers(students, 80)); 

//2
function createGame(){
    const secretNumber = Math.floor(Math.random()*10) + 1;

    return function guess(Number){
        if (Number === secretNumber){
            console.log("You guessed it!");
        }else if (Number > secretNumber){
            console.log("Too High!");
        }else {
            console.log("Too Low!");
        }
    };
}

const game = createGame();
game(5);
game(2);