//factory é uma função que retorna um objeto
//factory simples
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}
console.log(criarPessoa());

//exemplo 2
function criarProduto(nome, preco) {
  return {
    nome, 
    preco, 
    desconto: 0.1
  }
}
console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));
console.log(criarProduto('iPhone', 1000.49));