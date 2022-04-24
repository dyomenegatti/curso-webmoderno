const escola = "Cod3r";
console.log(escola);
console.log(escola.charAt(4)); //Caractere na posição 4
console.log(escola.charAt(5)); //Vazio
console.log(escola.charCodeAt(3)); //Código Unicode do caractere na posição 3
console.log(escola.indexOf('3')); //Posição do caractere 3
console.log(escola.substring(1)); //Da posição 1 até o final
console.log(escola.substring(0, 3)); //Da posição 0 até a posição 3
console.log('Escola '.concat(escola).concat("!")); //Concatenação
console.log(escola.replace(3, 'e')); //Substitui o caractere na posição 3 pelo caractere 'e'
console.log('Ana,Maria,Pedro'.split(',')) //Separa a string por vírgula e retorna um array

//Template String
const nome = 'Dyovana';
const concatencao = 'Olá ' + nome + '!';
const template = `Olá ${nome}!`; //Template String
console.log(concatencao, template);

//Template String - Expressões
console.log(`1 + 1 = ${1 + 1}`);

//Template String - Função Arrow
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
