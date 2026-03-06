// Note <--------- Slice Meathod --------->  (Cuting Data)

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8]


const nuwNumber = numbers.slice(2, 5);
console.log(nuwNumber);     // Output: [ 3, 4, 5 ]  (Only showing selected data)
console.log(numbers)       // Output: Array(8) [ 1, 2, 3, 4, 5, 6, 7, 8 ] (No Change)


const friends = ['Rifat', 'Rohim', 'Arif', 'Babu', 'Alax']

const selectFriens = friends.slice(1, 3);
console.log(selectFriens)  // Output: [ 'Rohim', 'Arif' ]




// Note <--------- Meathod --------->   (Remove Data)

const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNum = num.splice(3, 6, 111, 222, 'New data');
console.log(newNum)     // Output: Array(6) [ 4, 5, 6, 7, 8, 9 ]    (Showing remove data)
console.log(num)       // Output: Array(7) [ 1, 2, 3, 111, 222, 'New data', 10 ]