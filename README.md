# Curso-de-JS
Curso de JavaScript - Curso em Vídeo

ANOTAÇÕES DO CURSO

Guia de referência Mozilla de JS
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide

Guia de referência para EVENTOS DOM
https://developer.mozilla.org/en-US/docs/Web/Events

## Anotações gerais

var -->> global<br>
let -->> local<br>
const -->> constantes

### Tipos de dados

* number
    * infinity
    * NaN
* string
* soolean
* null
* undefined
* object
    * array
* function

### Comentários

// Linha única (JS)

/* comentário de várias linhas */ (CSS e JS)

Tanto no HTML quanto no MarkDown as marcações são iguais. Há um comentário no final deste texto. Para vê-lo, entre no modo de edição 
<!-- Comentário para HTML e MarkDown. Se inicia com <, a exclamação e os dois traços e fecha com dois traços e o sinal de >. Serve para comentar linha única e várias linhas -->

### Conversões

CUIDADO: O comando WINDOW.PROMPT trata a entrada como string

Number.parseInt(n) --> Converte string para number inteiro

Number.parseFloat(n) --> converte strint para number flutuante

Number(n) --> JS faz a conversão para number

string(n) --> number para string

n.toString --> converte para string

Template string -->> `${n}` -->> ATENÇÃO: expressão entre CRASES

s.lenght --> mostra o tamanho da string s

s.toUpperCase() --> transforma em maiúsculas a variável s

s.toLowerCase() --> transforma em minúsculas a variável s

n.toFixed(2) --> determina o número de casa decimáis fixas

n.toFixed(2).replace('.', ',') --> determina o número de casa decimáis fixas TROCANDO o ponto por vírgula

n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) --> coloca o R$

n.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}) --> coloca o US$

n.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) --> coloca o £

### INCREMENTOS

x = x + 1 --> x += 1 --> x++ (incrementa depois) --> ++x (incrementa antes)

x = x - 1 --> x -=1 --> x-- (decrementa depois) --> --x (decrementa antes)

### OPERADORES RELACIONAIS

5 == 5    --> true <br>
5 == '5'  --> true -->> JS NÃO TESTA O TIPO <br>
5 === '5' --> FALSE -->> Operador de identidade <br>
5 === 5   --> true <br>
5 != 4    --> true -->> diferente <br>
5 != '5'  --> false <br>
5 !== '5' --> true -->> não identico <br>

### OPERADORES LÓGICOS

!  --> not <br>
&& --> and <br>
|| --> or (barra vertical - pipes)<br>

### OPERADOR TERNÁRIO

teste ? true : false

let media = 7<br>
let condicao<br>
media > 6 ? condicao = 'aprovado' : condicao = 'reprovado'

let nota = 8<br>
let res = 0<br>
res = nota % 2 == 0 ? 5 : 7

### Condicionantes

if (condição) {<br>
    ação<br>
}

if (condição) {<br>
    ação<br>
} <br>
else {<br>
    ação<br>
}

if (condição) {<br>
    ação<br>
} else if (condição) {<br>
    ação<br>
} else if (condição) {<br>
    ação<br>
} else {<br>
    ação<br>
}

switch(expressão) {<br>
    case valor1: <br>
        ação1<br>
        ação2<br>
        break<br>
    case valor2:<br>
        ação1<br>
        break<br>
    case valor3:<br>
        ação1<br>
        ação2<br>
        ação3<br>
        break<br>
    default:<br>
        ação<br>
}

## Módulo A
01-02-03-04-05-06-07

## Módulo B
08-09-10-11-12

## Módulo C
13-14-15

## Módulo D
16-17-18-19-20-
