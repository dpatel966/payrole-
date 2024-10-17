const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmployeeRoles extends Model {
        static associate(models) {
            
        }
    }

    EmployeeRoles.init({
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        role_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: "employee_roles",
        modelName: "EmployeeRoles",
        timestamps: false
    });

    return EmployeeRoles;
}
