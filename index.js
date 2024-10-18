const express = require("express");
require('dotenv').config();
const server = express();
const  apiRouter =  require("./routes/apiRouter")




server.use(express.json());
server.use(express.urlencoded({ extended: false }));








server.get("/",async(req,res)=>{
    res.json({msg :"server is  running o"})
})


server.use("/api", apiRouter)

const PORT =  9000  //process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
