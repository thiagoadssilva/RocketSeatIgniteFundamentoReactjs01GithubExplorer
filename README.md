# Projeto 01-github-explorer do curso da RocketSeat Ignite

* Projeto em Reactjs, onde vou está aplicando alguns conceitos do curso da 'RocketSeat' Ignite

* Abaixo está a lista das tecnologias que foram usadas no desenvolvimento.

<hr>

## npm init -y
    Comando para a criação do arquivo 'package.json' onde vai conter as configurações principais do projeto e todas as dependêndias que estão sendo usadas (Bibliotecas de Terceiros). 

<hr>

## React
      npm add react

* Aqui estamos instalando o próprio react.

<hr>

## React Dom
      npm add react-dom

* Aqui estamos instalando o  react-dom para ter a comunicação com a arvore dom do navegador, onde vamos poder iteragir.

<hr>

## Babel
      npm add @babel/core @babel/cli @babel/preset-env -D

* O Babel é um transpilador que te permite escrever javascript de uma maneira mais moderna, utilizando funções e recursos que ainda não estão disponíveis de forma nativa nos browsers. Ele usa um conjunto de plugins para transpilar seu código ECMAScript 6/7 para o ECMAScript 5 para que seu código funcione nos browsers atuais, que ainda não implementaram certas funcionalidades do ESNext.

<hr>

## Babel/preset-react
      npm add @babel/preset-react -D

* Permite que o babel faça a interpretação do código que agora é em react que contém código html, seja convertido para que os navegadores possam apresenta-los.


       yarn babel src/index.js --out-file dist/bundle.js

* Comando que nos permite criar o arquivo bundle.js que é responsável por fazer a conversão do javaScript para os navegadores.

<hr>

## WebPack
  
      npm add webpack webpack-cli -D    

* Quando precisamos fazer qualquer importação de arquivo como exemplo: .js, .png, .sass etc.., precisamos de alguém que faça a conversão desses arquivos para que a os navegadores possam ler como exemplo: vai pegar uma arquivo do tipo '.sass' e converter em arquivo CSS. 

<hr>

## Babel Loader
  
      npm add babel-loader -D    

* https://github.com/babel/babel-loader
* Responsável por converter o arquivo de uma maneira que o navegado entenda.

<hr>

## webpack-dev-server
  
      npm add webpack-dev-server -D    

* Responsável por ficar monitorando qualquer alteração no código e não mais ficar pracisando restartar o projeto.

<hr>

## Style-loader Css-loader
  
      npm add style-loader css-loader -D    

* Carregar e converter arquivo css no reactjs

<hr>

## Sass-loader Sass
  
      npm add sass-loader node-sass -D
<hr>