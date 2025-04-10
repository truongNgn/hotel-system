import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './db/index.js'; // DB connection

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route: Lấy danh sách phòng
app.get('/api/rooms', (req, res) => {
  const sql = 'SELECT * FROM Room';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('❌ Lỗi truy vấn:', err);
      return res.status(500).json({ error: 'Lỗi truy vấn dữ liệu' });
    }
    res.json(result);
  });
});

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`✅ Server is running on port ${PORT}`));
