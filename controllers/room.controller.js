const db = require('../db/index');

exports.getAllRooms = (req, res) => {
  const query = "SELECT * FROM Room";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn DB:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};
