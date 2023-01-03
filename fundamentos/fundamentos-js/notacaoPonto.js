console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola'; // cria o atributo dinamicamente
// obj1['nome'] = 'Bola2'; forma alternativa de criar atributo dinamicamente, mais flexível

console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome; // cria um atributo que será exposto pra fora da função quando ela for instanciada
    this.exec = function () {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome);
console.log(obj3.nome);

obj3.exec();