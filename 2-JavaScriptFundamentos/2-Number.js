const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //true - verifica se é inteiro
console.log(Number.isInteger(peso2)); //true - verifica se é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2)); //toFixed - limita o número de casas decimais
console.log(media.toString(2)); //toString - converte para binário
console.log(typeof media); //number

//Number - Cuidados!
console.log(7 / 0); //infinito
console.log("10" / 2); //5 - converte o valor literal para número
console.log("10,2" / 2); //NaN - não é um número
console.log("10,2" * 2); //NaN - não é um número
console.log("Show!" * 2); //NaN - não é um número
console.log(0.1 + 0.7); //0.7999999999999999
//console.log(10.toString()); //erro
console.log((10.345).toFixed(2)); //10.35
console.log((10.345).toString(2)); //1010.11 - binário
console.log((10.345).toString(2).length); //54 - quantidade de bits

//Math
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area.toFixed(2)); 
console.log(typeof Math); //object

