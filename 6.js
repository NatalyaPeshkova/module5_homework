/*Задание 6.
Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

let myArray = [1,1,1,1,1,1];

let theyIdentical = true;
for (let i = 0; i < myArray.length - 1; i++){
    for (let j = i + 1; j < myArray.length; j++){
        if (myArray[i] !== myArray[j]){
            theyIdentical = false;
        }
    }
}
if (theyIdentical) {
    console.log("true");
} else {
    console.log("false");
}