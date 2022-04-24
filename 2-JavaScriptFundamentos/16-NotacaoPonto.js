console.log(Math.ceil(6.1)); //Aredonda pra cima
console.log(Math.floor(6.1)); //Arredonda pra baixo

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2';
console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome //this.nome - recebe nome por parâmetro e aponta para o this.nome para deixar público para o usuário
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();