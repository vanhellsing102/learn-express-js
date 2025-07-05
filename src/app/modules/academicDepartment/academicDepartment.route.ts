import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();
router.post('/create-academic-department', validateRequest(AcademicDepartmentValidations.academicDepartmentValidationSchema), AcademicDepartmentControllers.createAcademicDepartment);
router.patch('/:academicDepartmentId', validateRequest(AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateAcademicDepertment);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);
router.get('/:academicDepartmentId', AcademicDepartmentControllers.getSingleAcademicDepartment);

export const AcademicDepartmentRoutes = router;