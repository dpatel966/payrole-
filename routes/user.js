const express =  require("express");
const {User, errorHendlar} = require("../models/index");
const ApiResponse = require("./utils/apiResponse");
const router =  express.Router();


router.get("/list", async(req,res)=>{
    try{
         const user =  await User.findAll()

         res.json(new ApiResponse(true ,user, "user data retrieve "))
    }catch(err){
     console.error(err);


     const error =  errorHendlar(err);
     res.json(new ApiResponse(false , err, "user data not retrieve"))
     
    }
})

router.post("/add", async(req, res)=>{
    try{
     const date  = new Date()

        const user =  await User.create({...req.body,user_create_date:date});
        res.json(new ApiResponse(true, user,"data saved successfully "))

    }catch(err){
        console.error(err);
        const error =  errorHendlar(err);
        res.json(new ApiResponse(false , err, "user data not saved "))
    }
})

router.put("/update/:id",async(req,res)=>{
    try{
          const  user_id =  req.params.id
         const user =  await  User.update(req.body,{where:{user_id}})
         res.json(new ApiResponse(false , user , "data updated successfully"))

    }catch(err){
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false , err, "user data  not updated "))
    }
})
router.delete("/delete/:id", async(req, res)=>{
    try{
        const user_id =  req.params.id;

      const user =  await User.destroy({where:{user_id}});

      res.json(new ApiResponse(true , user ,  " user data deleted"))
    }catch(err){
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false , err , "data not delete "))
    }
})
module.exports =  router;