let cpf = "123.321.694-22";
const arrayCpf = [...cpf];

cpf = arrayCpf.map((element, index) => {
    return ![0, 1, 2].includes(index) ? 'x' : element;
}).join('')

console.log(cpf)

