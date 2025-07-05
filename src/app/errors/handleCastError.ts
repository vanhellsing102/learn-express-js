import mongoose from "mongoose";
import { TErrorSources, TGenericErrorResponse } from "../interface/error.interface";

const handleCastError = (err: mongoose.Error.CastError): TGenericErrorResponse =>{
    const statusCode = 404;
    const message = "Invalid Id"
    const errorSources: TErrorSources = [{
        path: err.path,
        message: err.message
    }]
    return {
        statusCode,
        message,
        errorSources
    }
}

export default handleCastError;