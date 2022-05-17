const express = require('express'); //importar o express
const app = express(); // instanciando o express associando com a variável app
const bodyParser = require('body-parser'); //importar o body-parser - uma vez que submete algo no formulário, vai fazer um parser no corpo do request e vai pegar os dados e jogar no request.body que deixará ter acesso dos dados submetidos 

app.use(bodyParser.urlencoded({ extended: true }) ); 

app.post('/usuarios', (req, resp) => {
  console.log(req.body) // pega a requisição 
  resp.send('Parabéns. Usuário Incluído!!!') // retorna a mensagem pro usuário
});

app.post('/usuarios/:id', (req, resp) => {
  console.log(req.params.id) 
  console.log(req.body) 
  resp.send('Parabéns. Usuário Alterado!!!') 
}); 

app.listen(3003); // fica escutando a porta para o backend