export const login = (username, role) => {
  localStorage.setItem('vms-user', JSON.stringify({ username, role }));
};

export const logout = () => {
  localStorage.removeItem('vms-user');
};

export const getUser = () => {
  const user = localStorage.getItem('vms-user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => !!getUser();

export const getUserRole = () => getUser()?.role || null;
