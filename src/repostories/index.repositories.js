const { request } = require("express");
const mySQLconnection = require("../db/index.db");


//funcion para registrar
const registrarUsuario = async (data) => {
  console.log(data);
  if (data.length == 0) {
    return "error en la informacion";
  } else {
    const { name, lastName, birthdate, email, documentNumber, area, salary, position, state} = data;
    const query = `CALL registrarUsuario (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    mySQLconnection.query(
      query,
      [name, lastName, birthdate, email, documentNumber, area, salary, position, state],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          return "Usuario Registrado";
        }
      }
    );
  }
};

//funcion para editar
const editarUsuario = async (idUser, data) =>{
    if(data.length == 0 || data.name == null){
        return "hay un error en la informacion"
    }else{
        const query = 'CALL editarUsuario(?,?,?,?,?,?,?,?,?)';
        const {name, lastName, birthdate, email, documentNumber, salary, position, state} = data;

        mySQLconnection.query(query, [idUser, name, lastName, birthdate, email, documentNumber, salary, position, state], (err, rows, fields)=>{
            if(err){
                console.log(err)
            }else{ 
                return "Usuario actualizado"
            }
        })
    }
}; 



//funcion para eliminar
const eliminarUsuario = async (idUser) =>{
  if(!idUser || idUser == 0){
      return "hay un error en la informacion"
  }else{
      const query = 'CALL eliminarUsuario(?);';
      mySQLconnection.query(query, [idUser], (err, rows, fields)=>{
          if(err){
              console.log(err)
          }else{
              return "producto eliminado"
          }
      })
  }
};
module.exports = { registrarUsuario, registrarArea, editarArea, eliminarArea,
   editarUsuario, eliminarUsuario};
