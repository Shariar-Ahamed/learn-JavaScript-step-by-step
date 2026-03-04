//-----Using the filter method to create a new array with elements that pass a test----
const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const myNum = numbers.filter((num) => num > 5);

console.log(myNum); // Output: [6, 7, 8, 9, 10]



// With added return statement for clarity
const Numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const myNumber = Numbers.filter( (number) => { 
      return number > 5  
});

console.log(myNumber); // Output: [6, 7, 8, 9, 10]


// Using filter method with an array of objects
const heroNames = [
      { name : "Shariar", age : 25, profession : "Compuer Engineer"},
      { name : "Shakib", age : 30, profession : "Actor"},
      { name : "Sakib", age : 28, profession : "Doctor"},
      { name : "Sabbir", age : 22, profession : "Teacher"},
      { name : "Sadia", age : 26, profession : "Engineer"}
];

const myHero = heroNames.filter((hero) => hero.age <= 28 && hero.profession === "Doctor");

console.log(myHero); // Output: [ { name: 'Sakib', age: 28, profession: 'Doctor' } ]
console.log(myHero); // Output: [ { name: 'Sakib', age: 28, profession: 'Doctor' } ]