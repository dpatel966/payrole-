const express = require('express');
const { Employee, errorHendlar } = require('../models'); 
const ApiResponse = require('./apiResponse/apiResponse');
const moment = require('moment');
const router = express.Router();

// Save a new employee
router.post('/save', async (req, res) => {
    const {
        emp_first_name,
        emp_middle_name,
        emp_last_name,
        emp_salutation,
        emp_dob,
        emp_gender,
        emp_type,
        emp_branch_id,
        emp_dept_id,
        emp_role_id,
        emp_mgr_emp_id,
        emp_cur_address_id,
        emp_perm_address_id,
        emp_contact_mobile_1,
        emp_contact_mobile_2,
        emp_contact_email,
        emp_photo_id,
        emp_father_name,
        emp_mother_name,
        emp_spouse_name,
        emp_spouse_dob,
        emp_child_1_name,
        emp_child_2_name,
        emp_child_3_name,
        emp_child_4_name,
        emp_child_1_dob,
        emp_child_2_dob,
        emp_child_3_dob,
        emp_child_4_dob,
        emp_aadhar_no,
        emp_pan_num,
        emp_uan_num,
        emp_esic_num,
        emp_passport_num,
        emp_dl_num,
        emp_aadhar_doc_id,
        emp_pan_doc_id,
        emp_uan_doc_id,
        emp_esic_doc_id,
        emp_passport_doc_id,
        emp_dl_doc_id,
        emp_blood_group,
        emp_bank_name,
        emp_bank_account_no,
        emp_bank_ifsc_code,
        emp_service_agr_doc_id,
        emp_date_of_joining,
        emp_date_confirm,
        emp_date_resign,
        emp_date_relieve,
        emp_security_amt_required,
        emp_security_amt_deposited,
    } = req.body;

    try {
        const employee = await Employee.create({
            emp_first_name,
            emp_middle_name,
            emp_last_name,
            emp_salutation,
            emp_dob,
            emp_gender,
            emp_type,
            emp_branch_id,
            emp_dept_id,
            emp_role_id,
            emp_mgr_emp_id,
            emp_cur_address_id,
            emp_perm_address_id,
            emp_contact_mobile_1,
            emp_contact_mobile_2,
            emp_contact_email,
            emp_photo_id,
            emp_father_name,
            emp_mother_name,
            emp_spouse_name,
            emp_spouse_dob,
            emp_child_1_name,
            emp_child_2_name,
            emp_child_3_name,
            emp_child_4_name,
            emp_child_1_dob,
            emp_child_2_dob,
            emp_child_3_dob,
            emp_child_4_dob,
            emp_aadhar_no,
            emp_pan_num,
            emp_uan_num,
            emp_esic_num,
            emp_passport_num,
            emp_dl_num,
            emp_aadhar_doc_id,
            emp_pan_doc_id,
            emp_uan_doc_id,
            emp_esic_doc_id,
            emp_passport_doc_id,
            emp_dl_doc_id,
            emp_blood_group,
            emp_bank_name,
            emp_bank_account_no,
            emp_bank_ifsc_code,
            emp_service_agr_doc_id,
            emp_date_of_joining: moment(emp_date_of_joining).format('YYYY-MM-DD'),
            emp_date_confirm: emp_date_confirm ? moment(emp_date_confirm).format('YYYY-MM-DD') : null,
            emp_date_resign: emp_date_resign ? moment(emp_date_resign).format('YYYY-MM-DD') : null,
            emp_date_relieve: emp_date_relieve ? moment(emp_date_relieve).format('YYYY-MM-DD') : null,
            emp_security_amt_required,
            emp_security_amt_deposited,
        });
        res.json(new ApiResponse(true, employee, "Employee data saved successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false, error, "Employee data not saved"));
    }
});

// Get list of employees
router.get('/list', async (req, res) => {
    try {
        const data = await Employee.findAll();
        res.json(new ApiResponse(true, data, "Data found successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false, error, "Invalid request"));
    }
});

// Update employee details
router.put('/update/:id', async (req, res) => {
    const emp_id = req.params.id;
    const {
        emp_first_name,
        emp_middle_name,
        emp_last_name,
        emp_salutation,
        emp_dob,
        emp_gender,
        emp_type,
        emp_branch_id,
        emp_dept_id,
        emp_role_id,
        emp_mgr_emp_id,
        emp_cur_address_id,
        emp_perm_address_id,
        emp_contact_mobile_1,
        emp_contact_mobile_2,
        emp_contact_email,
        emp_photo_id,
        emp_father_name,
        emp_mother_name,
        emp_spouse_name,
        emp_spouse_dob,
        emp_child_1_name,
        emp_child_2_name,
        emp_child_3_name,
        emp_child_4_name,
        emp_child_1_dob,
        emp_child_2_dob,
        emp_child_3_dob,
        emp_child_4_dob,
        emp_aadhar_no,
        emp_pan_num,
        emp_uan_num,
        emp_esic_num,
        emp_passport_num,
        emp_dl_num,
        emp_aadhar_doc_id,
        emp_pan_doc_id,
        emp_uan_doc_id,
        emp_esic_doc_id,
        emp_passport_doc_id,
        emp_dl_doc_id,
        emp_blood_group,
        emp_bank_name,
        emp_bank_account_no,
        emp_bank_ifsc_code,
        emp_service_agr_doc_id,
        emp_date_of_joining,
        emp_date_confirm,
        emp_date_resign,
        emp_date_relieve,
        emp_security_amt_required,
        emp_security_amt_deposited,
    } = req.body;

    try {
        const updated = await Employee.update(
            {
                emp_first_name,
                emp_middle_name,
                emp_last_name,
                emp_salutation,
                emp_dob,
                emp_gender,
                emp_type,
                emp_branch_id,
                emp_dept_id,
                emp_role_id,
                emp_mgr_emp_id,
                emp_cur_address_id,
                emp_perm_address_id,
                emp_contact_mobile_1,
                emp_contact_mobile_2,
                emp_contact_email,
                emp_photo_id,
                emp_father_name,
                emp_mother_name,
                emp_spouse_name,
                emp_spouse_dob,
                emp_child_1_name,
                emp_child_2_name,
                emp_child_3_name,
                emp_child_4_name,
                emp_child_1_dob,
                emp_child_2_dob,
                emp_child_3_dob,
                emp_child_4_dob,
                emp_aadhar_no,
                emp_pan_num,
                emp_uan_num,
                emp_esic_num,
                emp_passport_num,
                emp_dl_num,
                emp_aadhar_doc_id,
                emp_pan_doc_id,
                emp_uan_doc_id,
                emp_esic_doc_id,
                emp_passport_doc_id,
                emp_dl_doc_id,
                emp_blood_group,
                emp_bank_name,
                emp_bank_account_no,
                emp_bank_ifsc_code,
                emp_service_agr_doc_id,
                emp_date_of_joining: moment(emp_date_of_joining).format('YYYY-MM-DD'),
                emp_date_confirm: emp_date_confirm ? moment(emp_date_confirm).format('YYYY-MM-DD') : null,
                emp_date_resign: emp_date_resign ? moment(emp_date_resign).format('YYYY-MM-DD') : null,
                emp_date_relieve: emp_date_relieve ? moment(emp_date_relieve).format('YYYY-MM-DD') : null,
                emp_security_amt_required,
                emp_security_amt_deposited,
            },
            { where: { emp_id } }
        );

        if (updated[0] === 0) {
            return res.json(new ApiResponse(false, null, "Employee not found"));
        }

        res.json(new ApiResponse(true, null, "Employee updated successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false, error, "Employee not updated"));
    }
});

// Delete an employee
router.delete('/delete/:id', async (req, res) => {
    const emp_id = req.params.id;
    try {
        const employee = await Employee.findByPk(emp_id);
        if (employee == null) {
            return res.json(new ApiResponse(false, null, "Employee not found"));
        }

        await employee.destroy();
        res.json(new ApiResponse(true, null, "Employee deleted successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.json(new ApiResponse(false, error, "Employee not deleted"));
    }
});

module.exports = router;
