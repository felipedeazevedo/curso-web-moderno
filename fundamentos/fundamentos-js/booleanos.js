let isAtivo = false;

console.log(isAtivo); 

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // volta pro valor original que é => true

console.log('os verdadeiros... ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Não verifica se a atribuição deu certo ou não

console.log('os falsos... ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // se o valor da direito for resolvido pra falso o resultado da atribuição toda será falso

console.log('pra finalizar... ');
console.log(!!('' || null || 0 || ' ')); // true por causa do último espaço vazio

let nome = '';
console.log('oi' || nome);
