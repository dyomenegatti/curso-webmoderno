//Callback - chamar de volta quando um evento acontecer
//Pode ser chamada várias vezes ou apenas uma vez

//Exemplo 1
const fabricantes = ["Mercedes", "Audi", "BMw"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir);
fabricantes.forEach(function(fabricante) {
  console.log(fabricante)
});
fabricantes.forEach(fabricante => console.log(fabricante));
//Nesse caso é o loop, cada elemento do array chama a função

//Exemplo 2
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback
const notasBaixas1 = [];
for(const i in notas) {
  if(notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1);

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
});
console.log(notasBaixas2);

//Callback e arrow
const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);

const notasMenorQue7 = nota => nota < 7;
const notasBaixa4 = notas.filter(notasMenorQue7);
console.log(notasBaixa4);
