import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error.interface";
import config from "../config";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>{
    let statusCode = err.statusCode || 500;
    let message = err?.message || "something went wrong";
    let errorSources: TErrorSources = [{
        path: "",
        message: "Something went wrong"
    }]
    const handleZodError = (err: ZodError) =>{
        const statusCode = 400;
        const message = "Validation error";
        const errorSources = err.issues.map((issue) =>{
            return {
                path: issue.path[issue.path.length - 1],
                message: issue.message
            }
        })
        return {
            statusCode,
            message,
            errorSources
        }
    }
    if(err instanceof ZodError){
        const simplifiedZodError = handleZodError(err);
        statusCode = simplifiedZodError.statusCode;
        message = simplifiedZodError.message;
        errorSources = simplifiedZodError.errorSources;
    }

  res.status(statusCode).json({
    success: false,
    message, 
    errorSources,
    stack: config.NODE_ENV === "development" ? err.stack : null
  })
}

export default globalErrorHandler;