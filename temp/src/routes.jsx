import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeDashboard from './pages/Employee/EmployeeDashboard';
import FillVisitor from './pages/Employee/FillVisitor';
import HandleRequests from './pages/Employee/HandleRequests';
import GuardDashboard from './pages/Guard/GuardDashboard';
import VisitorEntry from './pages/Guard/VisitorEntry';
import VisitorHistory from './pages/Guard/VisitorHistory';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Admin/AdminDashboard';
import ManageUsers from './pages/Admin/ManageUsers';
import Reports from './pages/Admin/Reports';
import Settings from './pages/Admin/Settings';
import VisitorLogs from './pages/Admin/VisitorLogs';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/fill-visitor"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <FillVisitor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/handle-requests"
          element={
            <ProtectedRoute allowedRoles={['employee']}>
              <HandleRequests />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/guard/dashboard"
          element={
            <ProtectedRoute allowedRoles={['guard']}>
              <GuardDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/guard/visitor-entry"
          element={
            <ProtectedRoute allowedRoles={['guard']}>
              <VisitorEntry />
            </ProtectedRoute>
          }
        />
        <Route
          path="/guard/visitor-history"
          element={
            <ProtectedRoute allowedRoles={['guard']}>
              <VisitorHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <ManageUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/visitor-logs"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <VisitorLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/log-out"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Login />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}