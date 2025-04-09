import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import Dashboard from './pages/dashboard';
import Customers from './pages/customers';
import Orders from './pages/orders'; // TRANG Đơn hàng
import Invoices from './pages/invoices'; // TRANG Hóa đơn
import Employees from './pages/employees'; // TRANG Hóa đơn
import ShiftManagement from './pages/shiftManagement'; // TRANG Hóa đơn
import Login from './pages/login'; // TRANG LOGIN
import Home from './pages/home'; // TRANG HOME


export default function AppRoutes() {
  return (
    <Routes>
       <Route path="/login" element={<Login />} />

      
      {/* Các trang có layout mặc định */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/shiftManagement" element={<ShiftManagement />} />
        <Route path="/home" element={<Home />} />
      </Route>
      
   
    </Routes>
  );
}
