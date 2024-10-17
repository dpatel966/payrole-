 const express = require ("express");
 const router =  express.Router();
 const  {Employee,errorHendlar}=  require("../models/index");
const ApiResponse = require("./utils/apiResponse");


router.get ("/details", async(req,res)=>{
    try{
        const emp =  await Employee.findAll({})


        res.json(new ApiResponse(true  , emp ,  "employee data found successfully"))
    }catch(err){
        console.error(err);
        const error =  errorHendlar(err);
        res.json(new ApiResponse(false , err, "Data not Found"))
    }
});

router.post("/add",async(req,res)=>{
    try{

        

    }catch(err){
        console.error()
    }
})



 module.exports =  router