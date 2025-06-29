import { model, Schema } from "mongoose";
import { TStudent } from "./student.interface";


const studentSchema = new Schema<TStudent>({
    id: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User id must be required"],
        unique: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "{VALUE} is not valid"
        },
        required: [true, "Gender is required"]
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    contactNo: {
        type: String,
        required: [true, "Contact is required"]
    },
    emergencyContactNo: {
        type: String,
    },
    bloodGroup: {
        type:String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]
    },
    presentAddress: {
        type: String,
        required: [true, "Address is required"]
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
    profileImage: {
        type: String
    }
});





const StudentModel = model<TStudent>('Student', studentSchema);
export default StudentModel;