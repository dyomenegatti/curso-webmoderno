/*
* Você tem dois trabalhos, um na terça-feira e outro na quinta-feira:
* Se o trabalho 1 der certo E o trabalho 2 der certo, vai comprar TV de 50" e tomar sorvete;
* Se o trabalho 1 der certo OU EXCLUSIVAMENTE o trabalho 2 der certo, vai comprar TV de 32";
* Se o trabalho 1 der certo OU o trabalho 2 der certo, vai tomar sorvete;
* Se nenhum dos dois trabalhos der certo, vai ficar em casa - negação
*/

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; //ou
  const comprarTv50 = trabalho1 && trabalho2; //e
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; //operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }

}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));