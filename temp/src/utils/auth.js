export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}

export const getUserRole = () => {
  const data = JSON.parse(localStorage.getItem('user'))
  return data?.role || null
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
