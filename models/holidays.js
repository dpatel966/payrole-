const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Holidays extends Model {
        static associate(models) {
            
        }
    }

    Holidays.init({
        holiday_year: {
            type: DataTypes.STRING(4),
            primaryKey: true
        },
        holiday_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        holiday_for: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        holiday_type: {
            type: DataTypes.CHAR(1),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "holidays",
        modelName: "Holidays",
        timestamps: false
    });

    return Holidays;
}
