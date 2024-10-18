

const {Model}= require("sequelize");

module.exports = (sequelize,Datatype)=>{
    class Object_user_role_perm extends Model{
        static associate (models){

        }
    }


    Object_user_role_perm.init({
        perrm_sys_object_id:{
            type:Datatype.INTEGER,
            primaryKey:true

        },

        cost_center_name:{
         type:Datatype.INTEGER,

        },
        create_perm:{
            type:Datatype.CHAR
        },
        
        read_perm:{
            type:Datatype.CHAR
        },
        update_perm:{
            type:Datatype.CHAR
        },
        delete_perm:{
            type:Datatype.CHAR
        },
        execute_perm:{
            type:Datatype.CHAR
        }

    },{
        sequelize,
        tableName:"object_user_role_perm",
        modelName:"Object_user_role_perm",
        timestamps:false

    })

    return Object_user_role_perm
}
