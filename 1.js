


let inputNumber = prompt("Введите значение");

if ((typeof(+inputNumber) == 'number') && (!isNaN(inputNumber))){
    if (inputNumber % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}