# Resultado
### (algo próximo disto)

![alt text](image.png)

isto para primeira parte em seguida o resultado com reposicionamento dos itens.

com o reposicionamento e ajuste tamanho  deve ficar parecido como abaixo:

![alt text](image-1.png)

<hr>

Agora vamos focar no estudo de como foi escrito o nosso CSS. (vejamos abaixo):

``` css
.mesa{
    position: fixed;
    width:900px;
    height:600px;
    background-color: green;
      }
.robot{
   position: relative;
   top:5px;
   left:15px;
   width:160px;
   height:60px;
   background-color: black;  }      
.jogador{
    position: relative;
    top:390px;
    left:15px;
    width:160px;
    height:60px;
    background-color: black; }   
.baralho{
    position: relative;
    top:200px;
    left:315px;
    width:60px;
    height:80px;
    background-color:yellow;}   
```

Gustavo Baiczar

COLAR O CODIGO DO JOGO21.HTML:
```html
<!DOCTYPE html>
<!DOCTYPE html> <!-- Declaração do tipo de documento HTML -->
<html lang="en"> <!-- idioma definido para inglês -->
<head>
    <meta charset="UTF-8"> <!-- Define o conjunto de caracteres como UTF-8 para suportar caracteres especiais -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Configura a viewport para dispositivos móveis -->
    <title>Document</title> <!-- Título da página -->
    <link rel="stylesheet" href="estilo.css"> <!-- Link para o arquivo de estilo externo -->
</head>
<body>
    <div class="mesa"> <!-- Div que representa a mesa do jogo -->
        <div class="robot"></div> <!-- Div para o robô no jogo -->
        <div class="baralho"></div> <!-- Div para o baralho do jogo -->
        <div class="jogador"></div> <!-- Div para o jogador no jogo -->
    </div>
</body>
</html>
...

COLAR O CODIGO DO AQUIVO.CSS:
                
``` css
.mesa{
    width:900px; /* Define a largura da div 'mesa' como 900 pixels */
    height:600px; /* Define a altura da div 'mesa' como 600 pixels */
    background-color: rgb(4, 167, 4); /* Define a cor de fundo da div 'mesa' como verde */
}

.baralho{
    height: 100px; /* Define a altura da div 'baralho' como 100 pixels */
    width: 100px; /* Define a largura da div 'baralho' como 100 pixels */
    background-color: gold; /* Define a cor de fundo da div 'baralho' como dourado */
}

.robot{
    height: 120px; /* Define a altura da div 'robot' como 120 pixels */
    width: 300px; /* Define a largura da div 'robot' como 300 pixels */
    background-color: black; /* Define a cor de fundo da div 'robot' como preto */
}

.jogador{
    height: 120px; /* Define a altura da div 'jogador' como 120 pixels */
    width: 300px; /* Define a largura da div 'jogador' como 300 pixels */
    background-color: black; /* Define a cor de fundo da div 'jogador' como preto */
}

...
