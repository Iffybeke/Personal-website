// Ex 1 - product by addition
console.log('\nEXERCISE 1:\n');
let multiplicand = 12;
let multiplier = 4;
let product = 0;
for (let i = 0; i < multiplier; i++) {
  product += multiplicand;
}
console.log('final product of ' + multiplicand + ' time ' + multiplier + ': ' + product)


// Ex 2 - Sum of numbers from 1 to x
console.log('\nEXERCISE 2:\n');
let stopsum = 10
let finalsum = 0;
for (let i = 1; i <= stopsum; i++) {
  finalsum += i;
}
console.log('final sum of numbers from 1 to ' + stopsum + ' is: ' + finalsum)

// Ex 3 - Array element of longest string
console.log('\nEXERCISE 3:\n');
let stringArray = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry', 'fig', 'grapefruit'];
let longestString = '0'
let maxlength = 0

for (let i = 0; i < stringArray.length; i++) {
  let elementlength = stringArray[i].length
    if (elementlength > maxlength) {
        longestString = i
        maxlength = elementlength
    }
}

console.log(stringArray)
console.log('The longest string is: ' + stringArray + ' which is' + maxlength)