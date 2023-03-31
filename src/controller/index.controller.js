// import the controller with handler
const repositoriUser= require ('../repostories/index.repositories')

module.exports = {
    // Write the handler to export to use in the routes
    registroController: async (req, res) =>{
        const data = req.body;
        if(data.name== null || data.name == "" || data.length == 0){
            res.json({status: 400, message: "llenar los campos"})
        }else{
            const result = await repositoriUser.registrarUsuario(data);
            res.json({status: 200, message: result});
        }
    },

    editarController: async (req, res) =>{
        const idUser = req.params.idUser;
        const data= req.body;

        if(data.length == 0 || data.name == null|| data.nane == ""){
            res.json({
                status: 400,
                message: "Revisar la informacion"
            });
        }else{
            const result = await repositoriUser.editarUsuario(idUser, data);
            res.json({
                status: 200,
                message: result
            });
        }
    },

    eliminarController: async (req, res) =>{
        const idUser = req.params.idUser;
        //const data= req.body;
        if(idUser == null){
            res.json({
                status: 400,
                message: "Revisar la informacion"
            });
        }else{
            const result = await repositoriUser.eliminarUsuario(idUser);
            res.json({
                status: 200,
                message: result
            });
        }
    }
}