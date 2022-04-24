function tratarErroELancar(erro) { //Envia o retorno da exceção, nesse exemplo, a mensagem informando o erro
  throw new Error('Erro!!!')
  // throw 10
  // throw true
  // throw 'mensagem'
  // throw {
  //   nome: erro.name,
  //   msg: erro.message,
  //   date: new Date
  // }
}

function imprimirNomeGritado(obj) {
  try { //Recebe o que deve ser avaliado
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) { //Gerou exceção cai do try para o catch, para tratar e retornar uma mensagem de erro
    tratarErroELancar(e) 
  } finally { //Bloco sempre executado
    console.log('final')
  }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);

