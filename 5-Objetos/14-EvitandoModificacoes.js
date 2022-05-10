// Object.preventExtensions - previne que o objeto seja extendido, pode excluir atributos mas não pode adicionar novos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 199, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)); // Object.isExtensible - testa se a função pode ser extendida

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal - sela o objeto, não consegue adicionar e nem excluir algum atributo, mas consegue modificar nos atributos
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa)); // testa se o objeto está selado

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

// Object.freeze = selado + valores contantes - não modifica, nem exclui e nem adiciona novos atributos 
