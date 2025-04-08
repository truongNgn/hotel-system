import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';

import Dashboard from './pages/dashboard';
import Customers from './pages/customers';
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
        <Route path="/home" element={<Home />} />
      </Route>
      
   
    </Routes>
  );
}
