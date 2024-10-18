const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class Branch extends Model {
        static associate(models) {

            // Branch.belongsTo(models.Address, { foreignKey: 'branch_address_id' });
            // Branch.belongsTo(models.Contact, { foreignKey: 'branch_contact_id' });
        }
    }

    Branch.init({
        branch_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        branch_name: {
            type: DataType.STRING,
            allowNull: false
        },
        branch_address_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        branch_contact_id: {
            type: DataType.INTEGER,
            allowNull: true
        },
        branch_start_date: {
            type: DataType.DATE,
            allowNull: true
        },
        branch_end_date: {
            type: DataType.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "branch",
        modelName: "Branch",
        timestamps: false
    });

    return Branch;
};
