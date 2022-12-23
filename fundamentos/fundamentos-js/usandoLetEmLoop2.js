const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();

// No var ele realmente printa a variável i como 10 pq não tem escopo definido, foi exatamento o valor que o i ficou quando saiu do bloco

// No let é como se a função tivesse a memória e conseguisse guardar o valor do i
//qualquer era o valor de i naquele momento

// conceito de closure