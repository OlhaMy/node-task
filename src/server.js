// src/server.js

import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import * as studentsServices from './services/students.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/students', async (req, res) => {
    const data = await studentsServices.getStudents();
    res.json({
      status: 200,
      message: 'Successfully get students',
      data,
    });
  });

  app.get('/students/:id', async (req, res) => {
    const { id } = req.params;
    const data = await studentsServices.getStudentById(id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: `Student with id=${id} not found`,
      });
    }
    res.json({
      status: 200,
      message: `Student with id=${id} is successfully`,
      data,
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
