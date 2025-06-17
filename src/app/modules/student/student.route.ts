import express from "express";
import { StudentControllers } from "./student.controller";

const router = express.Router();
router.post('/create-student', StudentControllers.createStudent);
router.get('/all-student', StudentControllers.getAllStudent);

export const StudentRoutes = router;