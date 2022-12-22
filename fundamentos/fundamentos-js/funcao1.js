// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(4, 5);
imprimirSoma(2); // o segundo parâmetro será undefined
imprimirSoma(); // resultado: NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8); // pegará apenas os dois parâmetros e ignorará o resto

// Função com retorno
function soma(a, b = 1) { // valor padrão para quando o b não for passado na chamada da função
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); // vai tentar somar undefined (a) com 1 (b valor padrão), resultado = NaN