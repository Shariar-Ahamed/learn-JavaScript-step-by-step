//Note <--------- For Sum --------->

function sumNumber(numberInput){

    let sum = 0;

    for(let i = 1; i<=numberInput; i++ ){
        sum = sum + i;
        console.log(i, sum);        // 1 1, 2 3, 3 6, 4 10, 5 15
    }
    return sum;
}

const result = sumNumber(5);
console.log( 'Result:', result);





//Note <--------- For Multiplication --------->
// 5 = 5 * 4 * 3 * 2 * 1

function multiFun(multiInput){

    let multi = 1;

    for(let i = 1; i <= multiInput; i++) {
        multi = multi * i;
        console.log(i, multi); // 1 1, 2 2, 3 6, 4 24, 5 12
    }
    return multi;
}

const multiResult = multiFun(5);
console.log('Multi Result:',multiResult);  // Multi Result: 120