import { Student } from "./student.interface";
import StudentModel from "./student.model";

const createStudentIntoDB = async(student: Student) =>{
    // build in static method---------------------------------
    // const result = await StudentModel.create(student);
    // return result;
    // instanse method-------------
    const data = new StudentModel(student); 
    await data.save();
    return data;
}

const getAllStudentFromDB = async() =>{
    const result = await StudentModel.find();
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB
}