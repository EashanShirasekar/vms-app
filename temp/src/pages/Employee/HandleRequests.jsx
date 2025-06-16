import EmployeeSidebar from '../../components/EmployeeSidebar';
import EmployeeTopbar from '../../components/EmployeeTopbar';
import VisitorsRequestcard from '../../components/VisitorsRequestcard';
import './HandleRequests.css';

export default function HandleRequests() {
  return (
    <div className="handle-requests-container">
      <EmployeeSidebar />
      <div className="handle-requests-main">
        <EmployeeTopbar />
        <div className="handle-requests-content">
          <VisitorsRequestcard name="John Doe" purpose="Business Meeting" />
          <VisitorsRequestcard name="Jane Smith" purpose="Delivery" />
        </div>
      </div>
    </div>
  );
}
