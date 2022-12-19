console.log (7 / 0.0001);
console.log("10.2" / 2); // divide pois vai analisar o conteúdo interno da String e verá que é divisível
console.log("10,2" / 2); // NaN
console.log("Show!" * 2);
console.log(0.1 + 0.7); // a especificação do JS não suporta essa operação => IEEE => gera imprecisão
//console.log(10.toString()); // Conseguimos em cima do tipo number mas não do valor literal
console.log((10.345).toFixed(2)); // entre parênteses o problema acima não existe

//string ganha, tem preferência
console.log('3' + 2); // como isso faz sentido no mundo da string ele vai concatenar
