import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.service";

const createAcademicDepartment = catchAsync(async(req, res) =>{
    const academicDepartmentData = req.body;
    const result = await AcademicDepartmentServices.createAcademicDepartmentInDB(academicDepartmentData);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic department created successfully",
        data: result
    })
})
const updateAcademicDepertment = catchAsync(async(req, res) =>{
    const {academicDepartmentId} = req.params;
    const result = await AcademicDepartmentServices.updateAcademicDepertmentFromDB(academicDepartmentId, req.body);
    sendResponse(res, {
        statusCode: 200,
        message: "Academic department updated successfully",
        success: true,
        data: result
    })
})
const getAllAcademicDepartment = catchAsync(async(req, res) =>{
    const result = await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
    sendResponse(res, {
        statusCode: 200,
        message: "Retrived all academic department successfully",
        success: true,
        data: result
    })
})
const getSingleAcademicDepartment = catchAsync(async(req, res) =>{
    const {academicDepartmentId} = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(academicDepartmentId);
    sendResponse(res, {
        statusCode: 200,
        message: "Retrived single academic department",
        success: true,
        data: result
    })
})

export const AcademicDepartmentControllers = {
    createAcademicDepartment,
    updateAcademicDepertment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment
}