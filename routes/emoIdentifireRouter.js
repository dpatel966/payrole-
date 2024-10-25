const express = require("express");
const{Employee, errorHendlar} = require("../models/index");
const router = express.Router();
const path = require("path");
const ApiResponse = require("./utils/apiResponse");

router.post("/identi/:id", async (req, res) => {
    const emp_id = req.params.id;
    try {
        if (req.files && req.files.emp_adhar) {
            let img = "empAadhar";
            const emp_aadhar = req.files.emp_adhar;

            const fileName = `${img}${new Date().getTime()}${path.extname(emp_aadhar.name)}`;

            const filePath = path.join(__dirname, "../uploads", fileName);

            emp_aadhar.mv(filePath, async (err) => {
                if (err) {
                    // Return the response to avoid further code execution
                    return res.status(500).json(new ApiResponse(false, null, "File not uploaded"));
                }

                // File was uploaded successfully; now update the database or send a success response
                try {
                    // Assuming there's an Employee column to store the file name
                    await Employee.update(
                        { emp_aadhar_file: fileName }, 
                        { where: { emp_id: emp_id } }
                    );

                    res.status(200).json(new ApiResponse(true, { filePath }, "File uploaded and employee record updated successfully"));
                } catch (dbErr) {
                    console.error(dbErr);
                    const error = errorHandler(dbErr); // Make sure this is spelled correctly
                    res.status(500).json(new ApiResponse(false, error, "Failed to update employee record"));
                }
            });
        } else {
            res.status(400).json(new ApiResponse(false, null, "No file provided"));
        }
    } catch (err) {
        console.error(err);
        const error = errorHandler(err); // Make sure this is spelled correctly
        res.status(500).json(new ApiResponse(false, error, "File not uploaded"));
    }
});

module.exports= router;