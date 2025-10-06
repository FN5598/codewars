function combine(...args) {
    let newArr = [];
    let index = [];
    for (let arg of args) {
        for (let sym of arg) {
            index.push({ num: sym, index: arg.indexOf(sym)});
        }
    }
    for ( let i = 0; i < index.length; i ++) {
        const sameIndex = index.filter(obj => obj.index === i);
        for(let item of sameIndex) {
            newArr.push(item.num);
        } 
    }
    return newArr;
}

let arrLetters = ['a', 'b', 'c'];
let arrNumbers1 = [1, 2, 3, 4, 5];
let arrNumbers2 = [6, 7];
let arrNumbers3 = [ 8 ];

combine(arrLetters, arrNumbers1, arrNumbers2, arrNumbers3);