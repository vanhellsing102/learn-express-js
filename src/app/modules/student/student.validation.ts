import Joi from 'joi';

const studentValidationSchema = Joi.object({
  id: Joi.string(),
  password: Joi.string().required(),
  name: Joi.object({
    firstName: Joi.string()
      .trim()
      .max(20)
      .pattern(/^[A-Z][a-zA-Z]*$/)
      .required()
      .messages({
        'string.pattern.base': 'First name must start with a capital letter',
        'string.max': 'First name can not be more than 20 characters',
        'any.required': 'First name is required',
      }),
    middleName: Joi.string().optional(),
    lastName: Joi.string()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'string.pattern.base': 'Last name must contain only letters',
      }),
  }),

  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'any.only': "Gender must be 'male', 'female', or 'other'",
    'any.required': 'Gender is required',
  }),

  dateOfBirth: Joi.string().optional(),

  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'any.required': 'Email is required',
  }),

  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required',
  }),

  emergencyContactNo: Joi.string().optional(),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),

  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required',
  }),

  parmanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required',
  }),

  guardian: Joi.object({
    fatherName: Joi.string().optional(),
    fatherOccupation: Joi.string().optional(),
    fatherContactNo: Joi.string().optional(),
    motherName: Joi.string().optional(),
    motherOccupation: Joi.string().optional(),
    motherContactNo: Joi.string().optional(),
  }),

  localGuardian: Joi.object({
    name: Joi.string().optional(),
    occupation: Joi.string().optional(),
    contactNo: Joi.string().optional(),
    address: Joi.string().optional(),
  }),

  profileImage: Joi.string().uri().optional(),

  isActive: Joi.string().valid('active', 'inActive').default('active'),
});

export default studentValidationSchema;