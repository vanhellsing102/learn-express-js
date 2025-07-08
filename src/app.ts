import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { AcademicFacultyRoutes } from './app/modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from './app/modules/academicDepartment/academicDepartment.route';
import { StudentRoutes } from './app/modules/student/student.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
const app: Application = express();

// parser---------------------------
app.use(express.json());
app.use(cors());


// routes------------------------
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
app.use('/api/v1/academic-faculty', AcademicFacultyRoutes);
app.use('/api/v1/academic-department', AcademicDepartmentRoutes);

app.get('/', (req: Request, res: Response) => {
  // throw new Error();
  const a = "Murad";
  res.send(a);
  // Promise.reject();
});

// global error handler----
app.use(globalErrorHandler);

export default app;
