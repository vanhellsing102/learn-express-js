import { model, Schema } from "mongoose";
import { Student } from "./student.interface";


const studentSchema = new Schema<Student>({
    id: String,
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    gender: ["male", "female"],
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
    },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    presentAddress: {
        type: String,
        required: true
    },
    parmanentAddress: {
        type: String,
        required: true
    },
    guardian: {
        fatherName: {
            type: String
        },
        fatherOccupation: {
            type: String
        },
        fatherContactNo: String,
        motherName: String,
        motherOccupation: String,
        motherContactNo: String
    },
    localGuardian: {
        name: String,
        occupation: String,
        contactNo: String,
        address: String
    },
    profileImage: String,
    isActive: ["active", "inActive"]
})

const Student = model<Student>('Student', studentSchema);

export default Student;