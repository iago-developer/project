const connect = async () => {
 if(global.conexao && global.conexao.state != 'disconnected')
    return global.conexao;
 const mysql = require('mysql2/promise');
 const con = mysql.createConnection('mysql://root:@localhost:3306/Banco');
  console.log("Banco de Dados MYSQL conectado com sucesso!");

  global.conexao = con;
  return con;
}

connect();
module.exports = { connect };
