// JSON formato textual de dados 
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)); // objeto passando pra JSON

// console.log(JSON.parse("{ a: 1, b: 2, c: 3")) - JSON passando pra objeto, mas o formato do JSON está errado
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));