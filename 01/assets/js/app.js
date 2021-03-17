const a = '4.2';
const b = 9;

console.log(a, b);

console.log(typeof(a));
console.log(typeof(b));

const numA= Number(a);

const sum= numA + b;
const subtr = numA - b;
const multi = numA * b;
const divide = numA / b;
const expo = numA ** b;
console.log(sum, subtr, multi, divide, expo);

let myArray= [sum, subtr, multi, divide, expo];
let greaterThan = '';
let lessThan = '';
for (let i = 0; i < myArray.length; i++) {
    let result = myArray[i];
    if (result > 20) {
        if (greaterThan === '') {
            greaterThan += result;
        } else {
               greaterThan += ', ' + result;
        }
    } else {
        if (lessThan === '') {
            lessThan += result;
        } else {
                lessThan += ', ' + result;
        }
    }
}
console.log(`Liczby większe od 20 to : ${greaterThan}`);
console.log(`Liczby mniejsze od 20 to : ${lessThan}`);
