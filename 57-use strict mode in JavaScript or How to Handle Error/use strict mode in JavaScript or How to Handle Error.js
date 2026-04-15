// "use strict"   //Error view

a = 'Programmer'

function test(){
    b = 20;
}

test();

// NOTE This is just a note


function sum(num1, num2, num3){
    console.log(num1 + num2 + num3);  // 24
}

sum(2, 2, 20)   


// NOTE This is just a note

function errorTest(a, b){
    if(typeof a !== 'number' ||typeof b !== 'number' ) {
        return 'Enter a Number';
    }
    return a + b;
}

const result = errorTest(5, '5');  // Enter a Number
console.log(result);