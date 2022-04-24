# **Módulo 2: JS - Fundamentos**

## **Algoritmos**
* Algoritmos são uma sequência de passos a serem executados, onde a ordem de cada passo importe.
* Um passo em um algorimto pode ser repetido uma determinada quantidade de vezes ou até que uma condição seja satisfeita.
* Em um determina momento é possível que um passo do algoritmo tenha que tomar uma decisão para a execução de um próximo passo.
* Existem algoritmos que:
  * Recebem dados de entrada e geram dados de saída;
  * Recebem dados de entrada e não geram dados de saída;
  * Não recebem dados de entrada mas geram dados de saída;
  * Não recebem dados de entrada e não geram dados de saída;
* Os algoritmos podem ser representados por:
  * Fluxogramas;
  * Linguagem Natural;
  * Linguagem Artificial;
  * Pseudo-linguagem;

## **Estrutura de Dados**
* As estruturas de dados visam organizar/administrar os dados de um software.
* Podem ser estruturas de:
  * **Lista:** Sendo listas ordenadas/não ordenadas;
  * **Fila:** FIFO - First In, First Out - Primeiro que entra, é o primeiro que sai;
  * **Pilha:** LIFO - Last In, First Out - O último que entra, é o primeiro que sai;
  * **Árvore:** Diferente das listas encadeadas, em que os dados se encontram numa sequência, nas árvores os dados estão dispostos de forma hierárquica.
  * **Tabela:** Organizado em linhas e colunas;
* Estruturas de dados básicas:
  * Inteiro, real, letra e booleanos;
* Operações:
  * **Lógicas:** Decisão/repetição;
  * **Relacionais:** Comparação: < > <= >= ==;
  * **Aritméticas:** + - * /
  * **Atribuição**
* Estruturas personalizadas

## **Variáveis**
* Os dados são armazenados em variáveis/constantes para que sejam rotulados, afim de ser utilizados em outras partes de um mesmo código.
* JavaScript é uma linguagem de tipagem fraca.
* Tipos:
  * **Number:** Converte um valor em um número;
  * **String:** Cadeia de caracteres delimitada por "", '' ou ``;
  * **Boolean:** Aceita valores verdadeiro/falso, true/false ou 0/1;
  * **Undefined:** Variável que foi declarada mas não inicializada - possui um espaço na memória;
  * **Null:** Variável que foi declarada e inicializada mas sem valores armazenados;
* **Var, Let e Const**
  * A diferença entre elas é o **escopo**
  * **Escopo** é o local onde a variável pode ser acessada
  * **Var:** Possui escopo global - são declaradas e utilizadas em qualquer parte do código;
  * **Let:** Escopo de bloco - só estão disponíveis dentro do bloco onde foram declaradas, podem ser atualizadas mas não declaradas novamente;
  * **Const:** Escopo de bloco - só estão disponíveis dentro do bloco onde foram declaradas, não podem ser atualziadas e nem declaradas novamente;

## **Hoisting**
* Tradução literal é içar, jogar para cima;
* Quando o código é compilado, todas as declações de variáveis usando **VAR** são hoistiadas/içadas/levadas ao topo de suas funções/escopo, ou ao topo do escopo global independentemente de onde a declaração foif eita. 
* As declarações de funções também acontecem isso, mas elas irão para a parte mais alta do escopo, por isso ficará acima de todas as declarações de variáveis.

## **Array**
* Vetor - estrutura unidirecional;
* Agrupa múltiplos elementos a partir de um único identificador;
* É uma estrutura indexada, ou seja, os elementos serão acessados a partir de um único índice;

## **Objeto**
* Coleção de chave e valor, onde são acessadas por meio de um índice;

## **Função**
* Ação baseada em sentenças que podem ser executadas e/ou repetidas vezes;
* É um bloco de código que agrupa sentenças de código, eventualmente é dado um nome [ mas nem sempre ] podendo ser utilizada novamente em outras partes de um mesmo código;
* Em alguns casos uma função pode receber um/vários parâmetro(s) como pode não receber nenhum, e em alguns casos a função pode ou não retornar um valor;

## **Operadores: Destructuring**
* Extrai um elemento de uma estrutura - extrai um atributo de um objeto, por exemplo;
* Quando trabalha com objeto usa { }
* Quando trabalha com array usa [ ]

## **Operadores: Aritméticos**
* Operador binário;

## **Operadores: Relacionais**
* Operador binário;
  * == - Igual, compara valor e não tipo;
  * === - Estritamente Igual, compara valor e tipo;
  * != - Diferente;
  * !== - Estritamente Diferente;

## **Operadores: Lógicos**
* Tabela Verdade;
* **E-:** Ambas as condições tem que ser verdadeiras;
  * v && v = v
  * v && f = f
  * f && v = f
  * f && f = f
* **OU:** Uma das duas condições tem que ser verdade para resultar em verdadeiro;
  * v || v = v
  * v || f = v
  * f || v = v
  * f || f = f
* **OU EXCLUSIVO:** Condições diferentes retorna verdadeiro, condições iguais retorna falso;
  * v xor v = f
  * v xor f = v
  * f xor v = v
  * f xor f = f
* **Negação lógica**
  * !v = f
  * !f = v

## **Operadores: Unários**
* São operadores aritméticos que desempenham uma ação em um único operando;
  * **d++ :** Postfix - Pós fixado - Depois do operador;
  * **--d :** Prefix - Pré fixado - Antes do operador;
  * **d + c :** Infix - Entre fixado - Entre operandos;

## **Tratamento de Erro**
* **Try:** Tenta executar algo;
* **Catch:** 'Pega' o que foi lançado no try, através do throw e faz o que precisa ser feito - por exemplo, retorna uma mensagem de erro para o usuário;
* **Throw:** 'Lança' o erro para o catch;
* **Finally:** Após o try/catch ou ambos, cai no bloco e algo pode ser executado;
