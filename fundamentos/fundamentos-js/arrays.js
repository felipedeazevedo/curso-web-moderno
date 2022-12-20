const valores = [1, 2, 3, 4];

console.log(valores[0], valores[3]);
console.log(valores[9]);

valores[4] = 5;

console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste'); //array é heterogêneo!!

console.log(valores);

console.log(valores.pop());
console.log('after pop - ', valores);

delete valores[0];
console.log(valores);

console.log(typeof valores);