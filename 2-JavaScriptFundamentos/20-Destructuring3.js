//ao invés de acessar dentro do objeto através do ponto, já foi passado pelo destructuring pra poder extrair o valor mín e o máx de números aleatórios
function rand({ min = 0, max = 1000}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
// console.log(rand()); - destruturar elementos nulo ou undefined porque não passou o objeto