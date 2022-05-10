// Getters - Ler variável
// Setters - Alterar variável

const sequencia = {
  _valor: 1, // convenção, pretende ser privada mas não deixou de ser pública
  get valor() { return this._valor++ },
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);