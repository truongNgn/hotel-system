import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/index.js'; // DB connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
