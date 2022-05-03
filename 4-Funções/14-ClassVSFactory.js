class Pessoa {
  constructor(nome) { //inicializa a classe com as variáveis etc
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}.`)
  }
}

const p1 = new Pessoa('Dyovana');
p1.falar();

const pessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}.`)
  }
}
const p2 = pessoa('Marco');
p2.falar();