/*console.log('First-1');

setTimeout(function(){
console. log('Second-2');
}, 2000);

console.log('Third-3');
*/


const first = (a, b, callback) => { // 2nd Add callback function 
    setTimeout (() => {
        console.log(a + b);
        callback();              // 3rd Add callback function call
    }, 2000)
}

const second = () => {
    console.log('Second-2');
}

first(10, 20, second);  // 1st Add second