import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockUsers, mockVisitors } from '../../mockData';
import '../../styles/AdminDashboard.css';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const totalUsers = mockUsers.length;
  const pendingVisitors = mockVisitors.filter(v => v.status === 'Pending').length;

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/visitor-logs">Visitor Logs</Link></li> {/* Added */}
          <li><Link to="/admin/reports">Reports</Link></li>
          <li><Link to="/admin/settings">Settings</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <div className="topbar">
          <button className="hamburger" onClick={toggleSidebar}>☰</button>
          <h1>Welcome, Admin</h1>
        </div>

        <div className="dashboard-section">
          <div className="card">
            <h3>Dashboard Overview</h3>
            <p>Total Users: {totalUsers}</p>
            <p>Pending Visitors: {pendingVisitors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}