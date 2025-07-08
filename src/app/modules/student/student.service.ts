import mongoose from "mongoose";
import StudentModel from "./student.model"
import User from "../user/user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { TStudent } from "./student.interface";

const getAllStudentFromDB = async(query: Record<string, unknown>) =>{
    const queryObj = {...query};
    let searchTerm = "";
    if(query.searchTerm){
        searchTerm = query.searchTerm as string;
    }
    const excludeFields = ["searchTerm", "sort", "limit"];
    excludeFields.forEach((el) => delete queryObj[el]);
    const studentQuery = StudentModel.find({
        $or: ["name.middleName", "email"].map((field) =>({
            [field]: {$regex: searchTerm, $options: "i"}
        }))
    });
    const filterQuery = studentQuery.find(queryObj).populate("admissionSemester").populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    });
    let sort = "-createdAt";
    if(query.sort){
        sort = query.sort as string;
    }
    const sortQuery = filterQuery.sort(sort);
    let limit = 1;
    if(query.limit){
        limit = query.limit as number;
    }
    const limitQuery = sortQuery.limit(limit);
    return limitQuery;
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
const deleteStudentFromDB = async(studentId: string) =>{
    const isStudentExist = await StudentModel.findOne({id: studentId});
    if(!isStudentExist){
        throw new AppError(httpStatus.NOT_FOUND, "student not found");
    }
    const session = await mongoose.startSession();
    try{
        session.startTransaction();
        const deletedUser = await User.findOneAndUpdate({id: studentId}, {isDeleted: true}, {new: true, session});
        if(!deletedUser){
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user")
        }
        const deleteStudent = await StudentModel.findOneAndUpdate({id: studentId}, {isDeleted: true}, {new: true, session});
        if(!deleteStudent){
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete student")
        }
        await session.commitTransaction();
        await session.endSession();
        // console.log(deleteStudent);
        return deleteStudent;
    }catch(error){
        await session.abortTransaction();
        await session.endSession();
        throw new Error("Failed to delete student");
    }
}
const updateStudentInDB = async(studentId: string, payload: Partial<TStudent>) =>{
    const {name, guardian, localGuardian, ...remainingStudentData} = payload;
    const modifiedUpdatedData: Record<string, unknown> = {
        ...remainingStudentData
    };
    if(name && Object.keys(name).length){
        for(const [key, value] of Object.entries(name)){
            modifiedUpdatedData[`name.${key}`]= value;
        }
    }
    if(guardian && Object.keys(guardian).length){
        for(const [key, value] of Object.entries(guardian)){
            modifiedUpdatedData[`guardian.${key}`]= value;
        }
    }
    if(localGuardian && Object.keys(localGuardian).length){
        for(const [key, value] of Object.entries(localGuardian)){
            modifiedUpdatedData[`localGuardian. ${key}`]= value;
        }
    }
    const result = await StudentModel.findOneAndUpdate({id: studentId}, modifiedUpdatedData, {
        new: true, runValidators: true
    });
    return result;
}

export const StudentServices = {
    getAllStudentFromDB,
    getSingleStudentFromDB,
    deleteStudentFromDB,
    updateStudentInDB
}