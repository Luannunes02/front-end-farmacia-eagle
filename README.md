# front-end-farmacia-eagle
 Front-end de uma farmácia online, projeto fullstack feito com Angular, Laravel e MySQL
 
![20230523_205511](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/16f1b3a5-8b9e-48ee-a83c-c20e295229b3)

Funcionalidades do projeto

O projeto é uma farmácia online, sendo possível ver produtos, comprar produtos, adicionar produtos e remover produtos. 
Logo na tela inicial como o back-end vai ter sido recentemente criado, não vai ter produtos, fiz um arquivo json com vários produtos para caso você não queira acrescentar os produtos manualmente, pode apenas clicar em “Adicionar produtos” para que use o json que fiz para popular o banco de dados:
![image](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/d2d062e3-7d94-4c87-8e13-f248779ecc18)
Essa opção só aparece caso não tenha produtos no banco de dados, caso você queira adicionar manualmente, no canto superior tem uma opção chamada “Gerenciar produtos”, vá nela e logo em seguida clique em “Adicionar produto”, preenche todas as informações, como nome do produto, imagem, descrição e valor:
![image](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/ad46dc1a-a091-490c-86db-89326409f566)
  Com o produto adicionado você já consegue ver ele na Home e também na tela de gerenciamento de produtos, nessa tela, você tem a opção de “Adicionar produto”, “Alterar produto” e “Remover produto”, caso queira alterar produto basta clicar no botão e alterar as informações que achar necessário:
 ![image](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/f3fc9eb6-8ab4-4d06-b777-d4dd5687cd67)
Na própria home, você pode clicar no produto que se interessou para vê-lo individualmente e adicionar ao carrinho caso tenha interesse, há uma verificação que caso você já tenha adicionado esse produto ao carrinho ele não será adicionado novamente:
 ![image](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/fcc859fd-5299-4ed6-aa16-06fe9c12d664)
Agora no carrinho você tem acesso a informações sobre sua compra, é possível visualizar os produtos que estão no carrinho, remover e ver o valor total, além disso tem o botão de “Comprar” que irá efetuar a compra dos produtos, os produtos do carrinho estão armazenados em um controlador de estados chamado NGRX(Redux):
 ![image](https://github.com/Luannunes02/front-end-farmacia-eagle/assets/105875989/adac01c3-c90a-4188-8bdd-888f1f642ce2)


