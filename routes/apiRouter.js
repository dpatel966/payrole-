const express = require("express");
const router = express.Router(); 
 const  employee = require("./employeeRouter");
 const UserRole =  require("./userRolesRouter");
 const user =  require("./user");
 const system = require("./systemobjectsRouter")






router.use("/emp",employee )
router.use("/userrole", UserRole);
router.use("/user", user);
router.use("/system", system)








module.exports = router;
