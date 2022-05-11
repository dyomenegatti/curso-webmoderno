# **Módulo 6: JS - Arrays**

## **ARRAYS**
* É descrita como uma *lista de objetos* - arrays são basicamente objetos que organiza múltiplos dados armazenados em uma lista que são acessados através de um índice. 
* É uma estrutura heterogênea, ou seja, pode armazenar dados de todos os tipos - mas a boa prática é construir uma estrutura homogênea, ou seja, array que contenha dados de um mesmo tipo.
* Estrutura que cresce dinamicamente - arrays declarados como const não quer dizer que não terá os seus dados alterados, os dados do array podem ser modificados dinamicamente, apenas o array que aponta para um endereço de memória, não podendo ser alterado. 

## **ALGUNS MÉTODOS ÚTEIS EM ARRAY**
* **LENGTH**: Encontra o comprimento de um array (quantos itens existem);
* **PUSH**: Adiciona um elemento ao array;
* **SORT**: Altera ordenando o array;
* **DELETE**: Exclui um elemento do array;
* **SPLICE**: Adiciona e remove elementos do array - indica o índice, a quantidade e o que quer adicionar ou qual excluir do array;
* **POP**: Remove o último elemento do array;
* **SHIFT**: Remove o primeiro elemento do array;
* **SLICE**: Retorna um novo array a partir do índice indicado - o primeiro índice entra no array, o último, quando indicado, não entra no array;
* **FOR EACH**: Percorre o array;
* **MAP**: É um laço for com propósito - gera um novo array, sem alterar o original;
* **FILTER**: Filtra e gera um novo array com os elementos filtrados - terá o mesmo tamanho ou será menor que o array original;
* **REDUCE**: Função que transforma um array em um único elemento;
* **DECLARATIVA vs IMPERATIVA**:
  * **IMPERATIVA**: Ensina passo a passo algo - se preocupa em *COMO* fazer;
  * **DECLARATIVA**: Só diz algo - se preocupa com *O QUE* fazer;
* **CONCAT**: Concatena vários arrays;