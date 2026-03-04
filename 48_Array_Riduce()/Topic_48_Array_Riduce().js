//NOTE<------Multi line way------>
const numbers = [1, 2, 3, 4, 5];

const sumResult = numbers.reduce((preValue, currentValue) => {
    console.log(`preValue: ${preValue}, currentValue: ${currentValue}`);
    return preValue + currentValue;

  /*'preValue: 0, currentValue: 1' 
    'preValue: 1, currentValue: 2' 
    'preValue: 3, currentValue: 3' 
    'preValue: 6, currentValue: 4' 
    'preValue: 10, currentValue: 5'
    return preValue + currentValue;*/

}, 0);

console.log(sumResult); // Output: 15




//NOTE<------Single line way------>
const num = [10, 20, 30, 40, 50];

const result = num.reduce((preValue, currentValue) => preValue + currentValue, 0);

console.log(result); // Output: 150




//NOTE<------Shopping card example:------>
const shoppingCard = [
    { name: 'item1', price: 100 },
    { name: 'item2', price: 256 },
    { name: 'item3', price: 3015 }
]

const totalPrice = shoppingCard.reduce((preValue, currentValue) => preValue + currentValue.price, 0);

console.log(totalPrice); // Output: 3371