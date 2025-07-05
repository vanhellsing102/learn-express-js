import StudentModel from "./student.model"

const getAllStudentFromDB = async() =>{
    const result = await StudentModel.find().populate("admissionSemester").populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    });
    return result;
}
const getSingleStudentFromDB = async(studentId: string) =>{
    const result = await StudentModel.findById(studentId).populate("admissionSemester").populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    });
    return result;
}

export const StudentServices = {
    getAllStudentFromDB,
    getSingleStudentFromDB
}