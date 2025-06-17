import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await StudentServices.createStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async(req: Request, res: Response) =>{
    try{
        const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
        success: true,
        message: "All Student",
        data: result
    })
    }catch(error){
        console.log(error);
    }
}

export const StudentControllers = {
    createStudent,
    getAllStudent
}