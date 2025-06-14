import { Navigate } from 'react-router-dom'
import { getUserRole, isAuthenticated } from '../utils/auth'

export default function ProtectedRoute({ children, role }) {
  if (!isAuthenticated()) return <Navigate to="/login" />

  const userRole = getUserRole()
  if (userRole !== role) return <Navigate to={`/${userRole}`} />

  return children
}
