# **Módulo 5: JS - Objetos**

## **OBJETOS**
* Em JavaScript, quase tudo é objeto. 
* Os objetos agem como uma espécie de manipuladores de dados. 
* Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções - que são chamadas de propriedades e métodos quando estão dentro de objetos). 
  ```
  var pessoa = {};
  ```
* Um objeto é composto de vários membros, cada um com um nome e um valor.
* O valor de um membro do objeto pode ser praticamente qualquer coisa - string, número, array ou função - os items (dados) são referenciados como **propriedades do objeto**, e as funções, que permitem que o objeto faça algo com esses dados, são referenciados como **métodos do objeto**.
  ```
  var pessoa = {
    nome1: valor1,
    nome2: valor2
  };
  ```
* Um objeto como esse é chamado de **objeto literal** - ao pé da letra, escrevemos o conteúdo do objeto conforme o criamos. 
* Para acessar uma propriedade do objeto é através da **notação ponto** - o objeto nome (pessoa) atua como **namespace** (espaço de nomes) - ele deve ser digitado primeiro para que você acesse qualquer coisa **encapsulada** dentro do objeto. Depois é adicionado o ponto, então o item que quer acessar.
  ```
  pessoa.nome1
  ```
* Também é possível utilizar a **notação de colchetes**
  ```
  pessoa['nome1']
  ```
* É possível **setar** (atualizar) o valor de membros de um objeto. 
  ```
  pessoa.nome1 = valor3;
  pessoa['nome1'] = valor3;
  ```

## **THIS**
* A palavra-chave **this** se refere ao objeto em que o código está sendo escrito - em POO quando é escrito uma função construtora, o this é muito útil, sempre lhe assegurará que os valores corretos estão sendo usados quando o contexto de um membro muda. 
  
## **ORIENTAÇÃO A OBJETOS**
* Programar também possui modos diferentes de se fazer, esses modos são chamados de **paradigmas de programação** e, entre eles, estão a **programação orientada a objetos (POO)** e a **programação estruturada**.
* Na programação estruturada, um programa é composto por:
  * **Sequências:** são comandos a serem executados;
  * **Condições:** sequências que só devem ser executadas se uma condição for satisfeita;
  * **Repetições:** Sequências que devem ser executadas repetidamente até uma condição for satisfeita; 
* A diferença principal é que na programação estruturada, um programa é tipicamente escrito em uma única rotina (ou função) podendo, é claro, ser quebrado em subrotinas, mas o fluxo continua o mesmo. 
* Além disso, o acesso às variáveis não possuem muitas restrições na programação estruturada. 
* A **programação orientada a objetos** surgiu como uma alternativa a essas características da programação estruturada. O intuito da sua criação também foi o de aproximar o manuseio das estruturas de um programa ao manuseio das coisas do mundo real, daí o nome "objeto" como algo genérico, que pode representar qualquer coisa tangível. 
* Esse novo paradigma se baseia principalmente em dois conceitos chave: **classes** e **objetos**.

### **Elementos de POO**
* **Objeto:** é algo que será criado no programa.
* **Atributos:** são as características do objeto.
* **Métodos:** são os comportamentos/ações do objeto.
* **Classe:** é o conjunto de características e comportamentos .
* **Instanciação da classe:** é a criação de um novo objeto a partir de uma classe.
* **Escapsulamento:** forma de "esconder" atributos e métodos.
  * Em POO, um atributo ou método que não é visível de fora do próprio objeto é chamado de *privado* e quando é visível, é chamado de *público*;
  * Ler e alterar um atribuito encapsulado em POO, é feito a partir de *getters* e *setters*;
  * Esse encapsulamento de atributos e métodos impede o chamado *vazamento de escopo*, onde um atributo ou método é vísivel por alguém que não deveria vê-lo, como outro objeto ou classe;
* **Herança:** Uma classe "filho" herda os atributos e métodos de uma outra classe que seria a classe "pai" - priorize a *composição*.
* **Interface:** Não é exatamente uma classe, mas sim um conjunto de método que todas as classes que dergarem dela devem possuir (implementar) - portanto, uma interface não é herdade por uma classe, mas sim implementada. 
* **Polimorfirmo:** Poli - muitas, morphos = forma - exemplo, duas classes diferentes, têm um mesmo método que é implementado de formas diferentes, ou seja, um método possui várias formas, várias implementações diferentes em classes diferentes, mas que possuem o mesmo efeito.

## **PROTOTYPES**
* Os **prototypes** são mecanismos pelo qual os objetos JS herdam recursos uns dos outros. 
* Cada objeto JS tem uma propriedade interna, que é chamada de **prototype**. O protótipo é em si um objeto, então o protótipo terá seu próprio protótipo, fazendo o que é chamado de **cadeia de protótipos**. A cadeia termina quando chagemos a um protótipo que tem null por protótipo próprio.

## **JSON**
* JavaScript Object Notation (JSON) é um formato padrão baseado em texto para representar dados estruturados com base na sintaxe de objeto JS. 
* É comumente usado para transmissão de dados em aplicativos da web. 
* Embora se assemelhe à sintaxe literal do objeto JS, ele pode ser usado independentemente do JS, e muitos ambientes de programação apresentam a capacidade de ler (analisar) e gerar JSON.
* O JSON existe como uma string - útil quando é desejado transmitir dados em uma rede. Ele precisa ser convertido em um objeto JS nativo quando for usado para acessar seus dados. 
```
{
  "nome": "JavaScript",
  "ano": "2022",
  "active": true,
}
```
* JSON é puramente uma string com um formato de dados especificado - contém apenas propriedades, sem métodos.
* JSON requer o uso de aspas duplas em torno de strings e nomes de propriedades. Aspas simples não são válidas, exceto em torno de toda a string JSON.

