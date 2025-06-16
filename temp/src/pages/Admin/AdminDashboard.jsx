import React, { useState } from 'react';
import './AdminDashboard.css';

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Manage Users</li>
          <li>Reports</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="topbar">
          <button className="hamburger" onClick={toggleSidebar}>☰</button>
          <h1>Welcome, Admin</h1>
        </div>

        <div className="dashboard-section">
          <div className="card">
            <p>This is your dashboard. Here you can manage your app content.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
