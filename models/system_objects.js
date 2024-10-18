const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class SystemObject extends Model {
        static associate(models) {
            
        }
    }

    SystemObject.init({
        sys_object_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        sys_object_name: {
            type: DataType.STRING,
            allowNull: false 
        }
    }, {
        sequelize,
        tableName: "system_objects",
        modelName: "SystemObject",
        timestamps: false 
    });

    return SystemObject;
};
