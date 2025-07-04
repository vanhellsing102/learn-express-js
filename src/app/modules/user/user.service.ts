import config from "../../config";
import AcademicSemester from "../academicSemester/academinSemester.model";
import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.model";
import { TUser } from "./user.interface";
import User from "./user.model"
import generatedStudentId from "./user.utils";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";

const createStudentInDB = async(password: string, studentData: TStudent) =>{
    const userData: Partial<TUser> = {};
    userData.password = password || config.default_password as string;
    userData.role = "student";
    const admissionSemester = await AcademicSemester.findById(studentData.admissionSemester);
    userData.id = await generatedStudentId(admissionSemester as TAcademicSemester);
    const newUser = await User.create(userData);
    if(Object.keys(newUser).length){
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = await StudentModel.create(studentData);
        return newStudent;
    }
}

export const UserServices = {
    createStudentInDB,
}