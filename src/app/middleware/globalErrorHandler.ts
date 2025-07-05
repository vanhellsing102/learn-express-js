import { NextFunction, Request, Response } from "express"
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error.interface";
import config from "../config";
import handleZodError from "../errors/handleZodError";
import handleValidationError from "../errors/handleValidationError";

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>{
    let statusCode = err.statusCode || 500;
    let message = err?.message || "something went wrong";
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