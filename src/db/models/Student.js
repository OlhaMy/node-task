import { Schema, model } from 'mongoose';

const studentSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },

    gender: {
      type: String,
      require: true,
    },
  },
  { versionKey: false, timeseries: true },
);

const StudentCollection = model('student', studentSchema);

export default StudentCollection;
