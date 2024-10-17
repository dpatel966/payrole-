const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmpLeaveTransactions extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    EmpLeaveTransactions.init({
        emp_leave_tran_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_leave_tran_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_leave_tran_leave_type: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        emp_leave_tran_leave_num: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_leave_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_leave_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_leave_tran_emp_rem: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_leave_tran_mgr_emp_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_leave_tran_app_num: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_leave_tran_mgr_rem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "emp_leave_transactions",
        modelName: "EmpLeaveTransactions",
        timestamps: false
    });

    return EmpLeaveTransactions;
}
