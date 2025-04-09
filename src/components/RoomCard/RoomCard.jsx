const statusColors = {
    "Còn trống": "bg-green-600",
    "Đang sử dụng": "bg-red-600",
    "Đang dọn dẹp": "bg-yellow-400",
  };
  
  const RoomCard = ({ room, onClick }) => {
    return (
      <div
        className={`p-4 rounded-xl cursor-pointer text-center text-sm shadow-md ${statusColors[room.status]}`}
        onClick={onClick}
      >
        <div className="font-bold">{room.id}</div>
        <div>{room.name}</div>
        <div className="mt-2 text-xs">{room.status}</div>
      </div>
    );
  };
  
  export default RoomCard;
  