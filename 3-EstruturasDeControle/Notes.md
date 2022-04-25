# **Módulo 3: JS - Estruturas de Controle**

## **FOR**
* Laço *for* é repetido até que uma condição especificada seja falsa.
  ```
  for ([expressaoInicial]; [condicao]; [incremento]) {
    declaracao
  }
  ```

## **DO... WHILE**
* A instrução repetirá até que a condição especificada seja falsa. 
  ```
  do
    declaracao
  while (condicao);  
  ```
* A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco ({...}) para agrupá-las. Caso a condição seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condição é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

## **WHILE**
* Uma declaração while executa suas instruções, desde que uma condição especificada seja avalida como verdadeira.
  ```
  while (condicao)
    declaracao
  ```
* Se a condição se tornar falsa, a declração dentro do laço para a execução e o controle é passado para a instrução após o laço.
* O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.
* Para executar múltiplas declarações, use uma declaração em bloco ({...}) para agrupar essas declarações.

## **LABEL**
* Umn label provê um identificador que permite que este seja referenciado em outro lugar no seu programa. Por exemplo, você pode usar uma label para identificar um laço, e então usar break ou continue para indicar quando o programa deverá interromper o laço ou continuar a execução. 
  ```
  label: declaracao
  ```

## **BREAK**
* Use break para terminar laços, switch, ou um conjunto que utilize label.
  * Quando você utiliza break sem label, ele encerrará imediamtamente o laço mais interno while, do while, for e switch e transferirá o controle para a próxima instrução
  * Quando utiliza o break com um label, ele encerrará o label específico

## **CONTINUE**
* A declaração continue pode ser usada para reiniciar uma instrução while, do while, for ou label. 
  * Quando você utiliza continue sem uma label, ele encerrará a iteração atual mais interna de uma instrução while, do while, ou for e continuará a execução do laço a partir da próxima iteração. Ao contrário da instrução break, continue não encerra a execução completa do laço. Em um laço while, ele voltará para a condição. Em um laço for, ele pulará para a expressão de incrementação
  * Quando você utiliza continue com uma label, o continue será aplicado ao laço identificado por esta label

## **FOR...IN**
* A declaração executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto. 
* Para cada propriedade distinta, o JS executará uma iteração. 
  ```
  for (variavel in objeto) {
    declaracao
  }
  ```

* sequências: são os comandos a serem executados
* condições: sequências que só devem ser executadas se uma condição for satisfeita (exemplos: if-else, switch e comandos parecidos)
* repetições: sequências que devem ser executadas repetidamente até uma condição for satisfeita (for, while, do-while etc)
****