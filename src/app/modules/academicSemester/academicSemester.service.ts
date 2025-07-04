import { TAcademicSemester } from "./academicSemester.interface"
import AcademicSemester from "./academinSemester.model"

const createAcademicSemesterInDB = async(academicSemesterData: TAcademicSemester) =>{
    type TAcademicSemesterNameAndCodeMapper = {
        [key: string]: string;
    }
    const academicSemesterNameAndCodeMapper: TAcademicSemesterNameAndCodeMapper = {
        Autumn: "01",  
        Summer: "02",
        Fall: "03"
    }
    if(academicSemesterNameAndCodeMapper[academicSemesterData.name] !== academicSemesterData.code){
        throw new Error("Invalid semester code");
    }
    const result = await AcademicSemester.create(academicSemesterData);
    return result;
}
const getAllAcademicSemesterFromDB = async() =>{
    const result = await AcademicSemester.find();
    return result;
}
const getOneAcademicSemesterFromDB = async(semesterId: string) =>{
    const result = await AcademicSemester.findById(semesterId);
    return result;
}
const updateAcademicSemesterFromDB = async(semesterId: string, updatedAcademicSemesterData: TAcademicSemester) =>{
    type TAcademicSemesterNameAndCodeMapper = {
        [key: string]: string;
    }
    const academicSemesterNameAndCodeMapper: TAcademicSemesterNameAndCodeMapper = {
        Autumn: "01",  
        Summer: "02",
        Fall: "03"
    }
    if(updatedAcademicSemesterData.name && updatedAcademicSemesterData.code && academicSemesterNameAndCodeMapper[updatedAcademicSemesterData.name] !== updatedAcademicSemesterData.code){
        throw new Error("Invalid semester code");
    }
    const result = await AcademicSemester.findByIdAndUpdate(semesterId, updatedAcademicSemesterData);
    return result;
}
export const AcademicSemesterServices = {
    createAcademicSemesterInDB,
    getAllAcademicSemesterFromDB,
    getOneAcademicSemesterFromDB,
    updateAcademicSemesterFromDB
}