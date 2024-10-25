const express = require('express');
const { Employee, Document, errorHendlar ,Address} = require('../models'); 
const ApiResponse = require('./utils/apiResponse');
const moment = require('moment');
const router = express.Router();
const path = require("path");



router.post("/savea", async (req, res) => {
    try {
        const {
            emp_id,
            emp_first_name,
            emp_middle_name,
            emp_last_name,
            emp_salutation,
            emp_dob,
            emp_gender,
            emp_type,
            emp_contact_mobile_1,
            emp_contact_mobile_2,
            emp_contact_email,
            emp_blood_group,
            addresses 
        } = req.body;

        
        let emp_cur_address_id = null;
        let emp_perm_address_id = null;

        if (addresses && Array.isArray(addresses)) {
            for (let i = 0 ;i<addresses.length;i++) {
                const add = addresses[i];
                 console.log(add)
                // const createdAddress = await Address.create({
                //     address_id:add.address_id,
                //     address_line_1: add.address_line_1,
                //     address_line_2: add.address_line_2,
                //     landmark: add.landmark,
                //     city: add.city,
                //     state: add.state,
                //     country: add.country,
                //     zipcode: add.zipcode,
                //     address_type: add.address_type,
                //     address_from_date: add.address_from_date,
                //     address_to_date: add.address_to_date
                // });

                
                if (add.address_type === 'C') {
                    emp_cur_address_id = createdAddress.address_id;
                } else if (add.address_type === 'P') {
                    emp_perm_address_id = createdAddress.address_id;
                }
            }
        }

        
        const employee = await Employee.create({
            emp_id,
            emp_first_name,
            emp_middle_name,
            emp_last_name,
            emp_salutation,
            emp_dob,
            emp_gender,
            emp_type,
            emp_contact_mobile_1,
            emp_contact_mobile_2,
            emp_contact_email,
            emp_blood_group,
            emp_cur_address_id, 
            emp_perm_address_id 
        });

        res.status(201).json(new ApiResponse(true, employee, "Employee data saved successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.status(500).json(new ApiResponse(false, error, "Employee data not saved"));
    }
});

module.exports = router;


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
        emp_blood_group,
        emp_bank_name,
        emp_bank_account_no,
        emp_bank_ifsc_code,
        emp_date_of_joining,
        emp_date_confirm,
        emp_date_resign,
        emp_date_relieve,
        emp_security_amt_required,
        emp_security_amt_deposited,
    } = req.body;

    const documentIds = []; 


    const documentKeys = [
        'emp_aadhar_doc',
        'emp_pan_doc_id',
        'emp_uan_doc_id',
        'emp_esic_doc_id',
        'emp_passport_doc_id',
        'emp_dl_doc_id'
    ];
     let  a  =  1

    for (const key of documentKeys) {
        if (req.files && req.files[key]) {
            const docImage = req.files[key];
            const fileName = `${new Date().getTime()}_${key}${path.extname(docImage.name)}`;
            const filePath = path.join(__dirname, '../uploads', fileName);

        
            await docImage.mv(filePath);
             const doc_id =  a
             
            
            const document = await Document.create({
                doc_id,
                doc_image_file_name: fileName,
                doc_upload_date: moment().format('YYYY-MM-DD')
            });
            
        
            documentIds.push(document.doc_id);
        }
        a++
    }

    try {
        // Insert employee data along with document IDs
        const employee = await Employee.create({
            emp_id:1,
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
            emp_blood_group,
            emp_bank_name,
            emp_bank_account_no,
            emp_bank_ifsc_code,
            emp_date_of_joining: moment(emp_date_of_joining).format('YYYY-MM-DD'),
            emp_date_confirm: emp_date_confirm ? moment(emp_date_confirm).format('YYYY-MM-DD') : null,
            emp_date_resign: emp_date_resign ? moment(emp_date_resign).format('YYYY-MM-DD') : null,
            emp_date_relieve: emp_date_relieve ? moment(emp_date_relieve).format('YYYY-MM-DD') : null,
            emp_security_amt_required,
            emp_security_amt_deposited,
            emp_aadhar_doc_id: documentIds[0],
            emp_pan_doc_id: documentIds[1],
            emp_uan_doc_id: documentIds[2],
            emp_esic_doc_id: documentIds[3],
            emp_passport_doc_id: documentIds[4],
            emp_dl_doc_id: documentIds[5],
        });

        // const responseData = {
        //     emp_id: employee.emp_id,
        //     emp_first_name: employee.emp_first_name,
        //     emp_last_name: employee.emp_last_name,
        //     emp_date_of_joining: employee.emp_date_of_joining,
        //     emp_date_confirm: employee.emp_date_confirm,
        //     emp_date_resign: employee.emp_date_resign,
        //     emp_date_relieve: employee.emp_date_relieve,
        //     document_ids: documentIds // Include document IDs in the response
        // };

        res.status(201).json(new ApiResponse(true, employee, "Employee data saved successfully"));
    } catch (err) {
        console.error(err);
        const error = errorHendlar(err);
        res.status(500).json(new ApiResponse(false, error, "Employee data not saved"));
    }
});

// ... other routes ...

module.exports = router;
