// Arguments length Sum:

function sum(){
    let store = 0;
    for(let i = 0; i < arguments.length; i++){
       store = store + arguments[i];
    }
    console.log(store);     // 132
    return store;
}

let num1 = 20;
let num2 = 4;

const result = sum(num1, num2, 2, 6, 100); 

console.log( 'The final answer:', result);      // The final answer: 132