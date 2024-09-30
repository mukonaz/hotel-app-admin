import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AdminDashboard from './Admin/AdminDashboard';
import AdminRegister from './Admin/Adminregister';
import AdminLogin from './Admin/AdminLogin';
import AddRoom from './Rooms/AddRoom';
import RoomList from './Rooms/RoomList';
import PrivateRoute from './components/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/add-room" element={<AddRoom />} />
        <Route path="/room-list" element={<RoomList />} />
      </Routes>
    </Router>
  );
}

export default App;