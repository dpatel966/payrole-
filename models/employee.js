const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        static associate(models) {
        
            // Employee.belongsTo(models.Department, { foreignKey: 'emp_dept_id' });
            // Employee.belongsTo(models.Branch, { foreignKey: 'emp_branch_id' });
            // Employee.belongsTo(models.Role, { foreignKey: 'emp_role_id' });
            // Employee.belongsTo(models.Contact, { foreignKey: 'emp_contact_id' });
        }
    }

    Employee.init({
        emp_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        emp_first_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        emp_middle_name: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        emp_last_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        emp_salutation: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        emp_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_gender: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        emp_type: {
            type: DataTypes.CHAR(1),
            allowNull: true
        },
        emp_branch_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_dept_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_role_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_mgr_emp_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_cur_address_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_perm_address_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_contact_mobile_1: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        emp_contact_mobile_2: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        emp_contact_email: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_photo_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_father_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        emp_mother_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_spouse_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_spouse_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_child_1_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_child_2_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_child_3_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_child_4_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_child_1_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_child_2_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_child_3_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_child_4_dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_aadhar_no: {
            type: DataTypes.STRING(12),
            allowNull: true
        },
        emp_pan_num: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        emp_uan_num: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        emp_esic_num: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        emp_passport_num: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        emp_dl_num: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        emp_aadhar_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_pan_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_uan_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_esic_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_passport_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_dl_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_blood_group: {
            type: DataTypes.STRING(5),
            allowNull: true
        },
        emp_bank_name: {
            type: DataTypes.STRING(60),
            allowNull: true
        },
        emp_bank_account_no: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        emp_bank_ifsc_code: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        emp_service_agr_doc_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_date_of_joining: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_date_confirm: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_date_resign: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_date_relieve: {
            type: DataTypes.DATE,
            allowNull: true
        },
        emp_security_amt_required: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emp_security_amt_deposited: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Employee',
        tableName: 'employee',
        timestamps: false,
    });

    return Employee;
}
