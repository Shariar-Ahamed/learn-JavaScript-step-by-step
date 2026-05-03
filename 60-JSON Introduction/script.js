/* JSON (JavaScript Object Notation) = JavaScript Object Notation */
// JSON is a data format that is used to store and transfer data.

let text = '{ "employees" : [' +
    '{"firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(JSON.parse(text));      // JSON.parse() is used to convert JSON to JavaScript Object
console.log(JSON.stringify(text)); // JSON.stringify() is used to convert JavaScript Object to JSON