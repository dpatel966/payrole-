const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmpAttendance extends Model {
        static associate(models) {
            
        }
    }

    EmpAttendance.init({
        emp_attend_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        emp_attend_date: {
            type: DataTypes.DATE,
            primaryKey: true
        },
        emp_attend_status: {
            type: DataTypes.CHAR,
            allowNull: true
        },
        emp_attend_time_in: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_attend_time_out: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_attend_remarks: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "emp_attendance",
        modelName: "EmpAttendance",
        timestamps: false
    });

    return EmpAttendance;
}
