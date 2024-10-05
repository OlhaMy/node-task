import StudentCollection from '../db/models/Student.js';

export const getStudents = () => StudentCollection.find();

export const getStudentById = (id) => StudentCollection.findById();
