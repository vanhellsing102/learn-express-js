import express, { NextFunction, Request, Response } from "express";
import { UserControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.validation";

const router = express.Router();

const validateRequest = (schema: AnyZodObject) =>{
    return async(req: Request, res: Response, next: NextFunction) =>{
        const newData = req.body;
        await schema.parseAsync(newData);
        next();
    }
}

router.post('/create-student', validateRequest(studentValidations.studentValidationSchema), UserControllers.createStudent);

export const UserRoutes = router;