const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class LeavesMaster extends Model {
        static associate(models) {}
    }

    LeavesMaster.init({
        leave_type: {
            type: DataType.STRING,
            primaryKey: true
        },
        leave_desc: {
            type: DataType.STRING,
            allowNull: true
        },
        leave_count: {
            type: DataType.INTEGER,
            allowNull: true
        },
        leave_carry: {
            type: DataType.STRING,
            allowNull: true
        },
        leave_encash: {
            type: DataType.STRING,
            allowNull: true
        },
        leave_eligibility: {
            type: DataType.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "leaves_master",
        modelName: "LeavesMaster",
        timestamps: false
    });

    return LeavesMaster;
};
