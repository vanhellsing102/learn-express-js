import StudentModel from "./student.model"

const getAllStudentFromDB = async() =>{
    const result = await StudentModel.find().populate("admissionSemester").populate("academicDepartment");
    return result;
}

export const StudentServices = {
    getAllStudentFromDB
}