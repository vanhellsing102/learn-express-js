import { z } from "zod";

const studentValidationSchema = z.object({
  id: z.string().optional(),

  user: z.string({
    required_error: "User id must be required",
  }),

  name: z.string({
    required_error: "Name is required",
  }),

  gender: z.enum(["male", "female", "other"], {
    required_error: "Gender is required",
    invalid_type_error: "Gender must be male, female or other",
  }),

  dateOfBirth: z.string().optional(),

  email: z.string({
    required_error: "Email is required",
  }).email("Email must be valid"),

  contactNo: z.string({
    required_error: "Contact is required",
  }),

  emergencyContactNo: z.string().optional(),

  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]).optional(),

  presentAddress: z.string({
    required_error: "Present address is required",
  }),

  parmanentAddress: z.string({
    required_error: "Permanent address is required",
  }),

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

  isDeleted: z.boolean().optional()
});

export const studentValidations = {
    studentValidationSchema,
}
