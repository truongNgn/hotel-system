import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaUsers, 
  FaBed, 
  FaShoppingCart, 
  FaSitemap, 
  FaUserFriends,
  FaChartLine, 
  FaCartPlus, 
  FaSignOutAlt 
} from 'react-icons/fa';

import SidebarButton from '../../components/SidebarButton';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = "Nguyễn Nhật Trường";
  const userRole = "Quản lý";

  const menuItems = [
    { path: '/customers', name: 'Quản lý khách hàng', icon: <FaUsers /> },
    { path: '/rooms', name: 'Quản lý phòng', icon: <FaBed /> },
    { path: '/orders', name: 'Đơn hàng', icon: <FaShoppingCart /> },
    { path: '/structure', name: 'Ca trực', icon: <FaSitemap /> },
    { path: '/staff', name: 'Quản lý nhân viên', icon: <FaUserFriends /> },
    { path: '/revenue', name: 'Thống kê doanh thu', icon: <FaChartLine /> },
    { path: '/booking', name: 'Đặt hàng', icon: <FaCartPlus /> },
  ];

  const isActive = (path) => location.pathname.includes(path);

  const handleLogout = () => {
    // Chuyển hướng đến trang Login
    navigate('/login');
  };

  return (
    <div className="w-64 bg-blue-500 text-white flex flex-col h-full border border-white">
      {/* User Profile */}
      <div className="flex flex-col items-center py-6">
        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center mb-3">
          <svg className="w-16 h-16 text-purple-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium">{userName}</h3>
        <div className="mt-1 bg-blue-600 px-4 py-1 rounded-full text-sm">
          {userRole}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col px-3 py-2">
        {menuItems.map((item, index) => (
          <SidebarButton
            key={index}
            to={item.path}
            icon={item.icon}
            text={item.name}
            isActive={isActive(item.path)}
          />
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-3">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition-colors"
        >
          <FaSignOutAlt className="mr-2" />
          <span>Thoát</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;