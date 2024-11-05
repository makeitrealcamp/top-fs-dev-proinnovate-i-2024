import mongoose from 'mongoose';
import { MONGO_URI } from '../config/config';

export const mongooseConnect = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}`);
    console.log('Connected to the database with Mongoose');
  } catch (error) {
    console.error('Unable to connect to the database');
    console.error(error);
  }
};
