console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana'); 
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);
console.log(aprovados);

// Adicionando um elemento
aprovados[3] = 'Paulo'; 

// Push - método correto para adicionar elemento
aprovados.push('Abia'); 

// length - Retorna o tamanho do array
console.log(aprovados.length); 

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados);
console.log(aprovados[8] === null);
console.log(aprovados[8] === undefined);

console.log(aprovados);
// Altera ordenando o array 
// Os elementos vazios vai para o final do array
aprovados.sort(); 
console.log(aprovados);

// Exclui um elemento do array
delete aprovados[1]; 
console.log(aprovados[1]);
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

// Adiciona/remove elementos 
// Primeiro indica o índice que querr modificar, depois a quantidade, depois o que deve ser adicionado (nesse exemplo)
aprovados.splice(1, 1, 'Elemento1'); 
console.log(aprovados);
