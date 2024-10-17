const express = require("express");
const router = express.Router(); 
 const  employee = require("./employeeRouter")






router.use("/emp",employee )








module.exports = router;
