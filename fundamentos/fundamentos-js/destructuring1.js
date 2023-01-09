// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa);

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // true por padrão
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa; // entrai de dentro do endereco e nao diretamente do pessoa
console.log(logradouro, numero, cep);

const { endereco } = pessoa;
console.log(endereco);

const { conta: { ag, num } } = pessoa; // ERRO!
console.log(ag, num);