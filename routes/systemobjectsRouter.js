 const express =  require("express");
const {SystemObject , errorHendlar } =  require("../models/index");
const ApiResponse = require("./utils/apiResponse");

 const router = express.Router();


 router.get("/list",async(req, res)=>{
    try{
        const system =  await SystemObject.findAll();

        res.json(new ApiResponse(true , system,"system object data found "))

    }catch(err){
        console.error(err);
        const error = errorHendlar(err)
        res.json (new ApiResponse(false, err, "user data not found "))
    }
 })


 router.post("/add",async(req,res)=>{
    try{
          const system = await SystemObject.create(req.body);
          res.json(new ApiResponse(true ,system, "system object data saved  " ))
    }catch(err){
        console.error(err);
        const error  =  errorHendlar(err);
        res.json(new ApiResponse(false , err, "system data not save "))
    }
 })
 router.put("/update/:id",async(req,res)=>{
    const sys_object_id = req.params.id
    try{
            const system  =  await SystemObject.update(req.body,{where:{sys_object_id}})
            res.json(new ApiResponse(true, system, "data updaten successfully"))
    }catch(err){
        console.error(err);
        const error =  errorHendlar(err);
        res.json(new ApiResponse(true,err ,  "data not update" ))
    }
 })
 module.exports =  router; 
