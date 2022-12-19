const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

// interpolação, interpreta e substitui dentro do texto
const template = `Olá ${nome}, tudo bem?`;
console.log(template);

// expressoes....
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);

