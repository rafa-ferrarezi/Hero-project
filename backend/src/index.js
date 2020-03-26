const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
gi
/**
 * Metodos http
 * 
 * GET: Buscar/Listar uma informacao no backend
 * POST: Criar uma informaçAo no back-end
 * PUT: alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

/** 
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginacao)
 * Route Params: Parametros utilizados para indentificar recursos 
 * Request Body: Corpoo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * Bancos de Dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsft SQL Server
 * NoSQL: MongoDB, CoucjDB, etc
 * 
 */ 

 /**
  * Instalando o Driver do BD, podemos escrever para buscar usuarioas: SELECT * From users
  * Se for Query Builder: table('users').selec('*').where() > knex.js
  */
