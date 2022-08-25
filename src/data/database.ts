import 'dotenv/config';
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const database = mongoose.createConnection(MONGODB_URI || '');

export default database;