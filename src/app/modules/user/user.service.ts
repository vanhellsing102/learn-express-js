import config from "../../config";
import AcademicSemester from "../academicSemester/academinSemester.model";
import { TStudent } from "../student/student.interface";
import StudentModel from "../student/student.model";
import { TUser } from "./user.interface";
import User from "./user.model"
import generatedStudentId from "./user.utils";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createStudentInDB = async(password: string, studentData: TStudent) =>{
    const userData: Partial<TUser> = {};
    userData.password = password || config.default_password as string;
    userData.role = "student";
    const admissionSemester = await AcademicSemester.findById(studentData.admissionSemester);
    // start session---
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        userData.id = await generatedStudentId(admissionSemester as TAcademicSemester);
        // transaction -1---
        const newUser = await User.create([userData], {session});
        if(!newUser.length){
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
        }
        studentData.id = newUser[0].id;
        studentData.user = newUser[0]._id;
        // transaction -2
        const newStudent = await StudentModel.create([studentData], {session});
        if(!newStudent){
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create student");
        }
        await session.commitTransaction();
        await session.endSession();
        return newStudent;
    }catch(error){
        await session.abortTransaction();
        await session.endSession();
    }
}

export const UserServices = {
    createStudentInDB,
}