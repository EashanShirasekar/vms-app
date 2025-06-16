import { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmployeeSidebar.css';

export default function EmployeeSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className="hamburger" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      )}

      {isOpen && <div className="sidebar-backdrop" onClick={() => setIsOpen(false)} />}

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Employee Panel</h2>
        <nav>
          <Link to="/employee/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/employee/handle-requests" onClick={() => setIsOpen(false)}>Approve Requests</Link>
          <Link to="/employee/fill-visitor" onClick={() => setIsOpen(false)}>Fill Visitor Details</Link>
          <Link to="/employee/login" onClick={() => setIsOpen(false)}>Logout</Link>
        </nav>
      </div>
    </>
  );
}
