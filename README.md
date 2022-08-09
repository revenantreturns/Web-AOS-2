# Web AOS 2
Projeto feito em AdonisJS - https://docs.adonisjs.com/guides/introduction

![image](https://user-images.githubusercontent.com/64325762/183540570-a88331eb-d3fa-4101-b7ec-0fb391d7bbed.png)


# Requerimentos:
NodeJS v16+ - https://nodejs.org/en/<br>
MySQL <br>

# Instalação
AdonisJS conta com migrations para uma utilização mais fácil em importação de banco de dados. <br>

Logo após você baixar os arquivos, você abrirá o terminal de comando irá instalar todos os pacotes do site utilizando: <br>
<code>npm i</code> ou <code> npm install </code> <br>

Logo após você verá na pasta um arquivo chamado: <b>.env.example</b>, faça uma cópia do mesmo e renomeie para <b>.env</b><br>
Justamente nesse arquivo <b>.env</b> que você irá mudar as informaçõespara conexão com o banco de dados.<br>

<i>Note que se você estiver editando localmente, basta apenas mudar a linha <b>MYSQL_DB_NAME=novoVXAOS</b></i><br>

Se você configurou tudo certinho, basta utilizar o seguinte comando no terminal para criar todas as tabelas do banco de dados:<br>
<code>node ace migration:run</code><br>
![image](https://user-images.githubusercontent.com/64325762/183543968-5cb9b5d6-0de9-4612-aca2-972df0201b1b.png)

<i>Saiba mais sobre as migrations: https://docs.adonisjs.com/guides/database/migrations#document</i><br>

Logo após utilize o comando abaixo para popular as tabelas:<br>
<code>node ace db:seed</code><br>

![image](https://user-images.githubusercontent.com/64325762/183544005-84a78a55-94b8-4d09-87fb-540210133812.png)<br>

Tudo nos conformes! Basta apenas dar start no site e já estará rodando perfeitamente. Utilize o comando para ligar: <br>
<code>node ace serve --watch</code><br>

![image](https://user-images.githubusercontent.com/64325762/183544237-aa6f516a-45b6-464e-88f0-2ec45afe11d5.png)

Você poderá acessar seu site utilizando: http://127.0.0.1:3333 <br>

#Painel de Admin<br>
![image](https://user-images.githubusercontent.com/64325762/183544374-db04020a-9d9c-4c77-918f-e4678b6a8acc.png)

#Considerações Finais
Por fim recomendo uma boa leitura nesse Framework maravilhoso que é o AdonisJS, ele trás a proposta de ser o unico MVC de JS, sendo quase um Laravel do Node.

#Nietore
