/* Desafio Área da Circunferência
* PI * raio * raio 
*/

let raio = 10;
const PI = 3.14;

//Jeito 1 - Meu
let areaCircunferencia = PI * raio * raio;
console.log("O valor da área é: " + areaCircunferencia + "m2.");

// Jeito 2 - Professor
areaCircunferencia = Math.PI * raio * raio;
console.log("O valor da área é: " + areaCircunferencia.toFixed(2) + "m2.");