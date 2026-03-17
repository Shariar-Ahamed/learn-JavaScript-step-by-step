const friends = ['Rakib', 'Sakib', 'Arif', 'Sojib', 'Kama', 'Arif', 'Rakib'];

function ignoreDuplicate(friends){
    let newList = []
    for(let i = 0; i < friends.length; i++ ){
        const elemenr =  friends[i];
        if(newList.includes(elemenr) === false){
            newList.push(elemenr);
        }
    }
    return newList;
}

const finalResult = ignoreDuplicate(friends);

console.log(finalResult);       // [ 'Rakib', 'Sakib', 'Arif', 'Sojib', 'Kama' ]