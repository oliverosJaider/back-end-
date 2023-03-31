const { request } = require("express");
const mySQLconnection = require("../db/index.db");


const registrarArea = async (data) =>{
    console.log(data);
    if(data.length == 0){
      return "error en la infromacion";
    }else{
      const {codeArea, nameArea, liderArea, stateArea} = data;
      const query = `CALL registrarArea (?, ?, ?, ?)`;
      mySQLconnection.query( 
        query,  
        [codeArea, nameArea, liderArea, stateArea],
        (err, rows, fields) => {
          if(err){
            console.log(err);
          }else{
            return "Area registrada"
          }
        }
      );
    }
  };

  const editarArea = async (idArea, data) =>{
    if(data.length == 0 || data.nameArea == null || data.codeArea== null){
      return "informacion imcompleta"
    }else{
      const query = 'CALL editarArea(?, ?, ?, ?, ?)';
      const {nameArea, leaderArea, stateArea, codeArea} = data;
  
      mySQLconnection.query(query, [idArea, nameArea, leaderArea, stateArea, codeArea ], 
        (err, rows, fields) =>{
          if(err){
            console.log(err)
          }else{
            return "Area atualizada"
          }
        })
    }
  };

  const eliminarArea = async (idArea) =>{
    if (!idArea || idArea == 0) {
        return "error en la informacion"
    }else{
      const query = 'CALL eliminarArea(?)';
      mySQLconnection.query(query, [idArea], (err, rows, fields)=>{
        if (err) {
          console.log(err)
        }else{
          return "Area eliminada"
        }
      })
    }
  }

  module.exports = {registrarArea, editarArea, eliminarArea}