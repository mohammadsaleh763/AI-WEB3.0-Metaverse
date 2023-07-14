let color = 'blue';
let number = 7;
let fruits = ['apple', 'banana', 'orange'];

console.log("Is color == 'blue'? I predict true.");
console.log(color == 'blue');

console.log("Is color == 'red'? I predict false.");
console.log(color == 'red');

console.log("Is color !== 'yellow'? I predict true.");
console.log(color !== 'yellow');

console.log("Is color !== 'blue'? I predict false.");
console.log(color !== 'blue');

console.log("Is color.toLowerCase() === 'blue'? I predict true.");
console.log(color.toLowerCase() === 'blue');

console.log("Is color.toLowerCase() === 'BLUE'? I predict false.");
console.log(color.toLowerCase() === 'BLUE');

console.log("Is number === 7? I predict true.");
console.log(number === 7);

console.log("Is number != 10? I predict true.");
console.log(number != 10);

console.log("Is number > 5? I predict true.");
console.log(number > 5);

console.log("Is number < 3? I predict false.");
console.log(number < 3);

console.log("Is number >= 7? I predict true.");
console.log(number >= 7);

console.log("Is number <= 4? I predict false.");
console.log(number <= 4);

console.log("Is color == 'blue' && number === 7? I predict true.");
console.log(color == 'blue' && number === 7);

console.log("Is color == 'blue' || number === 10? I predict true.");
console.log(color == 'blue' || number === 10);

console.log("Is 'banana' in fruits? I predict true.");
console.log('banana' in fruits);

console.log("Is 'grape' in fruits? I predict false.");
console.log('grape' in fruits);

console.log("Is 'orange' not in fruits? I predict false.");
console.log(fruits.indexOf('orange') !== -1); 

console.log("Is 'kiwi' not in fruits? I predict true.");
console.log(fruits.indexOf('kiwi') == -1); 
