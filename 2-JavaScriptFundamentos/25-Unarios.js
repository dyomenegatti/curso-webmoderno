let num1 = 1;
let num2 = 2;

num1++; //pós fixada - acrescenta uma unidade no valor da variável
console.log(num1);
--num1;
console.log(num1); //pré fixada - subtrai uma unidade no valor da variável

console.log(++num1 === num2--); //o ++num1 foi executado muito antes da comparação e da num2--, ou seja, acrescentou valor a variável num1 igualando ela a variável num2

