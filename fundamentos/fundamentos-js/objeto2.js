console.log(typeof Object);
console.log(typeof new Object()); // posso omitir os parênteses

const Cliente = function() {}
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {}
console.log(typeof Produto);
console.log(typeof new Produto());