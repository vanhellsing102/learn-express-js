import express from "express";
import { StudentControllers } from "./student.controller";
import validateRequest from "../../middleware/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get('/', StudentControllers.getAllStudent);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.patch('/:studentId', validateRequest(studentValidations.updateStudentValidationSchema), StudentControllers.updateStudent);

export const StudentRoutes = router;