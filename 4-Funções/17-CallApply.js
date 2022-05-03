//função dentro do js é um tipo
//call e apply são duas formas diferentes de chamar uma função em js
//diferença call e apply está na forma que passa os parâmetros da função

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//call passa diretamente os params
console.log(getPreco.call(carro, 0.17, '$'));

//apply passa os params em um array
console.log(getPreco.apply(carro, [0.17, '$']));