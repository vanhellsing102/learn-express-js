import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateRequest = (schema: AnyZodObject) =>{
    return async(req: Request, res: Response, next: NextFunction) =>{
        try{
            const newData = req.body;
            await schema.parseAsync(newData);
            next();
        }catch(error){
            next(error);
        }
    }
}

export default validateRequest;