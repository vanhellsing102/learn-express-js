import express from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import validateRequest from "../../middleware/validateRequest";
import { AcademicFacultyValidations } from "./academicFuculty.validation";

const router = express.Router();

router.post('/create-academic-faculty', validateRequest(AcademicFacultyValidations.academicFacultyValidationSchema), AcademicFacultyControllers.createAcademicFaculty);

export const AcademicFacultyRoutes = router;