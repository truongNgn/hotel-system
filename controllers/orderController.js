// controllers/orderController.js
const db = require('../db/index'); // giả sử bạn dùng MySQL & có kết nối

const getCustomerAndRoom = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT 
  c.FullName AS customerName,
  r.RoomID
FROM Customer c
JOIN OrderSV o ON c.CustomerID = o.CustomerID
JOIN OrderDetail od ON od.OrderID = o.OrderID
JOIN Room r ON r.RoomID = od.RoomID
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching CustomerID and RoomID:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCustomerAndRoom };


