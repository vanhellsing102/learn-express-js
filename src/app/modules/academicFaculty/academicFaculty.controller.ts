import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async(req, res) =>{
    const result = await AcademicFacultyServices.createAcademicFacultyInDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic faculty created successfully",
        data: result
    })
})

export const AcademicFacultyControllers = {
    createAcademicFaculty
}