-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 192.168.29.250    Database: payroll
-- ------------------------------------------------------
-- Server version	8.4.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL COMMENT 'Address Identifier',
  `address_line_1` varchar(100) NOT NULL COMMENT 'Address Line 1',
  `address_line_2` varchar(100) DEFAULT NULL,
  `landmark` varchar(100) DEFAULT NULL COMMENT 'Landmark for easy identification',
  `city` varchar(60) NOT NULL COMMENT 'City',
  `state` varchar(60) NOT NULL,
  `country` varchar(60) NOT NULL,
  `zipode` varchar(45) NOT NULL COMMENT 'ZIp or PIN code ',
  `address_type` char(1) NOT NULL COMMENT 'Type of Address\\nP - Permanent\\nC - Current',
  `address_from_date` date DEFAULT NULL COMMENT 'Address effective from date',
  `address_to_date` date DEFAULT NULL COMMENT 'Address changed on this date',
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Store all addresses of office, employees etc. in the organisation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `biometric_files_log`
--

DROP TABLE IF EXISTS `biometric_files_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `biometric_files_log` (
  `File_id` int NOT NULL COMMENT 'Unique file id as generated by this system',
  `file_ref_of_machine` varchar(30) NOT NULL COMMENT 'Name of the file from the biometric system',
  `file_import_date` datetime NOT NULL COMMENT 'Date / time on which file is imported',
  `file_processing_status` char(1) NOT NULL COMMENT 'File processing date',
  `file_processing_rem` varchar(100) DEFAULT NULL COMMENT 'File processing remarks',
  `file_imported_emp_id` int NOT NULL COMMENT 'Identifier of the emplouee who imported the file',
  PRIMARY KEY (`File_id`),
  UNIQUE KEY `File_id_UNIQUE` (`File_id`),
  KEY `file_imported_emp_id_idx` (`file_imported_emp_id`),
  CONSTRAINT `file_imported_emp_id` FOREIGN KEY (`file_imported_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Record of data files and their processing status from Biometric attendance system';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branches` (
  `branch_id` int NOT NULL COMMENT 'Branch Identifier',
  `branch_name` varchar(100) NOT NULL COMMENT 'Branch Name',
  `branch_address_id` int NOT NULL COMMENT 'Address record id of the branch',
  `branch_contact_id` int DEFAULT NULL COMMENT 'Contact record id of the branch',
  `branch_start_date` date NOT NULL COMMENT 'Branch start date',
  `branch_end_date` date DEFAULT NULL COMMENT 'Branch end date',
  PRIMARY KEY (`branch_id`),
  UNIQUE KEY `branch_id_UNIQUE` (`branch_id`),
  KEY `contact_id_idx` (`branch_contact_id`),
  KEY `address_id_idx` (`branch_address_id`),
  CONSTRAINT `branch_address_id` FOREIGN KEY (`branch_address_id`) REFERENCES `address` (`address_id`),
  CONSTRAINT `branch_contact_id` FOREIGN KEY (`branch_contact_id`) REFERENCES `contacts` (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Store head quarter and branch details of the organisation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contacts` (
  `contact_id` int NOT NULL COMMENT 'Contact Identifier',
  `contact_salutation` char(3) NOT NULL COMMENT 'Salutation - Mr, Mrs, Ms, Dr',
  `contact_first_name` varchar(60) NOT NULL COMMENT 'First name of the contact',
  `contact_middle_name` varchar(60) DEFAULT NULL COMMENT 'Middle name of the contact',
  `contact_last_name` varchar(60) DEFAULT NULL COMMENT 'Last name of the contact',
  `contact_phone_office` varchar(15) DEFAULT NULL COMMENT 'Office phone number of the contact',
  `contact_phone_home` varchar(15) DEFAULT NULL COMMENT 'Home phone number of the contact',
  `contact_mobile_1` varchar(15) DEFAULT NULL COMMENT 'Mobile number of the contact',
  `contact_mobile_2` varchar(15) DEFAULT NULL COMMENT 'Optional 2nd mobile number of the contact',
  `contact_email` varchar(60) DEFAULT NULL COMMENT 'Email address of the contact',
  `contact_emergency_no` varchar(15) DEFAULT NULL COMMENT 'Phone/mobile number of the person to be contacted in emergency',
  `contact_start_date` date DEFAULT NULL COMMENT 'Contact create date',
  `contact_end_date` date DEFAULT NULL COMMENT 'Contact change date',
  PRIMARY KEY (`contact_id`),
  UNIQUE KEY `contact_id_UNIQUE` (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Contacts used in the organisation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL COMMENT 'Department ID',
  `dept_name` varchar(60) DEFAULT NULL COMMENT 'Name of the department',
  `dept_head_emp_id` int DEFAULT NULL COMMENT 'Employee id of the department head',
  `dept_start_date` date DEFAULT NULL COMMENT 'Department setup/start date',
  `dept_end_date` date DEFAULT NULL COMMENT 'Optional department end date',
  PRIMARY KEY (`dept_id`),
  UNIQUE KEY `dept_id_UNIQUE` (`dept_id`),
  KEY `dept_head_emp_id_idx` (`dept_head_emp_id`),
  CONSTRAINT `dept_head_emp_id` FOREIGN KEY (`dept_head_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Departments in the organisation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `doc_id` int NOT NULL COMMENT 'Identifier of the document',
  `doc_image_file_name` varchar(60) NOT NULL COMMENT 'Name of the uploaded document file',
  `doc_upload_date` date NOT NULL COMMENT 'Date on which document was uploaded',
  PRIMARY KEY (`doc_id`),
  UNIQUE KEY `doc_id_UNIQUE` (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Store the uploaded image of various documents';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_attendance`
--

DROP TABLE IF EXISTS `emp_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_attendance` (
  `emp_attend_id` int NOT NULL COMMENT 'Employee id',
  `emp_attend_date` date NOT NULL COMMENT 'Date of attendance',
  `emp_attend_status` char(1) DEFAULT NULL COMMENT 'Attendance Status - \nP - Biometry entry available\nL - Leave\nF - Field Working\n',
  `emp_attend_time_in` varchar(5) DEFAULT NULL COMMENT 'Time in as per Biometric system',
  `emp_attend_time_out` varchar(5) DEFAULT NULL COMMENT 'Time out as per Biometric system',
  `emp_attend_remarks` varchar(100) DEFAULT NULL COMMENT 'Type of leave in case of leave\nAdditional remarks by HR Manager',
  PRIMARY KEY (`emp_attend_id`,`emp_attend_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='To store attendance of employees';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_field_work_log`
--

DROP TABLE IF EXISTS `emp_field_work_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_field_work_log` (
  `emp_field_emp_id` int NOT NULL COMMENT 'Identifier of the employee requesting field working',
  `emp_field_req_date` date NOT NULL COMMENT 'Field working request date',
  `emp_field_start_date_time` datetime NOT NULL COMMENT 'Start date and time of the field working',
  `emp_field_end_date_time` datetime NOT NULL COMMENT 'End date and time of the field working',
  `emp_field_emp_rem` varchar(100) DEFAULT NULL COMMENT 'Remarks by the employee detailing field working reason, area covered etc.',
  `emp_field_mgr_emp_id` int DEFAULT NULL COMMENT 'Identifier of the manager employee approving the field request',
  `emp_field_mgr_app_rem` varchar(100) DEFAULT NULL COMMENT 'Remarks of the manager approving field working of the employee',
  PRIMARY KEY (`emp_field_emp_id`,`emp_field_req_date`,`emp_field_start_date_time`,`emp_field_end_date_time`),
  UNIQUE KEY `emp_field_emp_id_UNIQUE` (`emp_field_emp_id`),
  UNIQUE KEY `emp_field_req_date_UNIQUE` (`emp_field_req_date`),
  UNIQUE KEY `emp_field_start_date_time_UNIQUE` (`emp_field_start_date_time`),
  UNIQUE KEY `emp_field_end_date_time_UNIQUE` (`emp_field_end_date_time`),
  KEY `emp_field_mgr_emp_id_idx` (`emp_field_mgr_emp_id`),
  CONSTRAINT `emp_field_emp_id` FOREIGN KEY (`emp_field_emp_id`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `emp_field_mgr_emp_id` FOREIGN KEY (`emp_field_mgr_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Recording field working requests and approvals of employees';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_leave_transactions`
--

DROP TABLE IF EXISTS `emp_leave_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_leave_transactions` (
  `emp_leave_tran_emp_id` int NOT NULL COMMENT 'Employee id who is requesting leaves',
  `emp_leave_tran_date` date NOT NULL COMMENT 'Date on which leave requisition is made',
  `emp_leave_tran_leave_type` varchar(230) NOT NULL COMMENT 'Type of leave requested',
  `emp_leave_tran_leave_num` int NOT NULL COMMENT 'Number of leaves requsted',
  `emp_leave_start_date` date NOT NULL COMMENT 'Start date of leaves',
  `emp_leave_end_date` date NOT NULL COMMENT 'End date of leaves',
  `emp_leave_tran_emp_rem` varchar(100) DEFAULT NULL COMMENT 'Reason for the leave request',
  `emp_leave_tran_mgr_emp_id` int NOT NULL COMMENT 'Employee id of the manager who will eview and approve this leave',
  `emp_leave_tran_app_num` int DEFAULT NULL COMMENT 'Number of leaves approved by the manager',
  `emp_leave_tran_mgr_rem` varchar(100) DEFAULT NULL COMMENT 'Remarks by the manager approving the leaves',
  PRIMARY KEY (`emp_leave_tran_emp_id`,`emp_leave_tran_date`,`emp_leave_tran_leave_type`),
  KEY `emp_leave_tran_leave_type_idx` (`emp_leave_tran_leave_type`),
  KEY `emp_leave_tran_mgr_emp_id_idx` (`emp_leave_tran_mgr_emp_id`),
  CONSTRAINT `emp_leave_tran_emp_id` FOREIGN KEY (`emp_leave_tran_emp_id`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `emp_leave_tran_leave_type` FOREIGN KEY (`emp_leave_tran_leave_type`) REFERENCES `leaves_master` (`leave_type`),
  CONSTRAINT `emp_leave_tran_mgr_emp_id` FOREIGN KEY (`emp_leave_tran_mgr_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Leave requisitions and approval logs of employees';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_salary_mater`
--

DROP TABLE IF EXISTS `emp_salary_mater`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_salary_mater` (
  `sm_id` int NOT NULL AUTO_INCREMENT,
  `sm_emp_id` int NOT NULL,
  `sm_start_date` date NOT NULL,
  `sm_end_date` date DEFAULT NULL,
  `sm_basic` int DEFAULT NULL,
  `sm_hra` int DEFAULT NULL,
  `sm_conv_allow` int DEFAULT NULL,
  `sm_other_allow` int DEFAULT NULL,
  `sm_telephone_allow` int DEFAULT NULL,
  `sm_travel_allow` int DEFAULT NULL,
  `sm_provident_fund_rate` decimal(10,0) DEFAULT NULL,
  `sm_esic_rate` decimal(10,0) DEFAULT NULL,
  `sm_prof_tax` int DEFAULT NULL,
  `sm_security_amt_deduct_rate` decimal(10,0) DEFAULT NULL,
  `sm_bonus` int DEFAULT NULL,
  `sm_bonus_payable_date` date DEFAULT NULL,
  PRIMARY KEY (`sm_id`),
  UNIQUE KEY `sm_emp_date_idx` (`sm_emp_id`,`sm_start_date`,`sm_end_date`),
  KEY `sm_emp_id_idx` (`sm_emp_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `sm_emp_id` FOREIGN KEY (`sm_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Salary Master of Employee';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_timeoff_log`
--

DROP TABLE IF EXISTS `emp_timeoff_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_timeoff_log` (
  `emp_timeoff_emp_id` int NOT NULL COMMENT 'Identifier of the emploee taking timeoff',
  `emp_timeoff_from_datetime` datetime NOT NULL COMMENT 'Start Date, time of the timeoff',
  `emp_timeoff_to_datetime` datetime NOT NULL COMMENT 'End Date, time of the timeoff',
  `emp_timeoff_rem` varchar(100) DEFAULT NULL COMMENT 'Reason / remarks by the employee requesting time off',
  `emp_timeoff_mgr_emp_id` int DEFAULT NULL COMMENT 'Employee identifier of the manager / controlling authority noting down observations',
  `emp_timeoff_mgr_rem` varchar(100) DEFAULT NULL COMMENT 'Observations from the manager or controlling authority',
  PRIMARY KEY (`emp_timeoff_emp_id`,`emp_timeoff_from_datetime`,`emp_timeoff_to_datetime`),
  UNIQUE KEY `emp_timeoff_emp_id_UNIQUE` (`emp_timeoff_emp_id`),
  UNIQUE KEY `emp_timeoff_from_datetime_UNIQUE` (`emp_timeoff_from_datetime`),
  UNIQUE KEY `emp_timeoff_to_datetime_UNIQUE` (`emp_timeoff_to_datetime`),
  KEY `emp_timeoff_mgr_emp_id_idx` (`emp_timeoff_mgr_emp_id`),
  CONSTRAINT `emp_timeoff_emp_id` FOREIGN KEY (`emp_timeoff_emp_id`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `emp_timeoff_mgr_emp_id` FOREIGN KEY (`emp_timeoff_mgr_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Record of various adhoc time-offs requested/granted to an employee. No impact on attendence';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emp_work_experience`
--

DROP TABLE IF EXISTS `emp_work_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emp_work_experience` (
  `emp_work_ex_emp_id` int NOT NULL COMMENT 'Employee Identifier',
  `emp_work_ex_employer_name` varchar(60) NOT NULL COMMENT 'Employer Name',
  `emp_work_ex_place` varchar(60) DEFAULT NULL COMMENT 'Work place',
  `emp_work_ex_start_date` date DEFAULT NULL COMMENT 'From date',
  `emp_work_ex_end_date` date DEFAULT NULL COMMENT 'To Date',
  `emp_work_ex_job_title` varchar(45) DEFAULT NULL COMMENT 'Job Title',
  `emp_work_ex_role_desc` varchar(100) DEFAULT NULL COMMENT 'Description of role / job function',
  `emp_work_ex_cert_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded work experience',
  PRIMARY KEY (`emp_work_ex_emp_id`),
  KEY `emp_work_ex_cert_doc_id_idx` (`emp_work_ex_cert_doc_id`),
  CONSTRAINT `emp_work_ex_cert_doc_id` FOREIGN KEY (`emp_work_ex_cert_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_work_ex_emp_id` FOREIGN KEY (`emp_work_ex_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Past work experience of employees';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `emp_id` int NOT NULL COMMENT 'Employee identifier',
  `emp_first_name` varchar(45) NOT NULL COMMENT 'First name of the emploee',
  `emp_middle_name` varchar(45) DEFAULT NULL COMMENT 'Middle name of the emploee',
  `emp_last_name` varchar(45) NOT NULL COMMENT 'Last name of the emploee',
  `emp_salutation` varchar(5) NOT NULL COMMENT 'Salutation of the employee Mr. Mrs Ms. ',
  `emp_dob` date DEFAULT NULL COMMENT 'Date of birth of the employee',
  `emp_gender` char(1) NOT NULL COMMENT 'Gender of the employee',
  `emp_type` char(1) NOT NULL COMMENT 'Type of employee \\\\nP - Permanent\\\\nT - Temporary',
  `emp_branch_id` int DEFAULT NULL COMMENT 'Branch identifier of the employee',
  `emp_dept_id` int DEFAULT NULL COMMENT 'Department identifier of the employee',
  `emp_role_id` int DEFAULT NULL COMMENT 'Role id of the employee',
  `emp_mgr_emp_id` int DEFAULT NULL COMMENT 'Employee identifier of the manager',
  `emp_cur_address_id` int DEFAULT NULL COMMENT 'Current address of the employee',
  `emp_perm_address_id` int DEFAULT NULL COMMENT 'Permanent address of the empliyee',
  `emp_contact_mobile_1` varchar(15) DEFAULT NULL,
  `emp_contact_mobile_2` varchar(15) DEFAULT NULL,
  `emp_contact_email` varchar(60) DEFAULT NULL,
  `emp_photo_id` int DEFAULT NULL,
  `emp_father_name` varchar(60) DEFAULT NULL COMMENT 'Father name of the employee',
  `emp_mother_name` varchar(60) DEFAULT NULL COMMENT 'Mother name of the employee',
  `emp_spouse_name` varchar(60) DEFAULT NULL COMMENT 'Spouse name of the employee',
  `emp_spouse_dob` date DEFAULT NULL COMMENT 'Spouse date of birth',
  `emp_child_1_name` varchar(60) DEFAULT NULL COMMENT 'Name of first child',
  `emp_child_2_name` varchar(60) DEFAULT NULL COMMENT 'Name of second child',
  `emp_child_3_name` varchar(60) DEFAULT NULL COMMENT 'Name of third child',
  `emp_child_4_name` varchar(60) DEFAULT NULL COMMENT 'Namee of fourth child',
  `emp_child_1_dob` date DEFAULT NULL COMMENT 'Date of birth of first child',
  `emp_child_2_dob` date DEFAULT NULL COMMENT 'Date of birth of second child',
  `emp_child_3_dob` date DEFAULT NULL COMMENT 'Date of birth of third child',
  `emp_child_4_dob` date DEFAULT NULL COMMENT 'Date of birth of fourth child',
  `emp_aadhar_no` varchar(12) DEFAULT NULL COMMENT 'Aadhar number of the employee',
  `emp_pan_num` varchar(10) DEFAULT NULL COMMENT 'PAN number of the employee',
  `emp_uan_num` varchar(15) DEFAULT NULL COMMENT 'UAN number of the employee (Provident Fund)',
  `emp_esic_num` varchar(15) DEFAULT NULL COMMENT 'ESIC number of the employee',
  `emp_passport_num` varchar(15) DEFAULT NULL COMMENT 'Passport number of the employee',
  `emp_dl_num` varchar(45) DEFAULT NULL COMMENT 'Driving License of the employee',
  `emp_aadhar_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded Aadhar',
  `emp_pan_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded PAN',
  `emp_uan_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded UAN',
  `emp_esic_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded ESIC',
  `emp_passport_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded passport',
  `emp_dl_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded driving license',
  `emp_blood_group` varchar(5) DEFAULT NULL COMMENT 'Blood group of the employee',
  `emp_bank_name` varchar(60) DEFAULT NULL,
  `emp_bank_account_no` varchar(20) DEFAULT NULL,
  `emp_bank_ifsc_code` varchar(11) DEFAULT NULL,
  `emp_service_agr_doc_id` int DEFAULT NULL COMMENT 'Service agreement of the employee',
  `emp_date_of_joining` date DEFAULT NULL COMMENT 'Date of joining',
  `emp_date_confirm` date DEFAULT NULL COMMENT 'Confirmation Date of Employee',
  `emp_date_resign` date DEFAULT NULL COMMENT 'Resignation Date ',
  `emp_date_relieve` date DEFAULT NULL COMMENT 'Relieving date ',
  `emp_security_amt_required` int DEFAULT NULL,
  `emp_security_amt_deposited` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  UNIQUE KEY `emp_id_UNIQUE` (`emp_id`),
  KEY `emp_branch_id_idx` (`emp_branch_id`),
  KEY `emp_dept_id_idx` (`emp_dept_id`),
  KEY `emp_mgr_emp_id_idx` (`emp_mgr_emp_id`),
  KEY `emp_cur_address_id_idx` (`emp_cur_address_id`),
  KEY `emp_perm_address_id_idx` (`emp_perm_address_id`),
  KEY `emp_aadhar_doc_id_idx` (`emp_aadhar_doc_id`),
  KEY `emp_pan_doc_id_idx` (`emp_pan_doc_id`),
  KEY `emp_uan_doc_id_idx` (`emp_uan_doc_id`),
  KEY `emp_esic_doc_id_idx` (`emp_esic_doc_id`),
  KEY `emp_passport_doc_id_idx` (`emp_passport_doc_id`),
  KEY `emp_dl_doc_id_idx` (`emp_dl_doc_id`),
  KEY `emp_photo_id_idx` (`emp_photo_id`),
  KEY `emp_role_id_idx` (`emp_role_id`),
  KEY `emp_service_agr_doc_id_idx` (`emp_service_agr_doc_id`),
  CONSTRAINT `emp_aadhar_doc_id` FOREIGN KEY (`emp_aadhar_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_branch_id` FOREIGN KEY (`emp_branch_id`) REFERENCES `branches` (`branch_id`),
  CONSTRAINT `emp_cur_address_id` FOREIGN KEY (`emp_cur_address_id`) REFERENCES `address` (`address_id`),
  CONSTRAINT `emp_dept_id` FOREIGN KEY (`emp_dept_id`) REFERENCES `department` (`dept_id`),
  CONSTRAINT `emp_dl_doc_id` FOREIGN KEY (`emp_dl_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_esic_doc_id` FOREIGN KEY (`emp_esic_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_mgr_emp_id` FOREIGN KEY (`emp_mgr_emp_id`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `emp_pan_doc_id` FOREIGN KEY (`emp_pan_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_passport_doc_id` FOREIGN KEY (`emp_passport_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_perm_address_id` FOREIGN KEY (`emp_perm_address_id`) REFERENCES `address` (`address_id`),
  CONSTRAINT `emp_photo_id` FOREIGN KEY (`emp_photo_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_role_id` FOREIGN KEY (`emp_role_id`) REFERENCES `employee_roles` (`role_id`),
  CONSTRAINT `emp_service_agr_doc_id` FOREIGN KEY (`emp_service_agr_doc_id`) REFERENCES `documents` (`doc_id`),
  CONSTRAINT `emp_uan_doc_id` FOREIGN KEY (`emp_uan_doc_id`) REFERENCES `documents` (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Employees of the organisation';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employee_education`
--

DROP TABLE IF EXISTS `employee_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_education` (
  `edu_emp_id` int NOT NULL COMMENT 'Employee id for whom this educational qualification is recorded',
  `edu_qual_id` int NOT NULL COMMENT 'Qualification id',
  `edu_qual_name` varchar(45) DEFAULT NULL COMMENT 'Qualification name',
  `edu_qual_institure` varchar(60) DEFAULT NULL COMMENT 'Institute from where the qualification is done',
  `edu_qual_board_univ` varchar(50) DEFAULT NULL COMMENT 'Board or University from where the qualification is done',
  `edu_qual_place` varchar(45) DEFAULT NULL COMMENT 'City, State from where qualification is done',
  `edu_qual_start_year` varchar(4) DEFAULT NULL COMMENT 'Start year for the qualification',
  `edu_qual_end_year` varchar(4) DEFAULT NULL COMMENT 'End year for the qualification',
  `edu_qual_per_grade` decimal(10,0) DEFAULT NULL COMMENT 'Percentage / grade obtained',
  `edu_qual_doc_id` int DEFAULT NULL COMMENT 'Document id of the uploaded image of the qualification',
  PRIMARY KEY (`edu_emp_id`,`edu_qual_id`),
  KEY `edu_qual_doc_id_idx` (`edu_qual_doc_id`),
  CONSTRAINT `edu_emp_id` FOREIGN KEY (`edu_emp_id`) REFERENCES `employee` (`emp_id`),
  CONSTRAINT `edu_qual_doc_id` FOREIGN KEY (`edu_qual_doc_id`) REFERENCES `documents` (`doc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Educational details of the emploee';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employee_leaves_master`
--

DROP TABLE IF EXISTS `employee_leaves_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_leaves_master` (
  `emp_leave_emp_id` int NOT NULL COMMENT 'Employee identifier',
  `emp_leave_period_start_date` date NOT NULL COMMENT 'Leave period start date for a leave type granted to employee',
  `emp_leave_period_end_date` date NOT NULL COMMENT 'Leave period end date for a leave type granted to employee',
  `emp_leave_type` varchar(30) NOT NULL COMMENT 'Granted leave type',
  `emp_leave_count` int NOT NULL COMMENT 'Number of leaves granted for the leave type',
  `emp_leave_consumed` int DEFAULT NULL COMMENT 'Number of leaves consumed by the employee for the leave type',
  PRIMARY KEY (`emp_leave_emp_id`,`emp_leave_period_start_date`,`emp_leave_period_end_date`,`emp_leave_type`),
  UNIQUE KEY `emp_id_UNIQUE` (`emp_leave_emp_id`),
  CONSTRAINT `emp_leave_emp_id` FOREIGN KEY (`emp_leave_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Define and maintain employees leaves for a leave period';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employee_roles`
--

DROP TABLE IF EXISTS `employee_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_roles` (
  `role_id` int NOT NULL,
  `role_name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Roles designations of employee';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `holidays`
--

DROP TABLE IF EXISTS `holidays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holidays` (
  `holiday_year` varchar(4) NOT NULL COMMENT 'Year for which the holiday is applicable',
  `holiday_date` date NOT NULL COMMENT 'Holiday Date',
  `holiday_for` varchar(60) NOT NULL COMMENT 'Occassion / Festival / Description of the holiday',
  `holiday_type` char(1) NOT NULL COMMENT 'Type of holiday - \\nP - Public\\nO - Optional Holiday',
  PRIMARY KEY (`holiday_year`,`holiday_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Yearly public holidays';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `incentive_details`
--

DROP TABLE IF EXISTS `incentive_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentive_details` (
  `incd_id` int NOT NULL AUTO_INCREMENT,
  `incd_incm_id` int NOT NULL,
  `incd_kpi_item_id` int NOT NULL,
  `incd_kpi_item_weightage` int DEFAULT NULL,
  `incd_kpi_item_max_inc_amt` decimal(10,0) DEFAULT NULL,
  `incd_kpi_inc_item_target` int DEFAULT NULL,
  `incd_kpi_inc_item_ach_val` decimal(10,0) DEFAULT NULL,
  `incd_kpi_inc_item_ach_per` decimal(10,0) DEFAULT NULL,
  `incd_kpi_inc_item_ach_amt` decimal(10,0) DEFAULT NULL,
  `incl_kpi_inc_remarks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`incd_id`),
  KEY `incd_kpi_item_id_idx` (`incd_kpi_item_id`),
  CONSTRAINT `incd_kpi_item_id` FOREIGN KEY (`incd_kpi_item_id`) REFERENCES `incentive_kpis` (`inc_kpi_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='Store the incentive targets and measurement summary at incentive KPIs level';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `incentive_kpis`
--

DROP TABLE IF EXISTS `incentive_kpis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentive_kpis` (
  `inc_kpi_item_id` int NOT NULL AUTO_INCREMENT,
  `inc_kpi_item_desc` varchar(60) NOT NULL,
  `inc_kpi_weightage` int DEFAULT NULL,
  `inc_kpi_effective_start_date` date DEFAULT NULL,
  `inc_kpi_effective_end_date` date DEFAULT NULL,
  PRIMARY KEY (`inc_kpi_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='Key performance indicators of incentive program';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `incentive_master`
--

DROP TABLE IF EXISTS `incentive_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentive_master` (
  `incm_id` int NOT NULL AUTO_INCREMENT,
  `incm_emp_id` int NOT NULL,
  `incm_start_date` date NOT NULL,
  `incm_end_date` date NOT NULL,
  `incm_portfolio` varchar(60) DEFAULT NULL,
  `incm_target_inc_amount` int DEFAULT NULL,
  `incm_archieved_inc_amount` int DEFAULT NULL,
  `incm_remarks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`incm_id`),
  UNIQUE KEY `incm_emp_id_date_UNIQUE` (`incm_emp_id`,`incm_start_date`,`incm_end_date`),
  CONSTRAINT `incm_emd_id` FOREIGN KEY (`incm_emp_id`) REFERENCES `employee` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COMMENT='Store the incentives defined at the employee and a period level';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `incentive_trans`
--

DROP TABLE IF EXISTS `incentive_trans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `incentive_trans` (
  `inc_trans_id` int NOT NULL AUTO_INCREMENT,
  `inc_tran_incd_id` int NOT NULL,
  `inc_tran_kpi_item_id` int NOT NULL,
  `inc_tran_achieved_val` int DEFAULT NULL,
  `inc_tran_record_date` date DEFAULT NULL,
  `inc_tran_remarks` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`inc_trans_id`),
  KEY `inc_tran_kpi_item_id_idx` (`inc_tran_kpi_item_id`),
  KEY `inc_tran_incd_id_idx` (`inc_tran_incd_id`),
  CONSTRAINT `inc_tran_incd_id` FOREIGN KEY (`inc_tran_incd_id`) REFERENCES `incentive_details` (`incd_id`),
  CONSTRAINT `inc_tran_kpi_item_id` FOREIGN KEY (`inc_tran_kpi_item_id`) REFERENCES `incentive_kpis` (`inc_kpi_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `leaves_master`
--

DROP TABLE IF EXISTS `leaves_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leaves_master` (
  `leave_type` varchar(30) NOT NULL COMMENT 'Leave Type',
  `leave_desc` varchar(100) DEFAULT NULL COMMENT 'Description / information about the leave type',
  `leave_count` int NOT NULL COMMENT 'Number of leaves allowed for this leave type in the given leave period',
  `leave_carry` char(1) DEFAULT NULL COMMENT 'Are leaves eligibible for carry over to the next leave period',
  `leave_encash` char(1) DEFAULT NULL COMMENT 'Are leaves eligible for encashment at the end of leave period',
  `leave_eligibility` int DEFAULT NULL COMMENT 'Eligibility criteria in number of days after joining the organisation',
  PRIMARY KEY (`leave_type`),
  UNIQUE KEY `leave_type_UNIQUE` (`leave_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Define the types and number of leaves supported for each leave type for a leave period';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `object_user_role_perm`
--

DROP TABLE IF EXISTS `object_user_role_perm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `object_user_role_perm` (
  `perm_sys_object_id` int NOT NULL,
  `perm_user_role_id` int NOT NULL,
  `create_perm` char(1) DEFAULT NULL,
  `read_perm` char(1) DEFAULT NULL,
  `update_perm` char(1) DEFAULT NULL,
  `delete_perm` char(1) DEFAULT NULL,
  `execute_perm` char(1) DEFAULT NULL,
  PRIMARY KEY (`perm_sys_object_id`,`perm_user_role_id`),
  KEY `perm_user_role_id_idx` (`perm_user_role_id`),
  CONSTRAINT `perm_sys_object_id` FOREIGN KEY (`perm_sys_object_id`) REFERENCES `system_objects` (`sys_object_id`),
  CONSTRAINT `perm_user_role_id` FOREIGN KEY (`perm_user_role_id`) REFERENCES `user_roles` (`user_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Access permissions corresponding to given user role';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `role_leaves_master`
--

DROP TABLE IF EXISTS `role_leaves_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_leaves_master` (
  `leave_period_start_date` date NOT NULL COMMENT 'Leave period start date',
  `leave_period_end_date` date NOT NULL COMMENT 'Leave period end date',
  `leave_role_id` int NOT NULL COMMENT 'Employee role id for which leave is defined',
  `leave_type` varchar(30) NOT NULL,
  `leave_count` int DEFAULT NULL COMMENT 'Number of leaves to be given for this employee role',
  PRIMARY KEY (`leave_period_start_date`,`leave_period_end_date`,`leave_role_id`,`leave_type`),
  KEY `leave_role_id_idx` (`leave_role_id`),
  KEY `leave_type_idx` (`leave_type`),
  CONSTRAINT `leave_role_id` FOREIGN KEY (`leave_role_id`) REFERENCES `employee_roles` (`role_id`),
  CONSTRAINT `leave_type` FOREIGN KEY (`leave_type`) REFERENCES `leaves_master` (`leave_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Define number of leaves eligible for given employee role for a leave period';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary` (
  `sal_id` int NOT NULL AUTO_INCREMENT,
  `sal_emp_id` int unsigned NOT NULL,
  `sal_start_date` date NOT NULL,
  `sal_end_date` date NOT NULL,
  `sal_num_days` decimal(10,0) DEFAULT NULL,
  `sal_basic` int DEFAULT NULL,
  `sal_hra` int DEFAULT NULL,
  `sal_conv_allow` int DEFAULT NULL,
  `sal_other_allow` int DEFAULT NULL,
  `sal_telephone_allow` int DEFAULT NULL,
  `sal_travel_allow` int DEFAULT NULL,
  `sal_provident_fund` int DEFAULT NULL,
  `sal_esic` int DEFAULT NULL,
  `sal_prof_tax` int DEFAULT NULL,
  `sal_security_amt` int DEFAULT NULL,
  `sal_tds_amt` int DEFAULT NULL,
  `sal_advance_sal` int DEFAULT NULL,
  `sal_gross_amt` int DEFAULT NULL,
  `sal_gross_ded_amt` int DEFAULT NULL,
  `sal_net_amt` int DEFAULT NULL,
  `sal_remarks` int DEFAULT NULL,
  PRIMARY KEY (`sal_id`),
  UNIQUE KEY `sal_emp_date_idx` (`sal_emp_id`,`sal_start_date`,`sal_end_date`),
  KEY `sal_emp_id_idx` (`sal_emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Salaries of employees';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `system_objects`
--

DROP TABLE IF EXISTS `system_objects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_objects` (
  `sys_object_id` int NOT NULL COMMENT 'Object id of the user interface or report used in the system',
  `sys_object_name` varchar(45) NOT NULL COMMENT 'Name of the user interface or report used in the system',
  PRIMARY KEY (`sys_object_id`),
  UNIQUE KEY `sys_object_id_UNIQUE` (`sys_object_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='User interface, reports used in the system';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` varchar(80) NOT NULL,
  `user_name` varchar(60) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_create_date` date NOT NULL,
  `user_status` char(1) DEFAULT NULL,
  `user_role_id` int NOT NULL,
  `user_contact_number_1` varchar(15) DEFAULT NULL,
  `user_contact_number_2` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `user_role_id_idx` (`user_role_id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`user_role_id`) REFERENCES `user_roles` (`user_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='User details';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_role_id` int NOT NULL COMMENT 'Identifier of the user role',
  `user_role_name` varchar(45) NOT NULL COMMENT 'User role name',
  PRIMARY KEY (`user_role_id`),
  UNIQUE KEY `user_role_id_UNIQUE` (`user_role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Store the system wide user roles';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-16 17:42:27