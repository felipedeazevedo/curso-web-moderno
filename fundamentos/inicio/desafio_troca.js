let a = 7;
let b = 94;

let aux = a;

a = b;
b = aux;

console.log('a = ' + a);
console.log('b = ' + b);

// Outra forma
let c = 1;
let d = 2;

[c, d] = [d, c];

console.log('c = ', c);
console.log('d = ', d);

