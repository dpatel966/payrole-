const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class Salary extends Model {
        static associate(models) {}
    }

    Salary.init({
        sal_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sal_emp_id: {
            type: DataType.INTEGER,
            unique: true,
            allowNull: false
        },
        sal_start_date: {
            type: DataType.DATE,
            allowNull: true
        },
        sal_end_date: {
            type: DataType.DATE,
            allowNull: true
        },
        sal_num_days: {
            type: DataType.DECIMAL,
            allowNull: true
        },
        sal_basic: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_hra: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_conv_allow: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_other_allow: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_telephone_allow: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_travel_allow: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_provident_fund: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_esic: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_prof_tax: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_security_amt: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_tds_amt: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_advance_sal: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_gross_amt: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_gross_ded_amt: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_net_amt: {
            type: DataType.INTEGER,
            allowNull: true
        },
        sal_remarks: {
            type: DataType.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "salary",
        modelName: "Salary",
        timestamps: false
    });

    return Salary;
};
