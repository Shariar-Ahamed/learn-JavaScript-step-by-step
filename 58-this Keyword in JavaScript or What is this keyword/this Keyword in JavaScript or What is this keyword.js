/*function test(){
    console.log(this);
}

test();*/

//! NOTE This is just a note

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    job: 'Developer',
    message: function() {
        console.log(`Hello! My name is ${this.firstName} and device name is ${product.productName}`);
    }
}

const product = {
    productName: 'iPad',
    age: 34
};


user.message();  //Output: Hello! My name is John and device name is iPad