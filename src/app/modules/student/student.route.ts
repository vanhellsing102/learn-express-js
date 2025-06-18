import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();
router.post('/create-student', StudentControllers.createStudent);
router.get('/all-student', StudentControllers.getAllStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);

export const StudentRoutes = router;