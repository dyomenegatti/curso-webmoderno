const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
console.log(valores[0], valores[3]);
console.log(valores[4]); //undefined

valores[4] = 10;
console.log(valores);

valores[10] = 11;
console.log(valores);
console.log(valores.length); //Quantidade de elementos do array

valores.push({id: 3}, false, null, 'teste'); //Adiciona elementos no array
console.log(valores);

console.log(valores.pop()); //Remove o último elemento do array
delete valores[0]; //Remove o elemento do indice 0
console.log(valores);

console.log(typeof valores); //Tipo do array