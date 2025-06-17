import React from 'react';
import { mockVisitors } from '../../mockData'; // Adjusted path
import '../../styles/Reports.css';

const Reports = () => {
  const totalVisitors = mockVisitors.length;
  const pendingVisitors = mockVisitors.filter(v => v.status === 'Pending').length;
  const approvedVisitors = mockVisitors.filter(v => v.status === 'Approved').length;
  const deniedVisitors = mockVisitors.filter(v => v.status === 'Denied').length;

  return (
    <div className="reports">
      <h2>Visitor Reports</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Visitors</h3>
          <p>{totalVisitors}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pendingVisitors}</p>
        </div>
        <div className="stat-card">
          <h3>Approved</h3>
          <p>{approvedVisitors}</p>
        </div>
        <div className="stat-card">
          <h3>Denied</h3>
          <p>{deniedVisitors}</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;