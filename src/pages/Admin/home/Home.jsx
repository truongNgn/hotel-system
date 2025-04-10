import { useState } from "react";
import RoomCard from "../../../components/RoomCard";
import RentModal from "../../../components/RentModal";

const roomsData = [
  { id: "P001", name: "Phòng 001", status: "Còn trống" },
  { id: "P002", name: "Phòng 002", status: "Đang sử dụng" },
  { id: "P003", name: "Phòng 003", status: "Đang dọn dẹp" },
  // Các phòng còn lại...
];

const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const openModal = (room) => setSelectedRoom(room);
  const closeModal = () => setSelectedRoom(null);

  return (
    <div className="p-4 space-y-6">
      {/* Bộ lọc */}
      <div className="bg-blue-500 p-4 rounded-xl flex gap-4 flex-wrap items-center text-white">
        <label>
          Tầng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
        <label>
          Trạng thái phòng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
        <label>
          Loại phòng <input type="text" className="ml-1 rounded px-2 text-black bg-white" />
        </label>
      </div>

      {/* Danh sách phòng */}
      <div className="grid grid-cols-4 gap-4">
        {roomsData.map((room) => (
          <RoomCard key={room.id} room={room} onClick={() => openModal(room)} />
        ))}
      </div>

      {/* Modal thuê phòng */}
      {selectedRoom && (
        <RentModal room={selectedRoom} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
