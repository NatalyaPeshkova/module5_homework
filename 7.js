let array = [0,1,2,3,4,5,6,7,8,9,0,0,0,0,"все","считает","программа","на","js"];
let evenNumber = 0;
let oddNumber = 0;
let notNumber = 0;
let zeroElem = 0;


for (let i = 0; i < array.length; i++){
    if (typeof(array[i]) != 'number') {
        notNumber++;
    } else if (array[i] == 0)  {
        zeroElem++;
    } else {
        if (array[i] % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    } 
}

console.log("Четных чисел: " + evenNumber);
console.log("Нечетных чисел:  " + oddNumber);
console.log("Не только чисел: " + notNumber);
console.log("Нулей: " + zeroElem);