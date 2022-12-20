const prod1 = {}

prod1.nome = 'Iphone'; // atributo criado dinamicamente
prod1.preco = 4500.00;
prod1['Desconto Legal'] = 0.40; //evitar

console.log(prod1);

const prod2 = {
    nome: 'Teste',
    preco: 79.00,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2);