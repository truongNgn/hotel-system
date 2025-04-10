import React from "react";

const dummyInvoices = [
  {
    id: "HD001",
    room: "P101",
    customer: "Trần Văn B",
    createdAt: "2025-04-01",
    creator: "Admin",
    total: 2000000,
    status: "Đã thanh toán",
    branch: "Chi nhánh 1"
  },
];

const InvoicesPage = () => {
  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Danh sách hóa đơn</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2">
            Từ ngày
            <input type="date" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
          <label className="flex items-center gap-2">
            đến
            <input type="date" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
          <label className="flex items-center gap-2">
            Trạng thái
            <input type="text" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
          <label className="flex items-center gap-2">
            Chi nhánh
            <input type="text" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Mã hóa đơn</th>
              <th className="p-3 text-left">Phòng</th>
              <th className="p-3 text-left">Tên khách hàng</th>
              <th className="p-3 text-left">Ngày lập</th>
              <th className="p-3 text-left">Người lập</th>
              <th className="p-3 text-left">Tổng tiền</th>
              <th className="p-3 text-left">Trạng thái</th>
              <th className="p-3 text-left">Chi nhánh</th>
              <th className="p-3 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dummyInvoices.map((invoice, index) => (
              <tr key={invoice.id} className="bg-white hover:bg-gray-300 transition text-black">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{invoice.id}</td>
                <td className="p-3">{invoice.room}</td>
                <td className="p-3">{invoice.customer}</td>
                <td className="p-3">{invoice.createdAt}</td>
                <td className="p-3">{invoice.creator}</td>
                <td className="p-3">{invoice.total.toLocaleString()}₫</td>
                <td className="p-3">{invoice.status}</td>
                <td className="p-3">{invoice.branch}</td>
                <td className="p-3">
                  <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-full">
                    Xuất
                  </button>
                </td>
              </tr>
            ))}
            {dummyInvoices.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center text-gray-400 py-4">Không có hóa đơn nào</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoicesPage;
