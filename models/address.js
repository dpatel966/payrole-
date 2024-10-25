const {Model, DataTypes}= require("sequelize");

module.exports = (sequelize, DataTypes)=>{
    class Address extends Model{
        static associate (models){

        }
    }
    Address.init({

        address_id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
        address_line_1:{
            type:DataTypes.STRING,
        },
        address_line_2:{
            type:DataTypes.STRING,
        },
        landmark:{
            type:DataTypes.STRING
        },
        city:{
            type:DataTypes.STRING,
        },

        state:{
            type:DataTypes.STRING,
        },
        country:{
            type:DataTypes.STRING
        },
        zipcode:{
            type:DataTypes.STRING
        },
        address_type:{
            type:DataTypes.CHAR,
        },
        address_from_date:{
            type:DataTypes.DATE
        },
        address_to_date:{
            type:DataTypes.DATE
        }

    },
    {
        sequelize,
        tableName:"address",
        modelName:"Address",
        timestamps:false
    })

    return Address;
}