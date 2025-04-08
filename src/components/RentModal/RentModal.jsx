const RentModal = ({ room, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <div className="bg-white rounded-xl p-6 w-[500px] relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl text-blue-600">Thuê phòng</h2>
            <button onClick={onClose} className="text-red-500 font-bold text-xl">×</button>
          </div>
  
          <div className="grid grid-cols-2 gap-3 text-sm">
            <label>
              Thuê phòng:
              <input defaultValue={room.id} className="w-full border px-2 py-1 rounded" />
            </label>
            <label>
              Giá:
              <input className="w-full border px-2 py-1 rounded" />
            </label>
            <label>
              Ngày vào:
              <input type="date" className="w-full border px-2 py-1 rounded" />
            </label>
            <label>
              Lúc:
              <input type="time" className="w-full border px-2 py-1 rounded" />
            </label>
            <label className="col-span-2">
              Tên khách hàng:
              <input className="w-full border px-2 py-1 rounded" />
            </label>
            <label className="col-span-2">
              Địa chỉ:
              <input className="w-full border px-2 py-1 rounded" />
            </label>
            <label>
              Số ngày định ở:
              <input className="w-full border px-2 py-1 rounded" />
            </label>
            <label>
              CMND/Passport:
              <input className="w-full border px-2 py-1 rounded" />
            </label>
            <label className="col-span-2">
              Ghi chú:
              <textarea className="w-full border px-2 py-1 rounded" rows="3" />
            </label>
          </div>
  
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={onClose} className="bg-red-400 text-white px-4 py-1 rounded">Hủy</button>
            <button className="bg-green-500 text-white px-4 py-1 rounded">Thuê phòng</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default RentModal;
  