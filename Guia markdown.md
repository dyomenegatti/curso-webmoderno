---
marp:true
---
# Guia de sintaxe Markdown

## Cabeçalhos:

# H1
## H2
###### H6

## Emphasis

*Itálico*  
_Itálico também_

**Negrito**  
__Negrito também__

_Pode **combinar** se quiser_

## Listas:

### Não ordenada
* Item 1
* Item 2
* Item 3

### Ordenada
1. Item 1
2. Item 2
   1. Item 2.1

## Imagens:

![Texto alternativo.](/image/sample.png "Imagem de exemplo.")

## Links

Utilizar links [Markdown Live Preview](https://markdownlivepreview.com/).

## Bloco de anotações

> Exemplo de bloco de anotações
>
>> Markdown é fácil de utilizar, é só seguir a sintaxe deste guia.

## Tabelas

| Coluna da esquerda  | Coluna da direita |
| -------------       |:-------------:    |
| Item 1 da esquerda  | Item 1 da direita |
| Item 2 da esquerda  | Item 2 da direita |
| Item 3 da esquerda  | Item 3 da direita |

## Bloco de código

```
let message = 'Hello world';
alert(message);
```

## Código inline

Esse guia está usando `markedjs/marked`.