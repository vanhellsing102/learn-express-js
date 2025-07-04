import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

// parser---------------------------
app.use(express.json());
app.use(cors());


// routes------------------------
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});


app.use((err: any, req: Request, res: Response, next: NextFunction) =>{
  res.status(500).json({
    success: false,
    message: err?.message || "something went wrong"
  })
})
export default app;
