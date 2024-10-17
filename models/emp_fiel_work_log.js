const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmpFieldWorkLog extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    EmpFieldWorkLog.init({
        emp_field_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_field_req_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_field_start_date_time: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_field_end_date_time: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_field_emp_rem: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_field_mgr_emp_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_field_mgr_app_rem: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "emp_field_work_log",
        modelName: "EmpFieldWorkLog",
        timestamps: false
    });

    return EmpFieldWorkLog;
}
