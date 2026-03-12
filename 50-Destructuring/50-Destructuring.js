// Normal way 
const person = {
    name: 'Raim',
    age: 30,
    locaton: 'Dhaka'
}

console.log(person.name)    // 'Raim'
console.log(person.age)     // 30
console.log(person.locaton) // 'Dhaka'

//----------------



// Destructuring Way 
const jocks = {
    id: 1,
    title: 'Jock',
    release : 2003,
    moreInfo: {
        age: 30,
        location: 'Dhaka'
    }
}

/** 
console.log(jocks.id);
console.log(jocks.title);
console.log(jocks.release);
*/

const {id, title, release, moreInfo} = jocks;

console.log(id);              //1
console.log(title);          //Jock
console.log(release);       //2003
console.log(moreInfo.age)  //30

//----------------



const numbers = [1, 2, 3, 4, 5];

const [num1, num2, num3, num4, num5] = numbers;

console.log(num5);          //5
console.log(num4);         //4
console.log(num3);        //3
console.log(num2);       //2
console.log(num1);      //1

//----------------