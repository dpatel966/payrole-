const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class IncentiveKpis extends Model {
        static associate(models) {}
    }

    IncentiveKpis.init({
        inc_kpi_item_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        inc_kpi_item_desc: {
            type: DataType.STRING(60),
            allowNull: true
        },
        inc_kpi_weightage: {
            type: DataType.INTEGER,
            allowNull: true
        },
        inc_kpi_effective_start_date: {
            type: DataType.DATE,
            allowNull: true
        },
        inc_kpi_effective_end_date: {
            type: DataType.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "incentive_kpis",
        modelName: "IncentiveKpis",
        timestamps: false
    });

    return IncentiveKpis;
};
