// pessoa aponta para um endereço de memória e lá dentro tem um objeto que pode ser alterado 
// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' };
console.log(pessoa);
pessoa.nome = 'Pedro';
console.log(pessoa);

Object.freeze(pessoa); //congelou o objeto e não consegue mais alterar
pessoa.nome = 'Maria';
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' });
console.log(pessoaConstante);