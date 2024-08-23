/* Conexão com Banco de Dados MYSQL */
// const connect = async () => {
//    if(global.conexao && global.conexao.state != 'disconnected')
//       return global.conexao;
   
//    const mysql = require('mysql2/promise');
//    const con = mysql.createConnection('mysql://root:@localhost:3306/Banco');
//    console.log("Banco de Dados MYSQL conectado com sucesso!");
   
//    global.conexao = con;
   
//    return con;
// }

// connect();
// module.exports = { connect };

/* Conexão com Banco de Dados MongoDB */

const mongoose = require('mongoose');

const DB_USER = 'Ana';
const DB_PASSWORD = encodeURIComponent('123');

mongoose.connect('mongodb://127.0.0.1:27017/Banco')

.then(() => {
   console.log("Banco de Dados MongoDB conectado com sucesso!");
})

.catch(err => console.log(err));