const a = 1;
const b = 2;
const c = 3;

// antes
const obj1 = { a: a, b: b, c: c }

// agora
const obj2 = { a, b, c }

console.log(obj1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

// antes
const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);

// agora
const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

// antes
const obj5 = {
  funcao1: function() {}
}

// agora
const obj6 = {
  funcao2() {}
} 

console.log(obj5, obj6);