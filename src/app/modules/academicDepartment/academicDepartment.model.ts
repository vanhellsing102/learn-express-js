import { model, Schema } from "mongoose";
import { TAcademicDepartment } from "./academicDepartment.interface";
import AppError from "../../errors/AppError";

const academicDepartmentSchema = new Schema<TAcademicDepartment>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    academicFaculty: {
        type: Schema.Types.ObjectId,
        ref: "AcademicFaculty"
    }
}, {
    timestamps: true
})

academicDepartmentSchema.pre("save", async function(next){
    const isDepartmentExits = await AcademicDepartment.findOne({name: this.name});
    if(isDepartmentExits){
        throw new AppError(404, "This department is already exists");
    }
    next();
})
academicDepartmentSchema.pre("findOneAndUpdate", async function(next){
    const query = this.getQuery();
    // console.log(query);
    const isExitsDepartment = await AcademicDepartment.findById(query);
    if(!isExitsDepartment){
        throw new AppError(404, "This department does not exits");
    }
    next();
})

export const AcademicDepartment = model<TAcademicDepartment>("AcademicDepartment", academicDepartmentSchema);