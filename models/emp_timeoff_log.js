const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmpTimeoffLog extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    EmpTimeoffLog.init({
        emp_timeoff_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_timeoff_from_datetime: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_timeoff_to_datetime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_timeoff_rem: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_timeoff_mgr_emp_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_timeoff_mgr_rem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "emp_timeoff_log",
        modelName: "EmpTimeoffLog",
        timestamps: false
    });

    return EmpTimeoffLog;
}
