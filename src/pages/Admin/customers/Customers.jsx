import React from "react";

const Customer = () => {
  return (
    <div className="p-6 space-y-10 ">
      {/* Lịch sử đặt phòng */}
      <section className="bg-gray-500 rounded-xl p-4 text-white space-y-4">
        <h2 className="text-lg font-semibold">Lịch sử đặt phòng của khách hàng</h2>
        <div className="flex flex-wrap gap-4 items-center ">
          <label className="font-medium">Tên</label>
          <input type="text" placeholder="Nhập tên" className="px-2 py-1 rounded text-black bg-white" />
          <label className="font-medium">Đặt ngày</label>
          <input type="date" className="px-2 py-1 rounded text-black bg-white" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4 bg-white overflow-hidden  rounded-xl">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Code book</th>
                <th className="px-4 py-2">Tên</th>
                <th className="px-4 py-2">Đặt ngày</th>
                <th className="px-4 py-2">Phòng</th>
                <th className="px-4 py-2">Số ngày</th>
                <th className="px-4 py-2">Trả trước</th>
                <th className="px-4 py-2">Tạo ngày</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 h-[300px]">
              {/* Dữ liệu sẽ được render tại đây */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Danh sách khách hàng */}
      <section className="bg-gray-500 rounded-xl p-4 text-white space-y-4">
        <h2 className="text-lg font-semibold ">Danh sách khách hàng</h2>
        <div className="flex flex-wrap gap-4 items-center ">
          <label className="text-white">Mã khách hàng</label>
          <input
            type="text"
            placeholder="Nhập mã"
            className="px-2 py-1 rounded text-black bg-white border border-black"
          />

          <label className="text-white">Tên khách hàng</label>
          <input
            type="text"
            placeholder="Nhập tên"
            className="px-2 py-1 rounded text-black bg-white border border-black"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left mt-4 bg-white rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Mã khách hàng</th>
                <th className="px-4 py-2">Tên</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200 h-[300px]">
              {/* Dữ liệu sẽ được render tại đây */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Customer;
