# Front End - Anti-Fake News
 
Esse projeto tem por objetivo auxiliar no combate às fake news, monitorando textos originais na página e detectando quando eles são alterados pelo usuário.
 
## Funcionamento
 
Basicamente o script percorre todos os elementos definidos no array (linha 3) e adiciona um listener do tipo ```DOMCharacterDataModified``` (linha 12), que identifica quando um texto foi modificado no DOM. Sempre que o evento for disparado, será chamada a função ```changeBg()```(linha 18), que adiciona uma marca d'água no body da página.
 
## Configuração
 
A utilização do script é bem simples e uma vez ajustado, já pode ser implementado na página web. Recomendamos minificar o arquivo para uma melhor performance.
 
Abra o arquivo ```anti-fake-news.js```, ele contém o código necessário para monitorar as alterações na página.
 
Veja abaixo as linhas que necessitam de alteração:
 
- **Linha 3**: Inclua no array todos os elementos que deseja monitorar - Lembrando que os elementos devem ser acessíveis e textuais.
- **Linha 8**: Informe a URL da imagem que será exibida ao fundo quando o texto for modificado.
- **Linha 14**: Caso precise ter acesso ao elemento alterado, poderá utilizar a variável ```e``` definida.

## Instalação
 
O processo de instalação é bem simples; uma vez que o arquivo de script esteja configurado corretamente, basta chamá-lo no ```<head>``` da página, conforme mostra o código a seguir.
 
```html
<script src="anti-fake-news.js" async=""></script>
 
```

## Exemplo

Uma vez o DOM alterado e o script executado, o resultado final pode ser como o exibido abaixo.

![Exemplo final](resources/example-image.png)