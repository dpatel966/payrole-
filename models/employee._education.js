const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class EmployeeEducation extends Model {
        static associate(models) {
            // Define associations here
        }
    }

    EmployeeEducation.init({
        edu_emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        edu_qual_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        edu_qual_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_institure: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_board_univ: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_place: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_start_year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_end_year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        edu_qual_per_grade: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: true
        },
        edu_qual_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "employee_education",
        modelName: "EmployeeEducation",
        timestamps: false
    });

    return EmployeeEducation;
}
