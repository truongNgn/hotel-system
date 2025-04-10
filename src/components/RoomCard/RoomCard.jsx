const statusColors = {
  "Trống": "bg-green-600",
  "Đang sử dụng": "bg-red-600",
  "Đang dọn dẹp": "bg-yellow-400",
};

const RoomCard = ({ room, onClick }) => {
  return (
    <div
      className={`p-4 rounded-xl cursor-pointer text-center text-sm shadow-md ${statusColors[room.status] || "bg-gray-400"}`}
      onClick={onClick}
    >
      <div className="font-bold">Phòng {room.number}</div>
      <div>{room.type}</div>
      <div className="mt-2 text-xs">{room.status}</div>
      <div className="mt-1 text-xs">{room.price?.toLocaleString()} VND</div>
    </div>
  );
};

export default RoomCard;
