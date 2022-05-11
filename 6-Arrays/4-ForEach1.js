const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// o forEach percorre o array aprovados utilizando uma callback que será executada ao passar por cada elemento do array
// não é obrigatório passar nenhum parâmetro
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
});

// o forEach percorre o array mas a função no parâmetro do forEach percorre e exibe os nomes que estão no array
aprovados.forEach(nome => console.log(nome));

// guarda em uma variável uma função que exibe os nomes e o forEach percorre essa variável e imprime
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

// o próprio pode ser passado por parâmetro tbm - mas somente esses podem ser passados por parâmetro (nome, indice e array)
// a partir do quarto parâmetro será retornado o undefined
aprovados.forEach(function(nome, indice, array, x) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array);
  console.log(x);
});
