import { model, Schema } from "mongoose";
import { Student } from "./student.interface";
import validator from 'validator';


const studentSchema = new Schema<Student>({
    id: {
        type: String, 
        // unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true,
            trim: true,
            maxLength: [20, "first name can not be more than 20 character"],
            validate: {
                validator: function(value: string){
                // console.log(value);
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return value === firstNameStr;
            },
            message: "{VALUE} is not capitalize format"
            }
        },
        middleName: {
            type: String
        },
        lastName: {
            type: String,
            validate: {
                validator: (value: string) =>validator.isAlpha(value),
                message: "{VALUE} is not valid"
            }
        }
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
        type: String
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
    profileImage: String,
    isActive: {
        type: String,
        enum: ["active", "inActive"],
        default: "active"
    }
})

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;