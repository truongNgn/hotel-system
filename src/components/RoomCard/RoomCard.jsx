const statusColors = {
    "Còn trống": "bg-green-400",
    "Đang sử dụng": "bg-red-400",
    "Đang dọn dẹp": "bg-yellow-300",
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
  