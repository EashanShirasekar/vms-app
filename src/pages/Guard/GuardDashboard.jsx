import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/GuardDashboard.css';

export default function GuardDashboard() {
  const navigate = useNavigate();

  return (
    <div className="guard-dashboard">
      <header className="dashboard-header">
        <h1>Guard Dashboard</h1>
      </header>

      <div className="dashboard-options">
        <button onClick={() => navigate('/guard/visitor-entry')}>
          Register New Visitor
        </button>
        <button onClick={() => navigate('/guard/visitor-history')}>
          View Visitor History
        </button>
      </div>
    </div>
  );
}
