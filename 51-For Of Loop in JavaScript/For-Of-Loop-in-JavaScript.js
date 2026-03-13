//Note <--------- For object --------->

const person = { fname: 'kuddus', lname: 'mia', age: 24 }

for(let eachPerson in person) {
    console.log(eachPerson);              // fname kuddus lname (Property)

    console.log(person[eachPerson]);    // mia age 24
}



//Note <--------- For Array --------->

const numbers = [23, 53, 25, 56];

for(const number in numbers){
    console.log(number)             //0, 1, 2, 3 (Index number)

    console.log(numbers[number])   // 23, 53, 25, 56
}