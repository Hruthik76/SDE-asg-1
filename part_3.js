// [Easy] Create an object named movie with properties for title, director, and releaseYear. Print the title of the movie to the console.
const movie = {
    title : 'Bahubali',
    director: 'Rajamouli',
    release_year:2015
}

console.log(movie.title);

// [Medium] Write a function called printUserDetails that takes a user object as an argument. The user object will have name, email, and age properties. The function should use object destructuring in its parameters to print a string like: "User's name is [NAME], and they are [AGE] years old."
let users ={
    name:'Sunny',
    age:21,
    email:"sfhsdf@mail.com"

}
function printUserDetails({name,age,email}){
    console.log(`Users name is ${name}, and they are ${age} years old`);
}
printUserDetails(users);

// [Medium] Create an array of user objects. Each object should have an id and a username. Use the find method to find the user with a specific id.
const array = [
    {id:1,username:'virat',sport:'cricket'},
    {id:2,username:'ronaldo',sport:'football'}
];

const new_arr = array.find(function(array){
    return array.id == 2;
});
console.log(new_arr);