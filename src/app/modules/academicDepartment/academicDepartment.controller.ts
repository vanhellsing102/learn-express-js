import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async(req, res) =>{
    const result = await AcademicDepartmentServices.createAcademicDepartmentInDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic department created successfully",
        data: result
    })
})

export const AcademicDepartmentControllers = {
    createAcademicDepartment
}