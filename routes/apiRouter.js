const express = require("express");
const router = express.Router(); 
 const  employee = require("./employeeRouter");
 const UserRole =  require("./userRolesRouter");
 const user =  require("./user");
 const system = require("./systemobjectsRouter")
 const objectUser = require("./objectUserrolepPerRouter");
 const empidenti = require("./emoIdentifireRouter")






router.use("/emp",employee )
router.use("/userrole", UserRole);
router.use("/user", user);
router.use("/system", system);
router.use("/objectuser",objectUser);
router.use("/empidenti",empidenti);








module.exports = router;
