let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); //!! - Negação - Inverte para falso
console.log(!!isAtivo); //!! - Negação - Inverte para verdadeiron

console.log('Os verdadeiros:');
console.log(!!3); 
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(isAtivo = Infinity));
console.log(!!(isAtivo = 33));

console.log('Os falsos:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log(!!(isAtivo = 0));
console.log(!!(isAtivo = ''));
console.log(!!(isAtivo = null));
console.log(!!(isAtivo = NaN));
console.log(!!(isAtivo = undefined));

console.log('Pra finalizar:');
console.log(!!('' || null || 0 || ' ')); //false
console.log(!!('' || null || ' ')); //true
console.log(!!('' || null || undefined || NaN)); //false
console.log(!!('' || null || NaN || ' ')); //true

let nome = '';
console.log(nome || 'Desconhecido'); //Desconhecido
let nome2 = 'Dyovana';
console.log(nome2 || 'Desconhecido'); //Dyovana
