import { Navigate } from 'react-router-dom';
import { getUser, isAuthenticated } from '../utils/auth';

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = getUser();

  if (!isAuthenticated()) return <Navigate to="/" />;
  if (!allowedRoles.includes(user.role)) return <Navigate to={`/${user.role}/dashboard`} />;

  return children;
}
