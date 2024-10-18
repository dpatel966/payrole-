const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class IncentiveMaster extends Model {
        static associate(models) {}
    }

    IncentiveMaster.init({
        incm_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        incm_emp_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incm_start_date: {
            type: DataType.DATE,
            allowNull: true
        },
        incm_end_date: {
            type: DataType.DATE,
            allowNull: true
        },
        incm_portfolio: {
            type: DataType.STRING(60),
            allowNull: true
        },
        incm_target_inc_amount: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incm_archieved_inc_amount: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incm_remarks: {
            type: DataType.STRING(100),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "incentive_master",
        modelName: "IncentiveMaster",
        timestamps: false
    });

    return IncentiveMaster;
};
