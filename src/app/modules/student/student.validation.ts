import { z } from "zod";

const studentValidationSchema = z.object({
  // id: z.string().optional(),
  // user: z.string().optional(),
  name: z.string().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  dateOfBirth: z.string().optional(),
  email: z.string().email("Email must be valid").optional(),
  contactNo: z.string().optional(),
  emergencyContactNo: z.string().optional(),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),
  presentAddress: z.string().optional(),
  parmanentAddress: z.string().optional(),
  guardian: z.object({
    fatherName: z.string().optional(),
    fatherOccupation: z.string().optional(),
    fatherContactNo: z.string().optional(),
    motherName: z.string().optional(),
    motherOccupation: z.string().optional(),
    motherContactNo: z.string().optional(),
  }).optional(),
  localGuardian: z.object({
    name: z.string().optional(),
    occupation: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
  profileImage: z.string().url().optional(),
  admissionSemester: z.string().optional()
});

export const studentValidations = {
    studentValidationSchema
}
