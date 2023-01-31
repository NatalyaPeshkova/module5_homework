let x;

if ((typeof(x) == 'number')&&(!isNaN(x))) {
    console.log("x — число");
} else if (typeof(x) == 'string') {
    console.log("x — строка");
} else if (typeof(x) == 'boolean') {
    console.log("х -  boolean");
} else {
    console.log("Тип x не определён");
}