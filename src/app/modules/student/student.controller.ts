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
const getSingleStudent = catchAsync(async(req, res) =>{
    const {studentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Get single student successfully",
        data: result
    })
})

export const StudentControllers = {
    getAllStudent,
    getSingleStudent
}