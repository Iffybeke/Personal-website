let rows =5;

console.log("Number of rows:", rows);
for (let row = 1; row <= rows; row++) {
    let stars = '';
    for (let col = 1; col <= row; col++) {
        stars += '*';
    }
    console.log(stars);
}