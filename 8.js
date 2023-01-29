/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и 
выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let myMap = new Map();
myMap.set('Irina', '65');
myMap.set('Kirill', '31');
myMap.set('Maria', '5');
myMap.set('Vitaly', '67');

// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap);

for (let human of myMap.keys()){
    console.log("Ключ - " + human + ", значение - " + myMap.get(human));
}
