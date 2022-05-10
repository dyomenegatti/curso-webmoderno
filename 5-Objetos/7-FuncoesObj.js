// Funções Importantes dentro do Object
const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}
console.log(Object.keys(pessoa)); // todas as chaves
console.log(Object.values(pessoa)); // todos os valores
console.log(Object.entries(pessoa)); // todos os chaves/valores em arrays/subarrays

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
}) // percorre o array/subarray - primeiro jeito
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
}) // percorre o array/subarray - segundo jeito

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // passiva a ser listada
  writable: false, // vai aceitar ser modificada
  value: '01/01/2019' // atribuir valor 
}) // define uma propriedade de um objeto, porque pode querer definir algumas características a uma propriedade
pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2); // concatena todos os objs

Object.freeze(obj);
obj.c = 1234;
console.log(obj);