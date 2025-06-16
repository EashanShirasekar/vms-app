import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Success from './pages/Success'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  )
}
