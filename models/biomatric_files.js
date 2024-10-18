const { Model } = require("sequelize");

module.exports = (sequelize, DataType) => {
    class BiometricFilesLog extends Model {
        static associate(models) {}
    }

    BiometricFilesLog.init({
        File_id: {
            type: DataType.INTEGER,
            primaryKey: true
        },
        file_ref_of_machine: {
            type: DataType.STRING,
            allowNull: true
        },
        file_import_date: {
            type: DataType.DATE,
            allowNull: true
        },
        file_processing_status: {
            type: DataType.STRING,
            allowNull: true
        },
        file_processing_rem: {
            type: DataType.STRING,
            allowNull: true
        },
        file_imported_emp_id: {
            type: DataType.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: "biometric_files_log",
        modelName: "BiometricFilesLog",
        timestamps: false
    });

    return BiometricFilesLog;
};
