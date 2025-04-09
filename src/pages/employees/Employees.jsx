import React from "react";

const dummyEmployees = [
  {
    id: "NV001",
    name: "Nguyễn Văn A",
    gender: "Nam",
    dob: "1995-03-21",
    position: "Lễ tân",
    branch: "Chi nhánh 1"
  },
  {
    id: "NV002",
    name: "Lê Thị B",
    gender: "Nữ",
    dob: "1998-08-15",
    position: "Quản lý",
    branch: "Chi nhánh 2"
  },
];

const Employees = () => {
  return (
    <div className="p-6 space-y-4">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Danh sách nhân viên</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <label className="flex items-center gap-2">
            Mã nhân viên
            <input type="text" placeholder="Nhập mã" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
          <label className="flex items-center gap-2">
            Tên nhân viên
            <input type="text" placeholder="Nhập tên" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
          <label className="flex items-center gap-2">
            Vị trí
            <input type="text" placeholder="Nhập vị trí" className="px-2 py-1 rounded border border-black text-black bg-white" />
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Mã nhân viên</th>
              <th className="p-3 text-left">Tên</th>
              <th className="p-3 text-left">Giới tính</th>
              <th className="p-3 text-left">Ngày sinh</th>
              <th className="p-3 text-left">Vị trí</th>
              <th className="p-3 text-left">Chi nhánh</th>
              <th className="p-3 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {dummyEmployees.map((emp, index) => (
              <tr key={emp.id} className="bg-blue-100 hover:bg-blue-200 transition">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{emp.id}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.gender}</td>
                <td className="p-3">{emp.dob}</td>
                <td className="p-3">{emp.position}</td>
                <td className="p-3">{emp.branch}</td>
                <td className="p-3">
                  <button className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-full">
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
            {dummyEmployees.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-gray-400 py-4">Không có nhân viên nào</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
