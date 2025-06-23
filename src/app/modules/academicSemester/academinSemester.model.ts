import { model, Schema } from "mongoose";
import { TAcademicSemester, TMonth } from "./academicSemester.interface";

const months: TMonth[]  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const academicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        enum: ["Autumn" , "Summer" , "Fall"],
        required: true
    },
    code: {
        type: String,
        enum: ["01" , "02" , "03"],
        required: true
    },
    year: {
        type: Date,
        required: true
    },
    startMonth: {
        type: String,
        enum: months
    },
    endMonth: {
        type: String,
        enum: months
    }
})

const AcademicSemester = model<TAcademicSemester>("AcademicSemester", academicSemesterSchema);

export default AcademicSemester;