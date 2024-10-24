const express = require("express");
const { errorHendlar ,Object_user_role_perm} = require("../models");
const ApiResponse = require("./utils/apiResponse");
const router = express.Router();


router.get("/list",async(req,res)=>{
    try{
          const  object_user = await Object_user_role_perm.findAll();
          res.json(new ApiResponse(true , object_user,"Data found succeessfully "))
    }catch(err){
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false , err, "Data Not Found "))
    }
});

router.post("/add", async(req,res)=>{
    try{

        const objectUser = await Object_user_role_perm.create(req.body);
        res.json(new ApiResponse(true, objectUser, "Data Saved successfully"))
    }catch(err){
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(true,err, "Data not saved ")) 
    }
});

 router.put("/update/:id",async(req,res)=>{
    try{
        const perrm_sys_object_id= req.params.id;
        const object_user = await Object_user_role_perm.update(req.body,{where:{perrm_sys_object_id}});
        res.json(new ApiResponse(true ,object_user,"Data Upated successfully "))

    }catch(err){
       console.error(err);
       const error = errorHendlar(err);
       res.json(new ApiResponse(false,err, "Data not update "))
    }
 });

module.exports =  router ;