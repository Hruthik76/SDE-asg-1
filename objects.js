// const champion = {
//     Team: 'RCB',
//     league:'IPL',
//     Season: 18,
//     performers : ['Virat','Hazlewood','Krunal']

// };

// console.log(champion);

// console.log(champion["performers"]);

// for (let key in champion){
//     console.log(`${key}: ${champion[key]}`);
// }

// const car = {
//     make:'Honda',
//     model:'civic',
//     year_of_manufacture:2021
// };

// console.log(car);

// for (let key in car){
//     console.log(`${key}: ${car[key]}`);
// }

// //spread operator in objects
// const obj1 = {key1: "value1", key2: "value2"};
// const obj2 = {key3: "value3", key1: "newValueFor1"}

// //cloning
// const cloneObj = {...obj1};
// console.log("Cloned Object:", cloneObj);

// Object Destructuring
// const product = {
//   id: "abc-123",
//   name: "Laptop",
//   price: 1200,
//   inStock: true
// };
// const {name,price}=product;
// console.log(name);
// console.log(price);

// // Renaming variables and setting default values
// const { id: productID, name: productName, country = "USA" } = product;
// console.log(productID); // Output: "abc-123"
// console.log(country);   // Output: "USA" (because it wasn't in the object)

const users = [
  { userId: 1, name: "Alice", email: "alice@example.com" },
  { userId: 2, name: "Bob", email: "bob@example.com" },
  { userId: 3, name: "Cathy", email: "cathy@example.com" }
];

// Accessing data
console.log(users[0].name); // Output: "Alice"

// traverse through the array of objects
for (const user of users) {
  console.log(`User ${user.userId} is ${user.name}`);
}

// // Nested Destructuring
// const students = [
//   { id: 1, firstName: "Peter", scores: { math: 90, science: 85 } },
//   { id: 2, firstName: "Mary", scores: { math: 95, science: 92 } }
// ];

// const [{firstName,scores:{math}}] = students;

// console.log(firstName);
// console.log(math)

// console.log(students[1].firstName);
// console.log(students[1].scores.math)