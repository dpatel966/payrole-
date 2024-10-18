const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class IncentiveDetails extends Model {
        static associate(models) {}
    }

    IncentiveDetails.init({
        incd_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        incd_incm_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incd_kpi_item_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incd_kpi_item_weightage: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incd_kpi_item_max_inc_amt: {
            type: DataType.DECIMAL,
            allowNull: true
        },
        incd_kpi_inc_item_target: {
            type: DataType.INTEGER,
            allowNull: true
        },
        incd_kpi_inc_item_ach_val: {
            type: DataType.DECIMAL,
            allowNull: true
        },
        incd_kpi_inc_item_ach_per: {
            type: DataType.DECIMAL,
            allowNull: true
        },
        incd_kpi_inc_item_ach_amt: {
            type: DataType.DECIMAL,
            allowNull: true
        },
        incl_kpi_inc_remarks: {
            type: DataType.STRING(100),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "incentive_details",
        modelName: "IncentiveDetails",
        timestamps: false
    });

    return IncentiveDetails;
};
