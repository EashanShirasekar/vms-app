import EmployeeSidebar from '../../components/EmployeeSidebar';
import EmployeeTopbar from '../../components/EmployeeTopbar';
import VisitorForm from '../../components/VisitorForm';
import './FillVisitor.css';

export default function FillVisitor() {
  return (
    <div className="fill-visitor-container">
      <EmployeeSidebar />
      <div className="fill-visitor-main">
        <EmployeeTopbar />
        <div className="fill-visitor-content">
          <VisitorForm />
        </div>
      </div>
    </div>
  );
}