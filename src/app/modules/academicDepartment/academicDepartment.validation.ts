import { z } from "zod";

const academicDepartmentValidationSchema = z.object({
    name: z.string({
        invalid_type_error: "Academic department name must be string",
        required_error: "Academic department required"
    }),
    academicFaculty: z.string({
        invalid_type_error: "Academic department name must be string",
        required_error: "Academic department required"
    })
})

const updateAcademicDepartmentValidationSchema = z.object({
    name: z.string({
        invalid_type_error: "Academic department name must be string",
        required_error: "Academic department required"
    }).optional(),
    academicFaculty: z.string({
        invalid_type_error: "Academic department name must be string",
        required_error: "Academic department required"
    }).optional()
})
export const AcademicDepartmentValidations = {
    academicDepartmentValidationSchema,
    updateAcademicDepartmentValidationSchema
}