{
  {
    {
      {
        var sera = 'Será???'
      }
    }
  }
}
console.log(sera);

function teste() {
  var local = 123;
  console.log(local);
}
// console.log(local);
teste();

//Var 2
var numero = 1;

{
  var numero = 2;
  console.log('dentro = ', numero);
}
console.log('fora = ', numero);