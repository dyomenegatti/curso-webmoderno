const prod1 = {} //Vazio
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evitar atributos com espaço
console.log(prod1);

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90
};
console.log(prod2);

const prod3 = {
  teste: 'teste',
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
};
console.log(prod3);
