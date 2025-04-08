import { Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // import trang login
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/home';
import Customers from './pages/customers';
import AppRoutes from './routes';

export default function App() {
  return (
    <AppRoutes></AppRoutes>
  );
}

