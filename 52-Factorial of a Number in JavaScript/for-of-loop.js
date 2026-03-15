//Note <--------- For Array --------->
const nunbers = [2, 4, 5, 56, 67];

for (let number of nunbers) {  
    console.log(number);    //[2, 4, 5, 56, 67]
}




//Note <--------- For Object to array loop --------->
const products = { name: 'Watch', color: 'black', price: 355};

const keys = Object.keys(products);

// console.log(keys);  [ 'name', 'color', 'price' ]

for (let value of keys) {
    console.log(products[value]);       // Watch black 355
}