import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service"

const createAcademicSemester = catchAsync(async(req, res) =>{
    const result = await AcademicSemesterServices.createAcademicSemesterInDB(req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester created successfully",
        data: result
    })
})
const getAllAcademicSemester = catchAsync(async(req, res) =>{
    const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrive all academic semester",
        data: result
    })
})
const getOneAcademicSemester = catchAsync(async(req, res) =>{
    const {semesterId} = req.params;
    const result = await AcademicSemesterServices.getOneAcademicSemesterFromDB(semesterId);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retrived academic semester",
        data: result
    })
})
const updateAcademicSemester = catchAsync(async(req, res) =>{
    const {semesterId} = req.params;
    const updatedAcademicSemesterData = req.body;
    const result = await AcademicSemesterServices.updateAcademicSemesterFromDB(semesterId, updatedAcademicSemesterData);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Academic semester updated successfully",
        data: result
    })
})

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getOneAcademicSemester,
    updateAcademicSemester
}