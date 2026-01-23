//let rows =5;

//console.log("Number of rows:", rows);
//for (let row = 1; row <= rows; row++) {
//    let stars = '';
//    for (let col = 1; col <= row; col++) {
//        stars += '*';
//    }
//    console.log(stars);
//}

let originalString = "I am learning JavaScript";
console.log('original:' + originalString);
let reversedString = '';

for (let character of originalString) {
    reversedString = character + reversedString;
}

console.log(reversedString);


let array = ['arrays', 'are', 'iterable'];
let characterCount = {};

console.log(array)

for (let element of array) {
    for (let character of element) {
        if (character in characterCount) {
          characterCount[character] += 1;
        } else {
            characterCount[character] = 1;
        }
      }
}

console.log(characterCount);





