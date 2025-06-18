import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const { error, value } = studentValidationSchema.validate(student);
    // console.log({error}, {value});
    const result = await StudentServices.createStudentIntoDB(value);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'something went wrong',
        error: error.details
      });
    }
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All Student',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteStudent = async(req: Request, res: Response) =>{
  try {
    const {studentId} = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'student is deleted',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
    });
  }
}
export const StudentControllers = {
  createStudent,
  getAllStudent,
  deleteStudent
};
