import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (employeeId === 'employee0280' && password === 'pass123') {
      navigate('/success') // temp success page
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Employee Login</h2>
        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
