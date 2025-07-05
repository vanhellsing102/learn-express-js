import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();
//validateRequest(AcademicDepartmentValidations.academicDepartmentValidationSchema),
router.post('/create-academic-department',  AcademicDepartmentControllers.createAcademicDepartment);
router.patch('/:academicDepartmentId', validateRequest(AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema), AcademicDepartmentControllers.updateAcademicDepertment);
router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);
router.get('/:academicDepartmentId', AcademicDepartmentControllers.getSingleAcademicDepartment);

export const AcademicDepartmentRoutes = router;