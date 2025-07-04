import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StudentServices } from "./student.service";

const getAllStudent = catchAsync(async(req, res) =>{
    const result = await StudentServices.getAllStudentFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Get all student successfully",
        data: result
    })
})

export const StudentControllers = {
    getAllStudent
}