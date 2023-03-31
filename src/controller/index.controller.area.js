const repositorioArea= require ('../repostories/repositori.areas')

module.exports= {
RegistrarArea: async (req, res)=>{
    const data = req.body;
    if (data.name == null || data.length == 0) {
        res.json({status:400, message: "llenar los campos"})
    }else{
        const result = await repositorioArea.registrarArea(data);
        res.json({status: 200, message: result});
    }
},

editarArea: async (req, res) =>{
    const idArea = req.params.idArea;
    const data = req.body;

    if(data.length == 0 || data.nameArea == null){
        res.json({
            status: 400,
            message: "Revisar la informacion"
        });
    }else{
        const result = await repositorioArea.editarArea(idArea, data);
        res.json({
            status:200,
            message:result
        })
    }
},

eliminarAreaController: async (req, res)=>{
    const idArea = req.params.idArea;
    if(idArea == null){
        res.json({
            status: 400,
            message: "revisar informacion"
        });
    }else{
        const result = await repositorioArea.eliminarArea(idArea);
        res.json({
            status: 200,
            message: result

        })
    }
}

}
 