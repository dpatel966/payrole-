const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmployeeLeavesMaster extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    EmployeeLeavesMaster.init({
        emp_leave_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_leave_period_start_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_leave_period_end_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_leave_type: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        emp_leave_count: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_leave_consumed: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "employee_leaves_master",
        modelName: "EmployeeLeavesMaster",
        timestamps: false
    });

    return EmployeeLeavesMaster;
}
