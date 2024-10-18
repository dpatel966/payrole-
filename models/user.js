const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class User extends Model {
        static associate(models) {}
    }

    User.init({
        user_id: {
            type: DataType.STRING(80),
            primaryKey: true,
            allowNull: false
        },
        user_name: {
            type: DataType.STRING(60),
            allowNull: true
        },
        user_password: {
            type: DataType.STRING(100),
            allowNull: false
        },
        user_create_date: {
            type: DataType.DATE,
            allowNull: true
        },
        user_status: {
            type: DataType.CHAR(1),
            allowNull: false
        },
        user_role_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        user_contact_number_1: {
            type: DataType.STRING(15),
            allowNull: true
        },
        user_contact_number_2: {
            type: DataType.STRING(15),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "user",
        modelName: "User",
        timestamps: false
    });

    return User;
};
