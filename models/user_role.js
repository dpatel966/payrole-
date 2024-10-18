const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class UserRole extends Model {
        static associate(models) {}
    }

    UserRole.init({
        user_role_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_role_name: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: "user_roles",
        modelName: "UserRole",
        timestamps: false
    });

    return UserRole;
};
