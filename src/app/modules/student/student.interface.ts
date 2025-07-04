import { Types } from "mongoose";

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}

export type TStudent = {
    id: string;
    user: Types.ObjectId;
    name: string;
    gender: "male"|"female";
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: "A+"| "A-"| "B+"| "B-"| "AB+"| "AB-"| "O+"| "O-";
    presentAddress: string;
    parmanentAddress: string;
    guardian: {
        fatherName: string; 
        fatherOccupation: string;
        fatherContactNo: string;
        motherName: string; 
        motherOccupation: string;
        motherContactNo: string;
    }
    localGuardian: TLocalGuardian;
    profileImage?: string;
    admissionSemester: Types.ObjectId;
    academicDepartment: Types.ObjectId;
}
