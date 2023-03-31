const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Clanqu22*',
  database : 'trabajo_db'
});

connection.connect(function(err){
    if(err){
        console.log(err);
        return "";
    }else{
        console.log("conectado a base de datos")
    }
});

module.exports = connection;