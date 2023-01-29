/*Задание 4.
Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomArbitrary(0,100)