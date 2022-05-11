// O novo array terá a mesma quantidade de elementos
// Mas os valores vão possuir os valores dobrados do atualmente ficando 2, 4, 6, 8 e 10
// É um for com propósito
// A callback do map recebe três parâmetros: valor atual, índice e o array completo

const nums = [1, 2, 3, 4, 5];
let resultado = nums.map(function(e) {
  return e * 2
});
console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);