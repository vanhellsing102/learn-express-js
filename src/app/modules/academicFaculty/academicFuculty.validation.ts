import { z } from "zod";

const academicFacultyValidationSchema = z.object({
    name: z.string({invalid_type_error: "Academic faculty must be a string"})
})
const updateAcademicFacultyValidationSchema = z.object({
    name: z.string({invalid_type_error: "Academic faculty must be a string"})
})

export const AcademicFacultyValidations = {
    academicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
};
