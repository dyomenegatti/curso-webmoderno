# **Módulo 4: JS - Funções**

## **FUNÇÕES**
* São blocos de construção fundamentais em JS. Funções são conjuntos de instruções que executam uma tarefa ou calculam um valor. Para usar funções é preciso defini-las em algum lugar no escopo do qual ela será chamada. 

## **DEFININDO FUNÇÃO**
* Tambám chamada de *declaração*, consiste em criar uma função no escopo que ela será usada. Consiste no uso da palavra reserva *function*, seguida por:
  * Nome da função;
  * Lista de argumentos(parâmetros);
  * Declaração JS que definem a função (entre {});
  ```
    function nome(parâmetro) {
      declaração
    }
  ```

## **CHAMADA DE FUNÇÃO**
* A definição de uma função não a executa. Definir uma função é simplesmente nomeá-la e especificar o que fazer quando ela for executada, mas chamar a função é que executa a mesma e as ações especificadas. 
* Funções devem estar no escopo quando são chamadas, mas a declaração de uma função pode ser puxada para o topo, por exemplo. 
* O escopo de uma função é a função na qual ela é declarada, ou todo o programa se ela é declarada no nível superior. 
* Há outras maneiras de chamar funções. Muitas vezes há casos em que uma função precisa ser chamada dinamicamente, ou o número de argumentos de uma função varia, ou em que o contexto da chamada de função precisa ser definido para um objeto específico determinado em tempo de execução. Acontece que as funções são, por is mesmas, **objetos**, e esses objetos por sua vez possui métodos. 

## **ESCOPO DE FUNÇÃO**
* As variáveis definidas no interior de uma função não podem ser acessadas de nenhum lugar fora da função, porque a variável está definida apenas no escopo da função. No entanto, uma função pode acessar todas as variáveis e funções definidas fora do escopo onde ela está definida. 
* Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no escopo global.
* A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.
 
## **RECURSÃO**
* Uma função pode referir-se e chamar a si própria. 
  * O nome da função;
  * arguments.callee;
  * Uma variável no escopo que se refere a função;
* Uma função que chama a si mesma é chamada de **função recursiva**. Em alguns casos, a recursividade é análoga a um laço. Ambos executam o código várias vezes, e ambos necessitam de uma condição (para evitar um laço infinito, ou melhor, uma recursão infinita). 

## **EXPRESSÃO DE FUNÇÕES**
* Funções também podem ser criadas por uma **expressão de função** ou seja, guardadas em uma variável. Tal função pode ser **anônima**.

## **FUNÇÕES ANINHADAS**
* É possível aninhar uma função dentro de outra. A função aninhadas (interna) é acessível apenas para a função que a contém (exterior).
* Isso constitui também uma **closure** - expressão tipicamente uma função, que pode ter variáveis livrs em conjunto com um ambiente que conecta estas variáveis. 
* Uma vez que uma função é uma **closure**, isto significa que uma função aninhada pode **herdar** os argumentos e variáveis de sua função de contenção. Em outras palavras, a função interior contém o escopo da função exterior. 
* Resumindo:
  * A função interna só pode ser acessada a partir de declarações em função externa;
  * A função interna forma uma closure: a função interna pode usar os argumentos e variáveis da função externa, enquanto a função externa não pode usar os argumentos e variáveis da função interna;
  
## **CLOSURES**
* É o escopo criado quando uma função é declarada e esse escopo permite que a função manipule variáveis externas da função.

## **ARROW FUNCTION**
* Possuem sintaxe pequena em comparação com a expressão de função e lexicamente vincula com o valor **this**. 
* Arrow function sempre são anônimas. 
  
## **FUNÇÕES CONTRUTORAS**
* As funções construtoras em JS são como as classes do Java, diferenciando apenas pela sintaxe. Em questão de funcionamento, tanto funções construtoras no JS quanto classes no Java têm a mesma utilidade: **servir de molde para a criação de objetos**.
* Para construir objetos, funções construtoras precisam ser instanciadas pelo **operador new**. O **this** dentro delas se referenciam ao **objeto criado a partir delas**.