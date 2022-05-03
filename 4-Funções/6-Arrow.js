//Arrow tem dois objetivos:
//1) Ser mais curta/sintaxe mais reduzida
//2) Ter o this associado ao contexto que a função foi escrita
//Ela sempre é anônima, então pode guardar em uma variável

//Exemplo 1
let dobro = function(a) { 
  return 2 * a
}
//Reescrevendo 
dobro = (a) => { return 2 * a }
dobro = a => 2 * a //Return implícito
console.log(dobro(Math.PI))

let ola = function() {
  return 'Olá'
}
//Reescrevendo
ola = () => 'Olá'
ola = _ => 'Olá' //possui param mas pode ignorar
console.log(ola())

//Exemplo 2
function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
} 
new Pessoa

//Exemplo 3
let comparaComThis = function(param) {
  console.log(this === param)
}
comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(this);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);