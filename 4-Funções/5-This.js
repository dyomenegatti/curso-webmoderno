//This: Forma de referenciar o objeto atual da execução
//This varia de acordo com 'quem' chamou a função no 'function' - porque foi definido no contexto global
//This não varia no arrow function - porque foi definido no contexto léxico

//This e Binda
const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao) //This está acessando a variável que pertence ao objeto que é dono da função que ele está sendo chamado
  }
}
pessoa.falar();

const falar = pessoa.falar;
falar(); //Conflito entre paradigmas: Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); //Bind passa o objeto no qual você deseja que o this resolva
falarDePessoa();

//Outro exemplo de bind
function Pessoa2() {
  this.idade = 0

  const self = this
  setInterval(function() {
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}
new Pessoa2