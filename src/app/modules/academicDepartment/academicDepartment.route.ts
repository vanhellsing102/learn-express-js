import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";

const router = express.Router();

router.post('/create-academic-department', validateRequest(AcademicDepartmentValidations.academicDepartmentValidationSchema), AcademicDepartmentControllers.createAcademicDepartment);

export const AcademicDepartmentRoutes = router;