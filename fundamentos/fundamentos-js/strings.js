const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); // valor dele na tabela unicode
console.log(escola.indexOf('3'));

console.log(escola.substring(1)); // inclui o índice 1
console.log(escola.substring(0, 3)); // não inclui o índice 3

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(',')); // gera um array usando a vírgula como separador