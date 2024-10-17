const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Document extends Model {
        static associate(models) {
        
        }
    }

    Document.init({
        doc_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        doc_image_file_name: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        doc_upload_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: "documents",
        modelName: "Document",
        timestamps: false
    });

    return Document;
}
