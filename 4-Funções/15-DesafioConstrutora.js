function Pessoa(nome) {
  this.nome = nome;

  this.falar = function() {
    console.log(`Meu nome é ${this.nome}.`)
  }
}

const p1 = new Pessoa('Dyovana');
p1.falar();