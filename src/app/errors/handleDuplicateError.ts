import { TErrorSources, TGenericErrorResponse } from "../interface/error.interface";

const handleDuplicateError = (err: any): TGenericErrorResponse =>{
    const match = err.message.match(/"([^"]*)"/);
    const extractMessage = match && match[1];
    const statusCode = 409;
    const message = "Duplicate key error";
    const errorSources: TErrorSources = [{
        path: "",
        message: `${extractMessage} is already exist`
    }]
    return {
        statusCode,
        message,
        errorSources
    }
}

export default handleDuplicateError;