let myArray = [1,1,1,1,1,1,2];

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