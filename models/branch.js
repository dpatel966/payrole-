const {Model }= require("sequelize");
//const { sequelize } = require(".");
module.exports = (sequelize, DataType)=>{
    class Branch extends Model{
        static associate (models){

        }
    }

    Branch.init({
        branch_id :{
            type:DataType.INTEGER,
        },

        branch_name :{
            type:DataType.STRING,
        },
        branch_address_id:{
            type:DataType.INTEGER
        },
        branch_contact_id:{
             type:DataType.INTEGER
        },
        branch_start_date:{
            type:DataType.DATE
        },
        branch_end_date:{
            type:DataType.DATE
        },

       
    },{
        sequelize,
        tableName:"branch",
        modelName:"Branch",
        timestamps:false
    })

    return Branch;
}