console.log(typeof Object); //Object é uma função

class Produto {}
console.log(typeof Produto); //Produto é uma classe

//Exemplo 1 - Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //Soma um valor com undefined, então resulta NaN
imprimirSoma(2, 10, 4, 5, 6); //Soma os dois primeiros e ignora o restante
imprimirSoma(); //Sem parâmetros, sem retorno

//Exemplo 2 - Função com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma()); //NaN porque o valor de a é undefined e o b está padrão 1

//Exemplo 3 - Função arrow
//Armazenando uma função em uma variável
const imprimirSoma2 = function (a, b) {
  console.log(a + b);
}

imprimirSoma2(2, 3);

//Armazenando uma função arrow em uma variável
const soma2 = (a, b) => {
  return a + b;
}

console.log(soma2(2, 3));

//Retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');