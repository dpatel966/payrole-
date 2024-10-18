const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class LeavesPeriod extends Model {
        static associate(models) {}
    }

    LeavesPeriod.init({
        leave_period_start_date: {
            type: DataType.DATE,
            primaryKey: true
        },
        leave_period_end_date: {
            type: DataType.DATE,
            primaryKey: true
        },
        leave_role_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        leave_type: {
            type: DataType.STRING(30),
            primaryKey: true
        },
        leave_count: {
            type: DataType.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "leaves_period",
        modelName: "LeavesPeriod",
        timestamps: false
    });

    return LeavesPeriod;
};
