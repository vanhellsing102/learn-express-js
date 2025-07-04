import express from "express";
import { AcademicSemesterControllers } from "./academicSemester.controller";
import validateRequest from "../../middleware/validateRequest";
import { AcademicSemesterValidations } from "./academicSemester.validation";

const router = express.Router();

router.post('/create-academic-semester', validateRequest(AcademicSemesterValidations.academicSemesterValidationSchema), AcademicSemesterControllers.createAcademicSemester);
router.get('/', AcademicSemesterControllers.getAllAcademicSemester);
router.get('/:semesterId', AcademicSemesterControllers.getOneAcademicSemester);
router.patch('/:semesterId', AcademicSemesterControllers.updateAcademicSemester);

export const AcademicSemesterRoutes = router;