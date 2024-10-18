const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class IncentiveTrans extends Model {
        static associate(models) {}
    }

    IncentiveTrans.init({
        inc_trans_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        inc_tran_incd_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        inc_tran_kpi_item_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        inc_tran_achieved_val: {
            type: DataType.INTEGER,
            allowNull: true
        },
        inc_tran_record_date: {
            type: DataType.DATE,
            allowNull: true
        },
        inc_tran_remarks: {
            type: DataType.STRING(100),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "incentive_trans",
        modelName: "IncentiveTrans",
        timestamps: false
    });

    return IncentiveTrans;
};
