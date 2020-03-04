# api-telefone- BACKEND

Com intuito de aprender a usar a api da totalvoice, resolvi criar essa aplicação bem simples para quando um dos servidores estiverem desligado, ligar para o desenvolvedor responsavel.

## Instalação

Para instalar a começar a codar o FormaDEV, você deve ter o node instalado e de preferencia utilizar o yarn, para saber mais confira abaixo os links de instalação:

* https://nodejs.org/en/
* https://yarnpkg.com/lang/en/

Para codar siga os seguintes comandos:

````shell script
# Para instalar as dependencias
yarn install

# Para iniciar o desenvolvimento
yarn start
````

Como será feito:
* Inicialmente começaremos em do token para acessar os recursos da totalvoice
* Acesse esse site e crie uma conta https://api2.totalvoice.com.br/painel/signup.php
* Logo depois coloque o seu acessToken no caminho a seguir:
*-* src/monitor/serve.js, coloque seu acessToken na constante new Totalvoice()
*-* Logo em seguida coloque seu seu nome,telefone no servers.
*-* No seu terminal starter o server1 e server2 rodando node server1 e node server2.

* Logo em seguida starter o monitor, src/monitor( node server.js)
* Para receber a ligação, derrube um dos servidores. (server1 ou server2)

## Desenvolvido por Joao Victor