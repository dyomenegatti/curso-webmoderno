for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log('i = ', i); - Retorna erro, pois a variável i está declarada apenas dentro do bloco

//Exemplo 2
const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}

funcs[2]();
funcs[8]();