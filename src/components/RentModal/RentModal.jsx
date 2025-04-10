import { useEffect, useState } from "react";
import axios from "axios";

const RentModal = ({ room, onClose }) => {
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const res = await axios.get("/api/orders/customer-room");
        const data = res.data;
        const found = data.find(item => item.RoomNumber === room.number);
        if (found) {
          setCustomerName(found.customerName); // hoặc found.FullName nếu chưa đổi alias
        }
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu khách thuê:", err);
      }
    };

    if (room.status === "Đang sử dụng") {
      fetchCustomer();
    }
  }, [room]);
  return (
    <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center">
      <div className="bg-gray-100 rounded-xl w-[500px] relative overflow-hidden">

        {/* Header có màu blue */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-6 py-4">
          <h2 className="font-bold text-xl">Thuê phòng</h2>
          <button onClick={onClose} className="bg-black hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
            ×
          </button>
        </div>

        {/* Nội dung form */}
        <div className="p-6 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-3 font-bold">
            <label>
              Thuê phòng:
              <input defaultValue={room.id} className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              Giá:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              Ngày vào:
              <input type="date" className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              Lúc:
              <input type="time" className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label className="col-span-2">
              Tên khách hàng:
              <input
                className="w-full border px-2 py-1 rounded text-black font-normal"
                value={customerName}
                disabled={room.status === "Đang sử dụng"}
                onChange={(e) => setCustomerName(e.target.value)}

              />
            </label>
            <label className="col-span-2">
              Địa chỉ:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              Số ngày định ở:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label>
              CMND/Passport:
              <input className="w-full border px-2 py-1 rounded text-black font-normal" />
            </label>
            <label className="col-span-2">
              Ghi chú:
              <textarea className="w-full border px-2 py-1 rounded text-black font-normal" rows="3" />
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="bg-red-400 text-white px-4 py-1 rounded">Hủy</button>
            <button className="bg-green-500 text-white px-4 py-1 rounded">Thuê phòng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentModal;