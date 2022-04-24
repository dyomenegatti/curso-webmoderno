const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa; //Extrai o nome e a idade do objeto pessoa
console.log(nome, idade);

const { nome: n, idade: i} = pessoa; //Extrai do objeto pessoa, trocando o nome da variável de nome para n
console.log(n, i);

const { sobrenome, bemHumorada = true} = pessoa; //Tentativa de extrair algo que não existe do objeto, retorna undefined
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa; 
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa;
console.log(ag, num); 