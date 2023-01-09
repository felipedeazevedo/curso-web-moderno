function rand({ min = 0, max = 1000 }) { // operador destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
} 

console.log(rand({ max: 50, min: 40 }));//obj como parâmetro
console.log(rand({ min: 995 }));
console.log(rand({}));