// Armazenando funcao em variavel
const imprimirSoma = function (a, b) {
    return a + b;
}

console.log(imprimirSoma(2, 18));

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(3, 3));

// retorno implícito arrow function
const subtracao = (a,  b) => a - b;
// caso a funcao receba apensa um parametro podemos omitir os parenteses
const imprimir2 = a => console.log(a);

console.log(subtracao(17, 10));
imprimir2('teste');

