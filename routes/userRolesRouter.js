const express =  require("express");
const{UserRole,errorHendlar} = require("../models/index")
const router =  express.Router();
const Apiresponse = require("./utils/apiResponse")


router.get("/list",async(req,res)=>{
    try{

        const data =  await UserRole.findAll()

        res.json(new Apiresponse(true, data, "user roles data found successfullytt"))
    }catch(err){
        console.error(err);
        const error = errorHendlar(err);
        res.json(new Apiresponse(false , err , "data not found "));
    }
})

router.post("/add",async(req,res)=>{
    try{  
        
        const userrole = await UserRole.create(req.body)

        res.json(new Apiresponse(true,userrole,"Data not saved"))

    }catch(err){

        console.log(err);
        const error = errorHendlar(err);
res.json(new Apiresponse(false , err, "user role not added"))

    }
});


router.put("/update/:id",async(req,res)=>{
    const user_role_id =  req.params.id
try{
    

       const data =   await UserRole.update(req.body, { where: { user_role_id } })

    res.json(new Apiresponse(true,data))
}catch(err){
    console.log(err);
    const error = errorHendlar(err);
    res.json(new Apiresponse(false , err , "data not update "))
}
})





router.delete("/delete/:id",async(req, res)=>{
    try{
        const user_role_id =  req.params.id 

        const data  =  await UserRole.destroy( {where:{user_role_id }})

        res.json(new Apiresponse(true  , data,"data delete successfully" ))
    }catch(err){
        console.error(err);
        const  error = errorHendlar(err);
        res.json(new Apiresponse(false , err, "data not delete "))
    }
})
module.exports = router