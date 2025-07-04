import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentInDB = async(payload: TAcademicDepartment) =>{
    const result = await AcademicDepartment.create(payload);
    return result;
}
const updateAcademicDepertmentFromDB = async(academicDepartmentId: string, payload: Partial<TAcademicDepartment>) =>{
    const result = await AcademicDepartment.findByIdAndUpdate(academicDepartmentId, payload);
    return result;
}
const getAllAcademicDepartmentFromDB = async() =>{
    const result = await AcademicDepartment.find().populate("academicFaculty");
    return result;
}
const getSingleAcademicDepartmentFromDB = async(academicDepartmentId: string) =>{
    const result = await AcademicDepartment.findById(academicDepartmentId).populate("academicFaculty");
    return result;
}
export const AcademicDepartmentServices = {
    createAcademicDepartmentInDB,
    updateAcademicDepertmentFromDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB
}