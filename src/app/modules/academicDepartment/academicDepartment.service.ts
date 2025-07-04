import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentInDB = async(payload: TAcademicDepartment) =>{
    const result = await AcademicDepartment.create(payload);
    return result;
}

export const AcademicDepartmentServices = {
    createAcademicDepartmentInDB
}