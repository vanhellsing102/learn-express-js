import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error.interface";
import config from "../config";
import handleZodError from "../errors/handleZodError";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppError";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>{
    let statusCode = 500;
    let message = "something went wrong";
    let errorSources: TErrorSources = [{
        path: "",
        message: "Something went wrong"
    }]
    if(err instanceof ZodError){
        const simplifiedZodError = handleZodError(err);
        statusCode = simplifiedZodError.statusCode;
        message = simplifiedZodError.message;
        errorSources = simplifiedZodError.errorSources;
    }
    else if(err.name === "ValidationError"){
        const simplifiedValidationError = handleValidationError(err);
        statusCode = simplifiedValidationError.statusCode;
        message = simplifiedValidationError.message;
        errorSources = simplifiedValidationError.errorSources;
    } else if(err.name === "CastError"){
        const simplifiedCastError = handleCastError(err);
        statusCode = simplifiedCastError.statusCode;
        message = simplifiedCastError.message;
        errorSources = simplifiedCastError.errorSources;
    } else if(err.code === 11000){
        const simplifiedDuplicateError = handleDuplicateError(err);
        statusCode = simplifiedDuplicateError.statusCode;
        message = simplifiedDuplicateError.message;
        errorSources = simplifiedDuplicateError.errorSources;
    } else if(err instanceof AppError){
        statusCode = err.statusCode;
        message = err.message;
        errorSources = [{
            path: "",
            message: err.message
        }];
    } else if(err instanceof Error){
        message = err.message;
        errorSources = [{
            path: "",
            message: err.message
        }];
    }

  res.status(statusCode).json({
    success: false,
    message, 
    errorSources,
    // err,
    stack: config.NODE_ENV === "development" ? err.stack : null
  })
}

export default globalErrorHandler;