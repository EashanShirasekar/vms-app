import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import GuardDashboard from './pages/Dashboard/GuardDashboard';
import VisitorEntry from './pages/VisitorEntry';
import VisitorHistory from './pages/VisitorHistory';
import ProtectedRoute from './components/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

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
      </Routes>
    </Router>
  );
}
