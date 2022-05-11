const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

// Remove o último elemento do array
pilotos.pop(); 
console.log(pilotos);

// Adiciona elemento ao array
pilotos.push('Verstappen'); 
console.log(pilotos);

// Remove o primeiro elemento do array
pilotos.shift(); 
console.log(pilotos);

// Adiciona um elemento a primeira posição ao array
pilotos.unshift('Hamilton'); 
console.log(pilotos);

// Adicionar utilizando o splice - no índice 2 adiciona os elementos indicados
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover utilizando o splice - no índice 3 remove um elemento
pilotos.splice(3, 1);
console.log(pilotos);

// Retorna um novo array a partir do índice indicado
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

// O primeiro índice entra no array, o último índice indicado não
const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);