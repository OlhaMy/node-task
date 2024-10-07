import { getStudents } from '../services/students.js';
import { getStudentById } from '../services/students.js';

export const getStudentsController = async (req, res) => {
  const students = await getStudents();

  res.json({
    status: 200,
    message: 'Successfully found students!',
    data: students,
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({
      message: 'Student not found',
    });
    return;
  }

  res.json({
    status: 200,
    message: `Successfully found student with id ${studentId}!`,
    data: student,
  });
};
