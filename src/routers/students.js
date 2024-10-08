import { Router } from 'express';

import { getStudents, getStudentById } from '../services/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/students', ctrlWrapper(getStudents));
router.get('/students/:studentId', ctrlWrapper(getStudentById));

export default router;
