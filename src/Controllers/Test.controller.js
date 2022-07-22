import TestModel from "../Models/Test.models";

//CRUD Básico 

//CREATE
export async function createTest(req, res){
    
    const { name } = req.body;
    
    try{
        let newTest = await TestModel.create({
            name
        },{fields:['name']});
        if(newTest){
            return res.status(200).json({ok:true, message:"Test creado", newTest});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}

//READ ALL
export async function getAllTests(req, res){
    try{
        let tests = await TestModel.findAll();
        if(tests){
            return res.status(200).json({ok:true, tests});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}

//Encontrar por llave primaria
export async function getTestByPk(req, res){
    let id = req.paramas.id;
    try{
        let test = await TestModel.findByPk(id);
        if(test){
            return res.status(200).json({ok:true, test});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}

//Encontrar por nombre
export async function findByName(req, res){

    let name = req.params.name;
    try{
        let test = findAll({
            where:{name:name}
        });
        if(test){
            return res.status(200).json({ok:true, test});
        }
    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}

//UPDATE
export async function updateTest(req,res){
    
    //En este ejemplo el id se pasa por el cuerpo. En el sistema de ticket el id se obtiene desde el token.
    let id = req.body.id;
    
    try{
        let updateTest = await TestModel.update({
            name: req.body.name
        },{ where:{id}});

        if(updateTest){
            return res.status(200).json({ok:true, message:"Test actualizado"});
        }

    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}

//DELETE

export async function deleteTest(req, res){

    let id = req.params.id

    try{
        let deleteTest = await TestmModel.destroy({
            where:{id}
        });
        return res.status(200).json({ok:true, message:"Test borrado"});
        
    }catch(error){
        return res.status(500).json({ok:false, message:"Lo sentimos, hubo un problema por favor intente nuevamente"});
    }
}