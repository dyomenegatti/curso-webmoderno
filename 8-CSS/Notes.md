# **Módulo 14: JS - CSS**

## **CSS**

### **Seletores**:
  * _*_ elem 
  * *.class* 
  * *#id* 
  * *[atrib]*
  * *:pseudo-class* 
  * *::pseudo-elementos*

### **Combinando seletores:**
  * *div + p*: adjacent siblig - tags seguidas, aplicará o estilo na tag *p* seguida da tag *div*
  * *div ~ p*: general siblig - não necessariamente seguida uma da outra, o estilo será aplicado na tag *p* mais próxima da tag *div*
  * *div > p*: child - tag *p* é filho direito da tag *div*
  * *div p*: descendant
  * *div, p*: agrupamento/combinação de seletores - aplica o estilo nas duas tags
  * *[propriedade]*: Procura as tags que possuem a propriedade especificada entre []
  * *[propriedade=valor]*: Procura as tags que possuem a propriedade especificada entre [] valor especificado também
  * *[propriedade*=sa]*: Procura as tags que possuem a propriedade especificada entre [] e o valor que possuam um elemento parecido com o pedido
  * *span:nth-child(1)*: Procura uma span que seja filho de alguma outra tag 
  * *:nth-child(odd/even)*: Procura as tags filhas que seram ímpares (odd) ou pares (even)
  * *section > span:nth-of-type(2)*: Aplica estilo no segundo elemento que seja span dentro da section  
  * 
### **Em linhas gerais...**
  1. Regra com !important
  2. seletores mais específicos
  3. última regra processada (empate)
   
### **Herança**
* *inherit*: Especifica que o filho vai herdar o estilo do pai

### **Espaçamentos internos/externos**
* **Padding**: Espaçamento interno 
  * Adiciona espaço para todos os lados do elemento, na sequencia: *cima, direita, embaixo, esquerda*
  * Podendo ser especificado:
    * Com apenas um valor, que indicará o espaçamento para todos os lados;
    * Dois valores, onde o primeiro valor indica o espaçamento de cima/embaixo e o segundo valor indica o espaçamento de direita/esquerda;
    * Quatro valores, sendo cada valor para um lado na sequencia padrão: cima, direita, baixo e esquerda;
* **Margin**: Espaçamento externo
  * Espaçamento entre os vizinhos, seguindo o mesmo padrão de valores e sequencias do padding. 

### **Box Model**
* Tem: *conteúdo > padding > margin > border*

### **Display**
* Grid/flexbox 
* Por padrão uma div é *display: block*
* Por padrão uma li é *display: list-item*

* *display: block*: Organizado em linhas;
* *display: inline*: Organizado em colunas;
* *display: inline-block*: Organizado em linhas mas leva em consideração as configurações de altura/largura;

### **Float**
* Flutuar

### **Dimensões:**
* Absolutas:
  * px
  * cm
  * mm 
* Relativas:
  * Viewport: tamanho visível da página
    * *vh* (altura/100)%
    * *vw* (largura/100)%
    * *vmin* (menor dimensão)
    * *vmax* (maior dimensão)
  * Fonts
    * *rem* (em relação a fonte raiz, de alto nível)
    * *em* (em relação a fonte pai, fonte mais próxima)
  * % - Casos especiais, depende de como for configurado

### **Positions**
* *Relative*: Relativo à sua posição original;
* *Absolute*: Absoluto em relação ao elemento pai;
* *Static*: Relação ao conteúdo;
* *Fixed*: Fixo em relação ao viewport, permanece no mesmo lugar mesmo no scroll;
* *Sticky*: Relação de adesivo na página em relação ao que foi configurado;

### **Flebox VS grid**
* As duas se complementam.

**FLEXBOX**
* Unidimensional, só trabalha com vertical OU horizontal
* Ao marcar um elemento como flexbox, é criado um *flex container*
* Dentro dele será dividido em *flex item*
* Deve ser escolhido um eixo principal (vertical/horizontal) que se chamará de *main axis* e o outro será o *cross axis*
* Ambos possuem, começo, fim e tamanho
* Sendo:
  * Main axis: main start, main end e main size
  * Cross axis: cross start, cross end e cross size

**GRID**
* Bidimensional, trabalha com linhas e colunas (como uma grade)