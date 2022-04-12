/* Desafio Troca de Valores
* Trocar o valor de uma variável com o valor da outra variável
*/

let a = 7;
let b = 94;

//Primeiro jeito
// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

//Segundo jeito
[a, b] = [b, a];

console.log(a);
console.log(b);