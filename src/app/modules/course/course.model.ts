import { model, Schema } from "mongoose";
import { TCourse, TPreRequisitCourses } from "./course.interface";

const preRequisitCoursesSchema = new Schema<TPreRequisitCourses>({
    course: {
        type: Schema.Types.ObjectId
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const courseSchema = new Schema<TCourse>({
    title: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    prefix: {
        type: String,
        trim: true,
        required: true
    },
    code: {
        type: Number,
        trim: true,
        required: true
    },
    credits: {
        type: Number,
        trim: true,
        required: true
    },
    preRequisitCourses: [preRequisitCoursesSchema]
})

export const Course = model<TCourse>("Course", courseSchema);