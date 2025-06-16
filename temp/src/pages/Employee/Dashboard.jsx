import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeSidebar from '../../components/EmployeeSidebar';
import EmployeeTopbar from '../../components/EmployeeTopbar';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="dashboard-container">
      <EmployeeSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="dashboard-main">
        <EmployeeTopbar toggleSidebar={toggleSidebar} />
        <div className="dashboard-actions">
          <div className="dashboard-card" onClick={() => navigate('/employee/handle-requests')}>
            <h3>Handle Visitor Requests from Guard</h3>
            <p>View visitor details and choose to approve or deny them.</p>
          </div>
          <div className="dashboard-card" onClick={() => navigate('/employee/fill-visitor')}>
            <h3>Fill Visitor Details Manually</h3>
            <p>Enter details of a visitor you expect.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
